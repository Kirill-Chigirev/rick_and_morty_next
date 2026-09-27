'use client';

import { EpisodesGate } from '@/app/EpisodesGate';
import CharacterList from '@/components/features/character/CharacterList';
import CharactersListSkeleton
  from '@/components/features/character/CharactersListSkeleton';
import useFavorites from '@/lib/hooks/useFavorites';
import { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

export default function FavoritesWrapper() {
  const favorites = useSelector((state: RootState) =>
    state.favorites.items
  );

  const { data, isLoading, error } = useFavorites({ favorites });


  if (favorites.length === 0) return <div>Пусто</div>

  if (isLoading) return <CharactersListSkeleton />

  if (error) return <div>Ошибка: {error.message}</div>

  return (
    <EpisodesGate>
      {data && <CharacterList characters={data}/>}
    </EpisodesGate>
  );
}