import React, {useContext, useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import Context from "../../context";

import AlertToast from "../Toasts/AlertToast";

function EditTableModal() {
  const { show, handleClose, toggleShowToast, editData } = useContext(Context);

  const [editDataRow, setEditDataRow] = useState('');

  function submitEditHandler(event) {
    event.preventDefault();
    if (editDataRow.trim()) {
      const newDataRow = {
        id: show.id,
        name: editDataRow,
      }
      editData(newDataRow);
    } else {
      toggleShowToast('Поле не должно быть пустым');
    }
    setEditDataRow('');
  }

 return (
   <Modal show={show.show} onHide={handleClose} animation={false}>
     <Modal.Header closeButton closeLabel="">
       <Modal.Title>Изменить запись</Modal.Title>
     </Modal.Header>
     <Modal.Body>
       <form className="mb-3" onSubmit={ submitEditHandler }>
         <div className="mb-3 row">
           <label htmlFor="staticID" className="col-sm-3 col-form-label">ID Записи</label>
           <div className="col-sm-9">
             <input type="text" readOnly className="form-control" id="staticID" value={show.id} />
           </div>
         </div>
         <div className="input-group mb-3">
           <input
             type="text"
             className="form-control"
             value={editDataRow}
             onChange={ event => setEditDataRow(event.target.value) }
             placeholder={show.name}
           />
           <Button variant="success" type="submit">Изменить</Button>
         </div>
       </form>
     </Modal.Body>
     <Modal.Footer>
       <AlertToast />
     </Modal.Footer>
   </Modal>
 )
}

export default EditTableModal;