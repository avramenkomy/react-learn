import React, { useState, useContext } from 'react';

import Context from "../../context";

function AddData() {
  const [dataRow, setDataRow] = useState('');
  const { addData, openAlert } = useContext(Context);

  function submitHandler(event) {
    event.preventDefault();

    if (dataRow.trim()) {
      addData(dataRow);
    } else {
      openAlert('Поле не должно быть пустым');
    }
    setDataRow('');
  }

  return (
    <form onSubmit={ submitHandler } className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        value={dataRow}
        onChange={ event => setDataRow(event.target.value) }
      />
      <button className="btn btn-success" type="submit">Добавить</button>
    </form>
  )
}

export default AddData;