"use client";
import React, { useEffect, useRef, useState } from "react";
import { panSvg, zoomSvg, getSVGZoomFactor, getDOMViewBox } from "@/lib/utils";
import {
  CircleRadius,
  Difficulty,
  TBoulder,
  TPosition,
  TSetterShort,
} from "@/lib/types";
import GymLayout from "../GymLayout";
import MakeSVGGradients from "../MakeSVGGradients";
import {
  LAYOUT_DIMS,
  PAN_BORDER,
  PINCH_ZOOM_DAMPER,
  // SVG_RATIO,
  SVG_VIEWBOX_LANDSCAPE,
  SVG_VIEWBOX_PORTRAIT,
} from "@/lib/constants";
import { useSearchParams } from "next/navigation";
import { auth } from "@/app/actions";
import EditableView from "../EditableView";
import StaticView from "../StaticView";
import Filters from "../Filters";
import Header from "../Header";

const allDiffs = Object.entries(Difficulty)
  .filter(([key, _]) => isNaN(Number(key)))
  .map(([_, val]) => val) as Difficulty[];

function AppContainer({
  boulderData,
  setters,
}: {
  boulderData: TBoulder[];
  setters: TSetterShort[];
}) {
  const searchParams = useSearchParams();
  const [isAdmin, setIsAdmin] = useState<boolean>();
  const [draggedBoulder, setDraggedBoulder] = useState<TBoulder>();
  const svgRef = useRef<SVGSVGElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);
  const [svgViewBox, setSvgViewBox] = useState(SVG_VIEWBOX_PORTRAIT);
  const [zoomScale, setZoomScale] = useState(1);
  const [svgPointers, setSvgPointers] = useState<React.PointerEvent[]>([]);
  const [zoomOrigin, setZoomOrigin] = useState<TPosition>();
  const [zoomFlag, setZoomFlag] = useState(true);
  const [panFlag, setPanFlag] = useState(false);
  const [circleRadius, setCircleRadius] = useState(25);
  const [difficultyFilter, setDifficultyFilter] =
    useState<Difficulty[]>(allDiffs);
  const [navMenuOpen, setNavMenuOpen] = useState(false);

  function closeNavOnClickOut() {
    if (!navMenuOpen) return;
    setNavMenuOpen(false);
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

  useEffect(() => {
    if (!searchParams) return;
    (async () => {
      const isAuth = await auth(searchParams.get("admin"));
      setIsAdmin(isAuth);
    })();
  }, [searchParams]);

  return (
    <main
      id="boulder-app-container"
      className="h-screen"
      onClick={closeNavOnClickOut}
    >
      <Header navMenuOpen={navMenuOpen} setNavMenuOpen={setNavMenuOpen} />
      <div
        id="boulder-app"
        className="w-full flex justify-center flex-col lg:flex-row items-center p-4 pt-8 gap-6"
      >
        {!isAdmin && (
          <Filters
            difficultyFilter={difficultyFilter}
            setDifficultyFilter={setDifficultyFilter}
          />
        )}
        <div
          id="layout-container"
          className="max-w-6xl overflow-clip relative flex items-center border border-[rgb(var(--primary))] portrait:justify-center transition-all  duration-300 "
          ref={svgContainerRef}
        >
          <svg
            id="plan-b"
            ref={svgRef}
            viewBox={svgViewBox.join(" ")}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="max-w-7xl"
            onPointerDownCapture={(e) => {
              setZoomFlag(false);
              if (svgPointers.length === 1) {
                // already touching
                setZoomOrigin({
                  x:
                    (svgPointers[0].nativeEvent.offsetX +
                      e.nativeEvent.offsetX) /
                    2,
                  y:
                    (svgPointers[0].nativeEvent.offsetY +
                      e.nativeEvent.offsetY) /
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
                if (!e.movementX && !e.movementY) return;
                setPanFlag(true);
                setZoomFlag(false);
                panSvg(svgRef.current!, e.movementX, e.movementY);
                return;
              }
              // zoom
              setPanFlag(false);
              setZoomFlag(true);
              if (idx === 1 || !zoomOrigin) return; // enough to track one finger
              const prevDistanceX = Math.abs(
                svgPointers[0].clientX - svgPointers[1].clientX
              );
              const prevDistanceY = Math.abs(
                svgPointers[0].clientY - svgPointers[1].clientY
              );
              const currDistanceX = Math.abs(
                e.clientX - svgPointers[1].clientX
              );
              const currDistanceY = Math.abs(
                e.clientY - svgPointers[1].clientY
              );

              const deltaX = currDistanceX - prevDistanceX;
              const deltaY = currDistanceY - prevDistanceY;

              zoomSvg(
                svgRef.current!,
                Math.max(deltaX, deltaY),
                zoomOrigin.x,
                zoomOrigin.y,
                PINCH_ZOOM_DAMPER
              );
              setZoomScale(
                1 / getSVGZoomFactor(getDOMViewBox(svgRef.current!))
              );

              setSvgPointers((prev) => {
                prev[idx] = e;
                return prev;
              });
            }}
            onPointerUp={(e) => {
              if (svgPointers.length === 1) setZoomFlag(false);
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
            {isAdmin ? (
              <EditableView
                boulderData={boulderData}
                setters={setters}
                svgRef={svgRef}
                circleRadius={circleRadius}
                draggedBoulder={draggedBoulder}
                setDraggedBoulder={setDraggedBoulder}
                zoomScale={zoomScale}
                setZoomScale={setZoomScale}
                zoomFlag={zoomFlag}
                setZoomFlag={setZoomFlag}
                panFlag={panFlag}
              />
            ) : (
              <StaticView
                boulderData={
                  difficultyFilter
                    ? boulderData.filter(
                        (b) =>
                          b.difficulty !== null &&
                          difficultyFilter.includes(b.difficulty)
                      )
                    : boulderData
                }
                setters={setters}
                svgRef={svgRef}
                circleRadius={circleRadius}
                zoomScale={zoomScale}
                setZoomScale={setZoomScale}
                zoomFlag={zoomFlag}
                setZoomFlag={setZoomFlag}
              />
            )}
          </svg>
        </div>
        <div id="dialog-container"></div>
        <div id="popup-container"></div>
      </div>
    </main>
  );
}

export default AppContainer;
