import React, { useReducer } from "react";
interface stateType {
  color: string;
  size: number;
}
interface actionType {
  color?: "red" | "green" | "blue";
  size?: number;
}
const initstate: stateType = { color: "#000000", size: 20 };
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
    case 35:
      return { ...state, size: 35 };
    case 40:
      return { ...state, size: 40 };
    default:
      return state;
  }
};
const UseReducerEx = () => {
  const [state, dispatch] = useReducer(reducer, initstate);
  return (
    <div>
      <h2>UseReducer Example</h2>
      <h2 style={{ color: state.color, fontSize: state.size + "px" }}>
        Dr. Vipin Classes
      </h2>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => dispatch({ color: "red" })}
      >
        RED
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => dispatch({ color: "green" })}
      >
        GREEN
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => dispatch({ color: "blue" })}
      >
        BLUE
      </button>
      <br />
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => dispatch({ size: 30 })}
      >
        30px
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => dispatch({ size: 35 })}
      >
        35px
      </button>
      <button
        className="btn btn-primary btn-sm m-2"
        onClick={() => dispatch({ size: 40 })}
      >
        40px
      </button>
    </div>
  );
};

export default UseReducerEx;
