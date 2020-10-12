import {useState, useEffect} from 'react'
import {Spinner} from "react-bootstrap"

import Header from "components/admin/header";
import Navbar from "components/admin/navbar";
import Sidebar from "components/admin/sidebar";

import TableUserManagement from "components/user/management/table_UserManagement";

import {kpiFetch} from 'kpi_helper'
import {GET_ALL_USERS, GET_ALL_ROLES} from 'config/const_api_url'


function UserManagement(props) {
  const [userList, setUserList] = useState([])
  const [roleList, setRoleList] = useState([])
  const [showSpinner, setSpinner] = useState(false)
  const [spinnerProps, setSpinnerProps] = useState({position:'absolute', top: '50%', left: '45%', zIndex:'9999'})

  async function initialFetch() {
    const userList = await kpiFetch('GET', GET_ALL_USERS)
    if (userList.status) {
      setUserList(userList)
    }

    const roleList = await kpiFetch('GET', GET_ALL_ROLES)
    if (roleList.status) {
      setRoleList(roleList)
    }
  }
  
  useEffect(
    () => {
      if (!props.userList.status) {
        initialFetch()
      } else {
        setUserList(props.userList)
        setRoleList(props.roleList)
      }
    }, []
  )
  
  return (
  <>
    <Header />
    <Navbar />
    <section className="hold-transition sidebar-mini">
      <div className="wrapper bg-dark">
        <Sidebar />
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0 text-dark">User Management</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">User</a>
                    </li>
                    <li className="breadcrumb-item active">Management</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container-fluid">
              <TableUserManagement 
                userList={userList} 
                roleList={roleList} 
                setUserList={setUserList}
              />
            </div>
          </div>
        </div>
      </div>
      { showSpinner ?
        <Spinner 
          animation="border" 
          variant="primary" 
          style={spinnerProps}
        />
        : ''
      }
    </section>
  </>
  )
};

// We will gonna use this function when SSR is on in CPANEL
UserManagement.getInitialProps = async (ctx) => {
  const userList = await kpiFetch('GET', GET_ALL_USERS)
  const roleList = await kpiFetch('GET', GET_ALL_ROLES)
  return {userList, roleList}
}


export default UserManagement;
