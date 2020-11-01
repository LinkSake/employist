import { React, useState } from 'react';
import AppComponent from './AppComponent';

const AppContainer = () => {

    const tempEmploy  = [
        { id: 0, name: 'Martin', last: 'Xa', company: 'Corp. Co.', img: '/img/default.png', wage: 20000 },
        { id: 1, name: 'Steve', last: 'Ta', company: 'Corp. Co.', img: '/img/default.png', wage: 30000 },
        { id: 2, name: 'Rodrigo', last: 'Ka', company: 'Corp. Co.', img: '/img/default.png', wage: 1998 },
    ];

    const defaultEmployee = { id: 0, name: '', last: '', company: '', img: '/img/default.png', wage: 0 };

    const [query, setQuery] = useState('');
    const [coin, setCoin] = useState('MXN');
    const [isEditing, setIsEditing] = useState(false);
    const [modalState, setModalState] = useState(false);
    const [employeeList, setEmployeeList] = useState(tempEmploy);
    const [currentEmployee, setCurrentEmployee] = useState(defaultEmployee);

    const search = () => {
        const nameList = employeeList.filter(empl => empl.name.toLowerCase().includes(query.toLowerCase()));
        const lastList = employeeList.filter(empl => empl.last.toLowerCase().includes(query.toLowerCase()));
        const compList = employeeList.filter(empl => empl.company.toLowerCase().includes(query.toLowerCase()));
        const queryList = [...nameList, ...lastList, ...compList];
        return [...new Set(queryList)] ;
    }

    const changeCoin = () => {
        if (coin === 'MXN') {
          setCoin('USD');
        employeeList.forEach(empl => {
                empl.wage = empl.wage / 21.50;
        });
        } else {
            setCoin('MXN');
            employeeList.forEach(empl => {
                empl.wage = empl.wage * 21.50;
            });
        }
    }

    const editEmployee = (empl) => {
        setIsEditing(true);
        setModalState(true);
        setCurrentEmployee({
            id: empl.id, 
            name: empl.name, 
            last: empl.last, 
            company: empl.company, 
            img: empl.img, 
            wage: empl.wage
        });
    }

    return(
        <AppComponent
        defaultEmployee={defaultEmployee}
        query={query}
        setQuery={setQuery}
        coin={coin}
        setCoin={setCoin}
        isEditing={isEditing}
        setIsEditing={setIsEditing}
        modalState={modalState}
        setModalState={setModalState}
        employeeList={employeeList}
        setEmployeeList={setEmployeeList}
        currentEmployee={currentEmployee}
        setCurrentEmployee={setCurrentEmployee}
        search={search}
        changeCoin={changeCoin}
        editEmployee={editEmployee}
        
        />
    );

}

export default AppContainer;