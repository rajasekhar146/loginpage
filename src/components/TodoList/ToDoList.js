import React from 'react';
import { connect } from 'react-redux'
import { addItem, deleteItem } from './todoActions'


class ToDoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            itemValue: '',
            index: 0
        }
        this.deletebtn = {
            position: 'absolute',
            right: 0
        }
    }
     componentDidUpdate(){
        this.inputRef.focus();
     }

    handleChange(e) {
        this.setState({ itemValue: e.target.value })
    }
    handleSubmit(e) {
        e.preventDefault();
        const { itemValue, index } = this.state
        this.props.addItem(itemValue, index)
        this.setState({
            itemValue: '',
            index: index + 1
        })
    }
    handleDelete(id, index) {
        this.props.deleteItem(id, index)
    }

    render() {
        return (
            <div className="container col-md-6">
               <form className="d-flex">
                    <input type="text" value={this.state.itemValue} className="form-control" ref={(input) => { this.inputRef = input; }} placeholder="Enter value" onChange={(e) => this.handleChange(e)} aria-label="Recipient's username" aria-describedby="basic-addon2" />
                        <button className="btn btn btn-primary" disabled={!this.state.itemValue} onClick={(e) => this.handleSubmit(e)} id="basic-addon2">Submit</button>
                </form>
                {
                    this.props.items.length ?
                    <div>
                        <ul className="list-group list-group-flush">
                            {this.props.items.map((item, index) => {
                                return (
                                        <li className="list-group-item" key={item.id}>
                                            {item.text}
                                            <button style={this.deletebtn} onClick={()=> this.handleDelete(item.id, index)}><span className="glyphicon glyphicon-remove"></span></button>
                                         </li>
                                )
                            })}
                        </ul> 
                    </div>: null
                       
                }
            </div>
        )

    }

}
const mapStateToProps = store => {
    return {
        items: store.toDoList
    }
}
const mapDispatchActions = dispatch => {
    return {
        addItem: (item, index) => dispatch(addItem(item, index)),
        deleteItem: (id, index) => dispatch(deleteItem(id, index))
    }
}
export default connect(mapStateToProps, mapDispatchActions)(ToDoList);