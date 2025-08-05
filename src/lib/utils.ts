import {
  Difficulty,
  Segment,
  TBoulder,
  TCluster,
  TFlatCluster,
  TPosition,
  TViewBox,
} from "./types";
import { MIN_VIEWPORT_WIDTH, ZOOM_SPEED } from "./constants";
import { v4 } from "uuid";

export function camelCase(x: string) {
  return x
    .split(/\s+|-|_/)
    .map((e) => {
      const first = e.at(0)?.toUpperCase;
      return first + e.slice(1);
    })
    .join();
}

export function getSVGZoomFactor(viewBox: TViewBox) {
  const origW = getInitialViewBox().width;
  const currentW = viewBox[2];
  return origW / currentW;
}

export function getDOMViewBox(svg: SVGSVGElement) {
  return svg
    .getAttribute("viewBox")
    ?.split(" ")
    .map((x) => parseFloat(x)) as TViewBox;
}

export const getDraggedBoulderPosition = (
  e: PointerEvent,
  draggedBoulder: TBoulder,
  pathPoints: DOMPoint[]
) => {
  const layoutSegmentPath = (e.currentTarget as SVGPathElement).querySelector(
    "path"
  )! as SVGPathElement;
  const svgCoords = pointerScreenToSVG(
    e.clientX,
    e.clientY,
    document.querySelector("#layout-container svg")!
  );
  const point = new DOMPoint(svgCoords.x, svgCoords.y);
  if (layoutSegmentPath.isPointInFill(point)) {
    const isCollision = detectCollision(
      draggedBoulder.id,
      point,
      draggedBoulder.segment
    );
    if (isCollision) return null;
    return svgCoords;
  }
  if (pathPoints.length) {
    const closestPoint = getClosestPointOnPath(svgCoords, pathPoints);
    const isCollision = detectCollision(
      draggedBoulder.id,
      closestPoint,
      draggedBoulder.segment
    );
    if (isCollision) return null;
    return closestPoint;
  }
};

export function panSvg(target: SVGSVGElement, deltaX: number, deltaY: number) {
  const containerBBox = target.parentElement!.getBoundingClientRect();
  const [x, y, width, height] = getDOMViewBox(target);
  const borderBBox = target
    .querySelector("#pan-border")!
    .getBoundingClientRect();
  // pan

  // detect collisions
  const distanceTop = borderBBox.top - containerBBox.top;
  const distanceBottom = borderBBox.bottom - containerBBox.bottom;
  const distanceLeft = borderBBox.left - containerBBox.left;
  const distanceRight = borderBBox.right - containerBBox.right;
  const lockPanning = target.dataset.lock
    ? JSON.parse(target.dataset.lock)
    : { left: false, top: false, right: false, bottom: false };
  let freezeX = false,
    freezeY = false,
    adjustX = 0,
    adjustY = 0;

  if ((lockPanning.left && deltaX > 0) || (lockPanning.right && deltaX < 0)) {
    freezeX = true;
  } else if (distanceLeft > 0 && distanceRight < 0) {
    // all fits inside -> no adjust
    freezeX = true;
    lockPanning.left = true;
    lockPanning.right = true;
  } else if (
    //right
    distanceLeft > 0 &&
    deltaX > 0
  ) {
    freezeX = true;
    adjustX = pixelScreenToViewBox(-distanceLeft);
    lockPanning.right = false;
    lockPanning.left = true;
  } else if (distanceRight < 0 && deltaX < 0) {
    // left
    freezeX = true;
    adjustX = pixelScreenToViewBox(-distanceRight);
    lockPanning.right = true;
    lockPanning.left = false;
  } else {
    lockPanning.right = false;
    lockPanning.left = false;
  }

  if ((lockPanning.top && deltaY > 0) || (lockPanning.bottom && deltaY < 0)) {
    freezeY = true;
  } else if (distanceTop > 0 && distanceBottom < 0) {
    freezeY = true;
    lockPanning.top = true;
    lockPanning.bottom = true;
  } else if (distanceTop > 0 && deltaY > 0) {
    freezeY = true;
    lockPanning.bottom = false;
    lockPanning.top = true;
    adjustY = pixelScreenToViewBox(-distanceTop);
  } else if (distanceBottom < 0 && deltaY < 0) {
    freezeY = true;
    lockPanning.top = false;
    lockPanning.bottom = true;
    adjustY = pixelScreenToViewBox(-distanceBottom);
  } else {
    lockPanning.top = false;
    lockPanning.bottom = false;
  }

  const newViewBox = [
    x - (freezeX ? adjustX : pixelScreenToViewBox(deltaX)),
    y - (freezeY ? adjustY : pixelScreenToViewBox(deltaY)),
    width,
    height,
  ].map((x) => Math.round(x)) as TViewBox;
  target.setAttribute("viewBox", newViewBox.join(" "));
  target.setAttribute("data-lock", JSON.stringify(lockPanning));
}

