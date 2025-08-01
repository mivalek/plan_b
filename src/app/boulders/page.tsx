import AppContainer from "@/components/AppContainer";
import prisma from "@/lib/prisma";
import {
  Difficulty,
  Location,
  Room,
  TBoulder,
  TSetterShort,
} from "@/lib/types";
import { unstable_cache } from "next/cache";

const getCachedBoulders = unstable_cache(
  async () => prisma.boulder.findMany(),
  ["boulders"],
  { tags: ["boulder-cache"] }
);
export default async function BoulderApp() {
  const data = await getCachedBoulders();

  const boulderData = data.map((d) => {
    const out: TBoulder = {
      ...d,
      setter: d.setterId,
      name: d.name || undefined,
      position: { x: d.position[0], y: d.position[1] },
      room: d.room as Room,
      location: d.location as Location,
      difficulty: d.difficulty as Difficulty,
    };
    return out;
  });

  const setterData: TSetterShort[] = await prisma.setter.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  return <AppContainer boulderData={boulderData} setters={setterData} />;
}
