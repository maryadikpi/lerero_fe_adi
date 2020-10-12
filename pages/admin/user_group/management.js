import React, { useState, useEffect } from "react";

import Header from "components/admin/header";
import Navbar from "components/admin/navbar";
import Sidebar from "components/admin/sidebar";

import TableGroupManagement from "components/user_group/management/table_GroupManagement";
import DeactiveUserGroup from "components/user_group/modal/modalDeactiveUserGroup"
import AddUserToGroup from "components/user_group/modal/modalAddUserToGroup"
import {kpiFetch} from 'kpi_helper'
import {GET_ALL_USER_GROUP, GET_ALL_ROLES} from 'config/const_api_url'


function UserGroupManagement(props) { 
  const [groupList, setGroupList] = useState([])
  const [showAddUserToGroup, setAddUserToGroup] = useState(false);
  const [groupData, setGroupData] = useState({
    group: {
      id: '',
      name: '',
      icon: ''
    },
    newRoleId: '',
    newRoleText: ''
  })

  async function initialFetch() {
    const groupList = await kpiFetch('GET', GET_ALL_USER_GROUP)
    if (groupList.status) {
      setGroupList(groupList)
    }
  }

  useEffect(
    () => {
      if (!props.groupList?.status) {
        initialFetch()
      } else {
        setGroupList(props.groupList)
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
                  <h1 className="m-0 text-dark">User Group Management</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="#">User Group</a>
                      </li>
                      <li className="breadcrumb-item active">Management</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>

          <div className="content">
            <div className="container-fluid">
              <TableGroupManagement 
                groupList={groupList}
                setGroupList={setGroupList}
                setGroupData={setGroupData}
                show={showAddUserToGroup}
                setShow={setAddUserToGroup}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <DeactiveUserGroup 
      groupList={groupList}
      setGroupList={setGroupList}
      groupData={groupData}
    />
    <AddUserToGroup
      groupData={groupData}
      show={showAddUserToGroup}
      setShow={setAddUserToGroup}
    />
  </>
)
}

UserGroupManagement.getInitialProps = async (ctx) => {
  const groupList = await kpiFetch('GET', GET_ALL_USER_GROUP)
  return {groupList}
}


export default UserGroupManagement;
