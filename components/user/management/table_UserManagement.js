import Link from "next/link";
import {useState, useEffect} from 'react'

import UserRow from './row_UserManagement'
import ModalAdduser from '../modal/modalAddUser'

import {kpiFetch} from 'kpi_helper'
import {GET_ALL_USERS} from 'config/const_api_url'

function TabelUserManagement(props){
  // useEffect here is a temporary solution
  // because CPanel still can't use SSR
  // initial data id: null, avatar: null, first_name: '', last_name: '', username: '', role: '', status: 0
  const [userData, setUserData] = useState([])

  async function initialFetch() {
    const json =  await kpiFetch('Get', GET_ALL_USERS)
      if (json.status) {
        setUserData(json.data.data)
      }
  }

  useEffect(
     () => {
      initialFetch()
    }, []
  )
  const userRow = userData.map((dData) => <UserRow data={dData}/>)
  return (
    <>
    <div className="row mb-10">
      <div className="col-12">
        <div className="card text-dark card-primary card-outline">
          <div className="card-header border-0">
            <h3 className="card-title">List of User</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                data-toggle="modal"
                data-target="#addGroup"
              >
                <i className="fas fa-file-alt"></i> Import CSV
              </button>

              <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                data-toggle="modal"
                data-target="#addUserModal"
              >
                <i className="fas fa-user"></i> Add User
              </button>
            </div>
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
                {userRow}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <ModalAdduser />
  </>
  )
};

// We will gonna use this function when SSR is on in CPANEL

// TabelUserManagement.getInitialProps = async (ctx) => {
//   ///const json = await kpiFetch('Get', GET_ALL_USERS)
//   const userData = {
//     hello: 'test'
//   }
//   return {props: {userData}}
// }


export default TabelUserManagement;
