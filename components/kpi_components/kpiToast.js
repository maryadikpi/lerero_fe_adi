import {Toast} from "react-bootstrap"

/**
 * 
 * @param {*} props 
 * props content:
 * setShowToast(false/true) is used to update show or hide toast
 * showToast is used in show props of toast
 * title is used to display toast title
 * color is used to change title color
 * message is used to display message inside of toast body
 */
export default function kpiToast(props) {
    return (
      <Toast 
          style={{
              position: 'absolute',
              top: 17,
              right: 17,
              zIndex: 9999
          }}
          onClose={() => props.setShowToast(false)}
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