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
  </>
);

export default TabelDetailGroup;
