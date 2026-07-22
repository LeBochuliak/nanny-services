import { db } from "@/lib/firebase";
import { get, ref, set, remove } from "firebase/database";
import type { FavoriteNanny } from "@/types/types"

export async function getProfile(uid: string) {
  const snapshot = await get(ref(db, `users/${uid}`));;

  if (!snapshot.exists()) {
    return [];
  }

  const profile = snapshot.val();
  
  return {
    ...profile,
    favorites: Object.values(profile.favorites ?? {}),
  };
}


export async function addToFavorites(
  userId: string,
  nanny: FavoriteNanny

) {
  await set(
    ref(db, `users/${userId}/favorites/${nanny.id}`),
    nanny
  );
  
}

export const removeFavorite = async (
  userId: string,
  nannyId: string
) => {
  await remove(
    ref(db, `users/${userId}/favorites/${nannyId}`)
  );
};

export const getFavorites = async (userId: string) => {
  const snapshot = await get(
    ref(db, `users/${userId}/favorites`)
  );

  const profile = snapshot.val();

  if (snapshot.exists()) {
    return Object.values(profile.favorites ?? {});
  }

  
  return [];
};