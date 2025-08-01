"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  panSvg,
  zoomSvg,
  getSVGZoomFactor,
  getDOMViewBox,
  makeClusters,
} from "@/lib/utils";
import {
  CircleRadius,
  Location,
  TBoulder,
  TCluster,
  TPosition,
  TSetterShort,
} from "@/lib/types";
import GymLayout from "../GymLayout";
import Dialog from "../Dialog";
import BoulderForm from "../BoulderForm";
import MakeSVGGradients from "../MakeSVGGradients";
import {
  LAYOUT_DIMS,
  PAN_BORDER,
  // SVG_RATIO,
  SVG_VIEWBOX_LANDSCAPE,
  SVG_VIEWBOX_PORTRAIT,
} from "@/lib/constants";
import SegmentBoulders from "../EditableSegmentBoulders";
import SetterForm from "../SetterForm";
import { dbDeleteBoulder } from "@/app/actions";

function BoulderEdit({
  boulderData,
  setters,
}: {
  boulderData: TBoulder[];
  setters: TSetterShort[];
}) {
  // const style = { "--svg-ratio": SVG_RATIO } as React.CSSProperties;
  const [boulders, setBoulders] = useState<TBoulder[]>(boulderData);
  const [draggedBoulder, setDraggedBoulder] = useState<TBoulder>();
  const [editedBoulder, setEditedBoulder] = useState<TBoulder>();
  const [isBoulderDialogOpen, setIsBoulderDialogOpen] = useState(false);
  const [isSetterDialogOpen, setIsSetterDialogOpen] = useState(false);
  const [isNewBoulder, setIsNewBoulder] = useState(false);
  const svgRef = useRef<SVGSVGElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const [svgViewBox, setSvgViewBox] = useState(SVG_VIEWBOX_PORTRAIT);
  const [zoomScale, setZoomScale] = useState(1);
  const [svgPointers, setSvgPointers] = useState<React.PointerEvent[]>([]);
  const [zoomOrigin, setZoomOrigin] = useState<TPosition>();
  const [zoomFlag, setZoomFlag] = useState(true);
  const [panFlag, setPanFlag] = useState(false);
  const [circleRadius, setCircleRadius] = useState(25);

  const clusters = useMemo(() => {
    const out: { [key in Location]?: TCluster[] } = {};
    Object.values(Location).map((l) => {
      out[l] =
        !boulders || boulders.length === 1
          ? []
          : makeClusters(
              boulders.filter((b) => b.location === l),
              circleRadius
            );
    });
    return out;
  }, [boulders, circleRadius]);

  async function deleteBoulder() {
    if (!editedBoulder) return;

    if (!isNewBoulder) {
      svgRef.current?.getElementById(editedBoulder.id).remove();
      await dbDeleteBoulder(editedBoulder.id);
    } else {
      setBoulders((prev) => prev.filter((b) => b.id !== editedBoulder.id));
    }
  }

  async function formCleanup(shouldDelete?: "always" | "ifNew" | "never") {
    if (
      shouldDelete == "always" ||
      (isNewBoulder && shouldDelete === "ifNew")
    ) {
      await deleteBoulder();
    }
    setIsBoulderDialogOpen(false);
    setIsNewBoulder(false);
    setEditedBoulder(undefined);
  }

  const handleWheel = (e: WheelEvent) => {
    e.preventDefault();
    const svgElement = e.currentTarget! as SVGSVGElement;
    if (!e.ctrlKey) {
      setZoomFlag(false);
      // pan
      panSvg(svgElement, e.deltaX, e.deltaY);
      return;
    }
    // zoom
    setZoomFlag(true);
    zoomSvg(
      svgElement,
      -e.deltaY, // wheel and trackpad have reversed delta
      e.offsetX,
      e.offsetY
    );
    setZoomScale(1 / getSVGZoomFactor(getDOMViewBox(svgRef.current!)));
  };

  useEffect(() => {
    if (!svgRef.current) return;

    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    if (screenWidth > screenHeight) {
      setSvgViewBox(SVG_VIEWBOX_LANDSCAPE);
    }
    let ptRadius = CircleRadius.XL;
    if (screenWidth < 480) {
      ptRadius = CircleRadius.S;
    } else if (screenWidth < 640) {
      ptRadius = CircleRadius.M;
    } else if (screenWidth < 768) {
      ptRadius = CircleRadius.L;
    }
    setCircleRadius(ptRadius);
  }, [svgRef]);

  useEffect(() => {
    if (!svgRef.current) return;
    svgRef.current.addEventListener("wheel", handleWheel, {
      passive: false,
      capture: true,
    });
    return svgRef.current.removeEventListener("wheel", handleWheel);
  }, [svgRef]);

  return (
    <div id="boulder-app" className="w-full flex justify-center">
      <div
        // style={style}
        id="layout-container"
        className="max-w-6xl m-4 overflow-clip relative flex items-center border border-[rgb(var(--primary))] portrait:justify-center transition-all  duration-300 "
        ref={svgContainerRef}
      >
        <svg
          id="plan-b"
          ref={svgRef}
          viewBox={svgViewBox.join(" ")}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="max-w-7xl"
          onPointerDown={(e) => {
            setZoomFlag(false);
            if (svgPointers.length === 1) {
              // already touching
              setZoomOrigin({
                x:
                  (svgPointers[0].nativeEvent.offsetX + e.nativeEvent.offsetX) /
                  2,
                y:
                  (svgPointers[0].nativeEvent.offsetY + e.nativeEvent.offsetY) /
                  2,
              });
            }
            setSvgPointers((prev) => prev.concat(e));
          }}
          onPointerMove={(e) => {
            if (draggedBoulder) return;
            const idx = svgPointers.findIndex(
              (p) => p.pointerId === e.pointerId
            );
            if (idx === -1) return;
            if (svgPointers.length > 2) return; // no use for 3+ multitouch yet

            if (svgPointers.length === 1) {
              setPanFlag(true);

              panSvg(svgRef.current!, e.movementX, e.movementY);
              return;
            }
            // zoom
            setZoomFlag(true);

            if (idx === 1 || !zoomOrigin) return; // enough to track one finger
            const prevDistanceX = Math.abs(
              svgPointers[0].clientX - svgPointers[1].clientX
            );
            const prevDistanceY = Math.abs(
              svgPointers[0].clientY - svgPointers[1].clientY
            );
            const currDistanceX = Math.abs(e.clientX - svgPointers[1].clientX);
            const currDistanceY = Math.abs(e.clientY - svgPointers[1].clientY);

            const deltaX = currDistanceX - prevDistanceX;
            const deltaY = currDistanceY - prevDistanceY;

            zoomSvg(
              svgRef.current!,
              Math.max(deltaX, deltaY),
              zoomOrigin.x,
              zoomOrigin.y
            );
            setZoomScale(1 / getSVGZoomFactor(getDOMViewBox(svgRef.current!)));

            setSvgPointers((prev) => {
              prev[idx] = e;
              return prev;
            });
          }}
          onPointerUp={(e) => {
            setZoomFlag(false);
            setPanFlag(false);
            const pointer = svgPointers.find(
              (p) => p.pointerId === e.pointerId
            );
            if (!pointer) return;
            setSvgPointers((prev) =>
              prev.filter((p) => p.pointerId !== e.pointerId)
            );
          }}
        >
          <defs>
            <MakeSVGGradients />
          </defs>
          <rect
            id="viewbox-reference-rect"
            x={svgViewBox[0]}
            y={svgViewBox[1]}
            width={svgViewBox[2]}
            height={svgViewBox[3]}
            stroke="none"
            fill="none"
          />
          <rect
            id="pan-border"
            x={PAN_BORDER[0]}
            y={PAN_BORDER[1]}
            width={PAN_BORDER[2]}
            height={PAN_BORDER[3]}
            stroke="none"
            fill="none"
          />
          <rect
            id="zoom-border"
            x={LAYOUT_DIMS[0]}
            y={LAYOUT_DIMS[1]}
            width={LAYOUT_DIMS[2]}
            height={LAYOUT_DIMS[3]}
            stroke="none"
            fill="none"
          />
          <GymLayout />
          {Object.values(Location).map((l) => {
            const bldrs = boulders.filter((b) => b.location === l);
            const editedBldr =
              editedBoulder && editedBoulder.location === l
                ? editedBoulder
                : undefined;
            return (
              bldrs && (
                <SegmentBoulders
                  key={l}
                  svgRef={svgRef}
                  id={l}
                  boulders={bldrs}
                  clusters={clusters[l]!}
                  setBoulders={setBoulders}
                  editedBoulder={editedBldr}
                  setEditedBoulder={setEditedBoulder}
                  draggedBoulder={draggedBoulder}
                  setDraggedBoulder={setDraggedBoulder}
                  setIsNewBoulder={setIsNewBoulder}
                  setIsBoulderDialogOpen={setIsBoulderDialogOpen}
                  zoomScale={zoomScale}
                  setZoomScale={setZoomScale}
                  zoomFlag={zoomFlag}
                  setZoomFlag={setZoomFlag}
                  panFlag={panFlag}
                  circleRadius={circleRadius}
                />
              )
            );
          })}
        </svg>
      </div>
      <Dialog
        id="edit-boulder-dialog"
        isOpen={isBoulderDialogOpen}
        cleanup={formCleanup}
        closeByAny={false}
        className="w-[320px]"
      >
        <BoulderForm
          boulder={editedBoulder}
          setters={setters}
          setEditedBoulder={setEditedBoulder}
          setBoulders={setBoulders}
          formCleanup={formCleanup}
          setIsSetterDialogOpen={setIsSetterDialogOpen}
        />
      </Dialog>

      <Dialog
        id="edit-setter-dialog"
        isOpen={isSetterDialogOpen}
        cleanup={() => {
          // setIsBoulderDialogOpen(true);
          setIsSetterDialogOpen(false);
        }}
        closeByAny={true}
        className="w-[340px]"
      >
        <SetterForm
          setIsSetterDialogOpen={setIsSetterDialogOpen}
          // submit function
        />
      </Dialog>
    </div>
  );
}

export default BoulderEdit;
