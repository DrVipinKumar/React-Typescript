import React from "react";
export interface welcomeProps {
  name: string;
}
const Welcome = ({ name }: welcomeProps) => {
  return (
    <div>
      <h2>Dear {name}, Welcome to Dr. Vipin Classes </h2>
    </div>
  );
};

export default Welcome;
