"use client";

import { getFavoriteNannies } from "@/services/nannies";
import { useEffect, useState, useRef } from "react";
import { useUserProfile } from "@/stores/profileStore";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import type { Nanny } from "@/types/types";

const Favorites = () => {
  const { profile } = useUserProfile();
  const [favoriteNannies, setFavoriteNannies] = useState<Nanny[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [lastId, setLastId] = useState(3);

  const loaded = useRef(false);

  useEffect(() => {
    if (!profile || loaded.current) return;

    loaded.current = true;

    const loadFavoriteNannies = async () => {
      const favoriteNannies = await getFavoriteNannies(profile.favorites, 0, 3);
      setFavoriteNannies(favoriteNannies.nannies);
      setHasMore(favoriteNannies.hasMore);
      setLastId(3);
    };
    loadFavoriteNannies();
  }, [profile]);

  const loadMore = async () => {
    if (!profile) return;
    const start = lastId;
    const end = lastId + 3;

    const nextFavoriteNannies = await getFavoriteNannies(
      profile.favorites,
      start,
      end,
    );
    setFavoriteNannies((prev) => [...prev, ...nextFavoriteNannies.nannies]);
    setLastId(end);
    setHasMore(nextFavoriteNannies.hasMore);
  };

  return (
    <div className="container">
      {favoriteNannies.map((nanny) => (
        <Card
          key={nanny.id}
          nanny={nanny}
          onRemoveFavorite={(id) => {
            setFavoriteNannies((prev) => prev.filter((n) => n.id !== id));
          }}
        />
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
