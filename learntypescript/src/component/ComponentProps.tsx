import React from "react";
import Login from "./Login";
import { welcomeProps } from "./Welcome";

interface propsType {
  isLogin: boolean;
  Welcome: React.ComponentType<welcomeProps>;
}
const ComponentProps = ({ isLogin, Welcome }: propsType) => {
  return <div>{isLogin ? <Welcome msg="Dr. Vipin Classes" /> : <Login />}</div>;
};

export default ComponentProps;
