import React from 'react';
import TableComponent from './TableComponent';

const TableContainer = ( props ) => {

    const deleteEmployee = ( id ) => {
        props.setEmployees(props.employees.filter(
            (empl) => empl.id !== id
        ));
    }

    return(
        <TableComponent 
        coin={props.coin}
        employees={props.employees}
        deleteEmployee={deleteEmployee}
        editEmployee={props.editEmployee}
        pictureEmployee={props.pictureEmployee}/>
    );
}

export default TableContainer;