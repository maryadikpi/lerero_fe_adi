import {useState, useEffect} from 'react'
export default function modalSearchUser (props) {

    const [checkStatus, setCheckedStatus] = useState(false)

    function handleCheckBox() {
        if (checkStatus) {
            // Remove user from userGroup
            // Future use
        } else {
            // Add user to userGroup
            let oldUser = props.userGroup.map((item) => {
                if (item) {
                    if (item.id !== props.data.id) return item
                }
            })
            let temp = [
                ...oldUser,
                {
                    id: props.data.id,
                    picture: props.data.picture,
                    first_name: props.data.first_name,
                    last_name: props.data.last_name,
                    username: props.data.username,
                    status: props.data.status
                }
            ]
            props.setUserGroup(temp)

            let userNotIn = props.userNotGroup.filter((item) => {
                if (item) {
                    if (item.id !== props.data.id) return item
                }
            })
            props.setUserNotGroup(userNotIn)
        }
        
    }

return (
    <>
        <tr>
            <td><input type="checkbox" defaultChecked={checkStatus} onClick={handleCheckBox}/></td>
            <td>{props.data.id}</td>
            <td>{props.data.picture}</td>
            <td>{props.data.first_name} {props.data.last_name}</td>
            <td>{props.data.username}</td>
            <td>{props.data.status}</td>
        </tr>
    </>
)
}