import { userSession, authenticate } from '../lib/stacks/auth';

import { CONTRACT_ADDRESS, CONTRACT_NAME } from "../constants/constants";

var thing = false


const authCallback = () => {
    thing = true
}

const begin = (event: MouseEvent): void => {
    event.preventDefault();
    // alert('lets go')
    void authenticate(authCallback)
    // userSession.signUserOut(window.location.origin);
}
const handleSignIn = (event: MouseEvent): void => {
    event.preventDefault();
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
    begin,
    handleSignIn,
    handleSignOut
}