import React from 'react';
import { connect } from 'react-redux';
import {register} from '../UserLogin/UserActions';
import { Link } from 'react-router-dom';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                userName: '',
                password: ''
            },
            submitted: false
        };
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        if (user.firstName && user.lastName && user.userName && user.password) {
            this.props.register(user);
            this.props.history.push('/')
        }
    }

    render() {
        
        const { user, submitted } = this.state;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h2>Register</h2>
                <form name="form" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className={'form-group' + (submitted && !user.firstName ? ' has-error' : '')}>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={(e) => this.handleChange(e)} />
                        {submitted && !user.firstName &&
                            <div className="help-block">First Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.lastName ? ' has-error' : '')}>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={(e) => this.handleChange(e)} />
                        {submitted && !user.lastName &&
                            <div className="help-block">Last Name is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.userName ? ' has-error' : '')}>
                        <label htmlFor="userName">Username</label>
                        <input type="text" className="form-control" name="userName" value={user.userName} onChange={(e) => this.handleChange(e)} />
                        {submitted && !user.userName &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !user.password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={user.password} onChange={(e) => this.handleChange(e)} />
                        {submitted && !user.password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Register</button>
                        <Link to="/login" className="btn btn-link">Login</Link>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) =>  {
    return {
        store: state
    }
}
const mapDispatchToProps = dispatch => {
    return {
        register: (user) => dispatch(register(user))
    }
}




const connectedRegisterPage = connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };