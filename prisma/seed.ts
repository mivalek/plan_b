import {
  PrismaClient,
  Prisma,
  segment,
  room,
} from "../src/app/generated/prisma";

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Milan",
    email: "mival@mival.me",
    isAdmin: true,
  },
];

const setterData: Prisma.SetterCreateInput[] = [
  {
    name: "PlanB team",
    email: "planb@email.me",
  },
];

const now = new Date();
const date = new Date();
const segmentData: Prisma.SegmentCreateInput[] = [
  {
    name: segment.SMALL_BLOCK,
    room: room.BIG,
  },
  {
    name: segment.LARGE_BLOCK,
    room: room.BIG,
  },
  {
    name: segment.CAVE,
    room: room.BIG,
  },
  {
    name: segment.SLAB,
    room: room.BIG,
  },
  {
    name: segment.BLOCK,
    room: room.SMALL,
  },
  {
    name: segment.U_WALL,
    room: room.SMALL,
  },
  {
    name: segment.CORNER,
    room: room.SMALL,
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }

  for (const s of setterData) {
    await prisma.setter.create({ data: s });
  }

  for (const s of segmentData) {
    await prisma.segment.create({ data: s });
  }
}

main();
