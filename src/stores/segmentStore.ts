import { TSegment } from "@/lib/types";
import { create } from "zustand";

type SegmentState = {
  segments: TSegment[];
  editedSegment: TSegment | undefined;
};

type SegmentActions = {
  setSegments: (segments: TSegment[]) => void;
};

type SegmentStore = SegmentState & SegmentActions;

export const useSegmentStore = create<SegmentStore>((set) => ({
  segments: [],
  editedSegment: undefined,
  setSegments: (segments) => set({ segments }),
}));

export function updateSegmentDownDate(id: number, downDate: Date) {
  useSegmentStore.setState((state) => {
    const idx = state.segments.findIndex((seg) => seg.id === id);
    state.segments[idx].downDate = downDate;
    return state;
  });
}

export function setEditedSegment(editedSegment: TSegment | undefined) {
  useSegmentStore.setState({ editedSegment });
}
