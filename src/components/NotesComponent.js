import React, {Component} from 'react';
import { Card, CardBody, CardText, CardTitle, Modal, ModalBody, 
    ModalHeader, Button, Row, Col, Label } from 'reactstrap';
import CardHeader from 'reactstrap/lib/CardHeader';
import {LocalForm, Control, Errors} from 'react-redux-form';
import {Loading} from './LoadingComponent';
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
        this.props.postNote(values.title, values.content)
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

function RenderNotes({note}){

    

        return(
        <div className='col'>
            <div className='notes_card m-2'>
                <h2 className='notes_card_title'>{note.title}</h2>
                <p>{note.content}</p>
                <Button className='note_modal_submit_button mx-2'><p className='note_modal_submit_text'>Delete</p></Button>
            </div>
        </div>
        );



    
}


function Notes(props){
    

        const notes = props.notes.map(note => {
            return(
                <div key={note.id}>
                    <RenderNotes note={note} />
                </div>
            );
        });

    if(props.notes.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }

    if(props.notes.errMess){
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h4>{props.notes.errMess}</h4>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <React.Fragment>
            <div className='container'>
                <div className='row mb-4'>
                    <AddNote postNote={props.postNote}/>
                </div>
                <div className='row m-3'>
                    {notes}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Notes;