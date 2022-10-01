import React from "react";
interface buttonProps {
  children: string;
  eventHandler: () => void;
}
const CallbackButton = (props: buttonProps) => {
  console.log("Rendering Inside Callback Button");
  return (
    <button className="btn btn-success" onClick={props.eventHandler}>
      {props.children}
    </button>
  );
};

export default React.memo(CallbackButton);
