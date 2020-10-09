import Link from "next/link";
import React, { useState } from "react";
import { Popover, OverlayTrigger, Button, Modal } from "react-bootstrap";

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

function TabelDetailGroup() {
  const [addGroup, addGroupShow] = useState(false);
  const closeAddGroup = () => addGroupShow(false);
  const openAddGroup = () => addGroupShow(true);

  const [addUser, addUserGroup] = useState(false);
  const closeAddUserGroup = () => addUserGroup(false);
  const openAdduserGroup = () => addUserGroup(true);

  return (
    <>
      <div className="row mb-10">
        <div className="col-12">
          <div className="card text-dark card-primary card-outline">
            <div className="card-header border-0">
              <h3 className="card-title">Latest User Activity</h3>
              <div className="card-tools">
                <Button
                  onClick={openAddGroup}
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
                  <tr>
                    <td>1</td>
                    <td>
                      <i className="fa fa-shield-alt"></i>
                    </td>
                    <td onClick={openAdduserGroup}>
                      <a>Sales</a>
                    </td>
                    <td>12</td>
                    <td>
                      <span className="right badge badge-success">Active</span>
                    </td>
                    <td>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-danger width-80px btn-sm"
                      >
                        Deactivate
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <i className="fa fa-home"></i>
                    </td>
                    <td onClick={openAdduserGroup}>
                      <a>Finance</a>
                    </td>
                    <td>15</td>
                    <td>
                      <span className="right badge badge-success">Active</span>
                    </td>
                    <td>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-danger width-80px btn-sm"
                      >
                        Deactivate
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <i className="fa fa-briefcase"></i>
                    </td>
                    <td onClick={openAdduserGroup}>
                      <a>Warehouse</a>
                    </td>
                    <td>20</td>
                    <td>
                      <span className="right badge badge-success">Active</span>
                    </td>
                    <td>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-danger width-80px btn-sm"
                      >
                        Deactivate
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <i className="fa fa-dollar-sign"></i>
                    </td>
                    <td onClick={openAdduserGroup}>
                      <a>Engineer</a>
                    </td>
                    <td>26</td>
                    <td>
                      <span className="right badge badge-danger">Inactive</span>
                    </td>
                    <td>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-success width-80px btn-sm"
                      >
                        Publish
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>
                      <i className="fa fa-wrench"></i>
                    </td>
                    <td onClick={openAdduserGroup}>
                      <a>Executive</a>
                    </td>
                    <td>12</td>
                    <td>
                      <span className="right badge badge-danger">Inactive</span>
                    </td>
                    <td>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-success width-80px btn-sm"
                      >
                        Publish
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <Modal
        size="md"
        show={addGroup}
        onHide={closeAddGroup}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Create User Group
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="modal-body">
            <div className="row align-center">
              <div className="col-12">
                <label htmlFor="groupName" className="container-fluid">
                  User Group's Name
                </label>
                <input
                  id="groupName"
                  type="text"
                  className="form-control border-top-0 border-right-0 border-left-0"
                  placeholder="Type user's group name"
                />
                <label htmlFor="groupIcon" className="container-fluid mt-5">
                  Select Icon
                </label>
                <OverlayTrigger
                  trigger="click"
                  placement="right"
                  overlay={popover}
                >
                  <Button variant="light" className="ml-2">
                    <div id="icon">
                      <i className="fas fa-book"></i>
                      <font className="ml-2">Book</font>
                    </div>
                  </Button>
                </OverlayTrigger>
              </div>
            </div>
            <br />

            <div className="row mb-5 mt-4">
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
                  className="btn width-90 btn-sm btn-primary"
                >
                  Create User Group
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>

      <Modal size="lg" show={addUser} onHide={closeAddUserGroup}>
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Create User Group
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
                  onClick={closeAddUserGroup}
                  className="btn btn-sm btn-danger width-90 float-right"
                >
                  Cancel
                </Button>
              </div>
              <div className="col-6">
                <Button
                  onClick={closeAddUserGroup}
                  className="btn width-90 btn-sm btn-primary"
                  data-target="#confimSave"
                  data-toggle="modal"
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
        id="actionBtn"
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
                  <p>Are you sure want to Deactivate User Group : </p>
                  <p>Sales</p>
                  <p>#1</p>
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
                    data-target="#actionMessage"
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
        id="actionMessage"
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
                    <i className="fa fa-check-circle text-success icon-width-50"></i>
                  </p>
                  <p>Success Deactivate User Group</p>
                  <p>Sales</p>
                  <p>#1</p>
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

export default TabelDetailGroup;
