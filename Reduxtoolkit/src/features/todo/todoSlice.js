import { createSlice,nanoid } from "@reduxjs/toolkit";

const localTodos = JSON.parse(localStorage.getItem('todos')) || [];

const initialState = {
    todos: localTodos,
};


export const todoSlice= createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addTodo: (state, action)=>{
            const todo={
                id:nanoid(),
                text: action.payload,
                completed:false,
            }
            state.todos.push(todo)
            localStorage.setItem("todos", JSON.stringify(state.todos));

        },
        removeTodo: (state, action)=>{
            
            state.todos= state.todos.filter((todo)=> todo.id !== action.payload)
            localStorage.setItem("todos", JSON.stringify(state.todos));

        },

        updateTodo: (state, action)=>{
   
           state.todos= state.todos.map((todo)=>(todo.id===action.payload.id? action.payload :todo))
           localStorage.setItem("todos", JSON.stringify(state.todos));

        },

        toggleTodo:(state, action)=>{
          
           state.todos= state.todos.map((todo)=>todo.id===action.payload? {...todo, completed:!todo.completed}:todo)
           localStorage.setItem("todos", JSON.stringify(state.todos));

        }

    },
   
      

})
export const {addTodo, removeTodo,updateTodo, toggleTodo}= todoSlice.actions
export default todoSlice.reducer