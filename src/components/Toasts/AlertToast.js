import React, { useContext } from 'react';
import { Toast } from 'react-bootstrap';
import Context from "../../context";

function AlertToast() {
  const { showToast, toggleShowToast } = useContext(Context);

  return (
    <div className="toast-container">
      <Toast
        className="text-black bg-warning position-fixed bottom-0 end-0"
        show={showToast.show}
        onClose={toggleShowToast}
      >
        <Toast.Body>{ showToast.msg }</Toast.Body>
      </Toast>
    </div>
  )
}

export default AlertToast;