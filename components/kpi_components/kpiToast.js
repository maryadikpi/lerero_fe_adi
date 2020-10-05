import {Toast} from "react-bootstrap"

export default function kpiToast(props) {
    console.log('inside kpiToast')
    console.log(props)

    return (
        <Toast 
        style={{
            position: 'absolute',
            top: 17,
            right: 17,
        }}
        onClose={() => props.setToast}
        show={props.showToast}
        delay={3000}
        autohide>
          <Toast.Header>
            <strong className="mr-auto" style={{color: props.color}}>{props.title}</strong>
          </Toast.Header>
          <Toast.Body><span style={{color: 'black'}}>{props.message}</span></Toast.Body>
      </Toast>
    );
}