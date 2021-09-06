import React, { useContext } from 'react';
import { Toast } from 'react-bootstrap';
import Context from "../../context";

// const styles = {
//   toast: {
//     backgroundColor: '#FFF3CC',
//     position: 'absolute',
//     bottom: '3px',
//     right: '3px',
//   }
// }

function AlertToast() {
  const { showToast, toggleShowToast } = useContext(Context);

  return (
    <div className="toast-container">
      <Toast className="text-white bg-warning position-fixed bottom-0 end-0" show={showToast.show} onClose={toggleShowToast}>
        <Toast.Body>{ showToast.msg }</Toast.Body>
      </Toast>
    </div>
  )
}

export default AlertToast;