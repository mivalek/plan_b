import { Location, TBoulder, TCluster, TSetterShort } from "@/lib/types";
import { makeClusters } from "@/lib/utils";
import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useMemo,
  useState,
} from "react";
import StaticSegmentBoulders from "../StaticSegmentBoulders";

function StaticView({
  boulderData,
  setters,
  circleRadius,
  svgRef,
  zoomFlag,
  setZoomFlag,
  zoomScale,
  setZoomScale,
}: {
  boulderData: TBoulder[];
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
    const out: { [key in Location]?: TCluster[] } = {};
    Object.values(Location).map((l) => {
      out[l] =
        !boulderData || boulderData.length === 1
          ? []
          : makeClusters(
              boulderData.filter((b) => b.location === l),
              circleRadius
            );
    });
    return out;
  }, [boulderData, circleRadius]);
  return (
    <>
      {" "}
      {Object.values(Location).map((l) => {
        const bldrs = boulderData.filter((b) => b.location === l);

        return (
          bldrs && (
            <StaticSegmentBoulders
              key={l}
              svgRef={svgRef}
              //   id={l}
              boulders={bldrs}
              clusters={clusters[l]!}
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
