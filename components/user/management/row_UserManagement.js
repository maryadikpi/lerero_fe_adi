import {useState, useEffect} from 'react'
import BlockUserButton from '../modal/modalBlockUser'
export default function rowUserManagement (props) {
    const data = props.data
    
    const [actionType, setActionType] = useState('nothing')
    const [status, setStatus] = useState(data.status)
    const [newRole, setNewRole] = useState()

    var roleList = []
    if (props.roleList.data) {
        roleList = props.roleList.data.map((item, i) => {
                    return <option key={i} value={item.id}>{item.display_name}</option>
                })
    }
    
    function handleDelete() {
        setActionType('delete_user')
        props.setDeleteData({id: data.id, username: data.username})
    }

    function handleSelectRole(event) {
        setActionType('change_role')
        let index = event.nativeEvent.target.selectedIndex;
        setNewRole(event.target.value)
        props.setUserRoleData({
            user: data,
            newRoleId: event.target.value,
            newRoleText: event.nativeEvent.target[index].text
        })
        
    }

    useEffect(() => {
        switch(actionType) {
            case 'delete_user': 
                $('#deleteUserModal_'+data.id).modal('show') 
                break
            
            case 'change_role': 
                $('#changeRoleUserModal_'+data.id).modal('show') 
                break
            default: break
        }
        setActionType('')
    })

    return (
        <tr>
            <td>{data.id}</td>
            <td>
            {data.avatar? (<img
                    src="/public/dist/img/default-150x150.png"
                    alt="Avatar"
                    className="img-circle img-size-32 mr-2"
                />) : 'Empty'
            }
                
            </td>
            <td>{data.first_name} {data.last_name}</td>
            <td>{data.username}</td>
            <td>{data.usergroup}</td>
            <td>{data.role}</td>
            <td>{status}</td>
            <td>
            <center>
                <BlockUserButton 
                    id={data.id} 
                    username={data.username} 
                    setStatus={setStatus} 
                    status={status}
                />

                <button
                    type="button"
                    onClick={handleDelete}
                    className="btn btn-danger width-110px btn-sm m-1"
                    >
                    Delete
                </button>

                <button
                    type="button"
                    data-toggle="modal"
                    data-target="#changeEmail"
                    className="btn btn-primary width-110px btn-sm m-1"
                >
                    Change Email
                </button>

                <select
                    type="button"
                    className="btn btn-warning width-110px btn-sm m-1"
                    onChange={handleSelectRole}
                    // value={role}
                >
                    {roleList}
                </select>
            </center>
            </td>
        </tr>
    );
}