import React, {Component} from 'react';
import { Card, CardBody, CardText, CardTitle, Modal, ModalBody, 
    ModalHeader, Button, Row, Col, Label } from 'reactstrap';
import CardHeader from 'reactstrap/lib/CardHeader';
import {LocalForm, Control, Errors} from 'react-redux-form';
import ModalFooter from 'reactstrap/lib/ModalFooter';

class AddNote extends Component{

    constructor(props) {
        super(props);

        this.state= {
            isModalOpen : false,
        };
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(values) {
        this.props.addNote(values.title, values.content);
        this.toggleModal();
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    render() {
        return(
            <div className='row'>
                <div className="col-10">
                <Button className='add_note_button' onClick={this.toggleModal}><p className='add_note_button_text'>Add Note</p></Button>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader  toggle={this.toggleModal}><h4 className='note_modal_header'>Add Note</h4></ModalHeader>
                        <ModalBody>
                            <LocalForm onSubmit={values => this.handleSubmit(values)}>
                                <Row className='form-group'>
                                    <Col md={4}>
                                        <Control.text 
                                        model='.title'
                                        id='title'
                                        name='title'
                                        placeholder='Title'
                                        className='form-control'
                                        value={this.state.title}/>
                                    </Col>
                                </Row>
                                <Row className='form-group'>
                                    <Col md={8}>
                                        <Control.textarea 
                                        className='form-control'
                                        model='.content' 
                                        id= 'content'
                                        name= 'content'
                                        placeholder='Add Note Here'/>
                                    </Col>
                                </Row>
                                <ModalFooter>
                            <div className='row'>
                                <Button className='note_modal_cancel_button mx-2'><p className='note_modal_cancel_text'>Cancel</p></Button>
                                <Button className='note_modal_submit_button mx-2'><p className='note_modal_submit_text'>Submit</p></Button>
                            </div>   
                        </ModalFooter>
                            </LocalForm>
                        </ModalBody>
                </Modal>
            </div>
        )
    }
}

function RenderNotes(props){

  const note = props.notes.map((notes)=>{
        return(
        <div className='col'>
            <div className='notes_card'>
                <h2 className='notes_card_title' >{notes.title}</h2>
            </div>
        </div>
        );
    })

    return(
        <div className='row'>
            {note}
        </div>
    )
}


function Notes(props){


        return(
                <div className='container'>
                    <RenderNotes notes={props.notes} />
                    <AddNote addNote={props.addNote}/>
                </div>
        );
    
}

export default Notes;