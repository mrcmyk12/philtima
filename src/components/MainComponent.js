import React, {Component} from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Notes from './NotesComponent';
import Animals from './AnimalsComponent';
import Shopping from './ShoppingComponent';
import ToDo from './ToDoComponent';
import Schedule from './ScheduleComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {  fetchNotes, postNote } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        notes: state.notes,
    }
}

const mapDispatchToProps = {
    
    postNote: (id, title, content) => (postNote(id, title, content)),
    fetchNotes: () => (fetchNotes())
}

class Main extends Component{

    componentDidMount() {
        this.props.fetchNotes();
    }

    render() {
        return(
            <div>
                <Header />
                <Switch> 
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/notes' render={()=><Notes notes={this.props.notes.notes} 
                                                                    postNote={this.props.postNote}
                                                                    isLoading={this.props.notes.isLoading}
                                                                    notesErrMess={this.props.notes.errMess}/>} />
                    <Route exact path='/shopping' component={Shopping} />
                    <Route exact path='/todo' component={ToDo} />
                    <Route exact path='/animals' component={Animals} />
                    <Route exact path='/schedule' component={Schedule} />
                    <Redirect to='/home' />
                </Switch>

            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));