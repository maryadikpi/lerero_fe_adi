import BlockUserButton from '../modal/modalBlockUser'
import DeleteUserButton from '../modal/modalDeleteUser'
export default function rowUserManagement (props) {
    const data = props.data
    return (
        <tr>
            <td>{data.id}</td>
            <td>
            <img
                src="/public/dist/img/default-150x150.png"
                alt="Product 1"
                className="img-circle img-size-32 mr-2"
            />
            </td>
            <td>{data.name}</td>
            <td>{data.username}</td>
            <td>{data.usergroup}</td>
            <td>{data.role}</td>
            <td>{data.status}</td>
            <td>
            <center>
                <BlockUserButton id={data.id} username={data.username}/>
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