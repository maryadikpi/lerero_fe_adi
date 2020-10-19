import * as Yup from 'yup';
import {Form, Field, Formik, ErrorMessage} from 'formik'
import {useState, useEffect} from 'react'
import {Spinner, Toast} from "react-bootstrap"

import {kpiFetch} from 'kpi_helper'
import {POST_DUPLICATE_QUESTION} from 'config/const_api_url'

export default function modalDuplicateQuestion(props) {

    const [errorMsg, setErrorMsg] = useState('')
    const [showSpinner, setSpinner] = useState(false)
    const [isSubmit, setSubmit] = useState(false)
    const [showToast, setToast] = useState(false)

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
    }

    const validationSchema = Yup
    .object()
    .shape({
        name: Yup.string().required().min(6).max(70).label('Question Name'),
    })

    const handleDuplicate = async (values, {resetForm}) => {
      setSubmit(true)
      setSpinner(true)
      const resp = await kpiFetch('POST', POST_DUPLICATE_QUESTION+props.questData.id, {name: values.name})
      if (resp.status) {
          setSubmit(false)
          setSpinner(false)
          $('#duplicateQuestion').modal('hide')
          $('#deleteQuestionSuccess').modal('show')

          // Update question list
          let oldUserList = props.questList ? props.questList : []
          let data = resp.data
          props.setQuestList(oldUserList.concat([{
            id: data.id,
            name: data.name,
            question: data.question,
            type: data.type,
            status: data.status
          }]))

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
            id="duplicateQuestion"
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
                      onSubmit = {handleDuplicate}
                  >
                      {({values, errors, touched}) => (
                          <Form>
                              <div className="modal-content">
                                <div className="modal-header text-center">
                                  <h5 className="modal-title width-100">Duplicate Question</h5>
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
                                      <div className="row p-3">
                                        <div className="col-12">
                                            <label htmlFor="groupName" className="container-fluid  p-2">
                                              New Duplicate Name
                                            </label>
                                            <Field
                                              name="name"
                                              type="text"
                                              className="form-control border-top-0 border-right-0 border-left-0"
                                              placeholder="Type new duplicate name : "
                                              style={errorStyle(touched.name, errors.name)}
                                            />
                                            <span style={textRed(touched.name, errors.name)}>
                                              <ErrorMessage name='name' />
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
                                            Duplicate Question
                                          </button>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <br />
                                </div>
                              </div>
                          </Form>
                      )}
              </Formik>
            </div>
          </div>

                  
          <div
            className="modal fade"
            id="deleteQuestionSuccess"
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog text-dark" role="document">
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h5 className="modal-title width-100">Success</h5>
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
                      <p>Success duplicate the question!</p>
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
                    <strong className="mr-auto" style={{color: 'red'}}>Create Group Error</strong>
                </Toast.Header>
                <Toast.Body> <span style={{color: 'black'}}>{errorMsg}</span></Toast.Body>
          </Toast>
        </>
    )
}