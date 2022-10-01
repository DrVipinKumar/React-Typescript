import "./App.css";
import React from "react";
import ContextUse from "../component/ContextUse";
interface nameTypes {
  name: string;
  address: string;
  msg: () => React.ReactElement;
}
const nameValue: nameTypes = {
  name: "Dr. Vipin Teotia",
  address: "Delhi NCR",
  msg: () => <h2>This is message by Context Object</h2>,
};
export const Name = React.createContext<nameTypes>(nameValue);
function App() {
  return (
    <div className="container">
      <Name.Provider value={nameValue}>
        <ContextUse name="Dr. Vipin Classes" />
      </Name.Provider>
    </div>
  );
}

export default App;
