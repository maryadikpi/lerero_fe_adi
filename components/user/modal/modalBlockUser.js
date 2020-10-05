import {useState, useEffect} from 'react'
import {Spinner} from "react-bootstrap"

import {kpiFetch} from 'kpi_helper'
import {BLOCK_USER} from 'config/const_api_url'

export default function modalBlockUser(props) {
  const modalId = "blockUserModal_"+props.id
  const dataTarget = "#blockUserModal_"+props.id
  const blockSuccessId = "blockSuccess_"+props.id
  const dataTargetSuccess = "#blockSuccess_"+props.id
  const [message, setMessage] = useState('')
  const [showSpinner, setSpinner] = useState(false)
  const [isSubmit, setSubmit] = useState(false)

  async function blockUser() {
    setSpinner(true)
    setSubmit(true)
    const resp = await kpiFetch('PUT', BLOCK_USER+props.id, {status: props.status? 0 : 1})
    console.log('resp block')
    console.log(resp)
    
    if (resp.status) {
      if (props.status) {
        setMessage('Success Block User')
        props.setStatus(0)
      } else {
        setMessage('Success Unblock User')
        props.setStatus(1)
      }
    } else {
      console.log('STATUS FALSE')
      if (props.status) {
        setMessage('Failed Block User')
      } else {
        setMessage('Failed Unblock User')
      }
    }
    setSpinner(false)
    setSubmit(false)
    $(dataTarget).modal('hide')
    $(dataTargetSuccess).modal('show')
  }
    return (
    <>
    <button
        type="button"
        data-toggle="modal"
        data-target={dataTarget}
        className="btn btn-success width-110px btn-sm m-1"
        >
        {props.status? 'Block': 'Unblock'}
        </button>
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
            {/* <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button> */}
          </div>
          <div className="modal-body p-3">
            <div className="row align-center p-3">
              <div className="col-12 text-center">
                <p>
                  <i className="fa fa-exclamation-triangle text-warning icon-width-50"></i>
                </p>
                <p>Are you sure want to Block User : </p>
                <p>{props.username}</p>
                <p>#{props.id}</p>
              </div>
            </div>
            { showSpinner ?
              <Spinner 
                animation="border" 
                variant="primary"
                className="mb-4"
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
                  // data-target={dataTargetSuccess}
                  onClick={blockUser}
                  disabled={isSubmit}
                  className="btn width-90 btn-sm btn-primary"
                >
                  Okie
                </button>
              </div>
            </div>
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
                <p>{props.username}</p>
                <p>#{props.id}</p>
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
);
}