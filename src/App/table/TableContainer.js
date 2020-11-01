import React from 'react';
import TableComponent from './TableComponent'

const TableContainer = ( props ) => {

    const deleteEmployee = ( id ) => {
        props.setEmployees(props.employees.filter(
            (empl) => empl.id !== id
        ));
    }

    return(
        <TableComponent 
        employees={props.employees}
        deleteEmployee={deleteEmployee}/>
    );
}

export default TableContainer;