import React, { useEffect, useMemo, useRef, useState } from "react";

const UseReff = () => {
  const [count, setCount] = useState(0);
  const prevCount = useRef();
  //useRef lets us remember something between renders — like the previous state or a DOM element — without re-rendering the component.
  useEffect(() => {
    prevCount.current = count; // store current count in ref
    console.log("Calling from useEffect");
  }, [count]); // runs whenever count changes
  
  useMemo(() => {
    console.log("calling from Usememo");
  }, []);
  return (  
    <div>
      <h2>Current Count: {count}</h2>
      <h3>Previous Count: {prevCount.current}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default UseReff;
