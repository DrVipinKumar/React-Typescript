import React from "react";
import Login from "./Login";
import { welcomeProps } from "./Welcome";
interface PropsType {
  isLogin: boolean;
  welcome: React.ComponentType<welcomeProps>;
}
const ComponentProps = (props: PropsType) => {
  return (
    <div>
      {props.isLogin ? <props.welcome name="Sachin Kumar" /> : <Login />}
    </div>
  );
};

export default ComponentProps;
