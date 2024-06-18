import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'
function Adddtodo() {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input))
        setInput('')


    }
    return (
        <form onSubmit={addTodoHandler} className="mt-3 d-flex align-items-center">
            <input
                type="text"
                className="form-control me-2"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="btn btn-primary"
            >
                Add Todo
            </button>
        </form>
    );
}

export default Adddtodo