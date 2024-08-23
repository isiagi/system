/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

const useSection = create((set) => ({
  section: false,
  setSection: () => set({ section: true }),
  resetSection: () => set({ section: false }),
}));

export default useSection;
