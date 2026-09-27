'use client';

import CharactersListSkeleton
  from '@/components/features/character/CharactersListSkeleton';
import { useEpisodesMap } from '@/lib/hooks/useEpisodesMap';

export function EpisodesGate({ children }: { children: React.ReactNode }) {
  const { isLoading, error } = useEpisodesMap();

  if (isLoading) return <CharactersListSkeleton />;

  if (error) return <div>Ошибка: {error.message}</div>;

  return (
    <>
      {children}
    </>
  );
}