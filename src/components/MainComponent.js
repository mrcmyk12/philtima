import React, {Component} from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Notes from './NotesComponent';
import Animals from './AnimalsComponent';
import Shopping from './ShoppingComponent';
import ToDo from './ToDoComponent';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {

    }
}

class Main extends Component{

    render() {
        return(
            <div>
                <Header />
                <Switch> 
                    <Route exact path='/home' component={Home} />
                    <Route exact path='/notes' component={Notes} />
                    <Route exact path='/shopping' component={Shopping} />
                    <Route exact path='/todo' component={ToDo} />
                    <Route exact path='/animals' component={Animals} />
                    <Redirect to='/home' />
                </Switch>

            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps)(Main));