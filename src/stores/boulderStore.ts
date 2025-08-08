import { TBoulder, TPosition } from "@/lib/types";
import { create } from "zustand";

type BoulderState = {
  boulders: TBoulder[];
  editedBoulder: TBoulder | undefined;
  draggedBoulder: TBoulder | undefined;
  isNewBoulder: boolean;
};

type BoulderActions = {
  setBoulders: (boulders: TBoulder[]) => void;
  upsertEdited: () => TBoulder[];
};

type BoulderStore = BoulderState & BoulderActions;

export const useBoulderStore = create<BoulderStore>((set, get) => ({
  boulders: [],
  editedBoulder: undefined,
  draggedBoulder: undefined,
  isNewBoulder: false,
  setBoulders: (boulders: TBoulder[]) => set({ boulders }),
  upsertEdited: () => {
    const boulders = get().boulders;
    const editedBoulder = get().editedBoulder;
    if (!editedBoulder) return boulders;
    return boulders
      .filter((b) => b.id !== editedBoulder?.id)
      .concat(editedBoulder);
  },
}));

export function updateBoulderPosition(id: string, position: TPosition) {
  useBoulderStore.setState((state) => {
    const idx = state.boulders.findIndex((b) => b.id === id);
    state.boulders[idx].position = position;
    return state;
  });
}

export function upsertBoulder(boulder: TBoulder) {
  useBoulderStore.setState((state) => {
    const idx = state.boulders.findIndex((b) => b.id === boulder.id);
    if (idx === -1) {
      state.boulders.push(boulder);
    } else {
      state.boulders[idx] = boulder;
    }
    return state;
  });
}

export function setEditedBoulder(editedBoulder: TBoulder | undefined) {
  useBoulderStore.setState({ editedBoulder });
}
export function setDraggedBoulder(draggedBoulder: TBoulder | undefined) {
  useBoulderStore.setState({ draggedBoulder });
}
export function setIsNewBoulder(isNewBoulder: boolean) {
  useBoulderStore.setState({ isNewBoulder });
}
