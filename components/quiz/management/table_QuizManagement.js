import Link from "next/link";
const TableQuizManagement = () => (
  <>
    <div className="row mb-10">
      <div className="col-12">
        <div className="card text-dark card-primary card-outline">
          <div className="card-header border-0">
            <h3 className="card-title">List of Quiz</h3>
            <div className="card-tools">
              <Link href="/admin/quiz/add/">
                <button type="button" className="btn btn-primary btn-sm">
                  <i className="fas fa-shield-alt"></i> Add New Quiz
                </button>
              </Link>
            </div>
          </div>
          <div className="card-body table-responsive p-0">
            <table className="table text-center table-striped table-valign-middle">
              <thead>
                <tr>
                  <th width="2%">Id</th>
                  <th>Quiz Name</th>
                  <th>Points</th>
                  <th>Learning Path</th>
                  <th>Milestone</th>
                  <th>Created On</th>
                  <th>Created By</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Quiz 1</td>
                  <td>10</td>
                  <td>101 Introduction</td>
                  <td>Milestone 1</td>
                  <td>23/11/20</td>
                  <td>Thomas Wayne</td>
                  <td>Published</td>
                  <td>
                    <center>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#duplicateQuiz"
                        className="btn btn-success width-80px btn-sm m-1"
                      >
                        Duplicate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#editQuiz"
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
                  <td>Quiz 1</td>
                  <td>10</td>
                  <td>101 Introduction</td>
                  <td>Milestone 1</td>
                  <td>23/11/20</td>
                  <td>Thomas Wayne</td>
                  <td>Published</td>
                  <td>
                    <center>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#duplicateQuiz"
                        className="btn btn-success width-80px btn-sm m-1"
                      >
                        Duplicate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#editQuiz"
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
                  <td>Quiz 1</td>
                  <td>10</td>
                  <td>101 Introduction</td>
                  <td>Milestone 1</td>
                  <td>23/11/20</td>
                  <td>Thomas Wayne</td>
                  <td>Published</td>
                  <td>
                    <center>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#duplicateQuiz"
                        className="btn btn-success width-80px btn-sm m-1"
                      >
                        Duplicate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#editQuiz"
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
                  <td>Quiz 1</td>
                  <td>10</td>
                  <td>101 Introduction</td>
                  <td>Milestone 1</td>
                  <td>23/11/20</td>
                  <td>Thomas Wayne</td>
                  <td>Published</td>
                  <td>
                    <center>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#duplicateQuiz"
                        className="btn btn-success width-80px btn-sm m-1"
                      >
                        Duplicate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#editQuiz"
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
                  <td>Quiz 1</td>
                  <td>10</td>
                  <td>101 Introduction</td>
                  <td>Milestone 1</td>
                  <td>23/11/20</td>
                  <td>Thomas Wayne</td>
                  <td>Published</td>
                  <td>
                    <center>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#duplicateQuiz"
                        className="btn btn-success width-80px btn-sm m-1"
                      >
                        Duplicate
                      </button>
                      <button
                        type="button"
                        data-toggle="modal"
                        data-target="#editQuiz"
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
