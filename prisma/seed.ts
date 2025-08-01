import { PrismaClient, Prisma } from "../src/app/generated/prisma";

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
    name: "mival",
    email: "mival@mival.me",
    boulders: {
      create: [
        {
          id: "sdfgnksdfnvs",
          difficulty: 0,
          position: [100, 50],
          room: "big",
          location: "slab",
          holdColors: ["orange", "blue"],
          tags: [],
        },
        {
          id: "dfsgmljvja",
          difficulty: 4,
          position: [110, 54],
          room: "big",
          location: "slab",
          holdColors: ["black"],
          tags: ["balance"],
        },
        {
          id: "dfkdfvnsdfkokdv",
          difficulty: 2,
          position: [300, 54],
          room: "big",
          location: "slab",
          holdColors: ["red"],
          tags: ["jugs"],
        },
        {
          id: "dfsdkr",
          difficulty: 5,
          position: [1500, 440],
          room: "big",
          location: "cave",
          holdColors: ["black"],
          tags: ["overhang"],
        },
      ],
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }

  for (const s of setterData) {
    await prisma.setter.create({ data: s });
  }
}

main();
