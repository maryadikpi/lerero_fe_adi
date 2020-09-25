import store from 'store';
class kpiHelper {
    static globalStore = {
        loginInfo: {
            user: 'kpi@kpi.org',
            password: 'kpi1234',
            accessToken: '',
            refreshToken:''
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

    // Data contains access_token and refresh_token
    static setLogin = (data) => {
        this.globalStore.isAuth = true;
        this.globalStore.loginInfo.accessToken = data.access_token;
        this.globalStore.loginInfo.refreshToken = data.refresh_token;
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

// Helper for API
export async function kpiFetch(fetchType, const_api_url, objData, putAuthToken = false) {
    let header = {};
    if (putAuthToken) {
        header = {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+ ' tokenhere'
        };
    } else {
        header = {
            'Content-Type': 'application/json'
        };
    }
    const resp = await fetch(process.env.NEXT_PUBLIC_API_URL+const_api_url,
    {
      method: fetchType,
      headers: header,
      body: JSON.stringify(objData)
    });
    
    return await resp.json()
}