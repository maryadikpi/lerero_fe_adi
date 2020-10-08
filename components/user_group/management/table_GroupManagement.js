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
  return (
    <>
      <div className="row mb-10">
        <div className="col-12">
          <div className="card text-dark card-primary card-outline">
            <div className="card-header border-0">
              <h3 className="card-title">Latest User Activity</h3>
              <div className="card-tools">
                <Button
                  onClick={() => addGroupShow(true)}
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
                    <Link href="/admin/user_group/detail">
                      <td>
                        <a>Sales</a>
                      </td>
                    </Link>
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
                        Deactive
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <i className="fa fa-home"></i>
                    </td>
                    <Link href="/admin/user_group/detail">
                      <td>
                        <a>Finance</a>
                      </td>
                    </Link>
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
                        Deactive
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <i className="fa fa-briefcase"></i>
                    </td>
                    <Link href="/admin/user_group/detail">
                      <td>
                        <a>Warehouse</a>
                      </td>
                    </Link>
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
                        Deactive
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <i className="fa fa-dollar-sign"></i>
                    </td>
                    <Link href="/admin/user_group/detail">
                      <td>
                        <a>Engineer</a>
                      </td>
                    </Link>
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
                    <Link href="/admin/user_group/detail">
                      <td>
                        <a>Executive</a>
                      </td>
                    </Link>
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
        onHide={() => addGroupShow(false)}
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
                  <p>Are you sure want to Deactive User Group : </p>
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
                  <p>Success Deative User Group</p>
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
