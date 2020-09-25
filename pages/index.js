import { useRouter } from 'next/router'
import Link from "next/link"
import {useForm} from "react-hook-form"
import {useState} from "react"
import {Alert, Toast, Spinner, Row} from "react-bootstrap"

//import 'styles/login.css'
import Header from "components/admin/header"
import kpiHelper, {kpiFetch} from "kpi_helper"
import {LOGIN} from 'config/const_api_url'
import {ADMIN_DAHSBOARD, FORGET_PASSWORD} from "config/const_url"



function Login() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(false)

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

  /**
   * Fired when login button is clicked
   * @param {} formData 
   */
  async function handleLogin (formData) {
    setLoading(true);
    const data = {
      email: formData.username,
      password: formData.password
    };
    const json = await kpiFetch('POST', LOGIN, data, false);
    if (json.status) {
      // Change authStatus & put token to store
      // Everything will be handled by kpiHelper.setLogin
      kpiHelper.setLogin(json.data)
      setLoading(!loading);
      // Redirect to dashboard
      router.push({pathname: ADMIN_DAHSBOARD})
    } else {
      setToast(true);
      setLoading(false);
    }
  }

  return (
  <>
    <Header />    
    <div className="hold-transition login-page">
      <div className="login-box">
        <Row className="justify-content-md-center pb-4">
          {loading ? (<Spinner animation="border" variant="primary"/>) : ''}
        </Row>
        <div className="card border-none">
          <div className="card-body login-card-body">
            <div className="login-logo">
              <a href="#">
                <b>Lerero</b> Learning
              </a>
            </div>
            <p className="login-box-msg">Login Application</p>
            <form>
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
      <Toast 
      style={{
          position: 'absolute',
          top: 0,
          right: 0,
      }}
      onClose={() => setToast(false)} 
      show={toast} 
      delay={3000} 
      autohide>
          <Toast.Header>
            <strong className="mr-auto">Login Error</strong>
          </Toast.Header>
          <Toast.Body>Invalid username or password</Toast.Body>
      </Toast>
    </div>
  </>
  )
};

export default Login;
