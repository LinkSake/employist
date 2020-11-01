import React from 'react';
import FormConrtainer from './form/FormContainer';
import TableContainer from './table/TableContainer';
import SearchContainer from './search/SearchCointainer';
import PictureContainer from './picture/PictureContainer';
import { Button, Header, Icon, Grid } from 'semantic-ui-react';

const AppComponent = ( props ) => {
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
                                You currently have {props.employeeList.length} employees.
                            </Header>
                            <FormConrtainer 
                            coin={props.coin}
                            isEditing={props.isEditing}
                            modalState={props.modalState} 
                            employees={props.employeeList} 
                            setIsEditing={props.setIsEditing}
                            setModalState={props.setModalState}
                            setEmployees={props.setEmployeeList}
                            currentEmployee={props.currentEmployee}
                            defaultEmployee={props.defaultEmployee}
                            setCurrentEmployee={props.setCurrentEmployee}/>
                        </Grid.Column>
                        <Grid.Column computer='8' tablet='8' mobile='16'>
                            <Header textAlign='center' as='h3'>
                                <Icon name="money"/>
                                Weages are on {props.coin}.
                            </Header>
                            <Button fluid onClick={() => { props.changeCoin() }}>
                                Change currency
                            </Button>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
                <Grid.Row className='py-4'>
                    <SearchContainer setQuery={props.setQuery}/>
                </Grid.Row>
                <Grid.Row className='py-2'>
                    <TableContainer
                    coin={props.coin}
                    employees={props.search()}
                    editEmployee={props.editEmployee}
                    setEmployees={props.setEmployeeList}
                    pictureEmployee={props.pictureEmployee}/>
                </Grid.Row>
                <Grid.Row>
                    <PictureContainer
                    setEmployees={props.setEmployeeList}
                    employees={props.employeeList}
                    pictureModal={props.pictureModal}
                    setPictureModal={props.setPictureModal}
                    currentEmployee={props.currentEmployee}
                    />
                </Grid.Row>
            </Grid.Column>
            <Grid.Column computer='2' tablet='1' mobile='1'/>
        </Grid>
    );
}

export default AppComponent;
