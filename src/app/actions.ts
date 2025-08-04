"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import prisma from "@/lib/prisma";
import { TBoulder, TPosition } from "@/lib/types";
import { segment } from "./generated/prisma";

export async function dbCreateOrUpdateBoulder(boulder: TBoulder) {
  const position = [boulder.position.x, boulder.position.y];
  await prisma.boulder.upsert({
    where: {
      id: boulder.id,
    },
    update: {
      name: boulder.name,
      setterId: boulder.setter,
      segmentName: boulder.segment.toUpperCase() as segment,
      position,
      difficulty: boulder.difficulty!,
      holdColors: boulder.holdColors,
      tags: boulder.tags,
    },
    create: {
      id: boulder.id,
      name: boulder.name,
      setter: {
        connect: {
          id: boulder.setter,
        },
      },
      segment: {
        connect: {
          name: boulder.segment.toUpperCase() as segment,
        },
      },
      position,
      difficulty: boulder.difficulty!,
      holdColors: boulder.holdColors,
      tags: boulder.tags,
    },
  });
  revalidatePath("/boulders");
}

export async function dbUpdateBoulderPosition(id: string, position: number[]) {
  await prisma.boulder.update({
    where: {
      id: id,
    },
    data: { position },
  });
  revalidatePath("/boulders");
}

export async function dbDeleteBoulder(id: string) {
  await prisma.boulder.delete({
    where: {
      id: id,
    },
  });
  revalidateTag("boulder-cache");
}

export async function createSetter(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  await prisma.setter.create({
    data: {
      name,
      email,
    },
  });

  revalidatePath("/boulders");
}

export async function dbUpdateSegmentDates(
  name: string,
  downDate: Date,
  upDate?: Date
) {
  await prisma.segment.update({
    where: {
      name: name.toUpperCase() as segment,
    },
    data: upDate
      ? { upDate: upDate, downDate: downDate }
      : { downDate: downDate },
  });
  revalidateTag("segment-cache");
}

export async function auth(key: string | null) {
  "use server";
  return key === process.env.EDIT_KEY;
}
