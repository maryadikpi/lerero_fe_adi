import Link from "next/link";
const TabelUserManagement = () => (
  <>
    <div className="row mb-10">
      <div className="col-12">
        <div className="card text-dark card-primary card-outline">
          <div className="card-header border-0">
            <h3 className="card-title">List of User</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                data-toggle="modal"
                data-target="#addGroup"
              >
                <i className="fas fa-file-alt"></i> Import CSV
              </button>

              <button
                type="button"
                className="btn btn-primary btn-sm m-2"
                data-toggle="modal"
                data-target="#addGroup"
              >
                <i className="fas fa-user"></i> Add User
              </button>
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            <table className="table table-striped table-valign-middle text-center">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Avatar</th>
                  <th>Name</th>
                  <th>Username</th>
                  <th>User Group</th>
                  <th>Role</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>251</td>
                  <td>
                    <img
                      src="/public/dist/img/default-150x150.png"
                      alt="Product 1"
                      className="img-circle img-size-32 mr-2"
                    />
                  </td>
                  <td>Makaryo Sregep</td>
                  <td>makaryo132</td>
                  <td>Sales</td>
                  <td>Role</td>
                  <td>Active</td>
                  <td>
                    <center>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#blockUser"
                        className="btn btn-success width-110px btn-sm m-1"
                      >
                        Block
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deleteUser"
                        className="btn btn-danger width-110px btn-sm m-1"
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#changeEmail"
                        className="btn btn-primary width-110px btn-sm m-1"
                      >
                        Change Email
                      </button>
                      <select
                        type="button"
                        className="btn btn-warning width-110px btn-sm m-1"
                      >
                        <option selected="" disabled="" className="white">
                          Change Role
                        </option>
                        <option data-toggle="modal" data-target="#changeRole">
                          Standard User
                        </option>
                        <option data-toggle="modal" data-target="#changeRole">
                          Client Admin
                        </option>
                      </select>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>251</td>
                  <td>
                    <img
                      src="/public/dist/img/default-150x150.png"
                      alt="Product 1"
                      className="img-circle img-size-32 mr-2"
                    />
                  </td>
                  <td>Makaryo Sregep</td>
                  <td>makaryo132</td>
                  <td>Sales</td>
                  <td>Role</td>
                  <td>Active</td>
                  <td>
                    <center>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#blockUser"
                        className="btn btn-success width-110px btn-sm m-1"
                      >
                        Block
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deleteUser"
                        className="btn btn-danger width-110px btn-sm m-1"
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#changeEmail"
                        className="btn btn-primary width-110px btn-sm m-1"
                      >
                        Change Email
                      </button>
                      <select
                        type="button"
                        className="btn btn-warning width-110px btn-sm m-1"
                      >
                        <option selected="" disabled="" className="white">
                          Change Role
                        </option>
                        <option data-toggle="modal" data-target="#changeRole">
                          Standard User
                        </option>
                        <option data-toggle="modal" data-target="#changeRole">
                          Client Admin
                        </option>
                      </select>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>251</td>
                  <td>
                    <img
                      src="/public/dist/img/default-150x150.png"
                      alt="Product 1"
                      className="img-circle img-size-32 mr-2"
                    />
                  </td>
                  <td>Makaryo Sregep</td>
                  <td>makaryo132</td>
                  <td>Sales</td>
                  <td>Role</td>
                  <td>Active</td>
                  <td>
                    <center>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#blockUser"
                        className="btn btn-success width-110px btn-sm m-1"
                      >
                        Block
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deleteUser"
                        className="btn btn-danger width-110px btn-sm m-1"
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#changeEmail"
                        className="btn btn-primary width-110px btn-sm m-1"
                      >
                        Change Email
                      </button>
                      <select
                        type="button"
                        className="btn btn-warning width-110px btn-sm m-1"
                      >
                        <option selected="" disabled="" className="white">
                          Change Role
                        </option>
                        <option data-toggle="modal" data-target="#changeRole">
                          Standard User
                        </option>
                        <option data-toggle="modal" data-target="#changeRole">
                          Client Admin
                        </option>
                      </select>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>251</td>
                  <td>
                    <img
                      src="/public/dist/img/default-150x150.png"
                      alt="Product 1"
                      className="img-circle img-size-32 mr-2"
                    />
                  </td>
                  <td>Makaryo Sregep</td>
                  <td>makaryo132</td>
                  <td>Sales</td>
                  <td>Role</td>
                  <td>Active</td>
                  <td>
                    <center>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#blockUser"
                        className="btn btn-success width-110px btn-sm m-1"
                      >
                        Block
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deleteUser"
                        className="btn btn-danger width-110px btn-sm m-1"
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#changeEmail"
                        className="btn btn-primary width-110px btn-sm m-1"
                      >
                        Change Email
                      </button>
                      <select
                        type="button"
                        className="btn btn-warning width-110px btn-sm m-1"
                      >
                        <option selected="" disabled="" className="white">
                          Change Role
                        </option>
                        <option data-toggle="modal" data-target="#changeRole">
                          Standard User
                        </option>
                        <option data-toggle="modal" data-target="#changeRole">
                          Client Admin
                        </option>
                      </select>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>251</td>
                  <td>
                    <img
                      src="/public/dist/img/default-150x150.png"
                      alt="Product 1"
                      className="img-circle img-size-32 mr-2"
                    />
                  </td>
                  <td>Makaryo Sregep</td>
                  <td>makaryo132</td>
                  <td>Sales</td>
                  <td>Role</td>
                  <td>Active</td>
                  <td>
                    <center>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#blockUser"
                        className="btn btn-success width-110px btn-sm m-1"
                      >
                        Block
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deleteUser"
                        className="btn btn-danger width-110px btn-sm m-1"
                      >
                        Delete
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#changeEmail"
                        className="btn btn-primary width-110px btn-sm m-1"
                      >
                        Change Email
                      </button>
                      <select
                        type="button"
                        className="btn btn-warning width-110px btn-sm m-1"
                      >
                        <option selected="" disabled="" className="white">
                          Change Role
                        </option>
                        <option data-toggle="modal" data-target="#changeRole">
                          Standard User
                        </option>
                        <option data-toggle="modal" data-target="#changeRole">
                          Client Admin
                        </option>
                      </select>
                    </center>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default TabelUserManagement;
