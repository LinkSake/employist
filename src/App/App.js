import './App.css';
import { React, useState } from 'react';
import NewConrtainer from './new/NewContainer';
import TableContainer from './table/TableContainer';
import SearchContainer from './search/SearchCointainer';
import { Button, Header, Icon, Grid } from 'semantic-ui-react';

const App = () => {

     const tempEmploy  = [
        { id: 0, name: 'Martin', last: 'Xa', company: 'Corp. Co.', img: '', wage: 20000 },
        { id: 1, name: 'Steve', last: 'Ta', company: 'Corp. Co.', img: '', wage: 30000 },
        { id: 2, name: 'Rodrigo', last: 'Ka', company: 'Corp. Co.', img: '', wage: 1998 },
    ];

    const [query, setQuery] = useState('');
    const [coin, setCoin] = useState('MXN');
    const [modalState, setModalState] = useState(false);
    const [employeeList, setEmployeeList] = useState(tempEmploy);

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

    return (
        <Grid columns='16'>
            <Grid.Column computer='2' tablet='1' mobile='1'/>
            <Grid.Column computer='12' tablet='16' mobile='16'>
                <Grid.Row className='py-5'>
                    <Header textAlign='center' as='h2' icon>
                        <Icon name='address book' />
                            Employist
                        <Header.Subheader>
                            Manage your employees in a easy way!
                        </Header.Subheader>
                    </Header>
                </Grid.Row>
                <Grid.Row>
                    <Grid columns='12'>
                        <Grid.Column computer='8' tablet='8' mobile='16'>
                            <Header textAlign='center' as='h3'>
                                <Icon name="users"/>
                                You currently have {employeeList.length} employees.
                            </Header>
                            <NewConrtainer 
                            coin={coin}
                            modalState={modalState} 
                            employees={employeeList} 
                            setModalState={setModalState}
                            setEmployees={setEmployeeList}/>
                        </Grid.Column>
                        <Grid.Column computer='8' tablet='8' mobile='16'>
                            <Header textAlign='center' as='h3'>
                                <Icon name="money"/>
                                Weages are on {coin}
                            </Header>
                            <Button fluid onClick={() => { changeCoin() }}>
                                Change currency
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
                <Grid.Row className='py-4'>
                    <SearchContainer setQuery={setQuery}/>
                </Grid.Row>
                <Grid.Row className='py-2'>
                    <TableContainer
                    coin={coin}
                    employees={search()}
                    setEmployees={setEmployeeList}/>
                </Grid.Row>
            </Grid.Column>
            <Grid.Column computer='2' tablet='1' mobile='1'/>
        </Grid>
    );
}

export default App;
