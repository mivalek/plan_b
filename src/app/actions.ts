"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import prisma from "@/lib/prisma";
import { TBoulder, TPosition } from "@/lib/types";

export async function dbCreateOrUpdateBoulder(boulder: TBoulder) {
  const position = [boulder.position.x, boulder.position.y];
  await prisma.boulder.upsert({
    where: {
      id: boulder.id,
    },
    update: {
      name: boulder.name,
      setterId: boulder.setter,
      room: boulder.room,
      location: boulder.location,
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
      room: boulder.room,
      location: boulder.location,
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

export async function auth(key: string | null) {
  "use server";
  return key === process.env.EDIT_KEY;
}
