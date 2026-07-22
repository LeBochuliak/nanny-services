import { create } from 'zustand';
import type { Profile} from "@/types/types"

type UserProfileState = {
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
  updateProfile: (updates: Partial<Profile>) => void;
};

export const useUserProfile = create<UserProfileState>()(set => ({
  profile: null,

  setProfile: profile => set({ profile }),
  
  updateProfile: updates =>
  set(state => ({
    profile: state.profile
      ? { ...state.profile, ...updates }
      : null,
  })),

}));