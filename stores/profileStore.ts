import { create } from 'zustand';
import type { Profile, FavoriteNanny} from "@/types/types"

type UserProfileState = {
  profile: Profile | null;
  setProfile: (profile: Profile | null) => void;
  setFavorites: (favorites: FavoriteNanny[]) => void;
};

export const useUserProfile = create<UserProfileState>()(set => ({
  profile: null,

  setProfile: profile => set({ profile }),

  setFavorites: favorites =>
    set(state => ({
      profile: state.profile
        ? { ...state.profile, favorites }
        : null,
    })),
}));