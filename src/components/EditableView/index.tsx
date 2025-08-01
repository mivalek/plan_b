import { Location, TBoulder, TCluster, TSetterShort } from "@/lib/types";
import { makeClusters } from "@/lib/utils";
import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import EditableSegmentBoulders from "../EditableSegmentBoulders";
import { createPortal } from "react-dom";
import SetterForm from "../SetterForm";
import BoulderForm from "../BoulderForm";
import Dialog from "../Dialog";
import { dbDeleteBoulder } from "@/app/actions";

function EditableView({
  boulderData,
  setters,
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
  const [editedBoulder, setEditedBoulder] = useState<TBoulder>();
  const [isBoulderDialogOpen, setIsBoulderDialogOpen] = useState(false);
  const [isSetterDialogOpen, setIsSetterDialogOpen] = useState(false);
  const [isNewBoulder, setIsNewBoulder] = useState(false);

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

  return (
    <>
      {Object.values(Location).map((l) => {
        const bldrs = boulders.filter((b) => b.location === l);
        const editedBldr =
          editedBoulder && editedBoulder.location === l
            ? editedBoulder
            : undefined;
        return (
          bldrs && (
            <EditableSegmentBoulders
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
      {createPortal(
        <>
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
        </>,
        document.getElementById("dialog-container")!
      )}
    </>
  );
}

export default EditableView;
