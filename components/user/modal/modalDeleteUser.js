import {Spinner} from "react-bootstrap"
import {useState, useEffect} from 'react'

import {kpiFetch} from 'kpi_helper'
import {DELETE_USER_SOFT} from 'config/const_api_url'

export default function modalDeleteUser(props) {
    const dataTarget = "#deleteUserModal_"+props.id
    const modalId = "deleteUserModal_"+props.id
    const dataTargetSuccess = "#deleteSuccess"

    const [title, setTitle] = useState('')
    const [message, setMessage] = useState('')
    const [showSpinner, setSpinner] = useState(false)
    const [isSubmit, setSubmit] = useState(false)

    async function handleDeleteUser() {
      setSpinner(true)
      setSubmit(true)
      // const resp = {status: true, message: 'dummy'}
      const resp = await kpiFetch('DELETE', DELETE_USER_SOFT+props.id)
      if (resp.status) {
        setTitle('Success Delete User')
        setMessage('Email has been sent to notify user that the account has been deleted')
        let temp = props.userList.data.data.filter(item => item.id !== props.id)
        let newUserList = {
          data: {
            data: temp
          }
        }
        props.setUserList(newUserList)
      } else {
        setTitle('Failed Delete User')
        setMessage(resp.message)
      }
      setSpinner(false)
      setSubmit(false)
      $(dataTarget).modal('hide')
      $(dataTargetSuccess).modal('show')
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
                  <i className="fa fa-exclamation-triangle text-danger icon-width-50"></i>
                </p>
                <p>Are you sure want to Delete User : </p>
                <p>{props.username}</p>
                <p>#{props.id}</p>
                <p>This action once performed can't be reversed</p>
              </div>
            </div>
            <div className="text-center">
            { showSpinner ?
                <Spinner 
                  animation="border" 
                  variant="primary"
                  className="mb-4"
                />
                : ''
              }
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
                  // data-dismiss="modal"
                  // data-toggle="modal"
                  // data-target="#deleteSuccess"
                  onClick={handleDeleteUser}
                  disabled={isSubmit}
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
      id="deleteSuccess"
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
                <p>{title}</p>
                <p>{props.username}</p>
                <p>#{props.id}</p>
                <p>{message}</p>
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