import React from "react";
import ContextC from "./ContextC";
interface contextBProps {
  name: string;
}
function ContextB(props: contextBProps) {
  return (
    <div>
      ContextB
      <ContextC name={props.name} />
    </div>
  );
}

export default ContextB;
