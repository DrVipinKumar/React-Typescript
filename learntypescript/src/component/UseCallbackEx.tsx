import React, { useCallback, useState } from "react";
import CallbackButton from "./CallbackButton";
import CallbackTitle from "./CallbackTitle";

const UseCallbackEx = () => {
  console.log("Rendering Inside useCallback");
  const [count, setCount] = useState<number>(0);
  const increment = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  const decrement = useCallback(() => {
    setCount(count - 1);
  }, [count]);
  return (
    <div>
      <CallbackTitle />
      <CallbackButton eventHandler={decrement}>Decrement</CallbackButton>
      <h2 className="badge bg-danger p-3 mx-3"> {count}</h2>
      <CallbackButton eventHandler={increment}>Increment</CallbackButton>
    </div>
  );
};

export default UseCallbackEx;
