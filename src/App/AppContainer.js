import { React, useState } from 'react';
import AppComponent from './AppComponent';

const AppContainer = () => {

    /* Default values */
    const tempEmploy  = [
        { id: 0, name: 'Wallace', last: 'Wells', company: 'Pilgrim Corp.', img: process.env.PUBLIC_URL + '/img/default.png', wage: 15090 },
        { id: 1, name: 'Stephen', last: 'Stills', company: 'Pilgrim Corp.', img: process.env.PUBLIC_URL + '/img/default.png', wage: 5998 },
        { id: 2, name: 'Gideon', last: 'Graves', company: 'GGG Record Label', img: process.env.PUBLIC_URL + '/img/default.png', wage: 25250 },
    ];
    const defaultEmployee = { id: 0, name: '', last: '', company: '', img: process.env.PUBLIC_URL + '/img/default.png', wage: 0 };

    /* States */
    const [query, setQuery] = useState('');
    const [coin, setCoin] = useState('MXN');
    const [isEditing, setIsEditing] = useState(false);
    const [modalState, setModalState] = useState(false);
    const [pictureModal, setPictureModal] = useState(false);
    const [employeeList, setEmployeeList] = useState(tempEmploy);
    const [currentEmployee, setCurrentEmployee] = useState(defaultEmployee);

    /* Functions */
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

    const pictureEmployee = (empl) => {
        setPictureModal(true);
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
        coin={coin}
        query={query}
        search={search}
        setCoin={setCoin}
        setQuery={setQuery}
        isEditing={isEditing}
        changeCoin={changeCoin}
        modalState={modalState}
        editEmployee={editEmployee}
        employeeList={employeeList}
        setIsEditing={setIsEditing}
        pictureModal={pictureModal}
        setModalState={setModalState}
        defaultEmployee={defaultEmployee}
        setEmployeeList={setEmployeeList}
        currentEmployee={currentEmployee}
        setPictureModal={setPictureModal}
        pictureEmployee={pictureEmployee}
        setCurrentEmployee={setCurrentEmployee}/>
    );

}

export default AppContainer;