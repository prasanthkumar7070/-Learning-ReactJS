import React, { useState } from "react";

const TodoList = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const AddTodo = () => {
    if (task.trim() === "") return;
    setTodos([...todos, task]);
    setTask("");
  };

  const DeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };
  return (
    <div className="todo-container">
      <h3 className="text-center mt-4">Add Todo List</h3>
      <div className="text-input">
        <input
          className=""
          type="text"
          placeholder="Type Here"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="" onClick={AddTodo}>
          Add
        </button>
      </div>
      <div className="todo-data-list">
        {todos.map((todo, index) => (
          <div key={index} className="todo-item">
            <div className="outer-box">
              <div className="list-box">
                <h5>{todo}</h5>
                <button
                  className="btn btn-danger"
                  onClick={() => DeleteTodo(index)}
                >
                  DEL
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
