import Link from "next/link";
const TabelDetailGroup = () => (
  <>
    <div className="row mb-10">
      <div className="col-12">
        <div className="card text-dark card-primary card-outline">
          <div className="card-header border-0">
            <h3 className="card-title">List of User</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-toggle="modal"
                data-target="#addGroup"
              >
                <i className="fas fa-users"></i> Add User
              </button>
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

    <div
      className="modal fade"
      id="addGroup"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="absolute left-10 mt-4 width-70 text-dark" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h5 className="modal-title width-100">Add User to Group</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
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
                <table className="table text-center table-striped table-valign-middle">
                  <thead>
                    <tr>
                      <th width="8%">Add?</th>
                      <th width="5%">Id</th>
                      <th>Avatar</th>
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
                  data-target="#confimSave"
                  data-toggle="modal"
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
                <p>Are you sure want to Remove User : </p>
                <p>Makaryo Sregep</p>
                <p>#251</p>
                <p>from user group Sales</p>
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
                  data-target="#removeSuccess"
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
      id="removeSuccess"
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
                <p>Success Remove User</p>
                <p>Makaryo Sregep</p>
                <p>#251</p>
                <p>from user group Sales</p>
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

export default TabelDetailGroup;
