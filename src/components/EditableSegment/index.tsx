import {
  Segment,
  TBoulder,
  TCluster,
  TFlatCluster,
  TSegment,
} from "@/lib/types";
import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import Boulder from "../EditableBoulder";
import {
  getClustersAtCutoff,
  getDraggedBoulderPosition,
  idToSegment,
  pointerScreenToSVG,
} from "@/lib/utils";
import { v4 } from "uuid";
import Cluster from "../Cluster";
import { dbUpdateBoulderPosition } from "@/app/actions";

function EditableSegment({
  segment,
  boulders,
  clusters,
  setBoulders,
  setIsNewBoulder,
  setEditedBoulder,
  setEditedSegment,
  draggedBoulder,
  setDraggedBoulder,
  svgRef,
  setIsBoulderDialogOpen,
  setIsSegmentDialogOpen,
  zoomScale,
  setZoomScale,
  zoomFlag,
  setZoomFlag,
  panFlag,
  circleRadius,
}: {
  segment: TSegment;
  boulders: TBoulder[];
  clusters: TCluster[];
  setBoulders: Dispatch<SetStateAction<TBoulder[]>>;
  setIsNewBoulder: Dispatch<SetStateAction<boolean>>;
  setEditedBoulder: Dispatch<SetStateAction<TBoulder | undefined>>;
  setEditedSegment: Dispatch<SetStateAction<TSegment | undefined>>;
  draggedBoulder: TBoulder | undefined;
  setDraggedBoulder: Dispatch<SetStateAction<TBoulder | undefined>>;
  svgRef: RefObject<SVGSVGElement | null>;
  setIsBoulderDialogOpen: Dispatch<SetStateAction<boolean>>;
  setIsSegmentDialogOpen: Dispatch<SetStateAction<boolean>>;
  zoomScale: number;
  setZoomScale: Dispatch<SetStateAction<number>>;
  zoomFlag: boolean;
  setZoomFlag: Dispatch<SetStateAction<boolean>>;
  panFlag: boolean;
  circleRadius: number;
}) {
  const [boulderPointers, setBoulderPointers] = useState<React.PointerEvent[]>(
    []
  );
  const [pathPoints, setPathPoints] = useState<DOMPoint[]>([]);
  const [clusteredBoulders, setClusteredBoulders] = useState<TFlatCluster[]>(
    []
  );

  const handlePointerUp = useCallback(
    (ev: PointerEvent) => {
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
            editDownDate();
          } else addBoulder(ev);
        }, 50);
      } else if (pointer && draggedBoulder) {
        dbUpdateBoulderPosition(draggedBoulder.id, [
          draggedBoulder.position.x,
          draggedBoulder.position.y,
        ]);
        trgt.releasePointerCapture(ev.pointerId);
        trgt.classList.remove("grabbing");
        setBoulders((prev) => {
          const next = [...prev];
          const idx = next.findIndex((b) => b.id === draggedBoulder.id);
          next[idx].position = draggedBoulder.position!;
          return next;
        });
        setDraggedBoulder(undefined);
      }
      setBoulderPointers((prev) =>
        prev.filter((p) => p.pointerId !== ev.pointerId)
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [draggedBoulder, boulderPointers, panFlag, zoomFlag]
  );

  const handlePointerMove = useCallback(
    (ev: PointerEvent) => {
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
      setDraggedBoulder((prev) => ({ ...prev!, position: newPosition }));
    },
    [draggedBoulder, pathPoints, setDraggedBoulder]
  );

  function editDownDate() {
    setEditedSegment(segment);
    setIsSegmentDialogOpen(true);
  }
  function addBoulder(e: MouseEvent) {
    const trgt = e.target as SVGGElement;
    const layoutElement = trgt.parentElement!;
    if (!layoutElement.classList.contains("clickable")) return;
    const svgClickCoords = pointerScreenToSVG(
      e.clientX,
      e.clientY,
      svgRef.current!
    );

    const boulder: TBoulder = {
      id: v4(),
      setter: undefined,
      holdColors: [],
      difficulty: null,
      position: svgClickCoords,
      segment: idToSegment(layoutElement.id),
      tags: [],
    };

    setEditedBoulder(boulder);
    setIsNewBoulder(true);
    setIsBoulderDialogOpen(true);
  }

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
      circleRadius * zoomScale
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
            svgRef={svgRef}
            draggedBoulder={draggedBoulder}
            setDraggedBoulder={setDraggedBoulder}
            setEditedBoulder={setEditedBoulder}
            setIsBoulderDialogOpen={setIsBoulderDialogOpen}
            circleRadius={circleRadius}
            pointers={boulderPointers}
            setPointers={setBoulderPointers}
            className={isClustered ? " hidden " : undefined}
          />
        );
      })}
      {clusteredBoulders.map((cluster, i) => (
        <Cluster
          key={i}
          cluster={cluster}
          svgRef={svgRef}
          zoomFlag={zoomFlag}
          setZoomFlag={setZoomFlag}
          zoomScale={zoomScale}
          setZoomScale={setZoomScale}
          circleRadius={circleRadius}
        />
      ))}
    </g>
  );
}

export default EditableSegment;
