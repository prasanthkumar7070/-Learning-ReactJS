import React, { useContext, useState } from "react";
import { store } from "../App";

const ContextAPI = () => {
  const { data, setData } = useContext(store);
  const [addItem, setAddItem] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (addItem.trim() === "") return;
    setData([...data, { id: data.length + 1, title: addItem }]);
    setAddItem("");
  };
  const deleteHandler = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);
  };
  return (
    <div>
      <h3 className="text-center mt-5">Context API</h3>
      <h1 className="text-center">Count {data?.length}</h1>
      {data.map((item, i) => (
        <div key={i} className="card p-2 w-50 mx-auto my-2">
          <div className="d-flex justify-content-between align-items-center">
            <h4>{item.title}</h4>
            <button className="btn btn-danger" onClick={() => deleteHandler(item.id)}>
              Del
            </button>
          </div>
        </div>
      ))}
      <div className="add-to-cart  w-50 mx-auto my-2">
        <form onSubmit={submitHandler} className="align-items-center">
          <input
            type="text"
            onChange={(e) => setAddItem(e.target.value)}
            placeholder="Type here"
          />
          <button className="">Add</button>
        </form>
      </div>
    </div>
  );
};

export default ContextAPI;
