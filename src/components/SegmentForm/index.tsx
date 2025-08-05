import React, { Dispatch, SetStateAction, useState } from "react";
import Button from "../ui/Button";
import { createSetter, dbUpdateSegmentDates } from "@/app/actions";
import { TSegment } from "@/lib/types";

function SegmentForm({
  segment,
  setSegments,
  setEditedSegment,
  setIsDialogOpen,
}: {
  segment: TSegment | undefined;
  setSegments: Dispatch<SetStateAction<TSegment[]>>;
  setEditedSegment: Dispatch<SetStateAction<TSegment | undefined>>;
  setIsDialogOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const now = new Date();
  const maxDate = new Date(now.getFullYear(), now.getMonth() + 3, 0);
  async function handleSubmit(formData: FormData) {
    const outDate = formData.get("outDate") as string;
    if (!outDate) {
      setErrorMsg("Please set a date");
      return;
    }
    await dbUpdateSegmentDates(
      segment!.name,
      new Date(outDate),
      segment!.upDate ? undefined : new Date()
    );
    setSegments((prev) => {
      const next = [...prev];
      const idx = next.findIndex((p) => p.id === segment?.id);
      next[idx].downDate = new Date(outDate);
      return next;
    });
    setEditedSegment(undefined);
    setIsDialogOpen(false);
  }
  const [errorMsg, setErrorMsg] = useState<string>();
  return (
    <div>
      <form action={handleSubmit} className="flex flex-col gap-4 px-4 py-6">
        <label htmlFor="setter-name" className="">
          Next reset date
        </label>
        <input
          type="date"
          name="outDate"
          id="segment-outDate"
          defaultValue={
            segment?.downDate && segment?.downDate.toISOString().slice(0, 10)
          }
          min={now.toISOString().slice(0, 10)}
          max={maxDate.toISOString().slice(0, 10)}
          className="bg-slate-200 rounded-sm p-1 w-full "
        />

        <div className="flex justify-around gap-4">
          <Button
            type="reset"
            onClick={() => setIsDialogOpen(false)}
            className="bg-gray-500"
          >
            Cancel
          </Button>
          <Button type="submit">Done</Button>
        </div>
        {errorMsg && (
          <div className="error-msg w-full text-center text-sm text-red-800">
            {errorMsg}
          </div>
        )}
      </form>
    </div>
  );
}

export default SegmentForm;
