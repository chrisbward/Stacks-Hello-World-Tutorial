import { userSession, authenticate } from '../lib/stacks/auth';

import { CONTRACT_ADDRESS, CONTRACT_NAME } from "../constants/constants";
import AppStateStore from '../state/AppStateStore';
import LocalStorageDataStoreAdaptor from '../state/adaptors/localstorage_basic/adaptor';
import store from '../state/store';


const handleSignIn = (event: MouseEvent): void => {
    event.preventDefault();
    // alert('lets go')

    void authenticate(() => {
        console.log('setting store')
        store.set("app", {
            isAuthenticating : true
        })
    })
    
    console.log('isAuthenticated', store.get("app").isAuthenticating)
    // userSession.signUserOut(window.location.origin);
} 
const handleSignOut = (event: MouseEvent): void => {
    event.preventDefault();
    userSession.signUserOut(window.location.origin)
}

const postMessage = (): void => {
    // const { username } = userSession.loadUserData()
    // console.log(username)
}

export { 
    handleSignIn,
    handleSignOut
}