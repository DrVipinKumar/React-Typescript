import React from "react";
import ContextB from "./ContextB";
interface contextProps {
  name: string;
}
function ContextA(props: contextProps) {
  return (
    <div>
      ContextA
      <ContextB name={props.name} />
    </div>
  );
}

export default ContextA;
