import Link from "next/link";
const TableLearningPathManagement = () => (
  <>
    <div className="row mb-10">
      <div className="col-12">
        <div className="card text-dark card-primary card-outline">
          <div className="card-header border-0">
            <h3 className="card-title">List of Learning Paths</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-toggle="modal"
                data-target="#addGroup"
              >
                <i className="fas fa-shield-alt"></i> Add New Learning Paths
              </button>
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            <table className="table text-center table-valign-middle">
              <thead>
                <tr>
                  <th width="5%">Id</th>
                  <th>Badge name</th>
                  <th>User Group</th>
                  <th>Requirement</th>
                  <th>Status</th>
                  <th>Created On</th>
                  <th>Created By</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className="accordion-toggle collapsed"
                  id="accordion1"
                  data-toggle="collapse"
                  data-parent="#accordion1"
                  href="#collapseOne"
                >
                  <td>1</td>
                  <td>Learning Path 1</td>
                  <td>
                    <i className="fas fa-shield-alt m-1"></i>
                    <i className="fas fa-home m-1"></i>
                    <i className="fas fa-tasks m-1"></i>
                  </td>
                  <td>N/A</td>
                  <td>Published</td>
                  <td>23/11/20</td>
                  <td>Thomas Wayne</td>
                  <td>
                    <center>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-success width-80px btn-sm m-1"
                      >
                        Duplicate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-primary width-80px btn-sm m-1"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deactiveLearningPath"
                        className="btn btn-warning width-100px btn-sm m-1"
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deleteLearningPath"
                        className="btn btn-danger width-80px btn-sm m-1"
                      >
                        Delete
                      </button>
                    </center>
                  </td>
                </tr>
                <tr className="hide-table-padding">
                  <td></td>
                  <td colSpan="3">
                    <div id="collapseOne" className="collapse in p-3">
                      <div className="row">
                        <div className="col-2">label</div>
                        <div className="col-6">value 1</div>
                      </div>
                      <div className="row">
                        <div className="col-2">label</div>
                        <div className="col-6">value 2</div>
                      </div>
                      <div className="row">
                        <div className="col-2">label</div>
                        <div className="col-6">value 3</div>
                      </div>
                      <div className="row">
                        <div className="col-2">label</div>
                        <div className="col-6">value 4</div>
                      </div>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Learning Path 2</td>
                  <td>
                    <i className="fas fa-shield-alt m-1"></i>
                    <i className="fas fa-home m-1"></i>
                    <i className="fas fa-tasks m-1"></i>
                  </td>
                  <td>N/A</td>
                  <td>Published</td>
                  <td>23/11/20</td>
                  <td>Thomas Wayne</td>
                  <td>
                    <center>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-success width-80px btn-sm m-1"
                      >
                        Duplicate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-primary width-80px btn-sm m-1"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deactiveLearningPath"
                        className="btn btn-warning width-100px btn-sm m-1"
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deleteLearningPath"
                        className="btn btn-danger width-80px btn-sm m-1"
                      >
                        Delete
                      </button>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Learning Path 3</td>
                  <td>
                    <i className="fas fa-shield-alt m-1"></i>
                    <i className="fas fa-home m-1"></i>
                    <i className="fas fa-tasks m-1"></i>
                  </td>
                  <td>N/A</td>
                  <td>Published</td>
                  <td>23/11/20</td>
                  <td>Thomas Wayne</td>
                  <td>
                    <center>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-success width-80px btn-sm m-1"
                      >
                        Duplicate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-primary width-80px btn-sm m-1"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deactiveLearningPath"
                        className="btn btn-warning width-100px btn-sm m-1"
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deleteLearningPath"
                        className="btn btn-danger width-80px btn-sm m-1"
                      >
                        Delete
                      </button>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Learning Path 4</td>
                  <td>
                    <i className="fas fa-shield-alt m-1"></i>
                    <i className="fas fa-home m-1"></i>
                    <i className="fas fa-tasks m-1"></i>
                  </td>
                  <td>N/A</td>
                  <td>Published</td>
                  <td>23/11/20</td>
                  <td>Thomas Wayne</td>
                  <td>
                    <center>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-success width-80px btn-sm m-1"
                      >
                        Duplicate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-primary width-80px btn-sm m-1"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deactiveLearningPath"
                        className="btn btn-warning width-100px btn-sm m-1"
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deleteLearningPath"
                        className="btn btn-danger width-80px btn-sm m-1"
                      >
                        Delete
                      </button>
                    </center>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Learning Path 5</td>
                  <td>
                    <i className="fas fa-shield-alt m-1"></i>
                    <i className="fas fa-home m-1"></i>
                    <i className="fas fa-tasks m-1"></i>
                  </td>
                  <td>N/A</td>
                  <td>Published</td>
                  <td>23/11/20</td>
                  <td>Thomas Wayne</td>
                  <td>
                    <center>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-success width-80px btn-sm m-1"
                      >
                        Duplicate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#actionBtn"
                        className="btn btn-primary width-80px btn-sm m-1"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deactiveLearningPath"
                        className="btn btn-warning width-100px btn-sm m-1"
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deleteLearningPath"
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

export default TableLearningPathManagement;
