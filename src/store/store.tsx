/* eslint-disable @typescript-eslint/no-explicit-any */
import { create } from "zustand";

const useStore = create((set) => ({
  token: 0,
  setToken: (value: any) => set(value),
}));

export default useStore;
