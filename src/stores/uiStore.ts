import { SVG_VIEWBOX_PORTRAIT } from "@/lib/constants";
import { CircleRadius, Difficulty, TPosition, TViewBox } from "@/lib/types";
import { createRef, RefObject } from "react";
import { create } from "zustand";

type UiState = {
  circleRadius: CircleRadius;
  svgRef: RefObject<SVGSVGElement | null>;
  svgViewBox: TViewBox;
  zoomScale: number;
  zoomOrigin: TPosition;
  zoomFlag: boolean;
  pinchDistance: number;
  panFlag: boolean;
  difficultyFilter: Difficulty[];
  isBoulderDialogOpen: boolean;
  isSetterDialogOpen: boolean;
  isSegmentDialogOpen: boolean;
  isSegmentPopupOpen: boolean;
  isBoulderPopupOpen: boolean;
};

type UiActions = {
  setSvgRef: (svgRef: RefObject<SVGSVGElement | null>) => void;
};
type UiStore = UiState & UiActions;

export const useUiStore = create<UiStore>((set) => ({
  circleRadius: CircleRadius.XL,
  svgRef: createRef<SVGSVGElement | null>(),
  svgViewBox: SVG_VIEWBOX_PORTRAIT,
  zoomScale: 1,
  zoomOrigin: { x: 0, y: 0 },
  zoomFlag: true,
  pinchDistance: 0,
  panFlag: false,
  difficultyFilter: Object.entries(Difficulty)
    .filter(([key, _]) => isNaN(Number(key)))
    .map(([_, val]) => val) as Difficulty[],
  isBoulderDialogOpen: false,
  isSegmentDialogOpen: false,
  isSetterDialogOpen: false,
  isSegmentPopupOpen: false,
  isBoulderPopupOpen: false,
  setSvgRef: (svgRef) => set({ svgRef }),
}));

export function setCircleRadius(circleRadius: number) {
  useUiStore.setState({ circleRadius });
}
export function setSvgViewBox(svgViewBox: TViewBox) {
  useUiStore.setState({ svgViewBox });
}
export function setZoomScale(zoomScale: number) {
  useUiStore.setState({ zoomScale });
}
export function setZoomOrigin(zoomOrigin: TPosition) {
  useUiStore.setState({ zoomOrigin });
}
export function setZoomFlag(zoomFlag: boolean) {
  useUiStore.setState({ zoomFlag });
}
export function setPinchDistance(pinchDistance: number) {
  useUiStore.setState({ pinchDistance });
}
export function setPanFlag(panFlag: boolean) {
  useUiStore.setState({ panFlag });
}
export function setDifficultyFilter(difficultyFilter: Difficulty[]) {
  useUiStore.setState({ difficultyFilter });
}
export function setIsBoulderDialogOpen(isBoulderDialogOpen: boolean) {
  useUiStore.setState({ isBoulderDialogOpen });
}
export function setIsSegmentDialogOpen(isSegmentDialogOpen: boolean) {
  useUiStore.setState({ isSegmentDialogOpen });
}
export function setIsSetterDialogOpen(isSetterDialogOpen: boolean) {
  useUiStore.setState({ isSetterDialogOpen });
}
export function setIsSegmentPopupOpen(isSegmentPopupOpen: boolean) {
  useUiStore.setState({ isSegmentPopupOpen });
}
export function setIsBoulderPopupOpen(isBoulderPopupOpen: boolean) {
  useUiStore.setState({ isBoulderPopupOpen });
}
