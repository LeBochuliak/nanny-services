import { db } from "@/lib/firebase";
import { get, ref } from "firebase/database";

export async function getProfile(uid: string) {
  const snapshot = await get(ref(db, `users/${uid}`));;

  if (!snapshot.exists()) {
    return [];
  }

  return snapshot.val();
}