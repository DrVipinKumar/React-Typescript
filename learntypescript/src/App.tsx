import React, { useReducer } from "react";
import ComponentA from "./Context/ComponentA";
import ComponentB from "./Context/ComponentB";
import ComponentD from "./Context/ComponentD";
const initcolor: string = "#000000";
const reducer = (state: string, action: string): string => {
  switch (action) {
    case "red":
      return (state = "#ff0000");
    case "green":
      return (state = "#00ff00");
    case "blue":
      return (state = "#0000ff");
    default:
      return state;
  }
};
interface contextType {
  color: string;
  action: React.Dispatch<string>;
}
const contextValue = {
  color: "#000000",
  action: (value: string) => value,
};
export const colorContext = React.createContext<contextType>(contextValue);
const App = () => {
  const [color, dispatch] = useReducer(reducer, initcolor);
  return (
    <div className="text-center">
      <colorContext.Provider value={{ color: color, action: dispatch }}>
        <ComponentA />
        <ComponentB />
        <ComponentD />
      </colorContext.Provider>
    </div>
  );
};

export default App;
