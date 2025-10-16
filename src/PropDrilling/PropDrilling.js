import React from "react";

const PropDrilling = () => {
  const user = { name: "Prasanth", age: 25 };

  return <Parent user={user} />;
};

const Parent = ({ user }) => {
  // Parent doesn't use 'user', but must pass it down
  return <Child user={user} />;
};

const Child = ({ user }) => {
  return <GrandChild user={user} />;
};

const GrandChild = ({ user }) => {
  return (
    <h2>
      Prop Drilling,
      <br /><br />&nbsp; {user.name}!
    </h2>
  );
};

export default PropDrilling;
