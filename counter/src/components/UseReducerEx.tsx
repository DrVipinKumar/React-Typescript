import React, { useReducer } from "react";
interface stateType {
  color: string;
  size: number;
}
interface actionType {
  color?: "red" | "green" | "blue";
  size?: number;
}
const stateValue = { color: "#000000", size: 25 };
const reducer = (state: stateType, action: actionType): stateType => {
  switch (action.color) {
    case "red":
      return { ...state, color: "#ff0000" };
    case "green":
      return { ...state, color: "#00ff00" };
    case "blue":
      return { ...state, color: "#0000ff" };
  }
  switch (action.size) {
    case 30:
      return { ...state, size: 30 };
    case 40:
      return { ...state, size: 40 };
    case 50:
      return { ...state, size: 50 };
    default:
      return state;
  }
};
const UseReducerEx = () => {
  const [state, dispatch] = useReducer(reducer, stateValue);
  return (
    <div>
      <h2 style={{ color: state.color, fontSize: state.size + "px" }}>
        Dr. Vipin Classes
      </h2>
      <br />
      <button
        className="btn btn-success m-2"
        onClick={() => {
          dispatch({ color: "red" });
        }}
      >
        RED
      </button>
      <button
        className="btn btn-success m-2"
        onClick={() => {
          dispatch({ color: "green" });
        }}
      >
        GREEN
      </button>
      <button
        className="btn btn-success m-2"
        onClick={() => {
          dispatch({ color: "blue" });
        }}
      >
        BLUE
      </button>
      <br />
      <button
        className="btn btn-success m-2"
        onClick={() => {
          dispatch({ size: 30 });
        }}
      >
        30px
      </button>
      <button
        className="btn btn-success m-2"
        onClick={() => {
          dispatch({ size: 40 });
        }}
      >
        40px
      </button>
      <button
        className="btn btn-success m-2"
        onClick={() => {
          dispatch({ size: 50 });
        }}
      >
        50px
      </button>
    </div>
  );
};

export default UseReducerEx;
