import { create } from "zustand";

const store = (set) => ({
  tasks: [{ title: "TestTask", state: "Done" }],
});

export const useStore = create(store);
