export default function modalBlockUser(props) {
  const modalId = "blockUserModal_"+props.id
  const dataTarget = "#blockUserModal_"+props.id
    return (
    <>
    <button
        type="button"
        data-toggle="modal"
        data-target={dataTarget}
        className="btn btn-success width-110px btn-sm m-1"
        >
        Block
        </button>
    <div
      className="modal fade"
      id={modalId}
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
                <p>Are you sure want to Block User : </p>
                <p>{props.username}</p>
                <p>#{props.id}</p>
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
                  data-target="#blockSuccess"
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
  </>
);
}