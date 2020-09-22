import { useRouter } from 'next/router'
import Link from "next/link";
import Header from "components/admin/header";
import kpiHelper from "kpi_helper"
import {ADMIN_DAHSBOARD, FORGET_PASSWORD} from "config/const_url"



function Login() {
  const router = useRouter()


  // Test adding new var to kpiStore
  // @adi will delete this later
  kpiHelper.addNewStore({
    login:{
      name: 'Caitlyn',
      status: 'logged-in',
      data: {
        hobby: 'hrt',
        level: 37,
        gameData: {
          wings: true,
          wood: 456,
          stone: 890
        }
      }
    }
  });


  const handleLogin = (e) => {
    e.preventDefault()
    // Do login process here with backend
    
    // Change authStatus
    kpiHelper.setLogin()
  
    // Redirect to dashboard
      router.push({pathname: ADMIN_DAHSBOARD})
  }

  return (
  <>
    <Header />
    <div className="hold-transition login-page">
      <div className="login-box">
        <div className="card border-none">
          <div className="card-body login-card-body">
            <div className="login-logo">
              <a href="../../index2.html">
                <b>Lerero</b> Learning
              </a>
            </div>
            <p className="login-box-msg">Login Application</p>
            <form action="../../index3.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-user"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 input-group mb-4">
                  <Link href={FORGET_PASSWORD}>
                    <a className="text-right container-fluid">
                      I forgot my password
                    </a>
                  </Link>
                </div>
                <div className="col-12">
                    <button 
                      type="button" 
                      className="btn btn-primary btn-block" 
                      onClick={handleLogin}
                      >
                      Login
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
  )
};

export default Login;
