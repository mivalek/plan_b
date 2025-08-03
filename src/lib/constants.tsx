import { TViewBox } from "./types";

export const ZOOM_SPEED = 0.1; // (0, 1] percent increase with each zoom event
export const PINCH_ZOOM_DAMPER = 0.3; // (0,1] multiplies the above for less sensitive pinch-zoom
export const ZOOM_ANIMATION_DURATION = 300;
export const MIN_VIEWPORT_WIDTH = 200; // maximum zoom
export const SVG_VIEWBOX_LANDSCAPE = [-50, -200, 2541, 1226] as TViewBox;
export const SVG_VIEWBOX_PORTRAIT = [-50, -900, 2541, 2626] as TViewBox;
export const PAN_BORDER = [-50, -50, 2541, 926] as TViewBox;
export const LAYOUT_DIMS = [0, 0, 2441, 826] as TViewBox;

const white = "white";
const black = "black";
const wood = "#9c593f";
const red = "#cd1313";
const pink = "#ff2ca3";
const purple = "#8719e1";
const blue = "#1342d0";
const turquoise = "#27d1d1";
const green = "#17d375";
const dark_green = "forestgreen";
const yellow = "#e6c408";
const orange = "#ff8300";

export const HOLD_COLORS = {
  white,
  black,
  wood,
  red,
  pink,
  purple,
  blue,
  turquoise,
  green,
  dark_green,
  yellow,
  orange,
  rainbow: `linear-gradient(0,
  ${blue} 16%, ${blue} 33%, 
  ${green} 33%, ${green} 50%, 
  ${yellow} 50%, ${yellow} 67%, 
  ${orange} 67%, ${orange} 84%, 
  ${red} 84%, ${red} 100%)`,
};

export const TAGS = [
  "Slab",
  "Wall",
  "Overhang",
  "Jugs",
  "Crimps",
  "Slopers",
  "Power",
  "Endurance",
  "Flexibility",
  "Balance",
  "Coordination",
  "Technical",
  "Dynamic",
  "Scary",
];
