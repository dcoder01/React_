import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
      <ul className="list-unstyled">
        {todos.map((todo) => (
           

          <li
            className="mt-3 d-flex justify-content-between align-items-center bg-secondary text-white p-2 rounded"
            key={todo.id}
          >
             
            <div>{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="btn btn-danger"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="bi bi-trash"
                width="24"
                height="24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 6h18M9 6v12m6-12v12m4 0H5V6h14zM5 6h14V4H5v2z"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
