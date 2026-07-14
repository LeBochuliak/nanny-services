import { db } from "@/lib/firebase";
import { get, ref, set, remove } from "firebase/database";

export async function getProfile(uid: string) {
  const snapshot = await get(ref(db, `users/${uid}`));;

  if (!snapshot.exists()) {
    return [];
  }

  return snapshot.val();
}


export async function addToFavorites(
  userId: string,
  nannyId: string
) {
  await set(
    ref(db, `users/${userId}/favorites/${nannyId}`),
    true
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

  if (snapshot.exists()) {
    return Object.keys(snapshot.val());
  }

  return [];
};