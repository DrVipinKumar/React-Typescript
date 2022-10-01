import React, { useContext } from "react";
import { Name } from "../AppOld/AppContext";
interface contextCProps {
  name: string;
}
function ContextC(props: contextCProps) {
  const contextValue = useContext(Name);
  return (
    <div>
      ContextC
      <br />
      {props.name}
      <br />
      {contextValue.name}
      {contextValue.message()}
    </div>
  );
}

export default ContextC;
