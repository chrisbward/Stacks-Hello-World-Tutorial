import * as constants from './constants/constants'
import styles from "../styles/styles.css"
import * as EventHandlers from './event-handlers/event-handlers'
import { userSession } from './lib/stacks/auth';


enum Selectors {
    "button_signin" = "button_signin",
    "button_signout" = "button_signout",
    "button_getstarted" = "button_getstarted" 
}
 
const addEventHandlers = (): void =>{
    document.getElementById(Selectors.button_signin)?.addEventListener('click', EventHandlers.handleSignIn)
    document.getElementById(Selectors.button_signout)?.addEventListener('click', EventHandlers.handleSignOut)
}

const doRoutine = () => { 

    void addEventHandlers()

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

    document.getElementById(Selectors.button_getstarted)?.addEventListener('click', EventHandlers.begin)

}

doRoutine()

export default doRoutine
