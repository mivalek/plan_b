import { HOLD_COLORS } from "@/lib/constants";
import React from "react";

function MakeSVGGradients() {
  return Object.entries(HOLD_COLORS)
    .filter((col) => col[1].includes("gradient"))
    .map((col) => {
      const [label, value] = col;
      const gradientElements = value
        .replace(/^.*?\((.*?)\)$/, "$1")
        .split(/,\s*/);
      const stops = gradientElements.slice(1).map((elem) => elem.split(" "));

      if (value.startsWith("linear")) {
        return (
          <linearGradient key={label} id={label}>
            {stops.map((stop) => {
              const [color, offset] = stop;
              return (
                <stop key={stop.join("-")} offset={offset} stopColor={color} />
              );
            })}
          </linearGradient>
        );
      } else {
        // TODO: maybe add radial gradient
        return null;
      }
    });
}

export default MakeSVGGradients;
