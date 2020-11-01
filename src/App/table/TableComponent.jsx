import React from 'react';
import NumberFormat from 'react-number-format';
import { Button, Grid, Image, Table } from 'semantic-ui-react';

const TableComponent = ( props ) => {

    let wageLimit = (props.coin === 'MXN') ? 10000 : 465.11627907;

    return(
        <Table celled striped selectable>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>Photo</Table.HeaderCell>
                    <Table.HeaderCell>Name</Table.HeaderCell>
                    <Table.HeaderCell>Company</Table.HeaderCell>
                    <Table.HeaderCell textAlign='right'>Wage</Table.HeaderCell>
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
                                alt={empl.name + ' ' + empl.last}/>
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
                                className={(empl.wage >= wageLimit) ? ('text-green-500') : ('text-red-500')}/>
                            </Table.Cell>
                            <Table.Cell>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column computer='8' tablet='8' mobile='16'>
                                            <Button fluid
                                            onClick={() => { props.editEmployee(empl) }}>
                                                Edit
                                            </Button>
                                        </Grid.Column>
                                        <Grid.Column computer='8' tablet='8' mobile='16'>
                                            <Button fluid 
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