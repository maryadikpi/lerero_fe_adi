import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Popover, OverlayTrigger, Button, Modal } from "react-bootstrap";

import {kpiFetch} from 'kpi_helper'
import {GET_ALL_USER_GROUP, GET_ALL_ROLES} from 'config/const_api_url'
import AddUserGroup from '../modal/modalAddUserGroup'
import RowUserGroup from './row_userGroup'

var icon = ["fa-book", "fa-users"];

function capitalizeFirstLetter(string) {
  string = string.toLowerCase();
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const popover = (
  <Popover id="popover-basic">
    <Popover.Title as="h3">Select Icon</Popover.Title>
    <Popover.Content>
      <i className="fas fa-book m-2" onClick={() => selectIcon("book")}></i>
      <i className="fas fa-home m-2" onClick={() => selectIcon("home")}></i>
      <i className="fas fa-users m-2" onClick={() => selectIcon("users")}></i>
      <i className="fas fa-wrench m-2" onClick={() => selectIcon("wrench")}></i>
      <i
        className="fas fa-dollar-sign m-2"
        onClick={() => selectIcon("dollar-sign")}
      ></i>
    </Popover.Content>
  </Popover>
);

function selectIcon(id) {
  $("#icon").html(
    '<i class="fa fa-' +
      id +
      '"></i> <font className="ml-2">' +
      capitalizeFirstLetter(id) +
      "</font>"
  );
}

export default function TabelDetailGroup(props) {  
  var groupRow = []




  if (props.groupList.data) {
    groupRow = props.groupList.data?.data.map(
      (item, index) => {
        return <RowUserGroup 
                  key={index} 
                  data={item}  
                  setGroupList={props.setGroupList}
                  setGroupData={props.setGroupData}
                />
      }
    )
  }

  const closeAddGroup = () => addGroupShow(false);
  const openAddGroup = () => addGroupShow(true);

  const [addUser, addUserGroup] = useState(false);


  return (
    <>
      <div className="row mb-10">
        <div className="col-12">
          <div className="card text-dark card-primary card-outline">
            <div className="card-header border-0">
              <h3 className="card-title">Latest User Activity</h3>
              <div className="card-tools">
                <Button
                  data-toggle="modal"
                  data-target="#addUserGroup"
                  className="btn btn-primary btn-sm"
                >
                  <i className="fas fa-users"></i> Add Group
                </Button>
              </div>
            </div>
            <div className="card-body table-responsive p-0">
              <table className="table text-center table-striped table-valign-middle">
                <thead>
                  <tr>
                    <th width="5%">Id</th>
                    <th>Icon</th>
                    <th>User Group Name</th>
                    <th>Total Member</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {groupRow}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <AddUserGroup 
        groupList={props.groupList}
        setGroupList={props.setGroupList}
      />
  </>
)
}
