// Action types
export const ADD_TODO = "ADD_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const DELETE_TODO = "DELETE_TODO";

// Action creators
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: text,
});

export const updateTodo = (id, text) => ({
  type: UPDATE_TODO,
  payload: { id, text },
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});
