export enum Difficulty {
  //   Unset,
  Yellow,
  Blue,
  Green,
  Red,
  Black,
  White,
  Purple,
}

export enum Room {
  Small = "small",
  Big = "big",
}
export enum Location {
  SmallBlock = "small-block",
  LargeBlock = "large-block",
  Cave = "cave",
  Slab = "slab",
  Block = "block",
  UWall = "u-wall",
  Corner = "corner",
}

export enum CircleRadius {
  S = 70,
  M = 45,
  L = 25,
  XL = 15,
}
export type TViewBox = [number, number, number, number];

export type TPosition = {
  x: number;
  y: number;
};
export type TBoulder = {
  id: string;
  name?: string;
  setter: number | undefined;
  position: TPosition;
  room: Room;
  location: Location;
  difficulty: Difficulty | null;
  holdColors: string[];
  tags: string[];
  createdAt?: Date;
};

export type TSetterShort = {
  id: number;
  name: string;
};
export type TDistance = {
  id: string;
  distance: number;
};

export type TDistanceData = {
  id: string;
  position: TPosition;
  distances: TDistance[];
};

export type TCluster = {
  id: string;
  members: TCluster[];
  distance: number;
  position: TPosition;
};

export type TFlatCluster = {
  id: string;
  members: string[];
  position: TPosition;
};
