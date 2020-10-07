import {useState, useEffect} from 'react'
import {Spinner, Toast} from "react-bootstrap"
import * as Yup from 'yup';
import {Form, Field, Formik, ErrorMessage} from 'formik'

import {kpiFetch} from 'kpi_helper'
import {CHANGE_USER_EMAIL} from 'config/const_api_url'

export default function modalChangeUserEmail(props) {
    const dataTarget = "#changeEmailUserModal_"+props.userData.user.id
    const modalId = "changeEmailUserModal_"+props.userData.user.id

    const [isSubmit, setSubmit] = useState(false)
    const [showSpinner, setSpinner] = useState(false)
    const [newEmail, setNewEmail] = useState('')
    const [showToast, setToast] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

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
        email: '',
    }

    const validationSchema = Yup
    .object()
    .shape({
        email: Yup.string().required().email().min(6).max(100),
    })

    const handleChangeEmail = (values, {resetForm}) => {
        setNewEmail(values.email)
        $(dataTarget).modal('hide')
        $('#changeEmailWarning').modal('show')
        resetForm({values: ''})
    }

    const handleSubmitEmail = async () => {
        setSubmit(true)
        setSpinner(true)

        const resp = await kpiFetch('POST', CHANGE_USER_EMAIL+props.userData.user.id, {email: newEmail})
        if (resp.status) {
            setSubmit(false)
            setSpinner(false)
            $('#changeEmailWarning').modal('hide')
            $('#changeEmailSuccess').modal('show')
        } else {
            setSubmit(false)
            setSpinner(false)
            setToast(true)
            setErrorMsg(resp.message)
        }
    }

    return (
    <>
        <div
            className="modal fade"
            id={modalId}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-backdrop="static"
        >
            <div className="modal-dialog text-dark" role="document">
                <Formik 
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit = {handleChangeEmail}
                >
                    {({values, errors, touched}) => (
                        <Form>
                            <div className="modal-content">
                                <div className="modal-header text-center">
                                    <h5 className="modal-title width-100">Change Email</h5>
                                    <button
                                        type="button"
                                        className="close"
                                        data-dismiss="modal"
                                        aria-label="Close"
                                        disabled={isSubmit}
                                    >
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body p-3">
                                    <div className="row align-center p-2">
                                        <div className="col-12">
                                            <label htmlFor="firstName" className="container-fluid  p-2">
                                                Full Name
                                            </label>
                                            <p className="p-2">{props.userData.user.first_name} {props.userData.user.last_name}</p>
                                        </div>
                                    </div>
                                    <div className="row align-center p-2">
                                        <div className="col-12">
                                            <label htmlFor="firstName" className="container-fluid  p-2">
                                                Username
                                            </label>
                                            <p className="p-2">{props.userData.user.username}</p>
                                        </div>
                                    </div>
                                    <div className="row align-center p-2">
                                        <div className="col-12">
                                                <label htmlFor="firstName" className="container-fluid  p-2">
                                                    Email
                                                </label>
                                                <Field
                                                    name="email"
                                                    type="text"
                                                    className="form-control border-top-0 border-right-0 border-left-0"
                                                    placeholder="Type user's email"
                                                    style={errorStyle(touched.email, errors.email)}
                                                />
                                                <span style={textRed(touched.email, errors.email)}>
                                                    <ErrorMessage name='email' />
                                                </span>
                                        </div>
                                    </div>
                                    <div className="row align-center p-2">
                                        <div className="col-4">
                                            <label htmlFor="firstName" className="container-fluid  p-2">
                                            User Role
                                            </label>
                                        </div>
                                        <div className="col-8">{props.userData.user.role}</div>
                                    </div>

                                    <div className="row mb-5">
                                        <div className="col-6">
                                            <button
                                            type="button"
                                            className="btn btn-sm btn-danger width-90 float-right"
                                            data-dismiss="modal"
                                            disabled={isSubmit}
                                            >
                                            Cancel
                                            </button>
                                        </div>
                                        <div className="col-6">
                                            <button
                                                type="submit"
                                                // data-dismiss="modal"
                                                // data-toggle="modal"
                                                // data-target="#changeEmailWarning"
                                                className="btn width-90 btn-sm btn-primary"
                                            >
                                            Change Email
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>

        <div
            className="modal fade"
            id="changeEmailWarning"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            data-backdrop="static"
        >
            <div className="modal-dialog text-dark" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h5 className="modal-title width-100">Warning!</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                            disabled={isSubmit}
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-3">
                        <div className="row align-center p-3">
                        <div className="col-12 text-center">
                            <p>
                            <i className="fa fa-exclamation-triangle text-warning icon-width-50"></i>
                            </p>
                            <p>Are you sure want to Change Email for User : </p>
                            <p>{props.userData.user.first_name} {props.userData.user.last_name}</p>
                            <p>into : </p>
                            <p>{newEmail}</p>
                        </div>
                    </div>
                    
                    { showSpinner ?
                        <Spinner 
                        animation="border" 
                        variant="primary" 
                        style={{position:'absolute', top: '50%', left: '45%', zIndex:'9999'}}
                        />
                        : ''
                    }

                    <div className="row mb-5">
                        <div className="col-6">
                            <button
                            type="button"
                            className="btn btn-sm btn-danger width-90 float-right"
                            data-dismiss="modal"
                            disabled={isSubmit}
                            >
                                Cancel
                            </button>
                        </div>
                        <div className="col-6">
                            <button
                                type="button"
                                //data-dismiss="modal"
                                //data-toggle="modal"
                                //data-target="#changeEmailSuccess"
                                onClick={handleSubmitEmail}
                                className="btn width-90 btn-sm btn-primary"
                                disabled={isSubmit}
                            >
                                Ok
                            </button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        

        <div
            className="modal fade"
            id="changeEmailSuccess"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog text-dark" role="document">
                <div className="modal-content">
                    <div className="modal-header text-center">
                        <h5 className="modal-title width-100">Success!</h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body p-3">
                        <div className="row align-center p-3">
                            <div className="col-12 text-center">
                                <p>
                                <i className="fa fa-check-circle text-success icon-width-50"></i>
                                </p>
                                <p>Email change Successfuly for user</p>
                                <p>{props.userData.user.first_name} {props.userData.user.last_name}</p>
                                <p>#{props.userData.user.id}</p>
                                <p>into email : </p>
                                <p>{newEmail}</p>
                            </div>
                        </div>
                        <br />

                        <div className="row mb-5">
                            <div className="col-12 text-center">
                                <button
                                    type="button"
                                    data-dismiss="modal"
                                    className="btn width-30 btn-sm btn-primary"
                                >
                                Ok
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Toast 
            style={{
                position: 'absolute',
                top: 17,
                right: 17,
                zIndex: 9999
            }}
            onClose={() => setToast(false)}
            show={showToast}
            delay={3000}
            autohide
            >
              <Toast.Header>
                <strong className="mr-auto" style={{color: 'red'}}>Create User Error</strong>
              </Toast.Header>
              <Toast.Body> <span style={{color: 'black'}}>{errorMsg}</span></Toast.Body>
          </Toast>
    </>
 )
}