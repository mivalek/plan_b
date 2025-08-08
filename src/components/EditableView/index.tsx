import { Segment, TCluster } from "@/lib/types";
import { makeClusters } from "@/lib/utils";
import React, { useMemo, useState } from "react";
import EditableSegment from "../EditableSegment";
import { createPortal } from "react-dom";
import SetterForm from "../SetterForm";
import BoulderForm from "../BoulderForm";
import Dialog from "../Dialog";
import { dbDeleteBoulder } from "@/app/actions";
import SegmentForm from "../SegmentForm";
import { setEditedBoulder, useBoulderStore } from "@/stores/boulderStore";
import { useSegmentStore } from "@/stores/segmentStore";
import { useShallow } from "zustand/shallow";
import {
  setIsBoulderDialogOpen,
  setIsSegmentDialogOpen,
  setIsSetterDialogOpen,
  useUiStore,
} from "@/stores/uiStore";

function EditableView() {
  const segments = useSegmentStore((state) => state.segments);
  const [boulders, setBoulders, editedBoulder] = useBoulderStore(
    useShallow((state) => [
      state.boulders,
      state.setBoulders,
      state.editedBoulder,
    ])
  );
  const [svgRef, isBoulderDialogOpen, isSetterDialogOpen, isSegmentDialogOpen] =
    useUiStore(
      useShallow((state) => [
        state.svgRef,
        state.isBoulderDialogOpen,
        state.isSetterDialogOpen,
        state.isSegmentDialogOpen,
      ])
    );
  const circleRadius = useUiStore((state) => state.circleRadius);
  const [isNewBoulder, setIsNewBoulder] = useState(false);

  const clusters = useMemo(() => {
    const out: { [key in Segment]?: TCluster[] } = {};
    segments.map((seg) => {
      out[seg.name] =
        !boulders || boulders.length === 1
          ? []
          : makeClusters(
              boulders.filter((b) => b.segment === seg.name),
              circleRadius
            );
    });
    return out;
  }, [boulders, circleRadius]);

  async function deleteBoulder() {
    if (!editedBoulder) return;

    if (!isNewBoulder) {
      await dbDeleteBoulder(editedBoulder.id);
    } else {
      setBoulders(boulders.filter((b) => b.id !== editedBoulder.id));
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
        return (
          <EditableSegment
            key={seg.name}
            svgRef={svgRef}
            segment={seg}
            clusters={clusters[seg.name]!}
          />
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
            <BoulderForm formCleanup={formCleanup} />
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
            <SetterForm />
          </Dialog>

          <Dialog
            id="edit-segment-dialog"
            isOpen={isSegmentDialogOpen}
            cleanup={() => {
              setIsSegmentDialogOpen(false);
            }}
            closeByAny={true}
          >
            <SegmentForm />
          </Dialog>
        </>,
        document.getElementById("dialog-container")!
      )}
    </>
  );
}

export default EditableView;
