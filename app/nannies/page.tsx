"use client";

import Card from "@/components/Card/Card";
import Filter from "@/components/Filter/Filter";
import "../globals.css";
import { getNannies } from "@/services/nannies";
import { useEffect, useState } from "react";
import type { Sort, Nanny, Cursor } from "@/types/types";
import Button from "@/components/Button/Button";

const Nannies = () => {
  const [sort, setSort] = useState<Sort>("AtoZ");
  const [nannies, setNannies] = useState<Nanny[]>([]);
  const [cursor, setCursor] = useState<Cursor | null>(null);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const load = async () => {
      const result = await getNannies(sort);

      setNannies(result.items);
      setCursor(result.cursor);
      setHasMore(result.hasMore);
    };

    load();
  }, [sort]);

  const loadMore = async () => {
    const result = await getNannies(sort, cursor ?? undefined);

    setNannies((prev) => [...prev, ...result.items]);
    setCursor(result.cursor);
    setHasMore(result.hasMore);
  };

  return (
    <div className="container">
      <Filter value={sort} onChange={setSort} />

      {nannies.map((nanny) => (
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

export default Nannies;
