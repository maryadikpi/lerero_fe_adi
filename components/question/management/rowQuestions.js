

export default function rowQuestion(props) {


    return (
        <>
            <tr>
                <td>{props.data.id}</td>
                <td>{props.data.name}</td>
                <td>{props.data.category_name}</td>
                <td>{props.data.type}</td>
                <td>{props.data.status}</td>
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