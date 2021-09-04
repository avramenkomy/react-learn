import React, { useState } from 'react';

import Context from './context';
import Table from "./components/Table/Table";
import AddData from "./components/Table/AddData";
import Alert from "./components/Alert";
import EditTableModal from './components/Modals/EditTableModal';

function App() {

  const [tableData, setTableData] = useState([
    { id: 1, name: 'First'},
    { id: 2, name: 'Second'},
  ]);
  const [ alertProps, setAlertProps] = useState({
    alertView: false,
    msg: '',
  });
  const [show, setShow] = useState({
    show: false,
    id: null,
    name: '',
  });

  const handleClose = () => {
    setShow({...show, show: false})
  };
  const handleShow = (data) => {
    setShow({...show, show: true, id: data.id, name: data.name});
  };

  function removeData(id) {
    setTableData(tableData.filter(row => row.id !== id));
  }

  function editData(newDataRow) {
    // console.log('изменение записи', newDataRow);
    setTableData(tableData
      .filter(row => row.id !== newDataRow.id)
      .concat([newDataRow])
      .sort((prev, next) => prev.id - next.id));
    setShow({...show, show: false});
  }

  function addData(name) {
    setTableData(tableData.concat([
      {
        name,
        id: Date.now(),
      }
    ]));
  }

  function openAlert(msg) {
    setAlertProps({...alertProps, alertView: true, msg: msg });
    setTimeout(() => {
      setAlertProps({...alertProps, alertView: false, msg: '' });
    }, 2000);
  }

  return (
    <Context.Provider value={{
      removeData,
      tableData,
      addData,
      editData,
      openAlert,
      alertProps,
      show,
      handleShow,
      handleClose,
    }}>
      <div className="App container">
        <Alert />
        <h1><span className="badge bg-secondary">Welcome to React</span></h1>
        <AddData />
        { tableData.length
          ? (<Table />)
          : (
            <div>
              <p>This table is empty</p>
            </div>
          )
        }
        <EditTableModal />
      </div>
    </Context.Provider>
  );
}

export default App;
