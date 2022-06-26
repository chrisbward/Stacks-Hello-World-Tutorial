import { AppConfig, UserSession } from '@stacks/auth';
import { showConnect } from '@stacks/connect';
import { Person } from '@stacks/profile';

const appConfig = new AppConfig(['store_write']);

export const userSession = new UserSession({ appConfig });

export const authenticate = ():void => {
  showConnect({
    appDetails: {
      name: 'Hello World',
      icon: window.location.origin + '/logo.svg',
    },
    redirectTo: '/',
    onFinish: () => {
      window.location.reload();
    },
    userSession,
  });
}

export function getUserData() {
  return userSession.loadUserData();
}

export function getPerson() {
  return new Person(getUserData().profile);
}
