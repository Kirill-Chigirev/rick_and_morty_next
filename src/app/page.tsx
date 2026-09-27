import { EpisodesGate } from "@/app/EpisodesGate";
import { CharacterList } from "@/components/features/character";
import { CharacterPagination } from "@/components/features/character";
import SearchBar from "@/components/features/search/SearchBar";
import { getCharacters } from "@/lib/api/rickApi";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ name?: string; status?: string; page?: string }>;
}) {
  const { name, status, page } = await searchParams;
  const data = await getCharacters(name, status, page);

  return (
    <div className="flex flex-col gap-8 py-10">
      <SearchBar />
      <EpisodesGate>
        <CharacterList characters={data.results} />
      </EpisodesGate>
      {data.info.pages > 1 && <CharacterPagination info={data.info} />}
    </div>
  );
}
