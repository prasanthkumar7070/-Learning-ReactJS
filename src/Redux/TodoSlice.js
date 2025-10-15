import { createSlice } from "@reduxjs/toolkit";

// ✅ Load todos from localStorage
// const loadFromLocalStorage = () => {
//   try {
//     const savedTodos = localStorage.getItem("todos");
//     return savedTodos ? JSON.parse(savedTodos) : [];
//   } catch (error) {
//     console.error("Error loading todos:", error);
//     return [];
//   }
// };

// // ✅ Save todos to localStorage
// const saveToLocalStorage = (todos) => {
//   try {
//     localStorage.setItem("todos", JSON.stringify(todos));
//   } catch (error) {
//     console.error("Error saving todos:", error);
//   }
// };

const initialState = {
  todoList: []
};

const todoSlice = createSlice({   //createSlice is a function that accepts an initial state, an object of reducer functions, and a slice name

  name: "todos",
  initialState, 

  reducers: {
    addTodo: (state, action) => {
      state.todoList.push({
        id: Date.now(),           
        text: action.payload,
      });
    //   saveToLocalStorage(state.todoList);
    },

    deleteTodo: (state, action) => {
      state.todoList = state.todoList.filter(
        (todo) => todo.id !== action.payload
      );
    //   saveToLocalStorage(state.todoList);
    },

    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todoList.find((t) => t.id === id);
      if (todo) {
        todo.text = newText;
      }
    //   saveToLocalStorage(state.todoList);
    },
  },
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;
       