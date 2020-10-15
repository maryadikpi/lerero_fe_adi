import Header from "components/admin/header"
import {kpiFetch} from 'kpi_helper'
import {ACTIVATE_EMAIL} from 'config/const_api_url'

export default function activateEmail(props) {
    console.log(props)
    return (
        <>
            <Header />
            <span className="hold-transition login-page">
                <div className="login-box">
                    <div className="card">
                        <div className="card-body login-card-body">
                            <div className="login-logo">
                                <h1>{props.data.message}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </span>
        </>
    )
}


activateEmail.getInitialProps = async (ctx) => {
    const data = await kpiFetch('PUT', ACTIVATE_EMAIL+ctx.query.token)
  return {data}
}
