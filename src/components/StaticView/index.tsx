import { Segment, TCluster } from "@/lib/types";
import { makeClusters } from "@/lib/utils";
import React, { useMemo } from "react";
import StaticSegment from "../StaticSegment";
import { useSegmentStore } from "@/stores/segmentStore";
import { useUiStore } from "@/stores/uiStore";
import { useShallow } from "zustand/shallow";
import { useBoulderStore } from "@/stores/boulderStore";

function StaticView() {
  const [circleRadius, difficultyFilter] = useUiStore(
    useShallow((state) => [state.circleRadius, state.difficultyFilter])
  );
  const boulders = useBoulderStore((state) => state.boulders);
  const filteredBoulders = () =>
    difficultyFilter
      ? boulders.filter(
          (b) =>
            b.difficulty !== null && difficultyFilter.includes(b.difficulty)
        )
      : boulders;

  const segments = useSegmentStore((state) => state.segments);
  const clusters = useMemo(() => {
    const out: { [key in Segment]?: TCluster[] } = {};
    segments.map((seg) => {
      out[seg.name] =
        !filteredBoulders() || filteredBoulders().length === 1
          ? []
          : makeClusters(
              filteredBoulders().filter((b) => b.segment === seg.name),
              circleRadius
            );
    });
    return out;
  }, [filteredBoulders(), circleRadius]);
  return (
    <>
      {" "}
      {segments.map((seg) => {
        const bldrs = filteredBoulders().filter((b) => b.segment === seg.name);

        return (
          bldrs && (
            <StaticSegment
              key={seg.name}
              //   id={l}
              boulders={bldrs}
              clusters={clusters[seg.name]!}
            />
          )
        );
      })}
    </>
  );
}

export default StaticView;
