import React from "react";
import ContextB from "./ContextB";
interface contextAProps {
  name: string;
}
function ContextA(props: contextAProps) {
  return (
    <div>
      ContextA
      <ContextB name={props.name} />
    </div>
  );
}

export default ContextA;
