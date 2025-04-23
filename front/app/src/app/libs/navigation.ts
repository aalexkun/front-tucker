

export interface NavigationRoute  {
  path: 'error' | 'profile',
  menu: boolean,
  i18Text: string,
};

export const MySugRoutes: Record<'error'|'profile', NavigationRoute> = {
  error: { path: 'error', menu: true , i18Text: 'Error'},
  profile:  { path: 'profile', menu: true, i18Text: 'Profile' }
} as const;
