import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {logout} from '../UserLogin/UserActions';




class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    handleLogout() {
        this.props.logout();
    }
    render() {
        return (

            <div className="col-md-12 container">
                <p onClick={() => this.handleLogout()}>
                    <Link to="/login">Logout</Link>
                </p>
                <p>You're logged in with React!!</p>
            </div>
        );
    }
}
const mapStateToProps = store => {
    return {
     loggingIn: store.loggedIn
    }
 
};
const mapDispatchToProps = dispatch => {
    return {
        logout: () => dispatch(logout())
    }
};
const connectedHomePage = connect(mapStateToProps, mapDispatchToProps)(HomePage);
export { connectedHomePage as HomePage };