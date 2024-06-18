import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../features/todo/todoSlice';

function Todos({setSelectedTodo}) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
     <h5 style={{color:"darkblue"}}>Your Todos</h5>
      <ul className="list-unstyled">
        {todos.map((todo) => (
           

          <li
           className="mt-3 d-flex justify-content-between align-items-center bg-secondary text-white p-2 rounded"
            key={todo.id}
          >
                <div className="d-flex align-items-center">
              <input
                type="checkbox"
                className="form-check-input me-2"
                checked={todo.completed}
                onChange={()=>dispatch(toggleTodo(todo.id))}
              />
              <span className={`ms-2 ${todo.completed ? 'text-decoration-line-through' : ''}`}>
                {todo.text}
              </span>
            </div>
             <div>
             <button
                className="btn btn-outline-dark"
                onClick={() => setSelectedTodo(todo)}
              >
                ✏️
              </button>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="btn btn-outline-dark"
            >
              ❌
            </button>
             </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
