import React, { useState } from 'react';

import Context from './context';
import Table from "./components/Table/Table";
import AddData from "./components/Table/AddData";
import EditTableModal from './components/Modals/EditTableModal';
import AlertToast from "./components/Toasts/AlertToast";
import ButtonTest from "./components/TestsComponents/ButtonTest";

function App() {

  const [tableData, setTableData] = useState([
    { id: 1, name: 'First'},
    { id: 2, name: 'Second'},
  ]);

  const [show, setShow] = useState({
    show: false,
    id: null,
    name: '',
  });

  const [showToast, setShowToast] = useState({
    show: false,
    msg: '',
  });

  const toggleHideToast = () => {
    setShowToast({...showToast, show: false, msg: '' });
  };

  const toggleShowToast = (msg='') => {
    setShowToast({...showToast, show: true, msg: msg });
    setTimeout(toggleHideToast, 3000);
  };

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

  return (
    <Context.Provider value={{
      tableData,
      removeData,
      addData,
      editData,
      show,
      handleShow,
      handleClose,
      showToast,
      toggleShowToast,
    }}>
      <div className="App container">
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
        <AlertToast />
        <ButtonTest />
      </div>
    </Context.Provider>
  );
}

export default App;
