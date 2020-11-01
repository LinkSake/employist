import React from 'react';
import Webcam from 'react-webcam';
import { Button, Grid, Image, Modal } from 'semantic-ui-react';

const PictureComponent = ( props ) => {
    return(
        <Modal
        open={props.pictureModal}
        onOpen={() => {props.setPictureModal(true)}}
        onClose={() => {props.setPictureModal(false)}}>
            <Modal.Header>
                📸 Upload a picture of the employee  
            </Modal.Header>
            <Modal.Content>
                    { props.imgSrc ? (
                        <Grid columns='16'>
                            <Grid.Row>
                                <Grid.Column computer='16' tablet='16' mobile='16'>
                                    <Image 
                                    circular
                                    centered
                                    size="medium"
                                    src={props.imgSrc}
                                    alt="This is a picture of you!"
                                    className='place-self-center py-5'/>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column computer='3' tablet='3' mobile='1'/>
                                <Grid.Column computer='5' tablet='5' mobile='7'>
                                    <Button 
                                    fluid
                                    inverted
                                    color='green'  
                                    onClick={() => { props.setImgSrc(null) }}>
                                        Delete
                                    </Button>
                                </Grid.Column>
                                <Grid.Column computer='5' tablet='5' mobile='7'>
                                    <Button
                                    fluid 
                                    inverted
                                    color='green'  
                                    onClick={() =>{ 
                                        props.save();
                                        props.setPictureModal(false);
                                        props.setImgSrc(null);
                                    }}>
                                        Save
                                    </Button>
                                </Grid.Column>
                                <Grid.Column computer='3' tablet='3' mobile='1'/>
                            </Grid.Row>
                        </Grid>
                    ) : (
                        <Grid columns='16'>
                            <Grid.Row>
                                <Grid.Column computer='3' tablet='3' mobile='1'/>
                                <Grid.Column computer='10' tablet='10' mobile='14'>
                                    <Webcam 
                                    mirrored
                                    audio={false}
                                    className='py-5'
                                    ref={props.webcamRef}
                                    screenshotFormat='image/jpeg'/>
                                </Grid.Column>
                                <Grid.Column computer='3' tablet='3' mobile='1'/>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column computer='3' tablet='3' mobile='1'/>
                                <Grid.Column computer='5' tablet='5' mobile='7'>
                                    <Button 
                                    fluid
                                    inverted
                                    color='green' 
                                    onClick={() => { props.setPictureModal(false) }}>
                                        Close
                                    </Button>
                                </Grid.Column>
                                <Grid.Column computer='5' tablet='5' mobile='7'>
                                    <Button 
                                    fluid
                                    inverted
                                    color='green'
                                    onClick={() => { props.capture() }}>
                                        Capture
                                    </Button>
                                </Grid.Column>
                                <Grid.Column computer='3' tablet='3' mobile='1'/>
                            </Grid.Row>
                        </Grid>
                    )}
            </Modal.Content>
        </Modal>
    );
}

export default PictureComponent;