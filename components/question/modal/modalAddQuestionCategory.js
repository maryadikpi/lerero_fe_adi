import {useState, useEffect} from 'react'
import {Spinner} from "react-bootstrap"
import * as Yup from 'yup';
import {Form, Field, Formik, ErrorMessage} from 'formik'

import kpiHelper, {kpiFetch} from 'kpi_helper'
import {ADD_QUESTION_CATEGORY} from 'config/const_api_url'

export default function addQuestionCategory(props) {
    const modalId = "addNewQuestionCat"
    const dataTarget = "#addNewQuestionCat"
    const blockSuccessId = "addNewCatSuccess"
    const dataTargetSuccess = "#addNewCatSuccess"

    const [message, setMessage] = useState('')
    const [showSpinner, setSpinner] = useState(false)
    const [isSubmit, setSubmit] = useState(false)
    const [newCatg, setNewCatg] = useState({
      display_name: ''
    })

    
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
      display_name: '',
    }

    const validationSchema = Yup
    .object()
    .shape({
        display_name:Yup.string().required().min(4).max(70).label('Category Name')
    })

    const handleAddCat = async (values, {resetForm}) => {
        setSpinner(true)
        setSubmit(true)
        const tempData = {
          name: values.display_name.replace(/\s/g, '_').toLocaleLowerCase(),
          display_name: values.display_name,
          company_id: kpiHelper.getGlobalStore().loginInfo? kpiHelper.getGlobalStore().loginInfo.user.company_id : ''
        }
        const resp = await kpiFetch('POST', ADD_QUESTION_CATEGORY, tempData)
        
        if (resp.status) {
            // Update new category list
            let data = resp.data.data
            setNewCatg({display_name: data.display_name})
            const oldCategory = props.questCategory? props.questCategory : []
            let arr = oldCategory.concat([{
              name: data.name,
              display_name: data.display_name
            }])
            props.setQuestCategory(arr)
            setMessage('Success Add New Category')
        } else {
          setMessage('Failed Add New Category')
        }
        setSpinner(false)
        setSubmit(false)
        $(dataTarget).modal('hide')
        $(dataTargetSuccess).modal('show')
        resetForm({value: ''})
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
              <div className="modal-content">
                <div className="modal-header text-center">
                  <h5 className="modal-title width-100">Add New Category</h5>
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
                    <Formik 
                        validationSchema={validationSchema}
                        initialValues={initialValues}
                        onSubmit = {handleAddCat}
                    >
                      {({values, errors, touched}) => (
                        <Form>
                              <div className="row align-center p-3">
                                <div className="col-12 text-left">
                                  <label htmlFor="name" className="container-fluid  p-2">
                                        Category Name
                                    </label>
                                    <Field
                                        name="display_name"
                                        type="text"
                                        className="form-control border-top-0 border-right-0 border-left-0"
                                        placeholder="Type category display name"
                                        style={errorStyle(touched.display_name, errors.display_name)}
                                    />
                                    <span style={textRed(touched.display_name, errors.display_name)}>
                                        <ErrorMessage name='display_name' />
                                    </span>
                                </div>
                                <div className="col-12 text-center">
                                { showSpinner ?
                                      <Spinner 
                                        animation="border" 
                                        variant="primary"
                                        className="mb-4"
                                      />
                                      : ''
                                    }
                                </div>
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
                                    // data-target={dataTargetSuccess}
                                    disabled={isSubmit}
                                    className="btn width-90 btn-sm btn-primary"
                                  >
                                    Ok
                                  </button>
                                </div>
                              </div>
                        </Form>
                      )}
                    </Formik>
                  </div>
              </div>
            </div>
          </div>
            
          
          <div
            className="modal fade"
            id={blockSuccessId}
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
                      <p>{message}</p>
                      <p>{newCatg.display_name}</p>
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