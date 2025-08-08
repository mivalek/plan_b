import { TBoulder, TCluster, TFlatCluster } from "@/lib/types";
import React, { useEffect, useState } from "react";
import Boulder from "../StaticBoulder";
import { getClustersAtCutoff } from "@/lib/utils";
import Cluster from "../Cluster";
import { useUiStore } from "@/stores/uiStore";
import { useShallow } from "zustand/shallow";

function StaticSegment({
  // id,
  boulders,
  clusters,
}: {
  // id: Location;
  boulders: TBoulder[];
  clusters: TCluster[];
}) {
  const [circleRadius, zoomScale, zoomFlag, panFlag] = useUiStore(
    useShallow((state) => [
      state.circleRadius,
      state.zoomScale,
      state.zoomFlag,
      state.panFlag,
    ])
  );

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
            className={isClustered ? " hidden " : undefined}
          />
        );
      })}
      {clusteredBoulders.map((cluster, i) => (
        <Cluster key={i} cluster={cluster} />
      ))}
    </g>
  );
}

export default StaticSegment;
