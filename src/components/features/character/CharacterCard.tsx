"use client";

import { FavoriteButton } from "@/components/features/favorites";
import { useEpisodesMap } from "@/lib/hooks/useEpisodesMap";
import { Character } from "@/lib/types/character";

import Image from "next/image";
import Link from "next/link";

type CharacterCardProps = {
  character: Character;
};

export default function CharacterCard({ character }: CharacterCardProps) {
  const { data } = useEpisodesMap();
  const firstEpisode = character.episode[0] ? character.episode[0].split("/").pop() : undefined;
  const episodeName = data ? data.get(Number(firstEpisode)) : "unknown";

  return (
    <article className="bg-card flex min-h-55 overflow-hidden rounded-lg shadow-md">
      <div className="relative aspect-square">
        <Image
          src={character.image}
          alt="lolo"
          fill
          sizes="(max-width: 640px) 40vw, 20vw"
          loading="eager"
          className="object-cover"
        />
      </div>
      <div className="flex grow justify-between gap-2 p-3">
        <div className="flex flex-col justify-between gap-2">
          <div>
            <Link href={`/character/${character.id}`}>
              <h2 className="text-2xl font-semibold">{character.name}</h2>
            </Link>
            <span className="flex items-center">
              <span className="mr-1.5 h-2 w-2 rounded-full bg-red-600"></span>
              {character.status} - {character.species}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground text-sm">Last known location: </span>
            <span>{character.location.name}</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-muted-foreground text-sm">First seen in: </span>
            <span>{episodeName}</span>
          </div>
        </div>
        <FavoriteButton characterId={character.id} />
      </div>
    </article>
  );
}
