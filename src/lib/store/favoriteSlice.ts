import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

interface FavoriteState {
  items: number[];
}

const loadFavorites = (): number[] => {
  if (typeof window === 'undefined') return [];
  const stored = localStorage.getItem('favorites');
  return stored ? JSON.parse(stored) : [];
};

const saveFavorites = (items: number[]) => {
  if (typeof window === 'undefined') return;
  localStorage.setItem('favorites', JSON.stringify(items));
};

const initialState: FavoriteState = {
  items: loadFavorites()
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<number>) {
      const index = state.items.indexOf(action.payload);
      if (index === -1) {
        state.items.push(action.payload);
      } else {
        state.items.splice(index, 1);
      }

      saveFavorites(state.items)
    }
  }
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;