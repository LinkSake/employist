import React from 'react';
import { Button, Form, Grid, Input, Modal } from 'semantic-ui-react';

const NewComponent = ( props ) => {
    return(
        <Modal
        as={Form}
        open={props.modalState}
        onSubmit={e => props.handleSubmit(e)}
        onOpen={() => props.setModalState(true)}
        onClose={() => props.setModalState(false)}
        trigger={<Button fluid>Add a Employee</Button>}>
            <Modal.Header>Add a new employee!</Modal.Header>
            <Modal.Content>
                <Grid columns="16">
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
                                onChange={props.handleInputChange} />
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
                                iconPosition='left'
                                icon='money bill alternate'
                                value={props.employee.wage} 
                                onChange={props.handleInputChange}/>
                            </Form.Field>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => props.setModalState(false)}>
                    Close
                </Button>
                <Button type='submit'>
                    Add
                </Button>
            </Modal.Actions>
        </Modal>
    );
}

export default NewComponent;