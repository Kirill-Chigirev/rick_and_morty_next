import { Character } from '@/lib/types/character';
import CharacterCard from './CharacterCard';

interface CharacterListProps {
  characters: Character[];
}

export default function CharacterList({ characters }: CharacterListProps) {
  const data = Array.isArray(characters) ? characters : [characters];


  return (
    <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
      {data.map((character) => (
        <CharacterCard
          key={character.id}
          character={character}
        />
      ))}
    </div>
  );
}