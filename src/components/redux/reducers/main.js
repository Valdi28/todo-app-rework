import { ADD_TASK, ADD_TODO, DELETE_TASK, DELETE_TODO, EDIT_TASK, EDIT_TODO_NAME, SELECT_TODO, SET_ADD_INPUT, SET_TASK, SET_TASK_EDIT_INPUT, SET_TODO, SET_TODO_INPUT, SET_TODO_NAME_INPUT, TASK_TOGGLE_COMPLETED } from "../actions/main"

const defaultState = {
    todo: "",
    todos: [
        {
            name: "Unamed ToDo",
            editing: false,
            task: "",
            tasks: [],
            id: 1,
            input: "",
            globalId: 0
        }
    ],
    globalId: 1,
    input: "",
    active: 1
}

export function mainReducer(state = defaultState, action) {
    switch (action.type) {
        case ADD_TASK:
            const newTask = {
                name: action.task_name,
                completed: false,
                editing: false

            }
            //state.todos.filter(todo => todo.id === state.active)[0].tasks.push(newTask)
            let newStateArr = []
            state.todos.map(todo => {
                if (todo.id === state.active&&action.task_name!=="") {
                    todo.input=""
                    todo.globalId += 1
                    todo.tasks.unshift({...newTask, id: todo.globalId})
                    
                    newStateArr.push(todo)
                } else {
                    newStateArr.push(todo)
                }
            })
            return {
                ...state,
                todos: newStateArr
            }

        case SET_TODO_INPUT:
            state.todos.filter(todo => todo.id === state.active)[0].input = action.todo_input

        case SET_TODO:
            return {
                ...state,
                todo: action.todo
            }

        case ADD_TODO:
            const newTodo = {
                name: action.todo_name,
                editing: false,
                task: "",
                tasks: [],
                input: "",
                id: state.globalId+1
            }
            if (state.input != "") {
                return {
                    ...state,
                    todos: [...state.todos, newTodo],
                    active: state.globalId+1,
                    input: "",
                    globalId: state.globalId+1
                }
            } else { return state }
        case EDIT_TODO_NAME:

            const todoToEditIndex = state.todos.indexOf(state.todo)
            if (todoToEditIndex !== -1) {
                if (state.todos[todoToEditIndex].editing === true) {
                    state.todos[todoToEditIndex].editing = false
                    if (state.todos[todoToEditIndex].name === "") {
                        state.todos[todoToEditIndex].name = "Unamed Todo"
                    }
                } else {
                    state.todos[todoToEditIndex].editing = true
                }
            }
            return state
        case SELECT_TODO:
            return {
                ...state,
                active: state.todo.id
            }
        case SET_TODO_NAME_INPUT:
            const todoToSetInputIndex = state.todos.indexOf(state.todo)
            if (action.todo_name_input !== undefined) {
                state.todos[todoToSetInputIndex].name = action.todo_name_input
            } else {
                return state
            }
        case SET_ADD_INPUT:
            return {
                ...state,
                input: action.add_input
            }
        case DELETE_TODO:
            const todoToDeleteIndex = state.todos.indexOf(state.todo)
            const newList = [...state.todos]
            newList.splice(todoToDeleteIndex, 1)

            if (todoToDeleteIndex !== -1 && state.todos.length > 1) {
                if (state.todo.id === state.active) {
                    let newId = 0
                    if (todoToDeleteIndex === 0) {
                        newId = state.todos[1].id
                    } else {
                        newId = state.todos[0].id
                    }
                    return {
                        ...state,
                        todos: newList,
                        active: newId
                    }
                } else {
                    return {
                        ...state,
                        todos: newList
                    }
                }
            }
        case TASK_TOGGLE_COMPLETED:
            var stateToreturn = []
            state.todos.map(todo => {
                if (todo.id === state.active) {
                    if (todo.task.completed) {
                        todo.tasks[todo.tasks.indexOf(todo.task)].completed = false
                    } else {
                        todo.tasks[todo.tasks.indexOf(todo.task)].completed = true
                    }
                    stateToreturn.push(todo)
                } else {
                    stateToreturn.push(todo)
                }
            })
            return {
                ...state,
                todos: stateToreturn
            }
        case SET_TASK:
            var stateToreturn = []
            state.todos.map(todo => {
                if (todo.id === state.active) {
                    todo.task = action.task
                    stateToreturn.push(todo)
                } else {
                    stateToreturn.push(todo)
                }
            })
            return {
                ...state,
                todos: stateToreturn
            }
        case EDIT_TASK:
            var stateToreturn = []
            state.todos.map(todo => {
                if (todo.id === state.active) {
                    if (todo.task.editing) {
                        if(todo.tasks[todo.tasks.indexOf(todo.task)].name==="") {
                            todo.tasks[todo.tasks.indexOf(todo.task)].name="[Empty]"
                        }
                        todo.tasks[todo.tasks.indexOf(todo.task)].editing = false
                    } else {
                        todo.tasks[todo.tasks.indexOf(todo.task)].editing = true
                    }
                    stateToreturn.push(todo)
                } else {
                    stateToreturn.push(todo)
                }
            })
            return {
                ...state,
                todos: stateToreturn
            }
        case SET_TASK_EDIT_INPUT:
            var stateToreturn = []
            state.todos.map(todo => {
                if (todo.id === state.active) {
                    todo.tasks[todo.tasks.indexOf(todo.task)].name = action.task_edit_input
                    stateToreturn.push(todo)
                } else {
                    stateToreturn.push(todo)
                }
            })
            return {
                ...state,
                todos: stateToreturn
            }
        case DELETE_TASK:
            var newState = []
            state.todos.map(todo=>{
                
                if(todo.id === state.active) {
                    var index = todo.tasks.indexOf(todo.task)
                    todo.tasks.splice(index, 1)
                    newState.push(todo)
                } else {
                    newState.push(todo)
                }
            })
            return {
                ...state,
                todos: newState
            }
        default: return state
    }
}