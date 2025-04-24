import {Route} from '@angular/router';

type routeName = 'profile' | 'agenda'  | 'register' | 'notification';

export interface NavigationRoute extends Route  {
  icon: string,
  linkText: string,
  title: string
}

export const navigationRoute : Record<routeName, NavigationRoute> = {
  agenda: {
    path: 'agenda',
    linkText: 'My Class',
    title: 'My Class',
    icon: 'icons/calendar.svg',
  },
  register: {
    path: 'register',
    linkText: 'Registration',
    title: 'Registration',
    icon: 'icons/record.svg',
  },
  profile:  {
    path: 'profile',
    linkText: 'Profile',
    title: 'My Profile' ,
    icon: 'icons/profile.svg',
  },
  notification: {
    path: 'notification',
    linkText: 'Notification',
    title: 'My notifications',
    icon: 'icons/alert.svg',
  }
} as const;


// export const getCurrentRouteTitle = (routerUrl: string): string => {
//
//   switch(routerUrl){
//     case `/${MySugRoutes.login.path}`: return MySugRoutes.login.title;
//     case `/${MySugRoutes.error.path}`: return MySugRoutes.error.title;
//     case `/${MySugRoutes.profile.path}`: return MySugRoutes.profile.title;
//     case `/${MySugRoutes.agenda.path}`: return MySugRoutes.agenda.title;
//     case `/${MySugRoutes.welcome.path}`: return MySugRoutes.welcome.title;
//     default: {
//       console.error(`getCurrentRouteTitle : unknown route ${routerUrl}`);
//       return '';
//     }
//   }
//
// }
