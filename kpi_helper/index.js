import store from "store";
class kpiHelper {
    static globalStore = {
        loginInfo: {
            user: {
              company_id: 0
            },
            password: '',
            accessToken: '',
            refreshToken:''
        },
        isAuth: false
    };

    static getGlobalStore() {
        let kpi = store.get('kpi');
        if(kpi) {
            return kpi;
        } else {
            return {};
        }
    }

    static addNewStoreData = (data) => {
        let kpi = store.get('kpi');
        let newKpi = {}
        if(kpi) {
            newKpi = {
                ...kpi,
                ...data
            }
            store.set('kpi', newKpi);
        }
        return newKpi;
    }

    // Data contains access_token and refresh_token
    static setLogin = (data) => {
        this.globalStore.isAuth = true;
        this.globalStore.loginInfo.accessToken = data.access_token;
        this.globalStore.loginInfo.refreshToken = data.refresh_token;
        this.globalStore.loginInfo.user = data.user;
        store.set('kpi', this.globalStore);
    }

  static unsetLogin = () => {
    let kpi = store.get("kpi");
    if (kpi) {
      kpi.isAuth = false;
      store.set("kpi", kpi);
      return true;
    } else {
      return false;
    }
  };

  static getLoginStatus = () => {
    let kpi = store.get("kpi");
    if (kpi) {
      return kpi.isAuth;
    } else {
      return false;
    }
  };
}

export default kpiHelper;

/**
* Helper for API
*
* fetchType = GET, POST, DELETE, UPDATE, PUT etc
*
* const_api_url, please take a look at the api list from config/const_api_url.js
*
* objData. Example {username:'', password:''}
*
* putAuthToken means to put Authorization token in fetch header
*/
export async function kpiFetch(fetchType, const_api_url, objData = {}, putAuthToken = true) {
    let header = {
        'Content-Type': 'application/json'
    };
    if (putAuthToken) {
        let kpi = store.get('kpi');
        if (kpi && kpi.loginInfo.accessToken) {
            header = {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer '+ kpi.loginInfo.accessToken
            };
        }
    }
    let resp = []
    if (fetchType.toUpperCase() === 'GET' || fetchType.toUpperCase() === 'DELETE') {
      resp = await fetch(process.env.NEXT_PUBLIC_API_URL+const_api_url,
        {
          method: fetchType,
          headers: header
        });
    } else {
      resp = await fetch(process.env.NEXT_PUBLIC_API_URL+const_api_url,
        {
          method: fetchType,
          headers: header,
          body: JSON.stringify(objData)
        });
    }
    
    
    return await resp.json()
}


export async function kpiFetchFile(fetchType, const_api_url, objData = {}, putAuthToken = true) {
  let header = {
      //"Content-Disposition": form-data; name="file"; filename="sample-import-user.csv"
      'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW'
  };
  if (putAuthToken) {
      let kpi = store.get('kpi');
      if (kpi && kpi.loginInfo.accessToken) {
          header = {
              //'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW',
              'Authorization': 'Bearer '+ kpi.loginInfo.accessToken
          };
      }
  }
  let resp = await fetch(process.env.NEXT_PUBLIC_API_URL+const_api_url,
    {
      method: fetchType,
      headers: header,
      body: objData
    });
  return await resp.json()
}