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
              You forgot your password? Here you can easily retrieve a new
              password.
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
                <div className="col-12">
                  <button type="submit" className="btn btn-primary btn-block">
                    Request new password
                  </button>
                </div>
              </div>
            </form>

            <p className="mt-3 mb-1">
              <Link href="/admin/user/login">
                <a>Login</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </span>
  </>
);

export default ForgetPassword;
