import Link from "next/link";
import {useState, useEffect, useRef } from 'react'
import {Spinner, Toast} from "react-bootstrap"

import UserRow from './row_UserManagement'
import ModalAdduser from '../modal/modalAddUser'
import DeleteUserButton from '../modal/modalDeleteUser'
import ChangeUserRole from '../modal/modalChangeUserRole'
import ChangeUserEmail from '../modal/modalChangeUserEmail'

import {kpiFetchFile} from 'kpi_helper'
import {IMPORT_USER_LIST_FILE} from 'config/const_api_url'

function TabelUserManagement(props){
  const [deleteData, setDeleteData] = useState({})
  const [userRoleData, setUserRoleData] = useState({
    user: {
      id: '',
      first_name: '',
      last_name: ''
    },
    newRoleId: '',
    newRoleText: ''
  })

  var userRow = []
  if (props.userList.data) {
    userRow = props.userList.data.data.map(
      (dData, index) => {
        return <UserRow 
                  key={index} 
                  data={dData} 
                  setDeleteData={setDeleteData} 
                  roleList={props.roleList} 
                  setUserRoleData={setUserRoleData}
                />
      }
    )
  }

  /* Process for importing user csv file */
  const [isSubmit, setSubmit] = useState(false)
  const [showSpinner, setSpinner] = useState(false)
  const [showToast, setToast] = useState(false)
  const [respMsg, setRespMsg] = useState('')
  const [headerColor, setHeaderColor] = useState({color: 'green'})
  const [headerTitle, setHeaderTitle] = useState('')

  const inputFile = useRef(null)
  const browseFile = () => {
    inputFile.current.click()
  }

  async function onChangeFile(event) {
      event.stopPropagation()
      event.preventDefault()
      setSubmit(true)
      setSpinner(true)
      var file = event.target.files[0]
      var formData = new FormData();
      formData.append('file', file);
      const resp = await kpiFetchFile('POST', IMPORT_USER_LIST_FILE, formData)
      console.log(resp)
      if (resp.status) {
        setToast(true)
        setHeaderTitle('Import User Success')
        setHeaderColor({color: 'green'})
        setRespMsg(resp.message)
        setSpinner(false)
        setSubmit(false)

        let newUserList = [
          ...props.userList.data.data,
          ...resp.data
        ]
        props.setUserList({
          data: {
            data: newUserList
          }
        })

      } else {
        setToast(true)
        setHeaderTitle('Import User Failed')
        setRespMsg(JSON.stringify(resp.message))
        // setRespMsg("Error")
        setHeaderColor({color: 'red'})
        setSpinner(false)
        setSubmit(false)
      }
  }
  

  return (
    <>
    <div className="row mb-10">
      <div className="col-12">
        <div className="card text-dark card-primary card-outline">
          <div className="card-header border-0">
            <h3 className="card-title">List of User</h3>
            <div className="card-tools">
              <input 
                type='file' 
                id='file' 
                ref={inputFile} 
                style={{display: 'none'}} 
                onChange={(e) => onChangeFile(e)}
              />
              <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                onClick = {browseFile}
                disabled={isSubmit}
              >
                <i className="fas fa-file-alt"></i> Import CSV
              </button>

              <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                data-toggle="modal"
                data-target="#addUserModal"
                disabled={isSubmit}
              >
                <i className="fas fa-user"></i> Add User
              </button>
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
          <div className="card-body table-responsive p-0">
            <table className="table table-striped table-valign-middle text-center">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>User Group</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                { userRow }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <ModalAdduser 
      userList={props.userList}
      setUserList={props.setUserList}
      roleList={props.roleList}
    />
    <DeleteUserButton 
      id={deleteData.id} 
      username={deleteData.username}
      userList={props.userList}
      setUserList={props.setUserList}
    />
    <ChangeUserRole
      userData={userRoleData}
      userList={props.userList}
      setUserList={props.setUserList}
    />
    <ChangeUserEmail
      userData={userRoleData}
    />
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
          <strong className="mr-auto" style={headerColor}>{headerTitle}</strong>
        </Toast.Header>
        <Toast.Body> <span style={{color: 'black'}}>{respMsg}</span></Toast.Body>
    </Toast>
  </>
  )
};
export default TabelUserManagement;
