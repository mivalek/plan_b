import { TCluster, TFlatCluster, TSegment } from "@/lib/types";
import React, { RefObject, useEffect, useState } from "react";
import Boulder from "../EditableBoulder";
import {
  addBoulder,
  editDownDate,
  getClustersAtCutoff,
  getDraggedBoulderPosition,
} from "@/lib/utils";
import Cluster from "../Cluster";
import { dbUpdateBoulderPosition } from "@/app/actions";
import {
  setDraggedBoulder,
  updateBoulderPosition,
  useBoulderStore,
} from "@/stores/boulderStore";
import { useUiStore } from "@/stores/uiStore";
import { useShallow } from "zustand/shallow";

function EditableSegment({
  segment,
  clusters,
  svgRef,
}: {
  segment: TSegment;
  clusters: TCluster[];
  svgRef: RefObject<SVGSVGElement | null>;
}) {
  const upsertEdited = useBoulderStore((state) => state.upsertEdited);
  const draggedBoulder = useBoulderStore((state) => state.draggedBoulder);
  const boulders = upsertEdited().filter((b) => b.segment === segment.name);

  const [circleRadius, zoomScale, zoomFlag, panFlag] = useUiStore(
    useShallow((state) => [
      state.circleRadius,
      state.zoomScale,
      state.zoomFlag,
      state.panFlag,
    ])
  );

  const [boulderPointers, setBoulderPointers] = useState<React.PointerEvent[]>(
    []
  );
  const [pathPoints, setPathPoints] = useState<DOMPoint[]>([]);
  const [clusteredBoulders, setClusteredBoulders] = useState<TFlatCluster[]>(
    []
  );

  const handlePointerUp = (ev: PointerEvent) => {
    const trgt = ev.currentTarget as SVGGElement;
    const pointer = boulderPointers.find((p) => p.pointerId === ev.pointerId);
    if (
      !trgt.hasPointerCapture((ev as PointerEvent).pointerId) &&
      !panFlag &&
      !zoomFlag &&
      !boulderPointers.length
    ) {
      setTimeout(() => {
        if (!segment.downDate) {
          editDownDate(segment);
        } else addBoulder(ev, segment.name);
      }, 50);
    } else if (pointer && draggedBoulder) {
      dbUpdateBoulderPosition(draggedBoulder.id, [
        draggedBoulder.position.x,
        draggedBoulder.position.y,
      ]);
      trgt.releasePointerCapture(ev.pointerId);
      trgt.classList.remove("grabbing");
      updateBoulderPosition(draggedBoulder.id, draggedBoulder.position);
      setDraggedBoulder(undefined);
    }
    setBoulderPointers((prev) =>
      prev.filter((p) => p.pointerId !== ev.pointerId)
    );
  };

  const handlePointerMove = (ev: PointerEvent) => {
    if (!ev.movementX && !ev.movementY) return;
    if (
      !(ev.currentTarget as SVGGElement).hasPointerCapture(ev.pointerId) ||
      !draggedBoulder
    )
      return;

    const newPosition = getDraggedBoulderPosition(
      ev as PointerEvent,
      draggedBoulder,
      pathPoints
    );
    if (!newPosition) return;
    setDraggedBoulder({ ...draggedBoulder, position: newPosition });
  };

  useEffect(() => {
    if (!svgRef.current) return;
    const layoutSegment = svgRef.current!.querySelector<SVGPathElement>(
      `#${segment.name}.clickable path`
    )!;
    const pathLength = layoutSegment.getTotalLength();
    const points = [];
    for (let i = 0; i < pathLength; i++) {
      points.push(layoutSegment.getPointAtLength(i));
    }
    setPathPoints(points);
  }, [svgRef, segment.name]);

  useEffect(() => {
    if (!svgRef.current) return;
    const layoutSegment = svgRef.current!.querySelector<SVGGElement>(
      `#${segment.name}.clickable`
    )!;

    layoutSegment.addEventListener("pointerup", handlePointerUp);
    layoutSegment.addEventListener("pointermove", handlePointerMove);
    return () => {
      layoutSegment.removeEventListener("pointerup", handlePointerUp);
      layoutSegment.removeEventListener("pointermove", handlePointerMove);
    };
  }, [svgRef, segment.name, handlePointerUp, handlePointerMove]);

  useEffect(() => {
    if (!zoomFlag) return;
    const clusteredBldrs = getClustersAtCutoff(
      clusters,
      circleRadius * zoomScale * 2
    );
    setClusteredBoulders(clusteredBldrs);
  }, [clusters, circleRadius, zoomScale, zoomFlag]);

  return (
    <g id={segment.name + "-boulders"}>
      {boulders.map((b) => {
        const isClustered = clusteredBoulders.some((cluster) =>
          cluster.members.includes(b.id)
        );
        return (
          <Boulder
            key={b.id}
            data={b}
            pointers={boulderPointers}
            setPointers={setBoulderPointers}
            className={isClustered ? " hidden " : undefined}
          />
        );
      })}
      {clusteredBoulders.map((cluster, i) => (
        <Cluster key={i} cluster={cluster} />
      ))}
    </g>
  );
}

export default EditableSegment;
