import React from "react";
export interface welcomeProps {
  msg: string;
}
const Welcome = ({ msg }: welcomeProps) => {
  return (
    <div>
      <h2>Welcome {msg} to Component as Props Example</h2>
    </div>
  );
};

export default Welcome;
