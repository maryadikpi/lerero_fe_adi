import store from 'store';
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
        store.set('kpi', this.globalStore);
    }

    static unsetLogin = () => {
        let kpi = store.get('kpi');
        if(kpi) {
            kpi.isAuth = false;
            store.set('kpi', kpi);
            return true;
        } else {
            return false;
        }
    }

    static getLoginStatus = () => {
        let kpi = store.get('kpi');
        if(kpi) {
            return kpi.isAuth;
        } else {
            return false;
        }
        
    }
}


export default kpiHelper;