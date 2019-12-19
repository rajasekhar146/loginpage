import React, { Component } from "react";
import { getUser, logout } from './UserActions'
import { connect } from 'react-redux';



class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            password: '',
            submitted: false
        }
    }
   
    handleInput(event) {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ submitted: true });
        const { userName, password } = this.state;
        if (userName && password) {
            this.props.getUser(userName, password);
            this.props.history.push('/')
        }
       
    }
    

    render() {
       
        const { userName, password, submitted } = this.state;
        return(
            <div className="col-md-6 col-md-offset-3">
                {
                this.props.error && <h2>{this.props.error}</h2>
                }
                <form name="form" onSubmit={(e) => this.handleSubmit(e)}>
                    <div className={'form-group' + (submitted && !userName ? ' has-error' : '')}>
                        <label htmlFor="userName">Username</label>
                        <input type="text" className="form-control" name="userName" value={userName} onChange={(e)=>this.handleInput(e)} />
                        {submitted && !userName &&
                            <div className="help-block">Username is required</div>
                        }
                    </div>
                    <div className={'form-group' + (submitted && !password ? ' has-error' : '')}>
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" name="password" value={password} onChange={(e)=>this.handleInput(e)} />
                        {submitted && !password &&
                            <div className="help-block">Password is required</div>
                        }
                    </div>
                    <div className="form-group">
                        
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                {/* <p>Count: {this.props.store.count}</p>
                <input type="email" value={this.state.userName} onChange={(e) =>this.handleInput(e)}>
                </input>
                <input type="password" value={this.state.password} onChange={(e) =>this.handleInputpassword(e)}>
                </input>
                <button type="button" onClick={()=> this.handleSubmit()}>submit
                </button> */}
            </div>
        )
    }

}

const mapStateToProps = store => {
       return {
        loggingIn: store.auth.loggedIn,
        error: store.auth.error
       }
    
};
const mapDispatchToProps = dispatch => {
    return {
        getUser: (userName, password) => dispatch(getUser(userName, password)),
        logout: () => dispatch(logout())
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);;