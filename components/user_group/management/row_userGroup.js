
export default function rowUserGroup (props) {
    console.log('props user group')
    console.log(props)
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

    function handleActivate() {

    }

    return (
        <tr>
            <td>{data.id}</td>
            <td>
            {data.picture? (<img
                    src="/dist/img/default-150x150.png"
                    alt="Avatar"
                    className="img-circle img-size-32 mr-2"
                />) : 'Empty'
            }
                
            </td>
            <td>{data.name} {data.last_name}</td>
            <td>{data.total_user}</td>
            <td>{displayStatusText(data.status)}</td>
            <td>
                <center>
                    <button
                        type="button"
                        onClick={handleActivate}
                        className="btn btn-success width-80px btn-sm"
                    >
                        Deactive
                    </button>
                </center>
            </td>
        </tr>
    );
}