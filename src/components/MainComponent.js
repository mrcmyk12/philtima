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
import { addNote } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        notes: state.notes,
        shopping: state.shopping
    }
}

const mapDispatchToProps = {
    addNote: (id, title, content, date) => (addNote(id, title, content, date))
}

class Main extends Component{

    render() {
        return(
            <div>
                <Header />
                <Switch> 
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/notes' render={()=><Notes addNote={this.props.addNote} notes={this.props.notes} />} />
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