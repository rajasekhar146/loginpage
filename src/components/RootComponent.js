import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import  UserLogin  from './UserLogin/UserLogin';
import {RegisterPage} from './RegisterPage/RegisterPage';
import {HomePage} from './HomePage/HomePage';
import { createBrowserHistory } from 'history';
import ToDoList from './TodoList/ToDoList'
import MainPage from './mainPage/MainPage'
import ApiData from './ShowApiData/ApiData'

const history = createBrowserHistory()

class AppRoutes extends React.Component {
    constructor(props) {
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    }

    render() {
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 container">
                        <Router history={history}>
                        <MainPage loggedIn={this.props.store.loggedIn}/>
                            <Switch>
                                <Route path="/login" component={UserLogin} />
                                <Route path="/todolist" component={ToDoList} />
                                <Route path="/apiData" component={ApiData} />
                                <Route path="/register" component={RegisterPage} />
                                <Route path="/" render={() => (
                                    this.props.store.loggedIn ? (<HomePage />) : (<Redirect to="/register" /> )
                                )} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

function mapState(store) {
    return {
        store: store.auth
    }
        
}

const connectedApp = connect(mapState)(AppRoutes);
export default connectedApp;