import { Location, Room, TBoulder, TCluster, TFlatCluster } from "@/lib/types";
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
  idToLocation,
  pointerScreenToSVG,
} from "@/lib/utils";
import { v4 } from "uuid";
import Cluster from "../Cluster";
import { dbUpdateBoulderPosition } from "@/app/actions";

function EditableSegmentBoulders({
  id,
  boulders,
  clusters,
  setBoulders,
  setIsNewBoulder,
  editedBoulder,
  setEditedBoulder,
  draggedBoulder,
  setDraggedBoulder,
  svgRef,
  setIsBoulderDialogOpen,
  zoomScale,
  setZoomScale,
  zoomFlag,
  setZoomFlag,
  panFlag,
  circleRadius,
}: {
  id: Location;
  boulders: TBoulder[];
  clusters: TCluster[];
  setBoulders: Dispatch<SetStateAction<TBoulder[]>>;
  setIsNewBoulder: Dispatch<SetStateAction<boolean>>;
  editedBoulder: TBoulder | undefined;
  setEditedBoulder: Dispatch<SetStateAction<TBoulder | undefined>>;
  draggedBoulder: TBoulder | undefined;
  setDraggedBoulder: Dispatch<SetStateAction<TBoulder | undefined>>;
  svgRef: RefObject<SVGSVGElement | null>;
  setIsBoulderDialogOpen: Dispatch<SetStateAction<boolean>>;
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
        addBoulder(ev);
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
      }
      setDraggedBoulder(undefined);
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
  function addBoulder(e: MouseEvent) {
    const trgt = e.target as SVGGElement;
    const layoutElement = trgt.parentElement!;
    if (!layoutElement.classList.contains("clickable")) return;
    const room =
      layoutElement.parentElement?.id === "small-room" ? Room.Small : Room.Big;
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
      room,
      location: idToLocation(layoutElement.id),
      tags: [],
    };

    setEditedBoulder(boulder);

    setIsBoulderDialogOpen(true);
    setIsNewBoulder(true);
  }

  useEffect(() => {
    if (!svgRef.current) return;
    const layoutSegment = svgRef.current!.querySelector<SVGPathElement>(
      `#${id}.clickable path`
    )!;

    const pathLength = layoutSegment.getTotalLength();
    const points = [];
    for (let i = 0; i < pathLength; i++) {
      points.push(layoutSegment.getPointAtLength(i));
    }
    setPathPoints(points);
  }, [svgRef, id]);

  useEffect(() => {
    if (!svgRef.current) return;
    const layoutSegment = svgRef.current!.querySelector<SVGGElement>(
      `#${id}.clickable`
    )!;

    layoutSegment.addEventListener("pointerup", handlePointerUp);
    layoutSegment.addEventListener("pointermove", handlePointerMove);
    return () => {
      layoutSegment.removeEventListener("pointerup", handlePointerUp);
      layoutSegment.removeEventListener("pointermove", handlePointerMove);
    };
  }, [svgRef, id, handlePointerUp, handlePointerMove]);

  useEffect(() => {
    if (!zoomFlag) return;
    const clusteredBldrs = getClustersAtCutoff(
      clusters,
      circleRadius * zoomScale
    );
    setClusteredBoulders(clusteredBldrs);
  }, [clusters, circleRadius, zoomScale, zoomFlag]);

  return (
    <g>
      {(editedBoulder && !boulders.find((b) => b.id === editedBoulder.id)
        ? boulders.concat(editedBoulder)
        : boulders
      ).map((b) => {
        const isClustered = clusteredBoulders.some((cluster) =>
          cluster.members.includes(b.id)
        );
        return (
          <Boulder
            key={b.id}
            data={editedBoulder?.id === b.id ? editedBoulder : b}
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

export default EditableSegmentBoulders;
