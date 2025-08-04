import { HOLD_COLORS } from "@/lib/constants";
import { Difficulty } from "@/lib/types";
import React, { Dispatch, SetStateAction } from "react";
import { twMerge } from "tailwind-merge";

const allDiffs = Object.entries(Difficulty)
  .filter(([key, _]) => isNaN(Number(key)))
  .map(([_, val]) => val) as Difficulty[];
function Filters({
  difficultyFilter,
  setDifficultyFilter,
}: {
  difficultyFilter: Difficulty[];
  setDifficultyFilter: Dispatch<SetStateAction<Difficulty[]>>;
}) {
  return (
    <div
      className="filter-container flex flex-col gap-1"
      aria-label="difficulty filter"
    >
      <div
        className="flex justify-between items-center gap-2"
        aria-hidden={true}
      >
        <div className="text-sm">EASY</div>
        <div className="flex-grow w-full h-[0.5px] bg-[rgb(var(--font-color))]"></div>
        <div className="text-sm lg:hidden">HARD</div>
      </div>
      <div
        id="filters"
        className="flex flex-row lg:flex-col gap-4 items-center justify-center"
      >
        {Object.entries(Difficulty)
          .filter((d) => isNaN(Number(d[0])))
          .map(([key, val]) => {
            const diff = val as Difficulty;
            const isFilteredOut = !difficultyFilter.includes(val as Difficulty);
            const isBlack = diff === Difficulty.Black;
            const isWhite = diff === Difficulty.White;
            return (
              <label
                className={twMerge(
                  "size-10 md:size-8 rounded-full cursor-pointer border-2 border-transparent flex",
                  isFilteredOut && "grayscale-[60%]",
                  isBlack &&
                    (isFilteredOut
                      ? "bg-[var(--diff-black-filter-out)]"
                      : "bg-[var(--diff-black-filter)]"),
                  isWhite &&
                    (isFilteredOut
                      ? "bg-[var(--diff-white-filter-out)]"
                      : "bg-[var(--diff-white-filter)]")
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
                htmlFor={key}
                aria-label={`${key} difficulty`}
                role="checkbox"
                aria-checked={difficultyFilter.includes(diff)}
              >
                <div className="size-7 md:size-5 bg-[rgb(var(--bg))] rounded-full m-auto flex p-0.5 fill-[rgb(var(--font-color))]">
                  {difficultyFilter.includes(val as Difficulty) && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 640"
                    >
                      <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" />
                    </svg>
                  )}
                </div>
                <input
                  type="checkbox"
                  name={key}
                  id={key}
                  className="h-0 w-0 absolute"
                  onChange={() => {
                    if (!difficultyFilter.includes(diff)) {
                      setDifficultyFilter((prev) =>
                        prev ? [...prev, diff] : [diff]
                      );
                    } else {
                      if (difficultyFilter.length === 1) {
                        setDifficultyFilter(allDiffs);
                      } else
                        setDifficultyFilter((prev) =>
                          prev!.filter((d) => d !== val)
                        );
                    }
                  }}
                />
              </label>
            );
          })}
      </div>
      <div className="text-sm hidden lg:block">HARD</div>
    </div>
  );
}

export default Filters;
