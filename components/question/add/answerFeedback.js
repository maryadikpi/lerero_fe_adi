
export default function answerFeedback() {


    return (
        <>
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