import { HOLD_COLORS } from "@/lib/constants";
import { TBoulder } from "@/lib/types";
import { difficultyToColour } from "@/lib/utils";
import { setIsBoulderPopupOpen, useUiStore } from "@/stores/uiStore";
import React from "react";
import { twMerge } from "tailwind-merge";

function Boulder({
  data,
  className,
}: {
  data: TBoulder;
  className: string | undefined;
}) {
  const circleRadius = useUiStore((state) => state.circleRadius);
  const innerRadius = Math.ceil(circleRadius * 0.7);
  return (
    <g
      id={data.id}
      data-parent={data.segment}
      className={twMerge(
        "boulder -rotate-45 transform-content origin-center cursor-pointer",
        className
      )}
      style={{ scale: "var(--boulder-scale)" }}
      onPointerEnter={() => {
        setIsBoulderPopupOpen(true);
      }}
      onPointerLeave={() => {
        setIsBoulderPopupOpen(false);
      }}
      // onPointerDown={() => {}}
      // onPointerUp={() => {}}
    >
      {data.difficulty !== undefined && (
        <circle
          r={circleRadius}
          cx={data.position.x}
          cy={data.position.y}
          fill={difficultyToColour(data.difficulty!)}
          className="difficulty"
        />
      )}
      <circle
        r={innerRadius}
        cx={data.position.x}
        cy={data.position.y}
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
          d={`M ${data.position.x - innerRadius} ${
            data.position.y
          } A ${innerRadius} ${innerRadius} 0 0 0 ${
            data.position.x + innerRadius
          } ${data.position.y}`}
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
