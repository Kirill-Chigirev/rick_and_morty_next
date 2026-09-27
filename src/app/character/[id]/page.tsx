import CharacterCard from '@/components/features/character/CharacterCard';
import { getCharacter } from '@/lib/api/rickApi';

export default async function CharacterPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const character = await getCharacter(id);

  return (
    <div className="py-10 grid grid-cols-1 gap-3">
      <CharacterCard character={character} />
    </div>
  );
}