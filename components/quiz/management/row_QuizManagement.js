import {useState, useEffect} from 'react'
// import BlockUserButton from '../modal/modalBlockUser'
export default function rowQuizManagement (props) {
    const data = props.data
    
    // const [actionType, setActionType] = useState('nothing')
    const [status, setStatus] = useState(data.status)
    // const [newRole, setNewRole] = useState()

    // var roleList = []
    // if (props.roleList.data) {
    //     roleList = props.roleList.data.data.map((item, i) => {
    //                 return <option key={i} value={item.id}>{item.display_name}</option>
    //             })
    // }
    
    // function handleDelete() {
    //     setActionType('delete_user')
    //     props.setDeleteData({id: data.id, username: data.username})
    // }

    // function handleSelectRole(event) {
    //     setActionType('change_role')
    //     let index = event.nativeEvent.target.selectedIndex;
    //     setNewRole(event.target.value)
    //     props.setUserRoleData({
    //         user: data,
    //         newRoleId: event.target.value,
    //         newRoleText: event.nativeEvent.target[index].text
    //     })
        
    // }

    // function handleEmail() {
    //     setActionType('change_email')
    //     props.setUserRoleData({
    //         user: data
    //     })
    // }

    function displayStatusText(status) {
        let resp = '';
        if (status) {
            resp = 'Published';
        }else{
            resp = 'Inactive';
        }
        return resp;
    }

    // useEffect(() => {
    //     switch(actionType) {
    //         default: break
    //     }
    //     setActionType('')
    // })

    return (
        <tr>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.point}</td>
            <td>{data.penalty_1}</td>
            <td>{data.penalty_2}</td>
            <td>{data.penalty_3}</td>
            <td>{data.penalty_4}</td>
            <td>{data.min_score}</td>
            <td>{data.retake}</td>
            <td>-</td>
            <td>-</td>
            <td>{data.created_at}</td>
            <td>{data.created_by}</td>
            <td>{displayStatusText(data.status)}</td>
            <td>
            <center>
                <button
                    type="button"
                    data-toggle="modal"
                    data-target="#duplicateQuiz"
                    className="btn btn-success width-80px btn-sm m-1"
                >
                    Duplicate
                </button>
                <button
                    type="button"
                    data-toggle="modal"
                    data-target="#editQuiz"
                    className="btn btn-primary width-80px btn-sm m-1"
                >
                    Edit
                </button>
                <button
                    type="button"
                    data-toggle="modal"
                    data-target="#deactiveQuiz"
                    className="btn btn-warning width-100px btn-sm m-1"
                >
                    Deactivate
                </button>
                <button
                    type="button"
                    data-toggle="modal"
                    data-target="#deleteQuiz"
                    className="btn btn-danger width-80px btn-sm m-1"
                >
                    Delete
                </button>
            </center>
            </td>
        </tr>
    );
}