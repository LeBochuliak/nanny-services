import { create } from 'zustand';
import type { UserState } from "@/types/types"

export const useUser = create<UserState>()((set) => ({
  user: null,
  loading: true,

  setUser: user => set(() => ({ user })),
  setLoading: loading => set({ loading })
}));