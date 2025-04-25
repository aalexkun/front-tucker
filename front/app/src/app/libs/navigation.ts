import {Route} from '@angular/router';

type routeName = 'profile' | 'agenda'  | 'register' | 'notification';

export interface NavigationRoute extends Route  {
  icon: string,
  linkText: string,
  title: string
}

export const defaultRoute: routeName = 'agenda';

export const navigationRoute : Record<routeName, NavigationRoute> = {
  agenda: {
    path: 'agenda',
    linkText: 'Classes',
    title: 'Classes',
    icon: 'icons/calendar.svg',
  },
  register: {
    path: 'register',
    linkText: 'Registration',
    title: 'Registration',
    icon: 'icons/record.svg',
  },
  notification: {
    path: 'notification',
    linkText: 'Notification',
    title: 'Notification',
    icon: 'icons/alert.svg',
  },
  profile:  {
    path: 'profile',
    linkText: 'Profile',
    title: 'Profile' ,
    icon: 'icons/profile.svg',
  }
} as const;


export const getCurrentRouteTitle = (routerUrl: string): string => {

  switch(routerUrl){

    case `/${navigationRoute.profile.path}`: return navigationRoute.profile.title;
    case `/${navigationRoute.agenda.path}`: return navigationRoute.agenda.title;
    case `/${navigationRoute.register.path}`: return navigationRoute.register.title;
    case `/${navigationRoute.notification.path}`: return navigationRoute.notification.title;
    default: {
      console.error(`getCurrentRouteTitle : unknown route ${routerUrl}`);
      return '';
    }
  }

}
