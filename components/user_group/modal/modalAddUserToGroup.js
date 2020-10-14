import React, { useState, useEffect } from "react"
import { Button, Modal, Dropdown, Table } from "react-bootstrap"

import ModalSearchUser from "./modalSearchUser"
import kpiHelper, {kpiFetch} from 'kpi_helper'
import {
    USER_GROUP_BASE, 
    GET_USERS_IN_GROUP,
    GET_USER_NOT_IN_GROUP,
    ADD_USER_TO_GROUP
} from 'config/const_api_url'

export default function addUserToGroup(props) {
    const styleInfo = {
        paddingRight:'10px'
      }
    const [initFetch, setInitFetch] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [showSearchModal, setSearchModal] = useState(false)
    const [userGroupList, setUserGroupList] = useState([])
    const [userNotInGroupList, setUserNotInGroupList] = useState([])

    async function initialize() {
        if (props.groupData.group.id) {
            const resp = await kpiFetch('GET', USER_GROUP_BASE+props.groupData.group.id+GET_USERS_IN_GROUP)
            if (resp.status) {
                setUserGroupList(resp.data.data)
            }
            const respNotInGroup = await kpiFetch('GET', USER_GROUP_BASE+props.groupData.group.id+GET_USER_NOT_IN_GROUP)
            if (respNotInGroup.status) {
                setUserNotInGroupList(respNotInGroup.data.data)
            }
        }
    }


    function confirmAddUser() {
        props.setShow(false)
        $('#confimSave').modal('show')
    }

    let searchUser = (event) => {
        let keyword = event.target.value
        setSearchModal(true)
        setSearchText(keyword)
        console.log(keyword)
    }

    const searchResult = userNotInGroupList.length > 0 ? userNotInGroupList.filter((data) => {
        if (searchText == '' || searchText == null) return ''
        else if (data.first_name.toLocaleLowerCase().includes(searchText) || data.last_name.toLocaleLowerCase().includes(searchText)) return data
    }).map((data, index) => {
        return (
            <ModalSearchUser 
                key={index}
                data={data}
                userGroup={userGroupList}
                setUserGroup={setUserGroupList}
                userNotGroup={userNotInGroupList}
                setUserNotGroup={setUserNotInGroupList}
            />
        )
    }) : []

    const userGroup = userGroupList.length > 0 ? userGroupList.map((item, index) => {
        if (item) {
            return (
                <tr key={index}>
                    <td><input type="checkbox" className="mr-2" defaultChecked={true}/> Yes</td>
                    <td>{item.id}</td>
                    <td>
                        <img
                            src="../../dist/img/default-150x150.png"
                            alt="Product 1"
                            className="img-circle img-size-32 mr-2"
                        />
                    </td>
                    <td>{item.first_name} {item.last_name}</td>
                    <td>{item.username}</td>
                    <td>{item.status}</td>
                </tr>
            )
        }
    }) : []
    
    useEffect(() => {
        if (!initFetch && props.groupData.group.id) {
            initialize()
            setInitFetch(true)
        }
    })

    return (
        <>
            <Modal size="lg" show={props.show} onHide={() => props.setShow(false)} backdrop={false}>
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Add User To Group
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="modal-body p-0">
                        <div className="row align-center">
                            <div className="col-12">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                    <span className="input-group-text bg-white border-0">
                                        <i className="fas fa-search"></i>
                                    </span>
                                    </div>
                                    <input
                                        type="text"
                                        className="form-control border-left-0 border-0"
                                        placeholder="Search Name"
                                        onChange={(e) => searchUser(e)}
                                    />
                                </div>
                                
                                
                            </div>
                            <div className="col-12">
                                <table className="table table-striped table-valign-middle">
                                    <thead>
                                    <tr>
                                        <th width="10%">Add?</th>
                                        <th width="5%">Id</th>
                                        <th width="10%">Avatar</th>
                                        <th>Name</th>
                                        <th>Username</th>
                                        <th>Status</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                            <input type="checkbox" className="mr-2" /> Yes
                                            </td>
                                            <td>1</td>
                                            <td>
                                            <img
                                                src="../../dist/img/default-150x150.png"
                                                alt="Product 1"
                                                className="img-circle img-size-32 mr-2"
                                            />
                                            </td>
                                            <td>Makaryo Sregep</td>
                                            <td>makaryo123</td>
                                            <td>Active</td>
                                        </tr>
                                        {userGroup}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <br />

                        <div className="row mb-5">
                            <div className="col-6">
                            <Button
                                onClick={() => props.setShow(false)}
                                className="btn btn-sm btn-danger width-90 float-right"
                            >
                                Cancel
                            </Button>
                            </div>
                            <div className="col-6">
                            <Button
                                onClick={confirmAddUser}
                                className="btn width-90 btn-sm btn-primary"
                            >
                                Ok
                            </Button>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>

            <div
                className="modal fade"
                id="confimSave"
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
                                    <p>Are you sure want to Add: </p>
                                    <p>3 Users</p>
                                    <p>To New Group?</p>
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
                                        data-target="#confirmSuccess"
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
                id="confirmSuccess"
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
                                    <p>Success Add</p>
                                    <p>3 Users</p>
                                    <p>To New Group</p>
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
        
            <Modal
                size="lg"
                show={showSearchModal}
                onHide={() => setSearchModal(false)}
                keyboard={false}
                autoFocus={false}
                style={{marginTop: '125px'}}
            >
                <Modal.Body>
                    <Table responsive>
                        <tbody>
                            {searchResult}
                        </tbody>
                    </Table>
                </Modal.Body>
                
            </Modal>
        </>
    )
}