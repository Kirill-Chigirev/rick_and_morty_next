import { getEpisodes } from '@/lib/api/rickApi';
import { useQuery } from '@tanstack/react-query';

export function useEpisodesMap() {
  return useQuery({
    queryKey: ['episodes'],
    queryFn: getEpisodes,
    select: (episodes) => {
      const map = new Map<number, string>();
      episodes.forEach((e) => map.set(e.id, e.name));
      return map;
    },
    staleTime: Infinity
  });
}