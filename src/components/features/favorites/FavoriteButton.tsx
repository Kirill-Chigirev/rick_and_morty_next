"use client";

import type { AppDispatch, RootState } from "@/lib/store";
import { toggleFavorite } from "@/lib/store/favoriteSlice";
import { HeartIcon } from "@phosphor-icons/react";
import { useDispatch, useSelector } from "react-redux";

export default function FavoriteButton({ characterId }: { characterId: number }) {
  const dispatch: AppDispatch = useDispatch();
  const isFavorite = useSelector((state: RootState) => state.favorites.items.includes(characterId));

  const onClick = () => {
    dispatch(toggleFavorite(characterId));
  };

  return (
    <button className="text-chart-2 border-chart-2 h-8 w-8 rounded border p-1" onClick={onClick}>
      <HeartIcon
        weight={isFavorite ? "fill" : "regular"}
        fill="currentColor"
        className="h-full w-full"
      />
    </button>
  );
}
