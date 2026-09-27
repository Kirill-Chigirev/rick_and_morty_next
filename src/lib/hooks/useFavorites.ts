import { getFavorites } from '@/lib/api/rickApi';
import { keepPreviousData, useQuery } from '@tanstack/react-query';

type UseFavoritesParams = {
  favorites: number[]
}

export default function useFavorites({ favorites }: UseFavoritesParams) {
  return useQuery({
    queryKey: ['favorites', favorites],
    queryFn: () => getFavorites(favorites),
    placeholderData: keepPreviousData,
    enabled: favorites.length !== 0
  });
}