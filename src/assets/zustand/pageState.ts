import { create } from 'zustand'

interface IPageState {
  page: number;
  setPage: (value: number) => void;
}

export const usePage = create<IPageState>((set) => ({
  page: 1,
  setPage: (value) => set({ page: value }),
}))
