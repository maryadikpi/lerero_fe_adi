import {useEffect} from "react"
function ModalLearningPathMenagement() {
  // function showAlert() {
  //   alert("hellow there")
  // }

  useEffect(() => {
      $("#testing").click(function() {
        alert("testing");
      });
  });
  return (
  <>
    <div
      className="modal fade"
      id="addGroup"
      tabIndex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-width-800 text-dark" role="document">
        <div className="modal-content">
          <div className="modal-header text-center">
            <h5 className="modal-title width-100">Add New Learning Path</h5>
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
                <section className="multi_step_form">
                  <form id="msform">
                    <ul id="progressbar">
                      <li className="active">General Information</li>
                      <li>Upload Documents</li>
                      <li>Security Questions</li>
                    </ul>
                    <fieldset>
                      <div>
                        <h3>General Information</h3>
                        <hr className="width-30" />
                      </div>
                      <div className="row text-left">
                        <div className="col-md-8">
                          <p htmlFor="leraningPathname" className="">
                            <b>Learning Path Name : </b>
                          </p>
                          <input
                            id="leraningPathname"
                            type="text"
                            className="form-control border-top-0 border-right-0 border-left-0 mb-5"
                            placeholder="Type user's group name"
                          />
                          <p htmlFor="leraningPathname" className="">
                            <b>Learning Path Description : </b>
                          </p>
                          <textarea className="form-control mb-4"></textarea>
                          <p htmlFor="leraningPathname" className="">
                            <b>Learning Path Requirement : </b>
                          </p>
                          <button
                            type="button"
                            className="btn btn-sm text-left btn-success width-50 mb-5"
                          >
                            + Add Learning Path Requirement
                          </button>
                          <p htmlFor="leraningPathname" className="">
                            <b> Milestone :</b>
                          </p>
                          <button
                            type="button"
                            className="btn btn-sm text-left btn-success width-50 mb-5"
                          >
                            + Add Milestone
                          </button>
                        </div>
                        <div className="col-md-4"></div>
                      </div>
                      <button
                        type="button"
                        className="action-button previous_button"
                      >
                        Back
                      </button>
                      <button type="button" className="next action-button">
                        Continue
                      </button>
                    </fieldset>
                    <fieldset>
                      <h3>Verify Your Identity</h3>
                      <h6>
                        Please upload any of these documents to verify your
                        Identity.
                      </h6>
                      <button
                        type="button"
                        className="action-button previous previous_button"
                      >
                        Back
                      </button>
                      <button type="button" className="next action-button">
                        Continue
                      </button>
                    </fieldset>
                    <fieldset>
                      <h3>Create Security Questions</h3>
                      <h6>
                        Please update your account with security questions
                      </h6>
                      <button
                        type="button"
                        className="action-button previous previous_button"
                      >
                        Back
                      </button>
                      <a href="#" className="action-button">
                        Finish
                      </a>
                    </fieldset>
                  </form>
                </section>
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
  )
};

export default ModalLearningPathMenagement;
