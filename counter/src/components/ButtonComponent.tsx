import React from "react";
interface buttonType {
  children: string;
  eventHandle: () => void;
}
const ButtonComponent = (props: buttonType) => {
  console.log("Rendering inside ", props.children);
  return (
    <button className="btn btn-primary" onClick={() => props.eventHandle()}>
      {props.children}
    </button>
  );
};

export default ButtonComponent;
