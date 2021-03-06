

export default function modalDeleteQuestion(props) {


    return (
        <>
            <div
                className="modal fade"
                id="deleteQuestion"
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
                                    <p>Are you sure want to Delete this Question ? </p>
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
                                        data-target="#deleteQuestionSuccess"
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
                id="deleteQuestionSuccess"
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
                                    <p>Success Delete This Question</p>
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
}