"use server";

import { revalidatePath, revalidateTag } from "next/cache";
import prisma from "@/lib/prisma";
import { TBoulder, TPosition } from "@/lib/types";

export async function dbCreateOrUpdateBoulder(boulder: TBoulder) {
  await prisma.boulder.upsert({
    where: {
      id: boulder.id,
    },
    update: {
      name: boulder.name,
      setterId: boulder.setter,
      room: boulder.room,
      location: boulder.location,
      position: [boulder.position.x, boulder.position.y],
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
      position: [boulder.position.x, boulder.position.y],
      difficulty: boulder.difficulty!,
      holdColors: boulder.holdColors,
      tags: boulder.tags,
    },
  });
  revalidatePath("/");
}

export async function dbUpdateBoulderPosition(id: string, position: TPosition) {
  await prisma.boulder.update({
    where: {
      id: id,
    },
    data: { position: [position.x, position.y] },
  });
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

  revalidatePath("/");
}

export async function auth(key: string | null) {
  "use server";
  return key === process.env.EDIT_KEY;
}
