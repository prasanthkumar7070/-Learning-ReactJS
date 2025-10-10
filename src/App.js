import logo from "./logo.svg";
import "./App.css";
import TodoList from "./TodoApp/TodoList";
import { createContext, useState } from "react";
import ContextAPI from "./ContextAPI/ContextAPI";
import LoginForm from "./ConditionalRendering/LoginForm";

export const store = createContext();

function App() {
  const [data, setData] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn Redux" },
    { id: 3, title: "Learn ContextAPI" },
  ]);
  return (
    <div className="container">
      {/* <TodoList />

      <store.Provider value={{data,setData}}>
         <ContextAPI/>
      </store.Provider> */}
      <LoginForm />
    </div>
  );
}

export default App;
