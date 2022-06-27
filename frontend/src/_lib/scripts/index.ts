import * as constants from './constants/constants'
import styles from "../styles/styles.css"
import * as EventHandlers from './event-handlers/event-handlers'
import { userSession } from './lib/stacks/auth';
import store from './state/store';
import { IStateStore } from './state/AppStateStore';


enum Selectors {
    "button_signout" = "button_signout",
    "button_signin" = "button_signin" 
}
 
const attachEventHandlers = (): void =>{ 
    document.getElementById(Selectors.button_signout)?.addEventListener('click', EventHandlers.handleSignOut)
    document.getElementById(Selectors.button_getstarted)?.addEventListener('click', EventHandlers.handleSignIn)
}

const doRender = (): void => {
    void attachEventHandlers()
}

const subscribeToState = (store: IStateStore<any>): void => {

    // some work needs to be done here to emulate React's useEffect hooks
    // I'm currently writing a dispatcher from the store 

    // old example code;
    // if (userSession.isSignInPending()) {
    //     userSession.handlePendingSignIn().then(userData => {
    //         alert('user has signed in')
    //     //   window.history.replaceState({}, document.title, '/');
    //     //   this.setState({ userData: userData });
    //     });
    // } else if (userSession.isUserSignedIn()) {
    //     alert('user was already signed in')
    //     // this.setState({ userData: userSession.loadUserData() });
    // }
}

const start = (init: any) => {
    subscribeToState(store)
    doRender()
}

start({}) // Let's goooooo