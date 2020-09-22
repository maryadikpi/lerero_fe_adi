class kpiHelper {
    static globalStore = {
        init: {
            user: 'kpi@kpi.org',
            password: 'kpi1234'
        },
        isAuth: false
    };

    static getGlobalStore() {
        return this.globalStore;
    }

    static addNewStore = (data) => {
        this.globalStore = {
            ...this.globalStore,
            ...data
        }
    }

    static setLogin = () => {
        this.globalStore.isAuth = true;
    }

    static unsetLogin = () => {
        this.globalStore.isAuth = false;
    }

    static getLoginStatus = () => {
        return this.globalStore.isAuth;
    }
}


export default kpiHelper;