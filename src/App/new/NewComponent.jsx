import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const NewComponent = ( props ) => {
    return(
        <Form onSubmit={props.handleSubmit}>
            <Form.Field required>
                <label>First Name</label>
                <input type="text" name="name" value={props.employee.name} onChange={props.handleInputChange}/>
            </Form.Field>
            <Form.Field required>
                <label>Last Name</label>
                <input type="text" name="last" value={props.employee.last} onChange={props.handleInputChange}/>
            </Form.Field>
            <Form.Field required>
                <label>Company</label>
                <input type="text" name="company" value={props.employee.company} onChange={props.handleInputChange} />
            </Form.Field>
            <Form.Field required>
                <label>Wage</label>
                <input type="number" name="wage" step="any" value={props.employee.wage} onChange={props.handleInputChange}/>
            </Form.Field>
            <Button type="submit">
                Add new employee
            </Button>
        </Form>
    );
}

export default NewComponent;