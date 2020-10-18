
export default function answerFeedback() {


    return (
        <>
            <div
                id="multiFeedBack"
                style={{
                    border: "solid thin #2424"
                }}
                className="my-4"
                >
                    <div className="row mx-2 my-4">
                        <div className="col-lg-2 col-md-4 col-s-12">
                            <input type="checkbox" />&nbsp;
                            Correct Feedback :
                        </div>
                        <div className="col-lg-6 col-md-8 col-s-12">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="row mx-2 my-4">
                        <div className="col-lg-2 col-md-4 col-s-12">
                            <input type="checkbox" />&nbsp;
                            Wrong Feedback :
                        </div>
                        <div className="col-lg-6 col-md-8 col-s-12">
                            <input type="text" className="form-control" />
                        </div>
                    </div>
            </div>
        </>
    )
}