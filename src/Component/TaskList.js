
import { Button } from 'react-bootstrap';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';



function TaskList() {

    const [filter, setFilter] = useState(false);
    const [done, setDone] = useState(true);
    const todos = useSelector((state)=> state.todoReducer.todos);
   
   

    return (
        <div>


  <Button variant="outline-success"   onClick={()=> setFilter(false)}              >Show All Tasks</Button>{' '}
  <Button variant="outline-warning" onClick={()=> {setFilter(true); setDone(false)}} >Show All Not Done</Button>{' '}
  <Button variant="outline-danger"  onClick={()=> {setFilter(true); setDone(true)}}  >Show All Done</Button>{' '}
 
     {!filter  ? todos.map((el) => <Task key={el.id} el={el} />)   : done
            ? todos.filter((el) => el.done).map((el) => <Task key={el.id} el={el} />)      : todos.filter((el) => !el.done).map((el) => <Task key={el.id} el={el} />)}
 

        </div>
    )
}
;
export default TaskList