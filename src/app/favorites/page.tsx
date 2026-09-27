"use client";

import dynamic from "next/dynamic";

const FavoritesWrapper = dynamic(() => import("@/components/features/favorites/FavoritesWrapper"), {
  ssr: false,
});
export default function FavoritePage() {
  return (
    <div className="py-10">
      <FavoritesWrapper />
    </div>
  );
}