export function zoomSvg(
  target: SVGSVGElement,
  delta: number,
  offsetX: number,
  offsetY: number,
  damper?: number
) {
  damper = damper || 1;
  const svgBBox = target.getBoundingClientRect();
  const initialViewBox = getInitialViewBox();

  const bBox = svgBBox;
  const [x, y, width, height] = getDOMViewBox(target);
  target.removeAttribute("data-lock");

  if (width >= initialViewBox.width && delta < 0) {
    target.setAttribute(
      "viewBox",
      [
        initialViewBox.x,
        initialViewBox.y,
        initialViewBox.width,
        initialViewBox.height,
      ].join(" ")
    );
    target.style.setProperty("--boulder-scale", "1");
    return;
  }
  const borderBBox = target
    .querySelector("#zoom-border")!
    .getBoundingClientRect();
  const outOfBounds =
    borderBBox.top > bBox.y + offsetY ||
    borderBBox.bottom < bBox.y + offsetY ||
    borderBBox.left > bBox.x + offsetX ||
    borderBBox.right < bBox.x + offsetX;
  if ((width <= MIN_VIEWPORT_WIDTH && delta > 0) || outOfBounds) return;
  const pointer = { x: offsetX, y: offsetY };
  const zoomFactor =
    delta > 0 ? 1 + ZOOM_SPEED * damper : 1 / (1 + ZOOM_SPEED * damper);
  const origin = [pointer.x / bBox.width, pointer.y / bBox.height];
  const newWidth = width / zoomFactor;
  const newHeight = height / zoomFactor;
  const deltaWidth = newWidth - width;
  const deltaHeight = newHeight - height;

  const newViewBox = [
    x - origin[0] * deltaWidth,
    y - origin[1] * deltaHeight,
    width / zoomFactor,
    height / zoomFactor,
  ].map((x) => Math.round(x * 1000) / 1000) as TViewBox;

  target.setAttribute("viewBox", newViewBox.join(" "));
  target.style.setProperty(
    "--boulder-scale",
    (1 / getSVGZoomFactor(newViewBox)).toFixed(3)
  );
}

export function pixelScreenToViewBox(x: number) {
  const referenceRect = document.querySelector(
    "#viewbox-reference-rect"
  )! as SVGRectElement;
  const screen = referenceRect.getBoundingClientRect().width;
  const viewBox = referenceRect.getBBox().width;
  return x * (viewBox / screen);
}

export function pointerScreenToSVG(
  x_coord: number,
  y_coord: number,
  svg: SVGSVGElement
) {
  const referenceRect = svg.querySelector(
    "#viewbox-reference-rect"
  )! as SVGRectElement;
  const initialViewBox = referenceRect.getBBox();
  const { x, y, width, height } = referenceRect.getBoundingClientRect();
  return {
    x: ~~(((x_coord - x) / width) * initialViewBox.width) + initialViewBox.x,
    y: ~~(((y_coord - y) / height) * initialViewBox.height) + initialViewBox.y,
  };
}

export function difficultyToColour(x: Difficulty) {
  switch (x) {
    case Difficulty.Black:
      return "var(--diff-black)";
    case Difficulty.Blue:
      return "var(--diff-blue)";
    case Difficulty.Green:
      return "var(--diff-green)";
    case Difficulty.Purple:
      return "var(--diff-purple)";
    case Difficulty.Red:
      return "var(--diff-red)";
    case Difficulty.White:
      return "var(--diff-white)";
    case Difficulty.Yellow:
      return "var(--diff-yellow)";
    default:
      return "none";
  }
}

