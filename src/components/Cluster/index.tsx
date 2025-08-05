import { TFlatCluster, TPosition } from "@/lib/types";
import { getDOMViewBox, getSVGZoomFactor, zoomSvg } from "@/lib/utils";
import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

function Cluster({
  cluster,
  svgRef,
  circleRadius,
  zoomScale,
  setZoomScale,
  setZoomFlag,
}: {
  cluster: TFlatCluster;
  svgRef: RefObject<SVGSVGElement | null>;
  circleRadius: number;
  zoomScale: number;

  setZoomScale: Dispatch<SetStateAction<number>>;
  zoomFlag: boolean;
  setZoomFlag: Dispatch<SetStateAction<boolean>>;
}) {
  const [clusterPointer, setClusterPointer] = useState<TPosition>();
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
  }, [clusterPointer, setZoomFlag, setZoomScale, svgRef]);
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
