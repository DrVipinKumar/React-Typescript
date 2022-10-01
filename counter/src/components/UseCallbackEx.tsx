import React, { useState, useCallback } from "react";
import ButtonComponent from "./ButtonComponent";
import UseCallbackTitle from "./UseCallbackTitle";

const UseCallbackEx: React.FC = () => {
  const [inccount, setIncCount] = useState<number>(0);
  const [deccount, setDecCount] = useState<number>(0);
  const decrement = useCallback(() => {
    setDecCount(deccount - 1);
  }, [deccount]);
  const increment = useCallback(() => {
    setIncCount(inccount + 1);
  }, [inccount]);
  console.log("Rendering inside UseCallback");

  return (
    <div>
      <UseCallbackTitle />
      <h2 className="badge bg-danger p-3 m-3">{deccount} </h2>
      <ButtonComponent eventHandle={decrement}>Decrement</ButtonComponent>
      <h2 className="badge bg-danger p-3 m-3">{inccount} </h2>
      <ButtonComponent eventHandle={increment}>Increment</ButtonComponent>
    </div>
  );
};

export default UseCallbackEx;
