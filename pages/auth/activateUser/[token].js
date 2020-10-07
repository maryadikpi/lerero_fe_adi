import { useRouter } from 'next/router'
import Link from "next/link";

import Header from "components/admin/header";
import {kpiFetch} from 'kpi_helper'
import {CHECK_ACTIVATION_TOKEN, ACTIVATE_USER} from 'config/const_api_url'


function activateUser(props) {
  var msg, email = ''
  var style = {}
  if (props.data.status) {
    msg = "Enter your new password for account"
    email = props.data.data.email
    style = {
      color: 'black'
    }
  } else {
    msg = props.data.message
    style = {color: 'red'}
  }
  return (
    <>
    <Header />
    <span className="hold-transition login-page">
      <div className="login-box">
        <div className="card">
          <div className="card-body login-card-body">
            <div className="login-logo">
              <a>
                <b>Lerero</b> Learning
              </a>
            </div>
            <p className="login-box-msg" style={style}>
              {msg}<br /> {email}
            </p>
            { props.data.status &&
              <form action="recover-password.html" method="post">
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="New password"
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
                  placeholder="Password confirmation"
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
                    Activate Password
                  </button>
                </div>
                <div className="col-12">
                  <Link href="/admin/auth/login">
                    <button type="submit" className="btn btn-danger btn-block">
                      Cancel
                    </button>
                  </Link>
                </div>
              </div>
            </form>
            }
          </div>
        </div>
      </div>
    </span>
  </>
  )
}

activateUser.getInitialProps = async (ctx) => {
    const data = await kpiFetch('GET', CHECK_ACTIVATION_TOKEN+ctx.query.token)
  return {data}
}

export default activateUser;
