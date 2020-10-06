import {useState, useEffect} from 'react'
import {Spinner} from "react-bootstrap"

import {kpiFetch} from 'kpi_helper'
import {BLOCK_USER} from 'config/const_api_url'

export default function modalChangeUserEmail(props) {
    const dataTarget = "#changeEmailUserModal_"+props.userData.user.id
    const modalId = "changeEmailUserModal_"+props.userData.user.id


    return (
        <>
        <div
            className="modal fade"
            id={modalId}
            tabIndex="-1"
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog text-dark" role="document">
                <div className="modal-content">
                <div className="modal-header text-center">
                    <h5 className="modal-title width-100">Change Email</h5>
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
                            <input
                            id="userName"
                            type="text"
                            className="form-control border-top-0 border-right-0 border-left-0"
                            placeholder="Type user's username"
                            />
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
                            data-target="#changeEmailWarning"
                            className="btn width-90 btn-sm btn-primary"
                            >
                            Change Email
                            </button>
                        </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>

        <div
            className="modal fade"
            id="changeEmailWarning"
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
                            <i className="fa fa-exclamation-triangle text-warning icon-width-50"></i>
                            </p>
                            <p>Are you sure want to Change Email for User : </p>
                            <p>Makaryo Sregep</p>
                            <p>into role : </p>
                            <p>makaryo321@gmail.com</p>
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
                                data-target="#changeEmailSuccess"
                                className="btn width-90 btn-sm btn-primary"
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
                                <p>Makaryo Sregep</p>
                                <p>#251</p>
                                <p>into email : </p>
                                <p>makaryo321@gmail.com</p>
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