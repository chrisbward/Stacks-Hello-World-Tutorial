interface IDataStoreAdaptor {
    save: () => void
}

const LocalStorageDataStoreAdaptor = (): IDataStoreAdaptor => {
    return {
        save: () => {
            /* localstorage implementation here */
        }
    }
}

export default LocalStorageDataStoreAdaptor