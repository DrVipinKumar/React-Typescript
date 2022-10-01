import React from "react";
import ContextC from "./ContextC";
interface contextProps {
  name: string;
}
function ContextB(props: contextProps) {
  return (
    <div>
      ContextB
      <ContextC name={props.name} />
    </div>
  );
}

export default ContextB;
