import { HOLD_COLORS } from "@/lib/constants";
import { TBoulder } from "@/lib/types";
import { difficultyToColour } from "@/lib/utils";
import React, { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

function Boulder({
  data,
  setIsPopupOpen,
  circleRadius,
  className,
}: {
  data: TBoulder;
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>;
  circleRadius: number;
  className: string | undefined;
}) {
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
        setIsPopupOpen(true);
      }}
      onPointerLeave={() => {
        setIsPopupOpen(false);
      }}
      // onPointerDown={() => {}}
      // onPointerUp={() => {}}
    >
      {data.difficulty !== undefined && (
        <circle
          r={~~(circleRadius * 1.4)}
          cx={data.position.x}
          cy={data.position.y}
          fill={difficultyToColour(data.difficulty!)}
          className="difficulty"
        />
      )}
      <circle
        r={circleRadius}
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
          d={`M ${data.position.x - circleRadius} ${
            data.position.y
          } A ${circleRadius} ${circleRadius} 0 0 0 ${
            data.position.x + circleRadius
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
