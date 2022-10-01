import React, { useContext } from "react";
import { Name } from "../AppFiles/AppContext";
interface contextProps {
  name: string;
}
function ContextC(props: contextProps) {
  const name = useContext(Name);
  return (
    <div>
      ContextC
      <br />
      {props.name}
      <br />
      {name.name}
      <br />
      {name.address}
      <br />
      {name.msg()}
    </div>
  );
}

export default ContextC;
