import React, { useContext } from 'react';

import Context from '../../context';
import TableRow from "./TableRow";
import TableHead from "./TableHead";


function Table() {
  const { tableData } = useContext(Context);

  return (
    <div>
      <h2 className="table-title">Table component</h2>
      <table className="table table-sm">
        <TableHead />
        <tbody>
          { tableData.map((row) => {
            return <TableRow data={row} key={row.id} />
          }) }
        </tbody>
      </table>
    </div>
  )
}

export default Table;