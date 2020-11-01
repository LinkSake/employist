import { React, useState } from 'react';
import NewComponent from './NewComponent';

const NewContainer = ( props ) => {

    const defaultValues = {
        id: null,
        name: '',
        last: '',
        company: '',
        img: '',
        wage: 0
    }

    const [employee, setEmployee] = useState(defaultValues);

    const addEmployee = ( employee ) => {
        employee.id = props.employees.length;
        props.setEmployees([...props.employees, employee]);
    }

    const handleInputChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setEmployee({...employee, [key]:value});
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!employee.name || !employee.last || !employee.company || !employee.wage) {
            addEmployee(employee);
            setEmployee(defaultValues);
            props.setModalState(false);
        }
    }

    return (
        <NewComponent 
        employee={employee}
        handleSubmit={handleSubmit}
        modalState={props.modalState}
        setModalState={props.setModalState}
        handleInputChange={handleInputChange}
        />
    );
}

export default NewContainer;