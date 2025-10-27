import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./Actions";
import "./ReduxStyles.css";

const ReduxTodos = () => {
  const [task, setTask] = useState("");
  const [editId, setEditId] = useState(null);

  const todos = useSelector((state) => state.todos); // Accessing todos from state
  const dispatch = useDispatch(); 

  const handleAddOrUpdate = () => {
    if (!task.trim()) return;

    if (editId) {
      dispatch(updateTodo(editId, task));
      setEditId(null);
    } else {
      dispatch(addTodo(task));
    }
    setTask("");
  };

  const handleEdit = (todo) => {
    setTask(todo.text);
    setEditId(todo.id);
  };
  return (
    <div
      style={{ textAlign: "center", marginTop: "50px" }}
      className="redux-todos"
    >
      <h2>📝 Redux Todo App (Add, Update, Delete)</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
        style={{ padding: "8px", width: "250px" }}
      />
      <button className="add-btn" onClick={handleAddOrUpdate}>
        {editId ? "Update" : "Add"}
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px" }}>
            {todo.text}
            <div>
              <button  
                onClick={() => handleEdit(todo)}
                style={{ marginLeft: "10px" }}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => dispatch(deleteTodo(todo.id))}
              >
                DEL
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReduxTodos;
