import React, { useState } from "react";
import GenericsCal from "./GenericsCal";

const GenericsEx = () => {
  const [num1, setNum1] = useState<string>("");
  const [num2, setNum2] = useState<string>("");
  const [choice, setChoice] = useState<string>("");
  return (
    <div>
      <h2>Generic Example React with Typescript</h2>
      <br />
      <form>
        <input
          type="text"
          value={num1}
          placeholder="Enter value 1"
          onChange={(e) => setNum1(e.target.value)}
        />
        <br />
        <input
          type="text"
          value={num2}
          placeholder="Enter value 2"
          onChange={(e) => setNum2(e.target.value)}
        />
        <br />
        <input
          type="radio"
          value="string"
          checked={choice === "string"}
          onChange={(e) => setChoice(e.target.value)}
        />
        String
        <br />
        <input
          type="radio"
          value="number"
          checked={choice === "number"}
          onChange={(e) => setChoice(e.target.value)}
        />
        Number
      </form>
      {choice === "string" ? (
        <GenericsCal val1={num1} val2={num2} />
      ) : (
        <GenericsCal val1={parseInt(num1)} val2={parseInt(num2)} />
      )}
    </div>
  );
};

export default GenericsEx;
