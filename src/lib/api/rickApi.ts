import { CharactersResponse, Character, Episode, EpisodesResponse } from "@/lib/types/character";

const API_BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacters(
  name = "",
  status = "",
  page = "",
): Promise<CharactersResponse> {
  const url = new URL(`${API_BASE_URL}/character`);

  if (name) url.searchParams.set("name", name);
  if (status) url.searchParams.set("status", status);
  if (page) url.searchParams.set("page", page);

  const res = await fetch(url.toString());

  if (res.status === 404) {
    return {
      info: { count: 0, pages: 0, next: null, prev: null },
      results: [],
    };
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  return await res.json();
}

export async function getCharacter(id: string): Promise<Character> {
  const url = `${API_BASE_URL}/character/${id}`;

  const res = await fetch(url);

  if (res.status === 404) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  return await res.json();
}

export async function getFavorites(favorites: number[]): Promise<Character[]> {
  const url = `${API_BASE_URL}/character/${favorites}`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  const data: Character | Character[] = await res.json();

  return Array.isArray(data) ? data : [data];
}

export async function getEpisodes(): Promise<Episode[]> {
  const url = `${API_BASE_URL}/episode`;

  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.status}`);
  }

  const data: EpisodesResponse = await res.json();

  const count = data.info.count;

  const array = [...Array(count)].map((_, i) => i + 1);

  const episodesRes = await fetch(`${url}/${array.join(",")}`);

  if (!episodesRes.ok) {
    throw new Error(`Failed to fetch: ${episodesRes.status}`);
  }

  return await episodesRes.json();
}
