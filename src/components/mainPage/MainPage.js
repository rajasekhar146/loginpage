import React from 'react';
import { Link } from 'react-router-dom'

class MainPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
                this.props.loggedIn ?
                    <div className="container mb-10">
                        <ul className="nav nav-pills">
                            <li className="active">
                                <Link to="/">Home</Link>
                            </li>
                            <li><Link to="/todolist">To Do List</Link></li>
                            <li><Link to="/apiData">Api Data</Link></li>
                        </ul>
                    </div> : null
        )

    }
}


export default MainPage;