"use client";
import React, { useState } from "react";

const Counter = ({ users }) => {
  const [count, setCount] = useState(0);
  console.log(users);
  return (
    <>
      <p>There are {users.length}users</p>
      <button onClick={() => setCount((c) => c + 1)}>{count}</button>
    </>
  );
};

export default Counter;
