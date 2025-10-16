import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "./TodoSlice";
import "./Todo.css";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todoList); // Get todos from store
  const dispatch = useDispatch(); // Used to send actions

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
  };

  const handleUpdate = (id) => {
    if (editText.trim() === "") return;
    dispatch(updateTodo({ id, newText: editText }));
    setEditId(null);
    setEditText("");
  };

  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <p style={{ textAlign: "center" }}>No todos yet. Add one!</p>
      ) : (
        todos.map((todo) => (
          <li key={todo.id} className="todo-item">
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="edit-input"
                />
                <button
                  onClick={() => handleUpdate(todo.id)}
                  className="update-btn"
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    setEditId(null);
                    setEditText("");
                  }}
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <div>
                  <button onClick={() => handleEdit(todo)} className="edit-btn">
                    Edit
                  </button>
                  <button onClick={() => dispatch(deleteTodo(todo.id))}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))
      )}
    </ul>
  );
};

export default TodoList;
