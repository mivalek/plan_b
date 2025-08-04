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
import { Suspense } from "react";

export default async function BoulderApp() {
  const data = await prisma.boulder.findMany({
    where: { active: true },
    include: { segment: { select: { downDate: true } } },
  });

  const boulderData = data
    .filter((d) => {
      const segDownDate = d.segment.downDate
        ? new Date(d.segment.downDate)
        : undefined;
      const boulderCreatedDate = new Date(d.createdAt);
      let isActive = segDownDate !== undefined;
      if (segDownDate) {
        const diffInDays =
          (segDownDate.valueOf() - boulderCreatedDate.valueOf()) /
          (1000 * 60 * 60 * 24);
        isActive = diffInDays > 0;
      }
      return isActive;
    })
    .map((d) => {
      const out: TBoulder = {
        id: d.id,
        setter: d.setterId,
        name: d.name || undefined,
        position: { x: d.position[0], y: d.position[1] },
        segment: d.segmentName.toLowerCase() as Segment,
        difficulty: d.difficulty as Difficulty,
        holdColors: d.holdColors,
        tags: d.tags,
      };
      return out;
    });

  const setterData: TSetterShort[] = await prisma.setter.findMany({
    select: {
      id: true,
      name: true,
    },
  });

  const segmentData: TSegment[] = await prisma.segment
    .findMany({
      include: { boulders: { select: { id: true } } },
    })
    .then((res) =>
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
