import React, {useState} from 'react';
import * as Yup from 'yup';
import {Form, Field, Formik, ErrorMessage} from 'formik'
import {Spinner, Toast} from "react-bootstrap"

import kpiHelper, {kpiFetch} from 'kpi_helper'
import {CREATE_NEW_USER} from 'config/const_api_url'

export default function modalAddUser(props) {
    const modalId = "addUserModal_"+props.id
    const dataTarget = "#addUserModal_"+props.id

    const [isSubmit, setSubmit] = useState(false)
    const [showSpinner, setSpinner] = useState(false)
    const [showToast, setToast] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    var roleList = []
    if (props.roleList.data) {
        roleList = props.roleList.data.map((item, i) => {
                            return <option key={i} value={item.id}>{item.display_name}</option>
                        })
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
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        roles: 1,
        company_id: kpiHelper.getGlobalStore().loginInfo? kpiHelper.getGlobalStore().loginInfo.user.company_id : 0
    }

    const validationSchema = Yup
    .object()
    .shape({
        first_name: Yup.string().required().min(2).max(100),
        last_name: Yup.string().required().min(2).max(100),
        username: Yup.string().required().min(2).max(100),
        email: Yup.string().required().email().min(6).max(100),
    })

    const handleSubmit = async (values, {resetForm}) => {
      setSubmit(true)
      setSpinner(true)
      const json = await kpiFetch('POST', CREATE_NEW_USER, values)
      if (json.status) {
        console.log(json)
        setSpinner(false)
        setSubmit(false)
        $('#addUserModal').modal('hide')
        $('#addSuccess').modal('show')
        resetForm({values: ''})
      } else {
        setToast(true);
        setSpinner(false)
        setSubmit(false)
        setErrorMsg(json.message)
      }
      
    }

    return (
      <>
        <div
        className="modal fade"
        id="addUserModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        >
        <Formik 
          validationSchema={validationSchema}
          initialValues={initialValues}
          onSubmit = {handleSubmit}
          >
            {({values, errors, touched}) => (
                <Form autoComplete="off">
                    <div className="modal-dialog text-dark" role="document">
                      { showSpinner ?
                        <Spinner 
                          animation="border" 
                          variant="primary" 
                          style={{position:'absolute', top: '50%', left: '45%', zIndex:'9999'}}
                        />
                        : ''
                      }
                        <div className="modal-content">
                            <div className="modal-header text-center">
                                <h5 className="modal-title width-100">Create User</h5>
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
                                <div className="col-12">
                                    <label htmlFor="first_name" className="container-fluid  p-2">
                                      First Name
                                    </label>
                                    <Field
                                    name="first_name"
                                    type="text"
                                    className="form-control border-top-0 border-right-0 border-left-0"
                                    placeholder="Type user's first name"
                                    style={errorStyle(touched.first_name, errors.first_name)}
                                    />
                                    <span style={textRed(touched.first_name, errors.first_name)}>
                                      <ErrorMessage name='first_name' />
                                    </span>
                                </div>
                              </div>

                              <div className="row align-center p-3">
                                <div className="col-12">
                                    <label htmlFor="last_name" className="container-fluid  p-2">
                                      Last Name
                                    </label>
                                    <Field
                                    name="last_name"
                                    type="text"
                                    className="form-control border-top-0 border-right-0 border-left-0"
                                    placeholder="Type user's last name"
                                    style={errorStyle(touched.last_name, errors.last_name)}
                                    />
                                    <span style={textRed(touched.last_name, errors.last_name)}>
                                      <ErrorMessage name='last_name' />
                                    </span>
                                </div>
                              </div>

                              <div className="row align-center p-3">
                                <div className="col-12">
                                    <label htmlFor="username" className="container-fluid  p-2">
                                      User Name
                                    </label>
                                    <Field
                                    name="username"
                                    type="text"
                                    className="form-control border-top-0 border-right-0 border-left-0"
                                    placeholder="Type user's username"
                                    style={errorStyle(touched.username, errors.username)}
                                    />
                                    <span style={textRed(touched.username, errors.username)}>
                                      <ErrorMessage name='username' />
                                    </span>
                                </div>
                              </div>

                              <div className="row align-center p-3">
                                <div className="col-12">
                                    <label htmlFor="email" className="container-fluid  p-2">
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

                              <div className="row align-center p-3">
                                <div className="col-4">
                                    <label htmlFor="roles" className="container-fluid  p-2">
                                      User Role
                                    </label>
                                </div>
                                <div className="col-8">
                                    <Field name="roles" as='select' className="form-control">
                                        {roleList}
                                    </Field>
                                    <ErrorMessage name='roles' />
                                </div>
                              </div>
                            <br />
 
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
                                  className="btn width-90 btn-sm btn-primary"
                                  disabled={isSubmit}
                                  >
                                  Create User
                                  </button>
                              </div>
                            </div>
                        </div>
                      </div>
                    </div>
                </Form>
            )}
        </Formik>
        </div>

      <div
      className="modal fade"
      id="addSuccess"
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
                <p>User Created Successfuly!</p>
                <p>
                  Email has been sent to notify user to activate their account
                </p>
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