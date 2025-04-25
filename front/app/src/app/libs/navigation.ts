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
  notification: {
    path: 'notification',
    linkText: 'Notification',
    title: 'My notifications',
    icon: 'icons/alert.svg',
  },
  profile:  {
    path: 'profile',
    linkText: 'Profile',
    title: 'My Profile' ,
    icon: 'icons/profile.svg',
  }
} as const;
