
import { db } from "@/lib/firebase";
import {
  get,
  query,
  ref,
  orderByChild,
  startAfter,
  limitToFirst,
  limitToLast,
  endBefore,
  QueryConstraint
} from "firebase/database";
import { Nanny, Sort, Cursor } from "@/types/types";


type GetNanniesResponse = {
  items: Nanny[];
  cursor: Cursor | null;
  hasMore: boolean;
};

export async function getNannies(sort: Sort, cursor?: Cursor | null): Promise<GetNanniesResponse> {

  let sortKey: "name" | "rating";

  switch (sort) {
    case "AtoZ":
    case "ZtoA":
      sortKey = "name";
      break;
    case "popular":
    case "notPopular":
      sortKey = "rating"
      break;
    default:
      sortKey = "name";
      
  } 

  let constraints: QueryConstraint[];

  if (sort === "ZtoA" || sort === "popular") {
    constraints = [
      orderByChild(sortKey),
      limitToLast(4),
    ];
    if (cursor) {
      constraints.splice(1, 0, endBefore(cursor.value, cursor.key));
    }
  } else {
    constraints = [
      orderByChild(sortKey),
      limitToFirst(4),
    ];
    if (cursor) {
      constraints.splice(1, 0, startAfter(cursor.value, cursor.key));
    }
  }

  const q = query(ref(db, "nannies"), ...constraints);

  const snapshot = await get(q);

  if (!snapshot.exists()) {
    return {
      items: [],
      cursor: null,
      hasMore: false,
    };
  }

  const items: Nanny[] = [];

  snapshot.forEach(child => {
    items.push({
      id: child.key!,
      ...child.val(),
    });
  });

  const hasMore = items.length > 3;
  
  if (hasMore) {
    if (sort === "ZtoA" || sort === "popular") {
      items.shift();
    } else {
      items.pop();
    }
  }

  const cursorItem =
    sort === "ZtoA" || sort === "popular"
      ? items[0]
      : items[items.length - 1];

  cursor = cursorItem
      ? {
        value: cursorItem[sortKey],
        key: cursorItem.id,
      }
      : null;

  if (sort === "ZtoA" || sort === "popular") {
    items.reverse();
  }

  return {
    items,
    cursor,
    hasMore,
  };
}

