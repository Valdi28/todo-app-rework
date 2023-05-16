import React from "react";
import { connect } from "react-redux";
import { addTask, addTodo, deleteTask, deleteTodo, editTask, editTodoName, selectTodo, setAddInput, setTask, setTaskEditInput, setTodo, setTodoInput, setTodoNameInput, taskToggleCompleted } from "../redux/actions/main";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faPencil, faTrash, faCheck)

class Main extends React.Component {
    constructor(props) {
        super(props)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAddTask = this.handleAddTask.bind(this)
        this.handleTaskComplete = this.handleTaskComplete.bind(this)
        this.handleEdit = this.handleEdit.bind(this)
        this.handleEditInputChange = this.handleEditInputChange.bind(this)
        this.handleTaskDelete = this.handleTaskDelete.bind(this)
        this.handleInputEnter = this.handleInputEnter.bind(this)
    }
    handleInputChange(input) {
        this.props.setTodoInput(input.target.value)
    }
    handleAddTask() {
        this.props.addTask(this.props.main.todos.filter(todo => todo.id === this.props.main.active)[0].input)
    }
    handleTaskComplete(task) {
        this.props.setTask(task)
        this.props.taskToggleCompleted()

    }
    handleEdit(task) {
        this.props.setTask(task)
        this.props.editTask()
    }
    handleEditInputChange = (task) => obj => {
        this.props.setTask(task)

        this.props.setTaskEditInput(obj.target.value)
    }
    handleTaskDelete = (task) => {
        this.props.setTask(task)
        this.props.deleteTask()
    }
    handleInputEnter(event) {
        if(event.keyCode===13) {
            console.log(event.keyCode, event.target.value);
            this.handleAddTask(event.target.value)
        }
    }
    render() {
        return (
            <div id="main">
                <h1 id="main-title">{this.props.main.todos.filter(todo => todo.id === this.props.main.active)[0].name}</h1>
                <div id="add-task">
                    <input onKeyDown={this.handleInputEnter} id="add-task-input" onChange={this.handleInputChange} value={this.props.main.todos.filter(todo => todo.id === this.props.main.active)[0].input} type="text" />
                    <button id="add-task-btn" onClick={this.handleAddTask}>Add</button>
                </div>
                <div className="tasks">
                    {this.props.main.todos.filter(todo => this.props.main.active === todo.id)[0].tasks.map(task => {
                        return (
                            <div key={task.id} className="item">
                                <input  className="item-checkbox" onClick={() => this.handleTaskComplete(task)} type="checkbox" value={task.completed} />
                                {task.editing ? <input className="item-input" onChange={this.handleEditInputChange(task)} type="text" value={task.name} /> : task.completed ? <p className="item-text" style={{ textDecoration: 'line-through' }}>{task.name}</p> : <p className="item-text">{task.name}</p>}
                                {task.editing ? <button onClick={() => this.handleEdit(task)} className="item-edit-confirm"><FontAwesomeIcon icon={faCheck} /></button> : <button onClick={() => this.handleEdit(task)} className="item-edit"><FontAwesomeIcon icon={faPencil} /></button>}
                                <button onClick={() => this.handleTaskDelete(task)} className="item-delete"><FontAwesomeIcon icon={faTrash} /></button>
                            </div>
                        )
                    })}
                </div>
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
    selectTodo,
    setTodoInput,
    addTask,
    setTask,
    taskToggleCompleted,
    editTask,
    setTaskEditInput,
    deleteTask
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)