import { useEffect } from "react";
function ModalLearningPathMenagement() {
  return (
    <>
      <div
        className="modal fade"
        id="addLearningPath"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-width-800 text-dark" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title width-100">
                Add Learning Path as Requirement
              </h5>
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
                  <div className="row">
                    <div className="col-1 text-center">
                      <i className="fas fa-search mt-2"></i>
                    </div>
                    <div className="col-11">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Search name.."
                      ></input>
                    </div>
                  </div>
                  <table className="table text-center table-valign-middle">
                    <thead>
                      <tr>
                        <th>Add?</th>
                        <th>Badge name</th>
                        <th>User Group</th>
                        <th>Requirement</th>
                        <th>Status</th>
                        <th>Created On</th>
                        <th>Created By</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <input type="checkbox" className="checkbox" />
                          <font> Yes </font>
                        </td>
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
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" className="checkbox" />
                          <font> Yes </font>
                        </td>
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
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" className="checkbox" />
                          <font> Yes </font>
                        </td>
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
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" className="checkbox" />
                          <font> Yes </font>
                        </td>
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
                      </tr>
                      <tr>
                        <td>
                          <input type="checkbox" className="checkbox" />
                          <font> Yes </font>
                        </td>
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
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <br />

              <div className="row mb-5">
                <div className="col-6 text-center">
                  <button
                    type="button"
                    data-dismiss="modal"
                    className="btn width-50 btn-sm btn-danger"
                  >
                    Cancel
                  </button>
                </div>
                <div className="col-6 text-center">
                  <button
                    type="button"
                    data-dismiss="modal"
                    className="btn width-50 btn-sm btn-primary"
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
        id="deactiveLearningPath"
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
                  <p>Are you sure want to Deactive this Learning Path : </p>
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
                    data-target="#deactiveLearningPathSuccess"
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
        id="deactiveLearningPathSuccess"
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
                  <p>Successfully deactivate this learning path</p>
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
        id="deleteLearningPath"
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
                    <i className="fa fa-exclamation-triangle text-danger icon-width-50"></i>
                  </p>
                  <p>Are you sure want to Delete this Learning Path ? </p>
                  <p>Please note that this process cannot be reversed </p>
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
                    data-target="#deleteLearningPathSuccess"
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
        id="deleteLearningPathSuccess"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog text-dark" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h5 className="modal-title width-100">Success</h5>
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
                  <p>Success Delete This Learning Path</p>
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

export default ModalLearningPathMenagement;
