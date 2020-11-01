import React from 'react';
import { Button, Image, Table } from 'semantic-ui-react';

const TableComponent = ( props ) => {
    return(
        <Table celled striped selectable>
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
                                <Image src={empl.img} alt={empl.name + ' ' + empl.last}/>
                            </Table.Cell>
                            <Table.Cell>{empl.name + ' ' +  empl.last}</Table.Cell>
                            <Table.Cell>{empl.company}</Table.Cell>
                            <Table.Cell>{empl.wage}</Table.Cell>
                            <Table.Cell>
                                <Button>Edit</Button>
                                <Button onClick={() => { props.deleteEmployee(empl.id) }}>
                                    Delete
                                </Button>
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