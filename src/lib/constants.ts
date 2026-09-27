export const ROUTES = {
  HOME: '/',
  FAVORITES: '/favorites',
  CHARACTER: (id: number) => `/character/${id}`
} as const;

export const STATUS = [
  { label: 'Select a status', value: null },
  { label: 'Alive', value: 'alive' },
  { label: 'Dead', value: 'dead' },
  { label: 'Unknown', value: 'unknown' }
] as const;