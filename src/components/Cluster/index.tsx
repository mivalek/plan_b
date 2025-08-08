import { TFlatCluster, TPosition } from "@/lib/types";
import { getDOMViewBox, getSVGZoomFactor, zoomSvg } from "@/lib/utils";
import { setZoomFlag, setZoomScale, useUiStore } from "@/stores/uiStore";
import React, { useEffect, useRef, useState } from "react";
import { useShallow } from "zustand/shallow";

function Cluster({ cluster }: { cluster: TFlatCluster }) {
  const [clusterPointer, setClusterPointer] = useState<TPosition>();

  const [svgRef, circleRadius, zoomScale] = useUiStore(
    useShallow((state) => [state.svgRef, state.circleRadius, state.zoomScale])
  );
  const clusterRef = useRef<SVGGElement>(null);
  useEffect(() => {
    if (!clusterPointer || !clusterRef) return;
    setZoomFlag(true);

    const interval = setInterval(() => {
      zoomSvg(svgRef.current!, 1, clusterPointer.x, clusterPointer.y);
      const newScale = getSVGZoomFactor(getDOMViewBox(svgRef.current!));
      setZoomScale(1 / newScale);
      if (newScale > 4 && !clusterRef.current) {
        clearInterval(interval);
        setClusterPointer(undefined);
      }
    }, 10);
  }, [clusterPointer, svgRef]);
  return (
    <g
      className="cluster cursor-pointer"
      ref={clusterRef}
      id={cluster.id}
      onDoubleClick={(e) => {
        e.stopPropagation();
        const clusterBoundingRect = e.currentTarget.getBoundingClientRect();

        setClusterPointer({
          x:
            clusterBoundingRect.x -
            svgRef.current!.getBoundingClientRect().x +
            clusterBoundingRect.width / 2,
          y:
            clusterBoundingRect.y -
            svgRef.current!.getBoundingClientRect().y +
            clusterBoundingRect.height / 2,
        });
      }}
    >
      <circle
        cx={cluster.position.x}
        cy={cluster.position.y}
        r={circleRadius * zoomScale}
        fill="white"
      />
      <text
        x={cluster.position.x}
        y={cluster.position.y}
        fill="black"
        fontSize={circleRadius * 1.4 * zoomScale}
        dominantBaseline="central"
        textAnchor="middle"
      >
        {cluster.members.length}
      </text>
    </g>
  );
}

export default Cluster;
