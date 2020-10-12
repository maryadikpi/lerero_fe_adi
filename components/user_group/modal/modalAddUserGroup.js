import React, {useState} from 'react'
import * as Yup from 'yup'
import {Form, Field, Formik, ErrorMessage} from 'formik'
import {Spinner, Toast} from "react-bootstrap"

import kpiHelper, {kpiFetch} from 'kpi_helper'
import {CREATE_USER_GROUP} from 'config/const_api_url'

export default function modalAddUserGroup(props) {

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
          name: '',
          picture: '',
          company_id: kpiHelper.getGlobalStore().loginInfo? kpiHelper.getGlobalStore().loginInfo.user.company_id : ''
      }
  
      const validationSchema = Yup
      .object()
      .shape({
          name: Yup.string().required().min(2).max(70).label('Group name'),
          picture: Yup.string().required().min(2).max(191).label('Group picture')
      })

      const [isSubmit, setSubmit] = useState(false)
      const [showSpinner, setSpinner] = useState(false)
      const [showToast, setToast] = useState(false)
      const [errorMsg, setErrorMsg] = useState('')

      const handleSubmit = async (values, {resetForm}) => {
        setSubmit(true)
        setSpinner(true)
        const resp = await kpiFetch('POST', CREATE_USER_GROUP, values)

        if (resp.status) {
            setSubmit(false)
            setSpinner(false)
            $('#addUserGroup').modal('hide')
            $('#addGroupSuccess').modal('show')
            resetForm({values: ''})
            let arr = [
                ...props.groupList.data.data,
                {
                  id: resp.data.id,
                  picture: resp.data.picture,
                  name: resp.data.name,
                  total_user: resp.data.total_user,
                  status: resp.data.status
                }
            ]

            props.setGroupList({
            data: {
                data: arr
            }
            })
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
                id="addUserGroup"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
                data-backdrop="static"
            >
                <Formik 
                    validationSchema={validationSchema}
                    initialValues={initialValues}
                    onSubmit = {handleSubmit}
                >  
                    {({values, errors, touched}) => (
                        <Form autoComplete="off">
                            <div className="modal-dialog text-dark" role="document">
                                <div className="modal-content">
                                    <div className="modal-header text-center">
                                        <h5 className="modal-title width-100">Create User Group</h5>
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
                                            <div className="col-12">
                                                <label htmlFor="groupName" className="container-fluid  p-2">
                                                    User Group's Name
                                                </label>
                                                <Field
                                                    name="name"
                                                    type="text"
                                                    className="form-control border-top-0 border-right-0 border-left-0"
                                                    placeholder="Type user's group name"
                                                    style={errorStyle(touched.name, errors.name)}
                                                />
                                                <span style={textRed(touched.name, errors.name)}>
                                                    <ErrorMessage name='name' />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row align-center p-3">
                                            <div className="col-12">
                                                <label htmlFor="groupName" className="container-fluid  p-2">
                                                    Select Icon
                                                </label>
                                                <Field
                                                    name="picture"
                                                    type="text"
                                                    className="form-control border-top-0 border-right-0 border-left-0"
                                                    placeholder="@to do: Put dropdown image here"
                                                    style={errorStyle(touched.picture, errors.picture)}
                                                />
                                                <span style={textRed(touched.picture, errors.picture)}>
                                                    <ErrorMessage name='picture' />
                                                </span>
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
                                                    type="submit"
                                                    className="btn width-90 btn-sm btn-primary"
                                                    disabled={isSubmit}
                                                >
                                                    Create User Group
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
                id="addGroupSuccess"
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
                                    <p>User Group Created Successfuly!</p>
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
                <strong className="mr-auto" style={{color: 'red'}}>Create User Group Error</strong>
              </Toast.Header>
              <Toast.Body> <span style={{color: 'black'}}>{errorMsg}</span></Toast.Body>
          </Toast>
        </>
    )
}