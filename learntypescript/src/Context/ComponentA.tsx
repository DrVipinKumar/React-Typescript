import { useContext } from "react";
import { colorContext } from "../App";

const ComponentA = () => {
  const contextColor = useContext(colorContext);
  return (
    <div>
      <span style={{ color: contextColor.color }}>ComponentA</span>
      <div className="m-3">
        <button
          className="btn btn-primary m-2"
          onClick={() => contextColor.action("red")}
        >
          RED
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => contextColor.action("green")}
        >
          GREEN
        </button>
        <button
          className="btn btn-primary m-2"
          onClick={() => contextColor.action("blue")}
        >
          BLUE
        </button>
      </div>
    </div>
  );
};

export default ComponentA;
