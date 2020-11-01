import React from 'react';
import { Button, Form, Grid, Input, Message, Modal } from 'semantic-ui-react';

const FormComponent = ( props ) => {
    return(
        <Modal
        as={Form}
        open={props.modalState}
        onSubmit={(e => props.handleSubmit(e))}
        onOpen={() => props.setModalState(true)}
        onClose={() => props.setModalState(false)}
        trigger={
            <Button 
            fluid
            inverted
            color='green'  
            onClick={ () => { 
                props.setIsEditing(false) 
                props.setCurrentEmployee(props.defaultEmployee)
            }}>
                Add an employee
            </Button>
        }>
            <Modal.Header>
                {
                    (props.isEditing) ? 
                    '👷‍♂️ Editing a current employee' 
                    : '🧑‍💻 Add a new employee!'
                } 
            </Modal.Header>
            <Modal.Content>
                <Grid columns="16">
                    <Grid.Row>
                        <Grid.Column computer='16' tablet='16' mobile='16'>
                            <Message
                            color='teal'
                            icon='picture'
                            header='Be ready to smile!'
                            content='You can take a picture for the employee by clicking the image on the table.'/>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column computer='8' tablet='8' mobile='16'>
                            <Form.Field required>
                                <label className="pt-4">First Name</label>
                                <Input
                                type='text' 
                                name='name' 
                                icon='user'
                                iconPosition='left'
                                value={props.employee.name} 
                                onChange={props.handleInputChange}/>
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column computer='8' tablet='8' mobile='16'>
                            <Form.Field required>
                                <label className="pt-4">Last Name</label>
                                <Input
                                type='text' 
                                name='last' 
                                icon='users'
                                iconPosition='left' 
                                value={props.employee.last} 
                                onChange={props.handleInputChange}/>
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column computer='8' tablet='8' mobile='16'>
                            <Form.Field required>
                                <label className="pt-4" >Company</label>
                                <Input 
                                type='text' 
                                name='company'
                                icon='building'
                                iconPosition='left'  
                                value={props.employee.company} 
                                onChange={props.handleInputChange} 
                                disabled={(props.isEditing) ? true : false}/>
                            </Form.Field>
                        </Grid.Column>
                        <Grid.Column computer='8' tablet='8' mobile='16'>
                            <Form.Field 
                            className='pb-4' 
                            required>
                                <label className="pt-4">Wage</label>
                                <Input 
                                step='any'
                                name='wage' 
                                type='number'
                                label={props.coin}
                                iconPosition='left'
                                labelPosition='right' 
                                icon='money bill alternate'
                                value={props.employee.wage} 
                                onChange={props.handleInputChange}/>
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Modal.Content>
            <Modal.Actions>
                <Button
                inverted
                color='green'  
                onClick={() => props.setModalState(false)}>
                    Close
                </Button>
                <Button 
                inverted
                color='green' 
                type='submit'>
                    {(props.isEditing) ? 'Update' : 'Add'} 
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default FormComponent;