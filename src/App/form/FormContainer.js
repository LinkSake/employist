import FormComponent from './FormComponent';
import { React, useState, useEffect } from 'react';

const FormContainer = ( props ) => {

    const [employee, setEmployee] = useState(props.currentEmployee);
    
    const addEmployee = ( employee ) => {
        employee.id = props.employees.length;
        props.setEmployees([...props.employees, employee]);
    }

    const handleInputChange = (event) => {
        const key = event.target.name;
        const value = event.target.value;
        setEmployee({...employee, [key]:value});
    }

    const updateEmployee = ( employee ) => {
        props.setEmployees( props.employees.map(
            (empl) => (empl.id === employee.id ? employee : empl)
        ));
        props.setIsEditing(false);
        props.setModalState(false);
        props.setCurrentEmployee(props.defaultEmployee);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (props.isEditing) {
            updateEmployee(employee);    
        } else {
            if (
                employee.name !== '' && 
                employee.last !== '' && 
                employee.company !== '' && 
                employee.wage > 0 && employee.wage !== null) {
                    addEmployee(employee);
                    setEmployee(props.currentEmployee);
                    props.setModalState(false);
            } else {
                alert('All fields are required, and wages must be greater than 0!');
            }
        }
    }

    useEffect(() => {
        setEmployee(props.currentEmployee);
    }, [props]);

    return (
        <FormComponent 
        coin={props.coin}
        employee={employee}
        isEditing={props.isEditing}
        handleSubmit={handleSubmit}
        modalState={props.modalState}
        updateEmployee={updateEmployee}
        setIsEditing={props.setIsEditing}
        setModalState={props.setModalState}
        handleInputChange={handleInputChange}
        defaultEmployee={props.defaultEmployee}
        setCurrentEmployee={props.setCurrentEmployee}/>
    );
}

export default FormContainer;