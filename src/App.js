import logo from "./logo.svg";
import "./App.css";
// import TodoList from "./TodoApp/TodoList";
import { createContext, useState } from "react";
import ContextAPI from "./ContextAPI/ContextAPI";
import LoginForm from "./ConditionalRendering/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import TodoInput from "./Redux/TodoInput";
import TodoList from "./Redux/TodoList";
import JSONPlaceHolder from "./FetchingAPI/JSONPlaceHolder";
import Axios from "./FetchingAPI/Axios";
import UseMemo from "./Hooks/UseMemo";
import ReduxTodos from "./OldRedux/ReduxTodos";
import UseCallback from "./Hooks/UseCallBack";
import PropDrilling from "./PropDrilling/PropDrilling";
import UseReff from "./Hooks/UseReff";
import ClassComponent from "./LifeCycle/ClassComponent";
import Navbar from "./NavSection/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import ShakaPlayer from "./ShakaPlayer/ShakaPlayer";
export const store = createContext();
function App() {
  const [data, setData] = useState([
    { id: 1, title: "Learn React" },
    { id: 2, title: "Learn Redux" },
    { id: 3, title: "Learn ContextAPI" },
  ]);
  const count = useSelector((state) => state.count); // Get data from store
  const dispatch = useDispatch(); // Used to send actions
  return (
    <div className="App">
      {/* <TodoList />

      <store.Provider value={{data,setData}}>
         <ContextAPI/>
      </store.Provider> */}
      {/* <LoginForm /> */}
      <div>
        {/* <h2>📝 Redux Todo App</h2> */}
        {/* <TodoInput />

        <TodoList /> */}
        {/* <ReduxTodos /> */}
        {/* <JSONPlaceHolder />
        <Axios /> */}
        {/* <UseMemo /> */}
        {/* <UseCallback /> */}
        {/* <PropDrilling /> */}
        {/* <UseReff /> */}
        {/* <ClassComponent /> */}

        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/redux_todos" element={<ReduxTodos />} />
            <Route path="/addtocart" element={<ClassComponent />} />
            <Route path="/fetching" element={<Axios />} />
            <Route path="/shakaPlayer" element={<ShakaPlayer />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
