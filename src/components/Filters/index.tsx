import { HOLD_COLORS } from "@/lib/constants";
import { Difficulty } from "@/lib/types";
import React, { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

function Filters({
  difficultyFilter,
  setDifficultyFilter,
}: {
  difficultyFilter: Difficulty[] | undefined;
  setDifficultyFilter: Dispatch<SetStateAction<Difficulty[] | undefined>>;
}) {
  return (
    <div
      id="filters"
      className="flex flex-row lg:flex-col gap-4 items-center justify-center"
    >
      <div className="text-sm">EASY</div>
      {Object.entries(Difficulty)
        .filter((d) => isNaN(Number(d[0])))
        .map(([key, val]) => {
          const diff = val as Difficulty;
          const isFilteredOut =
            difficultyFilter && !difficultyFilter.includes(val as Difficulty);
          const isBlack = diff === Difficulty.Black;
          const isWhite = diff === Difficulty.White;
          return (
            <button
              className={twMerge(
                "size-10 md:size-8 rounded-full cursor-pointer border-2 border-transparent",
                isFilteredOut
                  ? "grayscale-[60%] "
                  : difficultyFilter && "border-[rgb(var(--primary))]",
                isBlack && (isFilteredOut ? "bg-gray-800" : "bg-black"),
                isWhite && (isFilteredOut ? "bg-gray-500" : "bg-white")
              )}
              style={{
                background:
                  isBlack || isWhite
                    ? ""
                    : HOLD_COLORS[
                        key.toLowerCase() as keyof typeof HOLD_COLORS
                      ],
              }}
              key={val}
              onClick={() => {
                if (!difficultyFilter || !difficultyFilter.includes(diff)) {
                  setDifficultyFilter((prev) =>
                    prev ? [...prev, diff] : [diff]
                  );
                } else {
                  if (difficultyFilter.length === 1) {
                    setDifficultyFilter(undefined);
                  } else
                    setDifficultyFilter((prev) =>
                      prev!.filter((d) => d !== val)
                    );
                }
              }}
            >
              <div className="size-7 md:size-5 bg-[rgb(var(--bg))] rounded-full m-auto"></div>
            </button>
          );
        })}
      <div className="text-sm">HARD</div>
    </div>
  );
}

export default Filters;
