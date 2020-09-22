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
                  <Link href="/admin/auth/forgetPassword">
                    <a className="text-right container-fluid">
                      I forgot my password
                    </a>
                  </Link>
                </div>
                <div className="col-12">
                  <Link href="../../admin/dashboard">
                    <button type="submit" className="btn btn-primary btn-block">
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default Login;
