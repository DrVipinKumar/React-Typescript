import React, { useState } from "react";
import GenericsCal from "./GenericsCal";

const Generics = () => {
  const [val1, setVal1] = useState<any>();
  const [val2, setVal2] = useState<any>();
  const [checks, setChecks] = useState<any>();

  return (
    <div>
      <h2>Generic Calculator</h2>
      <form>
        <input
          type="text"
          value={val1}
          onChange={(e) => {
            setVal1(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          value={val2}
          onChange={(e) => {
            setVal2(e.target.value);
          }}
        />
        <br />
        <input
          type="radio"
          value="String"
          checked={checks === "String"}
          onChange={(e) => setChecks(e.target.value)}
        />
        String
        <br />
        <input
          type="radio"
          value="Number"
          checked={checks === "Number"}
          onChange={(e) => setChecks(e.target.value)}
        />
        Number
      </form>
      <br />

      {checks === "String" ? (
        <GenericsCal val1={val1} val2={val2} />
      ) : (
        <GenericsCal val1={parseInt(val1)} val2={parseInt(val2)} />
      )}
    </div>
  );
};

export default Generics;
