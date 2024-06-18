import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo, updateTodo } from '../features/todo/todoSlice'
function Adddtodo({selectedTodo, setSelectedTodo}) {
    const [input, setInput] = useState("")
    const dispatch = useDispatch()
    useEffect(()=>{
        if (selectedTodo) {
            setInput(selectedTodo.text);
        }

    },[selectedTodo])
    const addTodoHandler = (e) => {
        // e.preventDefault();
        // dispatch(addTodo(input))
        // setInput('')
        e.preventDefault();
        if(selectedTodo){
           dispatch(updateTodo({id:selectedTodo.id, text: input}))
           setSelectedTodo(null);
        }
        else{
            dispatch(addTodo(input))
        }
        setInput('');


    }

    return (
        <form onSubmit={addTodoHandler} className="mt-3 d-flex">
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
               {selectedTodo?'Update Todo' :'Add Todo'}
            </button>
        </form>
    );
}

export default Adddtodo