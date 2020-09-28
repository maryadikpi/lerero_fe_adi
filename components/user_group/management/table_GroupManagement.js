import Link from "next/link";
const TabelDetailGroup = () => (
  <>
    <div className="row mb-10">
      <div className="col-12">
        <div className="card text-dark card-primary card-outline">
          <div className="card-header border-0">
            <h3 className="card-title">Latest User Activity</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-toggle="modal"
                data-target="#addGroup"
              >
                <i className="fas fa-users"></i> Add Group
              </button>
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

    <div
      className="modal fade"
      id="addGroup"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog text-dark" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h5 className="modal-title width-100">Create User Group</h5>
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
              <div className="col-12">
                <label htmlFor="groupName" className="container-fluid  p-2">
                  User Group's Name
                </label>
                <input
                  id="groupName"
                  type="text"
                  className="form-control border-top-0 border-right-0 border-left-0"
                  placeholder="Type user's group name"
                />
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
                  className="btn width-90 btn-sm btn-primary"
                >
                  Create User Group
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

export default TabelDetailGroup;
