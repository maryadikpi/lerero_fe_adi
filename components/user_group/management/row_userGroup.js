import {useState, useEffect} from 'react'
export default function rowUserGroup (props) {
    const data = props.data
    
    function displayStatusText(status) {
        let resp = ''
        switch (status) {
            case 0: 
                resp = 'Inactive'
            break
            case 1:
                resp = 'Active'
            break
            case 2: 
                resp = 'Blocked'
            break
            default: resp = ''
        }
        return resp
    }

    function displayActionText(status) {
        let resp = ''
        switch (status) {
            case 0: 
                resp = 'Publish'
            break
            case 1:
                resp = 'Deactive'
            break
            case 2: 
                resp = 'Blocked'
            break
            default: resp = ''
        }
        return resp
    }

    function classStatus(status) {
        let resp = ''
        switch (status) {
            case 0: 
                resp = 'right badge badge-danger'
            break
            case 1:
                resp = 'right badge badge-success'
            break
            case 2: 
                resp = ''
            break
            default: resp = ''
        }
        return resp
    }

    function classAction(status) {
        let resp = ''
        switch (status) {
            case 0: 
                resp = 'btn btn-success width-80px btn-sm'
            break
            case 1:
                resp = 'btn btn-danger width-80px btn-sm'
            break
            case 2: 
                resp = ''
            break
            default: resp = ''
        }
        return resp
    }

    function handleActivate() {
        setActionType('deactive_group')
        props.setGroupData({
            group: {
                id: data.id,
                name: data.name,
                action: displayActionText(data.status),
                status: data.status
            }
        })
        
    }

    const [actionType, setActionType] = useState('nothing')
    useEffect(() => {
        switch(actionType) {
            case 'deactive_group': 
                $('#deactiveUserGroup').modal('show') 
            break
            default: break
        }
        setActionType('')
    })

    function handleGroupDetail() {
        props.setShow(true)
        props.setGroupData({
            group: {
                id: data.id,
                name: data.name,
                icon: data.picture
            }
        })
    }

    return (
        <tr>
            <td>{data.id}</td>
            <td>
                {data.picture? (<img
                        src={data.picture}
                        alt="Avatar"
                        className="img-circle img-size-32 mr-2"
                    />) : 
                    (<img
                        src="/dist/img/default-150x150.png"
                        alt="Avatar"
                        className="img-circle img-size-32 mr-2"
                    />)
                }
            </td>
            <td onClick={handleGroupDetail} style={{cursor: 'pointer'}}>{data.name}</td>
            <td>{data.total_user}</td>
            <td><span className={classStatus(data.status)}>{displayStatusText(data.status)}</span></td>
            <td>
                <center>
                    <button
                        type="button"
                        onClick={handleActivate}
                        className={classAction(data.status)}
                    >
                        {displayActionText(data.status)}
                    </button>
                </center>
            </td>
        </tr>
    );
}