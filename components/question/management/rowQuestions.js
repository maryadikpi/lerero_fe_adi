

export default function rowQuestion() {


    return (
        <>
            <tr>
                <td>1</td>
                <td>Question 1</td>
                <td>Category 1</td>
                <td>Single Choice</td>
                <td>Active</td>
                <td>
                    <center>
                        <button
                            type="button"
                            data-toggle="modal"
                            data-target="#duplicateQuestion"
                            className="btn btn-success width-80px btn-sm m-1"
                        >
                            Duplicate
                        </button>
                        <button
                            type="button"
                            data-toggle="modal"
                            data-target="#editQuestion"
                            className="btn btn-primary width-80px btn-sm m-1"
                        >
                            Edit
                        </button>
                        <button
                            type="button"
                            data-toggle="modal"
                            data-target="#deactiveQuestion"
                            className="btn btn-warning width-100px btn-sm m-1"
                        >
                            Deactivate
                        </button>
                        <button
                            type="button"
                            data-toggle="modal"
                            data-target="#deleteQuestion"
                            className="btn btn-danger width-80px btn-sm m-1"
                        >
                            Delete
                        </button>
                    </center>
                </td>
            </tr>
        </>
    )
}