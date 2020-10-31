import './App.css';
import { React, useState } from 'react';
import TableContainer from './table/TableContainer';
import NewConrtainer from './new/NewContainer';

const App = () => {

  const tempEmploy  = [
    { id: 0, name: 'Martin', last: 'Xa', company: 'Corp. Co.', img: '', wage: 20000 },
    { id: 1, name: 'Steve', last: 'Ta', company: 'Corp. Co.', img: '', wage: 30000 },
    { id: 2, name: 'Rodrigo', last: 'Ka', company: 'Corp. Co.', img: '', wage: 1998 },
  ]

  const [employeeList, setEmployeeList] = useState(tempEmploy)

  return (
    <div className="App">
      <TableContainer employees={employeeList}/>
      <NewConrtainer employees={employeeList} setEmployees={setEmployeeList}/>
    </div>
  );
}

export default App;