export function getClosestPointOnPath(
  coords: TPosition,
  pathPoints: DOMPoint[]
) {
  let closestDistance = Infinity;
  let closestPoint = pathPoints[0];

  for (const point of pathPoints) {
    const distance = Math.sqrt(
      (point.x - coords.x) ** 2 + (point.y - coords.y) ** 2
    );

    if (distance < closestDistance) {
      closestDistance = distance;
      closestPoint = point;
    }
  }
  return closestPoint;
}

export function getDistance(a: TPosition, b: TPosition) {
  return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
}

export function getMidpoint(a: TPosition, b: TPosition) {
  return { x: a.x + (b.x - a.x) / 2, y: a.y + (b.y - a.y) / 2 } as TPosition;
}
export function detectCollision(
  id: string,
  nextCoord: DOMPoint,
  parent: string
) {
  const candidates = document.querySelectorAll<SVGCircleElement>(
    `.boulder[data-parent="${parent}"] .difficulty`
  );
  const scale = parseFloat(
    window.getComputedStyle(candidates[0].parentElement!).scale
  );
  const r = candidates[0].r.animVal.value;
  for (const b of candidates) {
    if (b.parentElement!.id === id) continue;

    const otherPosition = { x: b.cx.animVal.value, y: b.cy.animVal.value };
    const dist = getDistance(nextCoord, otherPosition);
    if (dist <= r * scale * 2) {
      return true;
    }
  }
  return false;
}

// agglomerative clustering
export function makeClusters(boulders: TBoulder[], distanceCutoff: number) {
  let clusters = boulders.map<TCluster>((b) => ({
    position: b.position,
    distance: 0,
    members: [],
    id: b.id,
  }));

  whileLoop: while (clusters.length > 1) {
    const distances: {
      a: string;
      b: string;
      idxA: number;
      idxB: number;
      dist: number;
    }[] = [];
    for (let i = 0; i < clusters.length - 1; i++) {
      const ba = clusters[i];
      // distances.push();
      for (let j = i + 1; j < clusters.length; j++) {
        const bb = clusters[j];
        distances.push({
          a: ba.id,
          b: bb.id,
          idxA: i,
          idxB: j,
          dist: getDistance(ba.position, bb.position),
        });
      }
    }
    distances.sort((a, b) => a.dist - b.dist);
    const { a, b, idxA, idxB, dist } = distances[0];

    // merge 2 closest
    const clusterA = clusters[idxA];
    const clusterB = clusters[idxB];
    const newCluster: TCluster = {
      id: v4(),
      members: [clusterA, clusterB],
      distance: dist,
      position: getMidpoint(clusterA.position, clusterB.position),
    };

    clusters = clusters.filter((c) => ![a, b].includes(c.id));
    clusters.push(newCluster);
  }
  return clusters;
}

export function flattenClusterMembers(cluster: TCluster): string[] {
  if (!cluster.members.length) return [cluster.id];
  return cluster.members.flatMap((m) => flattenClusterMembers(m));
}

export function getClustersAtCutoff(
  clusters: TCluster[],
  cutoff: number
): TFlatCluster[] {
  const flatClusters = clusters.flatMap((cluster) => {
    if (!cluster.distance) return [];
    if (cluster.distance < cutoff)
      return {
        id: cluster.id,
        position: cluster.position,
        members: flattenClusterMembers(cluster),
      };
    return getClustersAtCutoff(cluster.members, cutoff);
  });
  return flatClusters;
}

function getInitialViewBox() {
  return (
    document.querySelector("#viewbox-reference-rect")! as SVGRectElement
  ).getBBox();
}

export function daysFromToday(date: Date) {
  const now = new Date();
  now.setUTCHours(0, 0, 0, 0);
  return (date.valueOf() - now.valueOf()) / (1000 * 60 * 60 * 24);
}

export function deadlinePhrase(date: Date | undefined) {
  if (!date) return;
  const days = daysFromToday(date);
  if (days < 0) return;
  const outDate = date.toLocaleString("en-gb", {
    day: "2-digit",
    month: "short",
  });
  if (days === 0) return "TODAY!";
  if (days === 1) return "tomorrow!";
  if (days < 7) return `in ${days} days`;
  return outDate;
}
