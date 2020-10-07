import {useState, useEffect} from 'react'
import {Spinner, Toast} from "react-bootstrap"

import {kpiFetch} from 'kpi_helper'
import {CHANGE_USER_ROLE} from 'config/const_api_url'

export default function modalChangeUserRole(props) {
    const dataTarget = "#changeRoleUserModal_"+props.userData.user.id
    const modalId = "changeRoleUserModal_"+props.userData.user.id
    
    const [isSubmit, setSubmit] = useState(false)
    const [showSpinner, setSpinner] = useState(false)
    const [showToast, setToast] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')

    const handleChangeUserRole = async () => {
        setSubmit(true)
        setSpinner(true)

        // Update userList
        let temp = props.userList.data.data.map((item) => {
            return item.id === props.userData.user.id ? {...item, role_id: props.userData.newRoleId, role: props.userData.newRoleText } : item
        })

        const resp = await kpiFetch('PUT', CHANGE_USER_ROLE+props.userData.user.id, {roles: props.userData.newRoleId})

        if (resp.status) {
            setSubmit(false)
            setSpinner(false)
            props.setUserList({
                data: {
                    data: temp
                }
            })
            $(dataTarget).modal('hide')
            $('#changeSuccess').modal('show')
        } else {
            setSubmit(false)
            setSpinner(false)
            setToast(true)
            setErrorMsg(resp.message)
        }
    }

    return(
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
                                    <p>Are you sure want to Change Role for User : </p>
                                    <p>{props.userData.user.first_name} {props.userData.user.last_name}</p>
                                    <p>into role : </p>
                                    <p>{props.userData.newRoleText}</p>
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
                                        // data-dismiss="modal"
                                        // data-toggle="modal"
                                        // data-target="#changeSuccess"
                                        onClick={handleChangeUserRole}
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
                id="changeSuccess"
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
                            <p>Success Change Role for User</p>
                            <p>{props.userData.user.first_name} {props.userData.user.last_name}</p>
                            <p>#{props.userData.user.id}</p>
                            <p>Into Role</p>
                            <p>{props.userData.newRoleText}</p>
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