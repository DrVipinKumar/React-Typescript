import React from "react";
import ContextA from "./ContextA";
interface contextProps {
  name: string;
}
const ContextUse = (props: contextProps) => {
  return (
    <div>
      ContextUse
      <ContextA name={props.name} />
    </div>
  );
};
export default ContextUse;
