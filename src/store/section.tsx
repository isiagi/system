/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

const useSection = create((set) => ({
  section: false,
  subsection: false,
  setSection: () => set({ section: true }),
  resetSection: () => set({ section: false }),
  setSubsection: () => set({ subsection: true }),
  resetSubsection: () => set({ subsection: false }),
}));

export default useSection;
