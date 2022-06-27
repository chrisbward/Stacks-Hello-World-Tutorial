import { IAppState } from "./AppState"

interface IStateSettable<T> {
    set : (key: string, value: T) => void
}
interface IStateStore<T> extends IStateSettable<T> { 
    get : (key: string) => T
    set : IStateSettable<T>
    validate: () => void
    saveStore: (adaptor: IDataStoreAdaptor) => void 
}

const storageEngineAdaptor = "";


const AppStateStore = ():IStateStore<IAppState> => {
 
    const getFromStore = (key: string): IAppState => {
        return {
            isAuthenticating: false
        }
    }

    const setInStore: IStateSettable<IAppState> = {
        set: (string: key, value:IAppState ) => {

        }
    }
    
    const saveStore = (adaptor: IDataStoreAdaptor) => {

    }
 
    return { 
        get : getFromStore,
        set : setInStore,
        validate : () => {},
        saveStore: saveStore
    } 
}
export default AppStateStore 

export type {
    IAppState,
    IStateStore
}