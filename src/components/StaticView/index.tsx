import {
  Segment,
  TBoulder,
  TCluster,
  TSegment,
  TSetterShort,
} from "@/lib/types";
import { makeClusters } from "@/lib/utils";
import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import StaticSegment from "../StaticSegment";

function StaticView({
  boulderData,
  setters,
  segments,
  circleRadius,
  svgRef,
  zoomFlag,
  setZoomFlag,
  zoomScale,
  setZoomScale,
}: {
  boulderData: TBoulder[];
  segments: TSegment[];
  setters: TSetterShort[];
  circleRadius: number;
  svgRef: RefObject<SVGSVGElement | null>;
  zoomScale: number;
  setZoomScale: Dispatch<SetStateAction<number>>;
  zoomFlag: boolean;
  setZoomFlag: Dispatch<SetStateAction<boolean>>;
}) {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  console.log(isPopupOpen, setters);
  const clusters = useMemo(() => {
    const out: { [key in Segment]?: TCluster[] } = {};
    segments.map((seg) => {
      out[seg.name] =
        !boulderData || boulderData.length === 1
          ? []
          : makeClusters(
              boulderData.filter((b) => b.segment === seg.name),
              circleRadius
            );
    });
    return out;
  }, [boulderData, circleRadius]);
  return (
    <>
      {" "}
      {segments.map((seg) => {
        const bldrs = boulderData.filter((b) => b.segment === seg.name);

        return (
          bldrs && (
            <StaticSegment
              key={seg.name}
              svgRef={svgRef}
              //   id={l}
              boulders={bldrs}
              clusters={clusters[seg.name]!}
              setIsPopupOpen={setIsPopupOpen}
              zoomScale={zoomScale}
              setZoomScale={setZoomScale}
              zoomFlag={zoomFlag}
              setZoomFlag={setZoomFlag}
              circleRadius={circleRadius}
            />
          )
        );
      })}
    </>
  );
}

export default StaticView;
