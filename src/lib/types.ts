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
export enum Segment {
  SmallBlock = "small_block",
  LargeBlock = "large_block",
  Cave = "cave",
  Slab = "slab",
  Block = "block",
  UWall = "u_wall",
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
  segment: Segment;
  difficulty: Difficulty | null;
  holdColors: string[];
  tags: string[];
  createdAt?: Date;
};

export type TSegment = {
  id: number;
  name: Segment;
  room: Room;
  boulders: string[];
  upDate: Date | undefined;
  downDate: Date | undefined;
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
