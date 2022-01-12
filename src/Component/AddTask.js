import React, { useState } from 'react';
import { Form , Button} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTodo } from '../Redux/Actions/Todoaction';

function AddTask() {

    const [text, setText] = useState("");
    const dispatch = useDispatch()

    return (
        <div>

            <Form>
                <Form.Control   type="text"    placeholder="Enter a Task"  onChange={(e) => setText(e.target.value)} value={text} />
                <Button variant="info" onClick={()=> dispatch(addTodo(text))  }> Add Task ! </Button>
            </Form>

        </div>
    )
}

export default AddTask