import React, {useState} from 'react'
import * as Yup from 'yup'
import {Form, Field, Formik, ErrorMessage} from 'formik'
import {Spinner, Toast} from "react-bootstrap"

import kpiHelper, {kpiFetch} from 'kpi_helper'
import {CREATE_NEW_USER} from 'config/const_api_url'

export default function modalDeactiveUserGroup(props) {
    

    return (
        <>
            <div
                className="modal fade"
                id="actionBtn"
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
                                    <p>Are you sure want to Deactive User Group : </p>
                                    <p>Sales</p>
                                    <p>#1</p>
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
                                        data-target="#actionMessage"
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
                                    <p>Success Deative User Group</p>
                                    <p>Sales</p>
                                    <p>#1</p>
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