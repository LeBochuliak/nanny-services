
import { db } from "@/lib/firebase";
import { get, ref } from "firebase/database";
import { Nanny } from "@/types/types";

export async function getNannies() {
  const snapshot = await get(ref(db));

  if (!snapshot.exists()) {
    return [];
  }

  const data = snapshot.val();

  return Object.entries(data).map(([id, nanny]) => ({
    id,
    ...(nanny as Omit<Nanny, "id">),
  }));
}
