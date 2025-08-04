import { TBoulder, TCluster, TFlatCluster } from "@/lib/types";
import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import Boulder from "../StaticBoulder";
import { getClustersAtCutoff } from "@/lib/utils";
import Cluster from "../Cluster";

function StaticSegment({
  // id,
  boulders,
  clusters,
  svgRef,
  setIsPopupOpen,
  zoomScale,
  setZoomScale,
  zoomFlag,
  setZoomFlag,
  circleRadius,
}: {
  // id: Location;
  boulders: TBoulder[];
  clusters: TCluster[];
  svgRef: RefObject<SVGSVGElement | null>;
  setIsPopupOpen: Dispatch<SetStateAction<boolean>>;
  zoomScale: number;
  setZoomScale: Dispatch<SetStateAction<number>>;
  zoomFlag: boolean;
  setZoomFlag: Dispatch<SetStateAction<boolean>>;
  circleRadius: number;
}) {
  const [clusteredBoulders, setClusteredBoulders] = useState<TFlatCluster[]>(
    []
  );

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
      {boulders.map((b) => {
        const isClustered = clusteredBoulders.some((cluster) =>
          cluster.members.includes(b.id)
        );
        return (
          <Boulder
            key={b.id}
            data={b}
            circleRadius={circleRadius}
            setIsPopupOpen={setIsPopupOpen}
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

export default StaticSegment;
