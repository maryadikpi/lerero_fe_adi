import Header from "../../../components/admin/header";
import Link from "next/link";

const ForgetPassword = () => (
  <>
    <Header />
    <span className="hold-transition login-page">
      <div className="login-box">
        <div className="card">
          <div className="card-body login-card-body">
            <div className="login-logo">
              <a href="../../index2.html">
                <b>Lerero</b> Learning
              </a>
            </div>
            <p className="login-box-msg">
              Enter your email address to reset your password
            </p>

            <form action="recover-password.html" method="post">
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
              <div className="row">
                <div className="col-12 mb-2">
                  <button type="submit" className="btn btn-primary btn-block">
                    Reset Password
                  </button>
                </div>
                <div className="col-12">
                  <Link href="/admin/auth/login">
                    <button type="submit" className="btn btn-danger btn-block">
                      Login
                    </button>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </span>
  </>
);

export default ForgetPassword;
