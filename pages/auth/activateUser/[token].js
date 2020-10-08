import { useRouter } from 'next/router'
import Link from "next/link"
import * as Yup from 'yup'
import {Form, Field, Formik, ErrorMessage} from 'formik'
import {Spinner, Modal, Button, Toast} from "react-bootstrap"
import {useState, useEffect} from 'react'

import Header from "components/admin/header"
import {kpiFetch} from 'kpi_helper'
import {CHECK_ACTIVATION_TOKEN, ACTIVATE_USER} from 'config/const_api_url'
import {USER_LOGIN} from "config/const_url"


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

  const errorStyle = (touch, err) => {
    if (touch && err) return {
      color: 'red',
      border: '1px solid red'
    }
  }

  const textRed = (touch, err) => {
    if (touch && err) return {color: 'red'}
  }

  const initialValues = {
    email: email,
    token: props.data.data?.token,
    password: '',
    password_confirmation: '',
  }

  const validationSchema = Yup
  .object()
  .shape({
      password: Yup.string().required().min(7).max(50),
      password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], "Passwords don't match").required().min(7).max(50)
  })

  const [isSubmit, setSubmit] = useState(false)
  const [showSpinner, setSpinner] = useState(false)
  const [showToast, setToast] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [modalHeading, setModalHeading] = useState('Success')
  const [modalContent, setModalContent] = useState('')
  const [modalTimer, setModalTimer] = useState(5)
  const router = useRouter()

  const handleSubmit = async (values, {resetForm}) => {
    setSubmit(true)
    setSpinner(true)
    const resp = await kpiFetch('POST', ACTIVATE_USER, values)
    if (resp.status) {
      setSubmit(false)
      setSpinner(false)
      setModalShow(true)
      setModalContent('Your account has been activated. You will be redirected to login page in :')
      const interval = setInterval(() => {
          setModalTimer(
            (modalTimer) => {
              if (modalTimer === 1) {
                clearInterval(interval)
              }
              return modalTimer - 1
            }
          )
        }, 1000
      )
      setTimeout(() => {
        router.push(USER_LOGIN)
      }, 5000)
    } else {
      setModalHeading('Error')
      setSubmit(false)
      setSpinner(false)
      setModalShow(true)
      setModalContent(resp.message)
    }

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
              <Formik 
              validationSchema={validationSchema}
              initialValues={initialValues}
              onSubmit = {handleSubmit}
              >
                {({values, errors, touched}) => (
                    <Form>
                      <div className="input-group mb-2">
                        <Field
                          type="password"
                          name="password"
                          className="form-control"
                          placeholder="New password"
                          style={errorStyle(touched.password, errors.password)}
                        />
                          <div className="input-group-append">
                            <div className="input-group-text">
                              <span className="fas fa-envelope"></span>
                            </div>
                          </div>
                      </div>
                      <div className="mb-2 pt-0">
                        <span style={textRed(touched.password, errors.password)}>
                          <ErrorMessage name='password' />
                        </span>
                      </div>

                      <div className="input-group mb-2">
                        <Field
                          type="password"
                          name="password_confirmation"
                          className="form-control"
                          placeholder="Password confirmation"
                          style={errorStyle(touched.password_confirmation, errors.password_confirmation)}
                        />
                        <div className="input-group-append">
                          <div className="input-group-text">
                            <span className="fas fa-envelope"></span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-2 pt-0">
                        <span className="mb-3" style={textRed(touched.password_confirmation, errors.password_confirmation)}>
                          <ErrorMessage name='password_confirmation' />
                        </span>
                      </div>
                      { showSpinner ?
                          <Spinner 
                          animation="border" 
                          variant="primary" 
                          style={{position:'absolute', top: '50%', left: '45%', zIndex:'9999'}}
                          />
                          : ''
                      }
                      <div className="row">
                        <div className="col-6">
                          <Link href="/admin/auth/login">
                            <button type="submit" className="btn btn-danger btn-block" disabled={isSubmit}>
                              Cancel
                            </button>
                          </Link>
                        </div>
                        <div className="col-6 mb-2">
                          <button type="submit" className="btn btn-primary btn-block" disabled={isSubmit}>
                            Activate Password
                          </button>
                        </div>
                      </div>
                    </Form>
                )}
              </Formik>
            }
          </div>
        </div>
      </div>
    </span>

    <Modal
      show={modalShow}
      onHide={() => setModalShow(false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdrop="static"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {modalHeading}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{modalContent}</p>
        {modalHeading === 'Success' && (<h2 style={{textAlign: 'center'}}>{modalTimer}</h2>)}
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={() => setModalShow(false)}>Close</Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

activateUser.getInitialProps = async (ctx) => {
    const data = await kpiFetch('GET', CHECK_ACTIVATION_TOKEN+ctx.query.token)
  return {data}
}

export default activateUser;
