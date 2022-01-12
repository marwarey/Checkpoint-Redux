import { ADDTODO, DELETETODO, DONETODO, EDITTODO } from "../Types"


export const addTodo = (task) =>{

    return {

        type: ADDTODO,
        payload:task
    }

}

export const doneTodo = (id) => {

    return{

        type: DONETODO,
        payload:id
    }

}

export const deleteTodo = (id) => {

    return{

        type:DELETETODO,
        payload: id
    }
}

export const editTodo = (id, newTask) => {

    return{

        type: EDITTODO,
       id, newTask
    }
}