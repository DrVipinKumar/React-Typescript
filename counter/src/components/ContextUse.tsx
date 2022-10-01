import React from "react";
import ContextA from "./ContextA";
interface contextUseProps {
  name: string;
}
function ContextUse(props: contextUseProps) {
  return (
    <div>
      ContextUse
      <ContextA name={props.name} />
    </div>
  );
}

export default ContextUse;
