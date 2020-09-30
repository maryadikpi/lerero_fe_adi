import React from 'react';
import * as Yup from 'yup';
import {Form, Field, Formik, ErrorMessage} from 'formik'

export default function modalAddUser(props) {
    const modalId = "blockUserModal_"+props.id
    const dataTarget = "#blockUserModal_"+props.id

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
        firstName: '',
        lastName: '',
        userName: '',
        email: '',
        role: 1
    }

    const validationSchema = Yup
    .object()
    .shape({
        firstName: Yup.string().required().min(2).max(100),
        lastName: Yup.string().required().min(2).max(100),
        userName: Yup.string().required().min(2).max(100),
        email: Yup.string().required().email().min(6).max(100),
    })

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
          initialValues={initialValues} >
            {({values, errors, touched}) => (
                <Form autoComplete="off">
                    <div className="modal-dialog text-dark" role="document">
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
                                    <label htmlFor="firstName" className="container-fluid  p-2">
                                      First Name
                                    </label>
                                    <Field
                                    name="firstName"
                                    type="text"
                                    className="form-control border-top-0 border-right-0 border-left-0"
                                    placeholder="Type user's first name"
                                    style={errorStyle(touched.firstName, errors.firstName)}
                                    />
                                    <span style={textRed(touched.firstName, errors.firstName)}>
                                      <ErrorMessage name='firstName' />
                                    </span>
                                </div>
                              </div>

                              <div className="row align-center p-3">
                                <div className="col-12">
                                    <label htmlFor="lastName" className="container-fluid  p-2">
                                      Last Name
                                    </label>
                                    <Field
                                    name="lastName"
                                    type="text"
                                    className="form-control border-top-0 border-right-0 border-left-0"
                                    placeholder="Type user's last name"
                                    style={errorStyle(touched.lastName, errors.lastName)}
                                    />
                                    <span style={textRed(touched.lastName, errors.lastName)}>
                                      <ErrorMessage name='lastName' />
                                    </span>
                                </div>
                              </div>

                              <div className="row align-center p-3">
                                <div className="col-12">
                                    <label htmlFor="userName" className="container-fluid  p-2">
                                      User Name
                                    </label>
                                    <Field
                                    name="userName"
                                    type="text"
                                    className="form-control border-top-0 border-right-0 border-left-0"
                                    placeholder="Type user's username"
                                    style={errorStyle(touched.userName, errors.userName)}
                                    />
                                    <span style={textRed(touched.userName, errors.userName)}>
                                      <ErrorMessage name='userName' />
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
                                    <label htmlFor="role" className="container-fluid  p-2">
                                      User Role
                                    </label>
                                </div>
                                <div className="col-8">
                                    <Field name="role" as='select' className="form-control">
                                        <option disabled>
                                            Choose Role User
                                        </option>
                                        <option value="1">Standard User</option>
                                        <option value="2">Client Admin</option>
                                    </Field>
                                    <ErrorMessage name='role' />
                                </div>
                              </div>
                            <br />
 
                            <div className="row mb-5">
                              <div className="col-6">
                                  <button
                                  type="button"
                                  className="btn btn-sm btn-danger width-90 float-right"
                                  data-dismiss="modal"
                                  >
                                  Cancel
                                  </button>
                              </div>
                              <div className="col-6">
                                  <button
                                  type="submit"
                                  //data-dismiss="modal"
                                  //data-toggle="modal"
                                  //data-target="#addSuccess"
                                  className="btn width-90 btn-sm btn-primary"
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
   </>
)
}