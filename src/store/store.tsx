import { create } from "zustand";

const useStore = create((set) => ({
  token: 0,
  setToken: (value) => set(value),
}));

export default useStore;
