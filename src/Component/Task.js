import { Button } from 'react-bootstrap';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, doneTodo } from '../Redux/Actions/Todoaction';
import EditTask from './EditTask';

function Task({el}) {

    const dispatch = useDispatch();
    // const todos = useSelector((state) => state.todoReducer.todos)
    return (
        <div>
            



<div>
<ul style={{textDecoration:  el.done && "line-through" }}  > {' '}{el.task} {' '}</ul>
<Button variant="outline-primary"  onClick={ ()=> dispatch(doneTodo(el.id)) }  > Done </Button>{' '}
<Button variant="outline-primary"  onClick={ ()=>  dispatch(deleteTodo(el.id))  }  > Delete </Button>{' '}
<EditTask   el={el}  />
</div>



        </div>
    );
}

export default Task