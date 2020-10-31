import React from 'react';
import TableComponent from './TableComponent'

const TableContainer = ( props ) => {

    return(
        <TableComponent employees={props.employees}/>
    );
}

export default TableContainer;