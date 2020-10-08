import Link from "next/link";
import React, { useState } from "react";
import { Popover, OverlayTrigger, Button, Modal } from "react-bootstrap";

function TabelDetailGroup() {
  const [addGroup, addGroupShow] = useState(false);
  return (
    <>
      <div className="row mb-10">
        <div className="col-12">
          <div className="card text-dark card-primary card-outline">
            <div className="card-header border-0">
              <h3 className="card-title">List of User</h3>
              <div className="card-tools">
                <Button
                  onClick={() => addGroupShow(true)}
                  className="btn btn-primary btn-sm"
                >
                  <i className="fas fa-users"></i> Add User
                </Button>
              </div>
            </div>
            <div className="card-body table-responsive p-0">
              <table className="table text-center table-striped table-valign-middle">
                <thead>
                  <tr>
                    <th width="5%">Id</th>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Learning Path</th>
                    <th>Points</th>
                    <th>Badges</th>
                    <th>Kudos</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
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
                    <td>101 Introduction</td>
                    <td>20</td>
                    <td>
                      <i className="fas fa-shield-alt"></i>
                    </td>
                    <td>3</td>
                    <td>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionMessage"
                        className="btn btn-primary width-100px mr-2 btn-sm"
                      >
                        More Details
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-danger width-100px btn-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
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
                    <td>101 Introduction</td>
                    <td>20</td>
                    <td>
                      <i className="fas fa-shield-alt"></i>
                    </td>
                    <td>3</td>
                    <td>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionMessage"
                        className="btn btn-primary width-100px mr-2 btn-sm"
                      >
                        More Details
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-danger width-100px btn-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
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
                    <td>101 Introduction</td>
                    <td>20</td>
                    <td>
                      <i className="fas fa-shield-alt"></i>
                    </td>
                    <td>4</td>
                    <td>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionMessage"
                        className="btn btn-primary width-100px mr-2 btn-sm"
                      >
                        More Details
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-danger width-100px btn-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
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
                    <td>101 Introduction</td>
                    <td>20</td>
                    <td>
                      <i className="fas fa-shield-alt"></i>
                    </td>
                    <td>3</td>
                    <td>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionMessage"
                        className="btn btn-primary width-100px mr-2 btn-sm"
                      >
                        More Details
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-danger width-100px btn-sm"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
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
                    <td>101 Introduction</td>
                    <td>20</td>
                    <td>
                      <i className="fas fa-shield-alt"></i>
                    </td>
                    <td>3</td>
                    <td>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionMessage"
                        className="btn btn-primary width-100px mr-2 btn-sm"
                      >
                        More Details
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-danger width-100px btn-sm"
                      >
                        Remove
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
        size="lg"
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
                  onClick={() => addGroupShow(false)}
                  className="btn btn-sm btn-danger width-90 float-right"
                >
                  Cancel
                </Button>
              </div>
              <div className="col-6">
                <Button
                  onClick={() => addGroupShow(false)}
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
    </>
  );
}

export default TabelDetailGroup;
