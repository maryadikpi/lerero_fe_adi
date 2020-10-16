import Link from "next/link";
import {useState, useEffect, useRef } from 'react'
import {Spinner, Toast} from "react-bootstrap"


import {kpiFetch, kpiFetchFile} from 'kpi_helper'
import {DOWNLOAD_QUESTION_CSV, IMPORT_QUESTION_FILE} from 'config/const_api_url'

export default function importQuestionCsv(props) {

    const handleDownload = async () => {
        window.open(process.env.NEXT_PUBLIC_API_URL+DOWNLOAD_QUESTION_CSV)
    }

    const inputFile = useRef(null)
    const handleBrowse = () => {
        console.log('handle browse')
    }

    var file = null
    async function onChangeFile(event) {
        event.stopPropagation()
        event.preventDefault()
        file = event.target.files[0]
    }

    useEffect(() => {
        $('#importQuestionCsv').on('hidden.bs.modal', function (e) {
            console.log('import csv closed')
            if (inputFile) {
                console.log('isi files')
                // inputFile.current.files[0].name('')
                // console.log(inputFile.current.files[0].name)
                // Will be continued later
            }
          })
    })
    

    const [isSubmit, setSubmit] = useState(false)
    const [showSpinner, setSpinner] = useState(false)
    const [showToast, setToast] = useState(false)
    const [respMsg, setRespMsg] = useState('')

    const handleSendFile = async () => {
        setSubmit(true)
        setSpinner(true)
        var formData = new FormData()
        formData.append('file', file)
        const resp = await kpiFetchFile('POST', IMPORT_QUESTION_FILE, formData)
        if (resp.status) {
          setRespMsg(resp.message)
          setSpinner(false)
          setSubmit(false)
          $('#warningQuestionSuccess').modal('hide')
          $("#importQuestionSuccess").modal('show')
  
          let newQuestionList = [
            ...props.questionList.data.data,
            ...resp.data
          ]
          props.setQuestionList({
            data: {
              data: newQuestionList
            }
          })
  
        } else {
          setToast(true)
          setRespMsg(JSON.stringify(resp.message))
          setSpinner(false)
          setSubmit(false)
        }
    }

    return (
        <>
            <div
                className="modal fade"
                id="importQuestionCsv"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog text-dark" role="document">
                    <div className="modal-content">
                        <div className="modal-header text-center">
                            <h5 className="modal-title width-100">Import Question List</h5>
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
                                    <p className="mt-4">
                                        We are supporting to import question list from csv files. You
                                        can use our csv template to adjust your question list, and then
                                        start uploading your adjusted csv file to the platform. <br />
                                    <br />
                                    <button className="btn btn-secondary" onClick={handleDownload}>
                                        Download CSV Template
                                    </button>
                                    </p>
                                    <p className="mt-4">
                                        Please select your adjusted CSV file in here : <br />
                                        <input 
                                            type="file"
                                            className="btn btn-secondary mt-2"
                                            ref={inputFile}
                                            onClick={handleBrowse}
                                            onChange={(e) => onChangeFile(e)}
                                        />
                                    </p>
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
                                        type="button"
                                        data-dismiss="modal"
                                        data-toggle="modal"
                                        data-target="#warningQuestionSuccess"
                                        className="btn width-90 btn-sm btn-primary"
                                    >
                                        Import
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="warningQuestionSuccess"
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
                                    <p>Are you sure want to Import this Question List : </p>
                                </div>
                                { showSpinner ?
                                    <Spinner 
                                        animation="border" 
                                        variant="primary" 
                                        style={{position:'absolute', top: '50%', left: '45%', zIndex:'9999'}}
                                    />
                                    : ''
                                }
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
                                        type="button"
                                        onClick={handleSendFile}
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
                id="importQuestionSuccess"
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
                                <p>Success Import Question List</p>
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
                <strong className="mr-auto" style={{color: 'red'}}>Impor Question Error</strong>
              </Toast.Header>
              <Toast.Body> <span style={{color: 'black'}}>{respMsg}</span></Toast.Body>
          </Toast>
        </>
    )
}