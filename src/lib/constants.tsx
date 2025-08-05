import { Segment, TViewBox } from "./types";

export const ZOOM_SPEED = 0.1; // (0, 1] percent increase with each zoom event
export const PINCH_ZOOM_DAMPER = 0.3; // (0,1] multiplies the above for less sensitive pinch-zoom
export const ZOOM_ANIMATION_DURATION = 300;
export const MIN_VIEWPORT_WIDTH = 200; // maximum zoom
export const MAX_ZOOM_SCALE = 0.08; // scale at max zoom
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

export const SEGMENT_PATHS: {
  [key in Segment]: { path: string; info: [number, number] };
} = {
  slab: {
    path: "M829 40.5V44L702.113 72.9873L702.058 73H479.622L440.729 92.9453L440.621 93H384.828L384.692 92.8945L348.3 64.4775L187.168 43.5264L71 151.718V294.787L113.739 336H19.5V19H829V40.5Z",
    info: [40, 40],
  },
  cave: {
    path: "M829 19V44L886.5 120H981.5L1035 50.5L1326 72L1308.5 212L1457.5 335.5L1507.5 500.5L1460 536H1552.5V19H829Z",
    info: [1465, 40],
  },
  small_block: {
    path: "M610.5 298L361 234L318 311.5L435 468L506 488.5L648 430V380.5L610.5 298Z",
    info: [470, 345],
  },
  large_block: {
    path: "M829 305.5L779 364.5L854.5 488L1078.5 508L1160.5 498.5L1260.5 357L1144 289L949.5 327L910.5 308L898.5 289L829 305.5Z",
    info: [1000, 370],
  },
  u_wall: {
    path: "M1745 250H1806V73L1855.5 50L2082.5 119L2229 83.5L2308 139L2300.5 279.5L2391 297.5H2422.5V15.5H1745V250Z",
    info: [2335, 40],
  },
  corner: {
    path: "M2390 297.5H2422.5V808H1960.5V733.5H2264L2260 701L2269.5 599L2390 545V297.5Z",
    info: [2335, 720],
  },
  block: {
    path: "M2187.5 423L2110 279.5L1949.5 298.5L2069.5 554L2187.5 423Z",
    info: [2050, 370],
  },
};
