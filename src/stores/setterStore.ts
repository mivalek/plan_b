import { TSetterShort } from "@/lib/types";
import { create } from "zustand";

type SetterState = {
  setters: TSetterShort[];
};

type SetterActions = {
  setSetters: (setters: TSetterShort[]) => void;
};

type SetterStore = SetterState & SetterActions;

export const useSetterStore = create<SetterStore>((set) => ({
  setters: [],
  setSetters: (setters) => set({ setters }),
}));
