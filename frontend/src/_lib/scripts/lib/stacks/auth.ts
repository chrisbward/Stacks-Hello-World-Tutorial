import { AppConfig, UserSession } from '@stacks/auth';
import { showConnect } from '@stacks/connect';
import { Person } from '@stacks/profile';
import { getUsername } from '../../api/stacksApi';

const appConfig = new AppConfig(['store_write']);

export const userSession = new UserSession({ appConfig });

export const authenticate = (authCallback: Function): void => {
  showConnect({
    appDetails: {
      name: 'Hello World',
      icon: window.location.origin + '/logo.svg',
    },
    redirectTo: '/',
    onFinish: async () => {
      // Workaround for https://github.com/hirosystems/stacks.js/issues/1144
      const userData = userSession.loadUserData();
      const username = await getUsername(userData.profile.stxAddress.mainnet);
      userData.username = username;
      let sessionData = userSession.store.getSessionData();
      sessionData.userData = userData;
      userSession.store.setSessionData(sessionData);
      console.log('authed details', userData, sessionData)
      authCallback()
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
