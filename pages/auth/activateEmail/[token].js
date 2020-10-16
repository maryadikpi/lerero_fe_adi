import { useRouter } from 'next/router'
import {useEffect} from 'react'

import Header from "components/admin/header"
import {kpiFetch} from 'kpi_helper'
import {ACTIVATE_EMAIL} from 'config/const_api_url'
import {USER_LOGIN} from "config/const_url"

export default function activateEmail(props) {
    const router = useRouter()
    useEffect(() => {
        if (props.data.status) {
            setTimeout(() => {
                router.push({pathname: USER_LOGIN})
              }, 3000)
        }
    })
    
    return (
        <>
            <Header />
            <span className="hold-transition login-page">
                <div className="login-box">
                    <div className="card">
                        <div className="card-body login-card-body">
                            <div className="login-logo">
                                <h3>{props.data.message}</h3>
                                {props.data.status && (<h6>You will be redirected to login page in 3 seconds</h6>)}
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
