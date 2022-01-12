import { ADDTODO, DELETETODO, DONETODO, EDITTODO } from "../Types";


const initialState = {
    todos: [
        {id:0, task:"Task1", done:false},
        {id:1, task:"Task2", done:false},
        {id:2, task:"Task3", done:false}
    ]
}


function todoReducer (state=initialState, action){

   

        switch (action.type) {
            case ADDTODO:
            return{
                ...state, todos:[...state.todos, {id:Math.random(), task: action.payload, done:false }] 
            }

            case DONETODO:
                return{
                ...state, todos: state.todos.map((el)=> el.id === action.payload ? {...el, done: ! el.done} : el )
                }
            case DELETETODO:
                return{
                ...state, todos: state.todos.filter((el)=> el.id !==action.payload)
                }
            case EDITTODO:
                return{
                ...state, todos: state.todos.map((el)=> el.id === action.id ? {...el, task : action.newTask} : el)
                }
        
            default:
               return state;
        }
  
}

export default todoReducer