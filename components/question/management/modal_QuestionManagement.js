const ModalQuestionManagement = () => (
  <>
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

  </>
);

export default ModalQuestionManagement;
