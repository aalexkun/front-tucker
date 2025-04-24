type routeName =  'profile' | 'agenda' | 'login' | 'welcome' | 'error';

export interface NavigationRoute  {
  path: routeName,
  menu: boolean,
  linkText: string,
  title: string
};

export const MySugRoutes: Record<routeName, NavigationRoute> = {
  welcome: {path: 'welcome', menu: false, linkText: 'Welcome', title: 'Welcome'},
  error: { path: 'error', menu: true , linkText: 'Error', title: 'Oupsy Daisy'},
  profile:  { path: 'profile', menu: true, linkText: 'Profile', title: 'My Profile' },
  agenda: {path: 'agenda', menu: true, linkText: 'My Sug', title: 'My Sug'},
  login: {path: 'login', menu: false,linkText: 'Login', title: 'Login'}
} as const;


export const getCurrentRouteTitle = (routerUrl: string): string => {

  switch(routerUrl){
    case `/${MySugRoutes.login.path}`: return MySugRoutes.login.title;
    case `/${MySugRoutes.error.path}`: return MySugRoutes.error.title;
    case `/${MySugRoutes.profile.path}`: return MySugRoutes.profile.title;
    case `/${MySugRoutes.agenda.path}`: return MySugRoutes.agenda.title;
    case `/${MySugRoutes.welcome.path}`: return MySugRoutes.welcome.title;
    default: {
      console.error(`getCurrentRouteTitle : unknown route ${routerUrl}`);
      return '';
    }
  }

}
