import { create } from 'zustand';
import type { Profile } from "@/types/types"

type UserProfileState = {
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
};

export const useUserProfile = create<UserProfileState>()(set => ({
  profile: null,

  setProfile: profile => set({ profile }),
}));