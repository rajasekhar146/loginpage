import React from 'react';
import { connect } from 'react-redux'

class ApiData extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }
    render() {
        return (
            <div className="col-md-12 container">
                <ul className="list-group">
                    {
                        this.props.listItems.map((item) => {
                            return (
                            <li key={item.id} className="list-group-item">{item.text}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}
const mapStateToProps = store => {
    return {
        listItems: store.toDoList
    }
}

export default connect(mapStateToProps)(ApiData);
