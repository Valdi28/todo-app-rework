import React from "react";
import { connect } from "react-redux";
import { addTodo, deleteTodo, editTodoName, selectTodo, setAddInput, setTodo, setTodoNameInput } from "../redux/actions/main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faCheck, faTrash, faSitemap } from "@fortawesome/free-solid-svg-icons";
library.add(faCheck, faTrash, faPencil, faSitemap)

class SideBar extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddInputChange = this.handleAddInputChange.bind(this)
        this.addTodo = this.addTodo.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.toggleTodoEditing = this.toggleTodoEditing.bind(this)
        this.handleAddInputChange = this.handleAddInputChange.bind(this)
        this.handleSelectTodo = this.handleSelectTodo.bind(this)
        this.toogleSidebar = this.toogleSidebar.bind(this)
        this.state = {
            show: true
        }
    }
    handleAddInputChange(input) {
        this.props.setAddInput(input.target.value)
    }
    addTodo() {
        this.props.addTodo(this.props.main.input)
    }
    handleDelete(item) {
        this.props.setTodo(item)
        this.props.deleteTodo()

    }
    toggleTodoEditing(item) {
        this.props.setTodo(item)
        this.props.editTodoName()

    }
    handleEditInputChange = (item) => input => {
        this.props.setTodo(item)
        this.props.setTodoNameInput(input.target.value)

    }
    handleSelectTodo(item) {
        this.props.setTodo(item)
        this.props.selectTodo()

        console.log('clicked');
    }
    toogleSidebar() {
        if (this.state.show) {
            this.setState({
                ...this.state,
                show: false
            })
        } else if (!this.state.show) {
            this.setState({
                ...this.state,
                show: true
            })
        }
    }
    render() {
        return (
            <div id="sidebar">
                <div id="sidebar-toggler">
                    <button onClick={this.toogleSidebar} id="show-hide-btn"><FontAwesomeIcon icon={faSitemap}/></button>
                </div>
                <hr />
                {this.state.show ? <div id="sidebar-content">
                    <h1 id="page-title">ToDo Monster</h1>
                    <div id="add-todo-form">
                        <input id="add-todo-form-input" type="text" value={this.props.main.input} onChange={this.handleAddInputChange} />
                        <button id="add-todo-form-btn" onClick={this.addTodo}>Add</button>
                    </div>
                    <div id="todos-container">
                        {this.props.main.todos.map(item => {
                            return (
                                <div className={this.props.main.active === item.id ? "todo-active todo" : "todo"} key={item.id}>
                                    {item.editing ? <input className="todo-input" onChange={this.handleEditInputChange(item)} type="text" value={item.name} /> : <p className="todo-text">{item.name}</p>}
                                    {this.props.main.active === item.id ? <button className="todo-selected todo-select" disabled>Selected</button> : <button className="todo-select" onClick={() => this.handleSelectTodo(item)}>Select</button>}
                                    {item.editing ? <button className="todo-edit-confirm" onClick={() => this.toggleTodoEditing(item)} ><FontAwesomeIcon icon={faCheck} /></button> : <button className="todo-edit" onClick={() => this.toggleTodoEditing(item)}><FontAwesomeIcon icon={faPencil} /></button>}
                                    {this.props.main.todos.length > 1 ? <button className="todo-delete" onClick={() => this.handleDelete(item)}><FontAwesomeIcon icon={faTrash} /></button> : <button title="You can't delete this todo because you need to have at least one todo" className="todo-delete" disabled onClick={() => this.handleDelete(item)}><FontAwesomeIcon icon={faTrash} /></button>}
                                </div>
                            )
                        })}
                    </div>
                </div> : undefined}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        main: state.mainReducer
    }
}

const mapDispatchToProps = {
    setTodoNameInput,
    setAddInput,
    setTodo,
    editTodoName,
    deleteTodo,
    addTodo,
    selectTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar)