import Link from "next/link";
const TableQuizManagement = () => (
  <>
    <div className="row mb-10">
      <div className="col-12">
        <div className="card text-dark card-primary card-outline">
          <div className="card-header border-0">
            <h3 className="card-title">List of Quiz</h3>
            <div className="card-tools">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                data-toggle="modal"
                data-target="#addGroup"
              >
                <i className="fas fa-shield-alt"></i> Add New Quiz
              </button>
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            <table className="table text-center table-striped table-valign-middle">
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
                <tr>
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
                        data-target="#deactiveQuiz"
                        className="btn btn-warning width-100px btn-sm m-1"
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deleteQuiz"
                        className="btn btn-danger width-80px btn-sm m-1"
                      >
                        Delete
                      </button>
                    </center>
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
                        data-target="#deactiveQuiz"
                        className="btn btn-warning width-100px btn-sm m-1"
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deleteQuiz"
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
                        data-target="#deactiveQuiz"
                        className="btn btn-warning width-100px btn-sm m-1"
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deleteQuiz"
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
                        data-target="#deactiveQuiz"
                        className="btn btn-warning width-100px btn-sm m-1"
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deleteQuiz"
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
                        data-target="#deactiveQuiz"
                        className="btn btn-warning width-100px btn-sm m-1"
                      >
                        Deactivate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#deleteQuiz"
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

export default TableQuizManagement;
