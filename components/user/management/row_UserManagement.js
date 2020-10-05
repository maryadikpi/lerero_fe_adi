import {useState, useEffect} from 'react'
import BlockUserButton from '../modal/modalBlockUser'
import DeleteUserButton from '../modal/modalDeleteUser'
export default function rowUserManagement (props) {
    const data = props.data

    const [status, setStatus] = useState(data.status)

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
            <td>{data.name}</td>
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
                <DeleteUserButton id={data.id} username={data.username} />
                
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
                >
                    <option selected="" disabled="" className="white">
                        Change Role
                    </option>
                    <option data-toggle="modal" data-target="#changeRole">
                        Standard User
                    </option>
                    <option data-toggle="modal" data-target="#changeRole">
                        Client Admin
                    </option>
                </select>
            </center>
            </td>
        </tr>
    );
}