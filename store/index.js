class kpiStore {
    static globalStore = {
        login: {
            user: 'kpi@kpi.org',
            password: 'kpi1234'
        }
    };

    static getGlobalStore() {
        return this.globalStore;
    }

    static addNewStore = (e, _storeName, data) => {
        this.globalStore = {
            ...this.globalStore,
            _storeName: {
                ...data
            }
        }
    }
}


export default kpiStore;