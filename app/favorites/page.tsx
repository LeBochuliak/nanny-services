"use client";

import { getFavoriteNannies } from "@/services/nannies";
import { useEffect, useState, useRef, useMemo } from "react";
import { useUserProfile } from "@/stores/profileStore";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import type { Nanny } from "@/types/types";

const Favorites = () => {
  const { profile } = useUserProfile();
  const [favoriteNannies, setFavoriteNannies] = useState<Nanny[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [lastIndex, setLastIndex] = useState(3);

  const favoritesIds = useMemo(() => {
    const sorted = [...(profile?.favorites ?? [])].sort((a, b) =>
      a.name.localeCompare(b.name),
    );
    return sorted.map((favorite) => favorite.id) ?? [];
  }, [profile?.favorites]);

  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;

    loaded.current = true;

    const loadFavoriteNannies = async () => {
      const favoriteNannies = await getFavoriteNannies(favoritesIds, 0, 3);
      setFavoriteNannies(favoriteNannies.nannies);
      setHasMore(favoriteNannies.hasMore);
      setLastIndex(3);
    };
    loadFavoriteNannies();
  }, [favoritesIds]);

  const loadMore = async () => {
    if (!profile) return;
    const start = lastIndex;
    const end = lastIndex + 3;

    const nextFavoriteNannies = await getFavoriteNannies(
      favoritesIds,
      start,
      end,
    );
    setFavoriteNannies((prev) => [...prev, ...nextFavoriteNannies.nannies]);
    setLastIndex(end);
    setHasMore(nextFavoriteNannies.hasMore);
  };

  return (
    <div className="container">
      {favoriteNannies.map((nanny) => (
        <Card key={nanny.id} nanny={nanny} />
      ))}
      {hasMore && (
        <Button styleName="load" type="button" onClick={loadMore}>
          Load more
        </Button>
      )}
    </div>
  );
};

export default Favorites;
