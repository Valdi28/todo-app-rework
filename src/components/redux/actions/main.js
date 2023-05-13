// TO-DO 

export const SET_TODO = "SET_TODO"
export const ADD_TODO = "ADD_TODO"
export const EDIT_TODO_NAME = "EDIT_TODO_NAME"
export const SET_TODO_NAME_INPUT = "SET_TODO_NAME_INPUT"
export const DELETE_TODO = "DELETE_TODO"
export const SET_ADD_INPUT = "SET_ADD_INPUT"
export const SELECT_TODO = "SELECT_TODO"

export const SET_TODO_INPUT = "SET_NAME_INPUT"
export const ADD_TASK = "ADD_TASK"
export const TASK_TOGGLE_COMPLETED = "TASK_TOGGLE_COMPLETED"
export const SET_TASK = "SET_TASK"
export const EDIT_TASK = "EDIT_TASK"
export const SET_TASK_EDIT_INPUT = "SET_TASK_EDIT_INPUT"
export const DELETE_TASK = "DELETE_TASK"

export function taskToggleCompleted() {
    return {
        type: TASK_TOGGLE_COMPLETED
    }
}

export function setTask(task) {
    return {
        type: SET_TASK,
        task: task
    }
}

export function editTask() {
    return {
        type: EDIT_TASK
    }
}

export function setTaskEditInput(task_edit_input) {
    return {
        type: SET_TASK_EDIT_INPUT,
        task_edit_input: task_edit_input
    }
}

export function deleteTask() {
    return {
        type: DELETE_TASK
    }
}

export function setTodoInput(todo_input) {
    return {
        type: SET_TODO_INPUT,
        todo_input: todo_input
    }
}

export function addTask(task_name) {
    return {
        type: ADD_TASK,
        task_name: task_name
    }
}

export function setTodoNameInput(todo_name_input) {
    return {
        type: SET_TODO_NAME_INPUT,
        todo_name_input: todo_name_input
    }
}
export function selectTodo() {
    return {
        type: SELECT_TODO
    }
}
export function setAddInput(add_input) {
    return {
        type: SET_ADD_INPUT,
        add_input: add_input
    }
}

export function setTodo(todo) {
    return {
        type: SET_TODO,
        todo: todo
    }
}

export function addTodo(todo_name) {
    return {
        type: ADD_TODO,
        todo_name: todo_name
    }
}

export function editTodoName() {
    return {
        type: EDIT_TODO_NAME
    }
}

export function deleteTodo() {
    return {
        type: DELETE_TODO
    }
}