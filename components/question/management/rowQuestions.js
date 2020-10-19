

export default function rowQuestion(props) {

    function displayStatusText(status) {
        return status ? 'Active' : 'Inactive'
    }

    function displayButtonText(status) {
        return status ? 'Deactivate' : 'Publish'
    }

    const handleDuplicate = () => {
        props.setQuestData({id: props.data.id})
        $("#duplicateQuestion").modal('show')
    }
    return (
        <>
            <tr>
                <td>{props.data.id}</td>
                <td>{props.data.name}</td>
                <td>{props.data.category_name}</td>
                <td>{props.data.type}</td>
                <td>{displayStatusText(props.data.status)}</td>
                <td>
                    <center>
                        <button
                            type="button"
                            onClick={handleDuplicate}
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
                            {displayButtonText(props.data.status)}
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