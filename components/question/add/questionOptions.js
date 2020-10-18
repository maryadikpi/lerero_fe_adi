
export default function questionOptions() {


    return (
        <>
            <div
                className="p-3 mt-4"
                style={{
                border: "solid thin #2424"
                }}
            >
                <table width="100%">
                    <tbody>
                        <tr className="valign-top">
                            <td width="12%">Correct Answer : </td>
                            <td>
                                <input type="text" className="form-control width-10"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div id="id-option" className="card singleQuestion text-dark card-primary mt-4 card-outline">
                <div className="card-body table-responsive p-3">
                    <div className="row">
                        <div className="col-1"> Answer </div>
                        <div className="col-11">
                            <input type="checkbox" className="mr-2 p-2" />
                                Correct Answer ?
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col-12">
                            Answer Description <br />
                            <textarea  className="form-control mb-4 mt-2" rows="7"></textarea>
                        </div>
                    </div>
                    <div className="row ml-2 mt-3 mb-4">
                        <table width="100%">
                            <tbody>
                                <tr className="valign-top">
                                    <td width="2%">
                                        <input type="checkbox" />
                                    </td>
                                    <td width="7%">Feedback : </td>
                                    <td>
                                        <input type="text" className="form-control" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>


            <div
                id="multiFeedBack"
                style={{
                    border: "solid thin #2424"
                }}
                className="p-3 mt-4"
                >
                <div className="row">
                    <table width="100%">
                        <tbody>
                            <tr className="valign-top">
                                <td width="2%">
                                    <input type="checkbox" />
                                </td>
                                <td width="10%">Correct Feedback : </td>
                                <td>
                                    <input type="text" className="form-control" />
                                </td>
                            </tr>
                            <tr className="valign-top">
                                <td width="2%">
                                    <input type="checkbox" className="mt-2" />
                                </td>
                                <td width="10%" className="mt-2">
                                    Wrong Feedback :
                                </td>
                                <td>
                                    <input
                                    type="text"
                                    className="form-control mt-2"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}