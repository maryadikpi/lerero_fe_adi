import Header from "../../../components/admin/header";
import kpiStore from "../../../store"
import Link from "next/link";

const Login = () => {

  kpiStore.addNewStore('e', 'adistore', {
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
  });
  
  console.log(kpiStore.getGlobalStore());


  return (
  <>
    <Header />
    <div className="hold-transition login-page bg-white">
      <div className="login-box">
        <div className="login-logo">
          <a href="../../index2.html">
            <b>Lerero</b> Learning
          </a>
        </div>
        <div className="card border-none">
          <div className="card-body login-card-body">
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
              <a href="forgot-password.html">I forgot my password</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
};

export default Login;
