import Header from "../../../components/admin/header";
import Link from "next/link";

const Login = () => (
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
            <p className="login-box-msg">Login to Application</p>
            <form action="../../index3.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                />
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
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
                <div className="col-8">
                  <div className="icheck-primary">
                    <input type="checkbox" id="remember" />
                    <label htmlFor="remember">Remember Me</label>
                  </div>
                </div>
                <div className="col-4">
                  <Link href="../../admin/dashboard">
                    <button type="submit" className="btn btn-primary btn-block">
                      Sign In
                    </button>
                  </Link>
                </div>
              </div>
            </form>

            <div className="social-auth-links text-center mb-3">
              <p>- OR -</p>
              <a href="#" className="btn btn-block btn-primary">
                <i className="fab fa-facebook mr-2"></i> Sign in using Facebook
              </a>
              <a href="#" className="btn btn-block btn-danger">
                <i className="fab fa-google-plus mr-2"></i> Sign in using
                Google+
              </a>
            </div>

            <p className="mb-1">
              <Link href="/admin/user/forgetPassword">
                <a>I forgot my password</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Login;
