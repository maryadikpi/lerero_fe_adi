import React, {useState} from 'react'
import * as Yup from 'yup'
import {Spinner, Toast} from "react-bootstrap"

import kpiHelper, {kpiFetch} from 'kpi_helper'
import {CHANGE_GROUP_STATUS} from 'config/const_api_url'

export default function modalDeactiveUserGroup(props) {
    
    const [errorMsg, setErrorMsg] = useState('')
    const [showSpinner, setSpinner] = useState(false)
    const [isSubmit, setSubmit] = useState(false)
    const [showToast, setToast] = useState(false)

    const handleDeactive = async () => {
        setSubmit(true)
        setSpinner(true)

        // Update groupList
        let newStatus = props.groupData.group.status == 1 ? 0 : 1
        let temp = props.groupList.data.data.map((item) => {
            return item.id === props.groupData.group.id ? {...item, status: newStatus} : item
        })

        const resp = await kpiFetch('PUT', CHANGE_GROUP_STATUS+props.groupData.group.id, {status:newStatus })
        if (resp.status) {
            setSubmit(false)
            setSpinner(false)
            props.setGroupList({
                data: {
                    data: temp
                }
            })
            $('#deactiveUserGroup').modal('hide')
            $('#actionMessage').modal('show')
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
                id="deactiveUserGroup"
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
                                    <p>Are you sure want to {props.groupData.group.action} User Group : </p>
                                    <p>{props.groupData.group.name}</p>
                                    <p>#{props.groupData.group.id}</p>
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
                                        type="button"
                                        onClick={handleDeactive}
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
                id="actionMessage"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
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
                                    <p>Success {props.groupData.group.action} User Group</p>
                                    <p>{props.groupData.group.name}</p>
                                    <p>#{props.groupData.group.id}</p>
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