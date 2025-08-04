import {
  Segment,
  TBoulder,
  TCluster,
  TSegment,
  TSetterShort,
} from "@/lib/types";
import { makeClusters } from "@/lib/utils";
import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import EditableSegment from "../EditableSegment";
import { createPortal } from "react-dom";
import SetterForm from "../SetterForm";
import BoulderForm from "../BoulderForm";
import Dialog from "../Dialog";
import { dbDeleteBoulder } from "@/app/actions";
import SegmentForm from "../SegmentForm";

function EditableView({
  boulderData,
  setters,
  segmentData,
  circleRadius,
  svgRef,
  draggedBoulder,
  setDraggedBoulder,
  zoomFlag,
  setZoomFlag,
  zoomScale,
  setZoomScale,
  panFlag,
}: {
  boulderData: TBoulder[];
  setters: TSetterShort[];
  segmentData: TSegment[];
  circleRadius: number;
  svgRef: RefObject<SVGSVGElement | null>;
  draggedBoulder: TBoulder | undefined;
  setDraggedBoulder: Dispatch<SetStateAction<TBoulder | undefined>>;
  zoomScale: number;
  setZoomScale: Dispatch<SetStateAction<number>>;
  zoomFlag: boolean;
  setZoomFlag: Dispatch<SetStateAction<boolean>>;
  panFlag: boolean;
}) {
  const [boulders, setBoulders] = useState<TBoulder[]>(boulderData);
  const [segments, setSegments] = useState(segmentData);
  const [editedBoulder, setEditedBoulder] = useState<TBoulder>();
  const [editedSegment, setEditedSegment] = useState<TSegment>();
  const [isBoulderDialogOpen, setIsBoulderDialogOpen] = useState(false);
  const [isSetterDialogOpen, setIsSetterDialogOpen] = useState(false);
  const [isSegmentDialogOpen, setIsSegmentDialogOpen] = useState(false);
  const [isNewBoulder, setIsNewBoulder] = useState(false);

  const clusters = useMemo(() => {
    const out: { [key in Segment]?: TCluster[] } = {};
    segments.map((seg) => {
      out[seg.name] =
        !boulderData || boulderData.length === 1
          ? []
          : makeClusters(
              boulderData.filter((b) => b.segment === seg.name),
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

  return (
    <>
      {segments.map((seg) => {
        let bldrs = boulders.filter((b) => b.segment === seg.name);
        if (editedBoulder && editedBoulder.segment === seg.name) {
          bldrs = bldrs.filter((b) => b.id !== editedBoulder.id);
          bldrs.push(editedBoulder);
        }
        return (
          bldrs && (
            <EditableSegment
              key={seg.name}
              svgRef={svgRef}
              segment={seg}
              boulders={bldrs}
              clusters={clusters[seg.name]!}
              setBoulders={setBoulders}
              setEditedBoulder={setEditedBoulder}
              setEditedSegment={setEditedSegment}
              draggedBoulder={draggedBoulder}
              setDraggedBoulder={setDraggedBoulder}
              setIsNewBoulder={setIsNewBoulder}
              setIsBoulderDialogOpen={setIsBoulderDialogOpen}
              setIsSegmentDialogOpen={setIsSegmentDialogOpen}
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
      {createPortal(
        <>
          <Dialog
            id="edit-boulder-dialog"
            isOpen={isBoulderDialogOpen}
            cleanup={formCleanup}
            closeByAny={false}
            className="min-w-xs w-xs"
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
              setIsSetterDialogOpen(false);
            }}
            closeByAny={true}
            className="w-[340px]"
          >
            <SetterForm setIsSetterDialogOpen={setIsSetterDialogOpen} />
          </Dialog>

          <Dialog
            id="edit-segment-dialog"
            isOpen={isSegmentDialogOpen}
            cleanup={() => {
              setIsSegmentDialogOpen(false);
            }}
            closeByAny={true}
          >
            <SegmentForm
              segment={editedSegment}
              setSegments={setSegments}
              setEditedSegment={setEditedSegment}
              setIsDialogOpen={setIsSegmentDialogOpen}
            />
          </Dialog>
        </>,
        document.getElementById("dialog-container")!
      )}
    </>
  );
}

export default EditableView;
