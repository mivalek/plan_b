import AppContainer from "@/components/AppContainer";
import prisma from "@/lib/prisma";
import {
  Difficulty,
  Segment,
  Room,
  TBoulder,
  TSetterShort,
  TSegment,
} from "@/lib/types";
import { daysFromToday } from "@/lib/utils";
import { unstable_cache } from "next/cache";
import { Suspense } from "react";

const getCachedBoulders = unstable_cache(
  async () => prisma.boulder.findMany({ where: { active: true } }),
  ["boulders"],
  { tags: ["boulder-cache"] }
);

const getCachedSegments = unstable_cache(
  async () =>
    prisma.segment.findMany({
      include: { boulders: { select: { id: true } } },
    }),
  ["segments"],
  { tags: ["segment-cache"] }
);

export default async function BoulderApp() {
  const data = await getCachedBoulders();

  const boulderData = data
    .filter((d) => daysFromToday(new Date(d.createdAt)) > 0)
    .map((d) => {
      const out: TBoulder = {
        ...d,
        setter: d.setterId,
        name: d.name || undefined,
        position: { x: d.position[0], y: d.position[1] },
        segment: d.segmentName.toLowerCase() as Segment,
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

  const segmentData: TSegment[] = await getCachedSegments().then((res) =>
    res.map((s) => {
      const segDownDate = s.downDate ? new Date(s.downDate) : undefined;
      const isDown = segDownDate && daysFromToday(segDownDate) <= 0;
      const segment: TSegment = {
        id: s.id,
        name: s.name.toLowerCase() as Segment,
        room: s.room.toLowerCase() as Room,
        boulders: s.boulders.flatMap((b) => b.id),
        upDate: s.upDate && !isDown ? s.upDate : undefined,
        downDate: segDownDate && !isDown ? segDownDate : undefined,
      };
      return segment as TSegment;
    })
  );

  return (
    <Suspense>
      <AppContainer
        boulderData={boulderData}
        setters={setterData}
        segments={segmentData}
      />
    </Suspense>
  );
}
