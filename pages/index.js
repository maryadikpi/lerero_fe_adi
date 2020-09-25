import { useRouter } from 'next/router'
import Link from "next/link"
import {useForm} from "react-hook-form"
import {Alert, Toast} from "react-bootstrap"

//import 'styles/login.css'
import Header from "components/admin/header"
import kpiHelper, {kpiFetch} from "kpi_helper"
import {LOGIN} from 'config/const_api_url'
import {ADMIN_DAHSBOARD, FORGET_PASSWORD} from "config/const_url"



function Login() {
  const router = useRouter()
  var showToast = false;

  // useForm()
  // 1. register -> register input
  // 2. handleSubmit -> extract data from the form
  // 3. errors -> object containing errors
  const { register, handleSubmit, errors } = useForm();

  const alert_style = {
    height: '30px',
    paddingTop: '2px',
    width: '70%'
  }


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


  async function handleLogin (formData) {
    const data = {
      email: formData.username,
      password: formData.password
    };
    const json = await kpiFetch('POST', LOGIN, data);
    if (json.success) {
      // Change authStatus & put token to store
      // Everything will be handled by kpiHelper.setLogin
      kpiHelper.setLogin(json.data)
  
      // Redirect to dashboard
      router.push({pathname: ADMIN_DAHSBOARD})
    } else {
      alert('wrong username or password');
      showToast = true;
    }
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
                  ref={register({required: true})}
                  name="username" 
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
              {
                  errors.username &&
                  <Alert variant="danger" style={alert_style}>
                    {errors.username.type === 'required' && <span> Username is required</span>}
                  </Alert>
                }
              <div className="input-group mb-3">
                <input
                  ref={register({required: true})}
                  name="password" 
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
              {
                  errors.password &&
                  <Alert variant="danger" style={alert_style}>
                    {errors.password.type === 'required' && <span> Password is required</span>}
                  </Alert>
                }
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
                      onClick={handleSubmit(handleLogin)}
                      >
                      Login
                    </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      
      <Toast onClose={() => {showToast = false}} show={showToast} delay={2000} autohide>
          <Toast.Header>
            <strong className="mr-auto">Error</strong>
            {/* <small>11 mins ago</small> */}
          </Toast.Header>
          <Toast.Body>Wrong username or password</Toast.Body>
        </Toast>
    </div>
  </>
  )
};

export default Login;
