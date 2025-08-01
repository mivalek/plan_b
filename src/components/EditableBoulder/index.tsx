import { HOLD_COLORS } from "@/lib/constants";
import { TBoulder } from "@/lib/types";
import { difficultyToColour } from "@/lib/utils";
import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { twMerge } from "tailwind-merge";

function Boulder({
  data,
  svgRef,
  draggedBoulder,
  setDraggedBoulder,
  setEditedBoulder,
  setIsBoulderDialogOpen,
  circleRadius,
  pointers,
  setPointers,
  className,
}: {
  data: TBoulder;
  svgRef: RefObject<SVGSVGElement | null>;
  draggedBoulder: TBoulder | undefined;
  setDraggedBoulder: Dispatch<SetStateAction<TBoulder | undefined>>;
  setEditedBoulder: Dispatch<SetStateAction<TBoulder | undefined>>;
  setIsBoulderDialogOpen: Dispatch<SetStateAction<boolean>>;
  circleRadius: number;
  pointers: React.PointerEvent<Element>[];
  setPointers: React.Dispatch<
    React.SetStateAction<React.PointerEvent<Element>[]>
  >;
  className: string | undefined;
}) {
  const [layoutSegment, setLayoutSegment] = useState<SVGPathElement | null>();
  const position =
    !draggedBoulder || draggedBoulder.id !== data.id
      ? data.position
      : draggedBoulder.position;

  useEffect(() => {
    if (!svgRef.current) return;
    const segment = svgRef.current!.querySelector(
      `#${data.location}`
    ) as SVGPathElement;
    setLayoutSegment(segment);
  }, [svgRef, data]);

  return (
    <g
      id={data.id}
      data-parent={data.location}
      className={twMerge(
        "boulder -rotate-45 transform-content origin-center cursor-pointer",
        className
      )}
      style={{ scale: "var(--boulder-scale)" }}
      onPointerEnter={(e) => {
        svgRef.current!.appendChild(e.currentTarget);
      }}
      onPointerDown={(e) => {
        setPointers((prev) => prev.concat(e));
      }}
      onPointerMove={(e) => {
        const pointer = pointers.find((p) => p.pointerId === e.pointerId);
        if (!pointer || pointers.length > 1) return;
        setDraggedBoulder(data);
        layoutSegment?.classList.add("grabbing");
        layoutSegment!.setPointerCapture(e.pointerId);
      }}
      onPointerUp={(e) => {
        layoutSegment?.classList.remove("grabbing");
        const pointer = pointers.find((p) => p.pointerId === e.pointerId);
        if (!pointer || pointers.length > 1) return;
        if (e.clientX === pointer.clientX && e.clientY === pointer.clientY) {
          setEditedBoulder(data);
          setIsBoulderDialogOpen(true);
        }
        setPointers((prev) => prev.filter((p) => p.pointerId !== e.pointerId));
        setDraggedBoulder(undefined);
      }}
    >
      {data.difficulty !== undefined && (
        <circle
          r={~~(circleRadius * 1.4)}
          cx={position.x}
          cy={position.y}
          fill={difficultyToColour(data.difficulty!)}
          className="difficulty"
        />
      )}
      <circle
        r={circleRadius}
        cx={position.x}
        cy={position.y}
        fill={
          data.holdColors.length
            ? HOLD_COLORS[
                data.holdColors[0] as keyof typeof HOLD_COLORS
              ].includes("gradient")
              ? `url(#${data.holdColors[0]})`
              : HOLD_COLORS[data.holdColors[0] as keyof typeof HOLD_COLORS]
            : "#888"
        }
      />
      {data.holdColors.length === 2 && (
        <path
          d={`M ${position.x - circleRadius} ${
            position.y
          } A ${circleRadius} ${circleRadius} 0 0 0 ${
            position.x + circleRadius
          } ${position.y}`}
          fill={
            HOLD_COLORS[
              data.holdColors[1] as keyof typeof HOLD_COLORS
            ].includes("gradient")
              ? `url(#${data.holdColors[1]})`
              : HOLD_COLORS[data.holdColors[1] as keyof typeof HOLD_COLORS]
          }
        />
      )}
    </g>
  );
}

export default Boulder;
