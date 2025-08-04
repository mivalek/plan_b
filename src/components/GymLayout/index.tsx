import { SEGMENT_PATHS } from "@/lib/constants";
import { TPosition, TSegment } from "@/lib/types";
import { daysFromToday, deadlinePhrase } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
function colorByDate(d: Date | undefined): string | undefined {
  if (!d) return "!fill-black";
  const days = daysFromToday(d);
  if (days < 1) return "!fill-black";
  if (days == 1) return "!fill-red-600";
  if (days < 4) return "!fill-red-400";
  if (days <= 7) return "!fill-orange-400";
  if (days <= 14) return "!fill-amber-400";
}

function GymLayout({ segments }: { segments: TSegment[] }) {
  const [selectedSegment, setSelectedSegment] = useState<number>();
  const [tooltipPosition, setTooltipPosition] = useState<TPosition>();
  const [domReady, setDomeReady] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (selectedSegment === undefined) {
      setTooltipPosition(undefined);
      return;
    }
    const seg = segments[selectedSegment];
    const info = document.querySelector(`#${seg.name}-layer .info`)!;
    const bRect = info.getBoundingClientRect();
    setTooltipPosition({ x: bRect.left, y: bRect.bottom });
  }, [selectedSegment]);

  useEffect(() => {
    if (!popupRef.current) return;
    if (!tooltipPosition || selectedSegment === undefined) {
      popupRef.current.style.translate = "";
      return;
    }
    const { width, height } = popupRef.current.getBoundingClientRect();
    if (tooltipPosition.x > width) return;
    const seg = segments[selectedSegment!];
    const info = document.querySelector(`#${seg.name}-layer .info`)!;
    const bRect = info.getBoundingClientRect();
    popupRef.current.style.translate = `${bRect.width}px`;
  }, [popupRef, tooltipPosition, selectedSegment]);

  useEffect(() => {
    setDomeReady(true);
  }, []);

  return (
    <>
      <g className="big-mat fill-[var(--mat)]">
        <path d="M167 345.5L400.5 612.5L577.5 665H1205.5L1310 598.5L1345.5 536H1461L1472.5 533L1514 499.5L1463 331L1314.5 207L1333 65.5L1033 43L977 114H888L828 37L700.5 66.5H478L438.5 86H386L351 57L184 35.5L65.5 146V299.5L103 334L167 345.5Z" />
      </g>
      <g className="small-mat fill-[var(--mat)]">
        <path d="M1966 741.5L1960.5 736V668.5L1858.5 282L1806 250L1799 245L1802 70L1852 45L2083.5 115.5L2230 80L2313.5 136.5L2308 277L2396 293.5V551.5L2275 606.5L2265.5 703.5L2271 741.5H1966Z" />
      </g>
      {segments.map((seg, i) => (
        <g key={seg.id} id={seg.name + "-layer"}>
          <g id={seg.name} className="clickable">
            <path
              className={colorByDate(seg.downDate)}
              d={SEGMENT_PATHS[seg.name].path}
            />
          </g>
          {seg.downDate && (
            <g
              className="info fill-white/60 scale-[.1] cursor-pointer"
              style={{
                translate: SEGMENT_PATHS[seg.name].info
                  .map((i) => i + "px")
                  .join(" "),
              }}
              onPointerEnter={() => setSelectedSegment(i)}
              onPointerLeave={() => setSelectedSegment(undefined)}
            >
              <circle cx={320} cy={320} r={250} fill="transparent" />
              <path d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM288 224C288 206.3 302.3 192 320 192C337.7 192 352 206.3 352 224C352 241.7 337.7 256 320 256C302.3 256 288 241.7 288 224zM280 288L328 288C341.3 288 352 298.7 352 312L352 400L360 400C373.3 400 384 410.7 384 424C384 437.3 373.3 448 360 448L280 448C266.7 448 256 437.3 256 424C256 410.7 266.7 400 280 400L304 400L304 336L280 336C266.7 336 256 325.3 256 312C256 298.7 266.7 288 280 288z" />
            </g>
          )}
        </g>
      ))}
      <g className="big-outer-walls fill-[var(--outside-walls)]">
        <path d="M74.7736 803.987H22.757V22.5131L1548 22.5V619H1570.5V1H0.75V825H1569.75V740.949H1548.24V803.987H1496.73V814.494H1324.67V803.987H1288.16V814.494H1116.11V803.987H1079.59V814.494H907.539V803.987H871.027V814.494H699.473V803.987H663.961V814.494H490.406V803.987H454.895V814.494H282.34V803.987H246.328V814.494H74.7736V803.987Z" />
      </g>
      <g className="small-outer-walls fill-[var(--outside-walls)]">
        <path d="M1570.5 619.125H1548V1H2440V825H1879.5V804H2416.5V22.487H1570.5V619.125Z" />
        <path d="M1744.5 825V804H1570V741H1548V825H1744.5Z" />
      </g>
      {domReady &&
        createPortal(
          <div
            ref={popupRef}
            className="absolute w-30 -translate-x-30"
            style={{
              top: tooltipPosition ? tooltipPosition.y : "unset",
              left: tooltipPosition ? tooltipPosition.x : "unset",
            }}
          >
            {selectedSegment !== undefined && tooltipPosition && (
              <div className="bg-[rgb(var(--bg))] text-[rgb(var(--font-color))] text-sm shadow shadow-black/30 rounded-sm px-1 py-2 flex flex-col gap-2">
                <div>
                  {segments[selectedSegment].boulders.length + " boulders"}
                </div>
                <div>
                  Coming down
                  <br />
                  {deadlinePhrase(segments[selectedSegment].downDate)}
                </div>
              </div>
            )}
          </div>,
          document.getElementById("popup-container")!
        )}
    </>
  );
}

export default GymLayout;
