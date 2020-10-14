import Link from "next/link";
const TableTaskManagement = () => (
  <>
    <div className="row mb-10">
      <div className="col-12">
        <div className="card text-dark card-primary card-outline">
          <div className="card-header border-0">
            <h3 className="card-title">List of Task</h3>
            <div className="card-tools">
              <Link href="/admin/task/add/">
                <button type="button" className="btn btn-primary btn-sm">
                  <i className="fas fa-shield-alt"></i> Add New Task
                </button>
              </Link>
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            <table className="table text-center table-striped table-valign-middle">
              <thead>
                <tr>
                  <th width="5%">Id</th>
                  <th>Task Name</th>
                  <th>Point</th>
                  <th>Learning Path</th>
                  <th>Type</th>
                  <th>Member</th>
                  <th>Created On</th>
                  <th>Created By</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Your Profile</td>
                  <td>10</td>
                  <td>101 Introduction</td>
                  <td>Individual</td>
                  <td>-</td>
                  <td>23/11/20</td>
                  <td>Thomas Wayne</td>
                  <td>Published</td>
                  <td>
                    <center>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#duplicateTask"
                        className="btn btn-success width-80px btn-sm m-1"
                      >
                        Duplicate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#editTask"
                        className="btn btn-primary width-80px btn-sm m-1"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deactiveTask"
                        className="btn btn-warning width-100px btn-sm m-1"
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deleteTask"
                        className="btn btn-danger width-80px btn-sm m-1"
                      >
                        Delete
                      </button>
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

export default TableTaskManagement;
