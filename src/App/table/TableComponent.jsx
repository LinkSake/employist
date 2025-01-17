import React from 'react';
import NumberFormat from 'react-number-format';
import { Button, Grid, Image, Table } from 'semantic-ui-react';

const TableComponent = ( props ) => {

    let wageLimit = (props.coin === 'MXN') ? 10000 : 465.11627907;

    return(
        <Table celled striped selectable singleLine>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Photo</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Company</Table.HeaderCell>
                    <Table.HeaderCell>Wage</Table.HeaderCell>
                    <Table.HeaderCell/>
                </Table.Row>
            </Table.Header>
            <Table.Body>
                { props.employees.length > 0 ? (
                    props.employees.map((empl) => (
                        <Table.Row key={empl.id}>
                            <Table.Cell>
                                <Image 
                                centered
                                circular
                                size='tiny' 
                                src={empl.img} 
                                className='cursor-pointer-i'
                                alt={empl.name + ' ' + empl.last}
                                onClick={() => { props.pictureEmployee(empl) }}/>
                            </Table.Cell>
                            <Table.Cell>{empl.name + ' ' +  empl.last}</Table.Cell>
                            <Table.Cell>{empl.company}</Table.Cell>
                            <Table.Cell textAlign='right'>
                                <NumberFormat 
                                prefix={'$'}
                                decimalScale={2}
                                value={empl.wage} 
                                displayType='text' 
                                thousandSeparator={true}
                                className={(empl.wage >= wageLimit) ? ('text-green-500 font-mono') : ('text-red-500 font-mono')}/>
                            </Table.Cell>
                            <Table.Cell width='4'>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column computer='8' tablet='8' mobile='16'>
                                            <Button 
                                            inverted
                                            color='green' 
                                            className='ml-4-i'
                                            onClick={() => { props.editEmployee(empl) }}>
                                                Edit
                                            </Button>
                                        </Grid.Column>
                                        <Grid.Column computer='8' tablet='8' mobile='16'>
                                            <Button 
                                            inverted
                                            color='green'  
                                            onClick={() => { props.deleteEmployee(empl.id) }}>
                                                Delete
                                            </Button>
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Table.Cell>
                        </Table.Row>
                    ))
                ) : (
                  <Table.Row></Table.Row>
                )}
            </Table.Body>
        </Table>
    )
}

export default TableComponent;