import React, { useState, useEffect } from "react"
import { Button, Modal, Dropdown, Table, Spinner, Toast } from "react-bootstrap"

import ModalSearchUser from "./modalSearchUser"
import kpiHelper, {kpiFetch} from 'kpi_helper'
import {
    USER_GROUP_BASE, 
    GET_USERS_IN_GROUP,
    GET_USER_NOT_IN_GROUP,
    UPDATE_USER_GROUP
} from 'config/const_api_url'

function RowUserGroup(props) {
    const [cbStatus, setCbStatus] = useState(true)

    function handleChangeCB() {
        if (!cbStatus) {
            // ADD USER
            const index = props.ids.indexOf(props.data.id);
            if (index > -1) {
                // ID already exists
                //props.ids.splice(index, 1);
            } else {
                props.ids.push(props.data.id)
            }
        } else {
            // REMOVE USER
            const index = props.ids.indexOf(props.data.id);
            if (index > -1) {
                props.ids.splice(index, 1);
            }
            console.log('REMOVE AFTER')
            console.log(props.ids)
        }
        setCbStatus(!cbStatus)
        console.log('beofre set set set')
            console.log(props.ids)
        props.setGroupIds(props.ids)
    }

    useEffect(() => {
        props.setGroupIds(props.ids)
    }, [])

    return (
        <tr key={props.index}>
            <td>
                <input 
                type="checkbox" 
                className="mr-2" 
                defaultChecked={cbStatus} 
                onChange={(e) => {handleChangeCB(e, props.data.id)}}/> 
                Yes
            </td>
            <td>{props.data.id}</td>
            <td>
                <img
                    src="../../dist/img/default-150x150.png"
                    alt="Product 1"
                    className="img-circle img-size-32 mr-2"
                />
            </td>
            <td>{props.data.first_name} {props.data.last_name}</td>
            <td>{props.data.username}</td>
            <td>{props.data.status}</td>
        </tr>
    )
}


export default function addUserToGroup(props) {
    var ids = []
    const styleInfo = {
        paddingRight:'10px'
      }
    const [initFetch, setInitFetch] = useState(false)
    const [searchText, setSearchText] = useState('')
    const [showSearchModal, setSearchModal] = useState(false)
    const [groupUserIds, setGroupUserIds] = useState([])
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

    let searchUser = (event) => {
        let keyword = event.target.value
        setSearchModal(true)
        setSearchText(keyword)
    }

    const searchResult = userNotInGroupList.length > 0 ? userNotInGroupList.filter((data) => {
        if (searchText == '' || searchText == null) return ''
        else if (data.first_name.toLocaleLowerCase().includes(searchText) || data.last_name.toLocaleLowerCase().includes(searchText)) return data
    }).map((data, index) => {
        return (
            <ModalSearchUser 
                index={index}
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
            ids.push(item.id)
            return (
                <RowUserGroup
                    key={index}
                    data={item}
                    ids={ids}
                    groupIds={groupUserIds}
                    setGroupIds={setGroupUserIds}
                />
            )
        }
    }) : []
    
    useEffect(() => {
        if (!initFetch && props.groupData.group.id) {
            initialize()
            setInitFetch(true)
        }
    })

    const handleModalHide = () => {
        props.setShow(false)
        setInitFetch(false)
    }

    function confirmAddUser() {
        props.setShow(false)
        $('#confimSave').modal('show')
    }

    const [errorMsg, setErrorMsg] = useState('')
    const [showSpinner, setSpinner] = useState(false)
    const [isSubmit, setSubmit] = useState(false)
    const [showToast, setToast] = useState(false)


    const handleUpdateGroup = async() => {
        setSubmit(true)
        setSpinner(true)
        const resp = await kpiFetch('PUT', USER_GROUP_BASE+props.groupData.group.id+UPDATE_USER_GROUP, {'users': groupUserIds})
        if (resp.status) {
            //setUserGroupList(resp.data.data)
            $('#confirmSuccess').modal('show')
            $('#confimSave').modal('hide')
        } else {
            setSubmit(false)
            setSpinner(false)
            setToast(true)
            setErrorMsg(resp.message)
        }
        
    }

    return (
        <>
            <Modal size="lg" show={props.show} onHide={handleModalHide} backdrop={false}>
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
                                        {userGroup}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <br />

                        <div className="row mb-5">
                            <div className="col-6">
                            <Button
                                onClick={handleModalHide}
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
                data-backdrop="static"
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
                                disabled={isSubmit}
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
                                    <p>Are you sure want to update : </p>
                                    <p>{props.groupData.group.name}</p>
                                    <p>#{props.groupData.group.id}</p>
                                    { showSpinner ?
                                        <Spinner 
                                            animation="border" 
                                            variant="primary"
                                            className="mb-4"
                                        />
                                        : ''
                                    }
                                </div>
                            </div>
                            <br />

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
                                        className="btn width-90 btn-sm btn-primary"
                                        onClick={handleUpdateGroup}
                                        disabled={isSubmit}
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
                                    <p>Success Update</p>
                                    <p>{props.groupData.group.name}</p>
                                    <p>#{props.groupData.group.id}</p>
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
                    <strong className="mr-auto" style={{color: 'red'}}>Create Group Error</strong>
                </Toast.Header>
                <Toast.Body> <span style={{color: 'black'}}>{errorMsg}</span></Toast.Body>
          </Toast>
        </>
    )
}