import React, { useState, useEffect } from "react";
import { Button, Modal, Dropdown } from "react-bootstrap";
export default function addUserToGroup(props) {
    const styleInfo = {
        paddingRight:'10px'
      }
    const [searchText, setSearchText] = useState('')
    function confirmAddUser() {
        props.setShow(false)
        $('#confimSave').modal('show')
    }

    let searchUser = (event) => {
        let keyword = event.target.value
        console.log(keyword)
    }

    const searchResult = () => { 
        
        return (
            <div style={{zIndex: 9999}}>
                <ul>
                    <li style={{position:'relative'}}>
                        <span style={styleInfo}>Name</span>
                        <span style={styleInfo}>Age</span>
                        <span style={styleInfo}>Countri</span>
                    </li>
                </ul>
            </div>
        )
    }

    let searchResult1 

    useEffect(() => {
        searchResult1 = () => {return 'Search Result'}
    })

    return (
        <>
            <Modal size="lg" show={props.show} onHide={() => props.setShow(false)}>
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
                                
                                    <Dropdown.Menu show={true}>
                                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                    </Dropdown.Menu>
                                
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
                                        <tr>
                                            <td>
                                            <input type="checkbox" className="mr-2" /> Yes
                                            </td>
                                            <td>2</td>
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
                                        <tr>
                                            <td>
                                            <input type="checkbox" className="mr-2" /> Yes
                                            </td>
                                            <td>3</td>
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
                                        <tr>
                                            <td>
                                            <input type="checkbox" className="mr-2" /> Yes
                                            </td>
                                            <td>4</td>
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
                                        <tr>
                                            <td>
                                            <input type="checkbox" className="mr-2" /> Yes
                                            </td>
                                            <td>5</td>
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
                            {searchResult1}
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
        </>
    )
}