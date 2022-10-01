import ContextUse from "../components/ContextUse";
import React from "react";
import UseEffectBasic from "../components/UseEffectBasic";
interface contextType {
  name: string;
  message: () => JSX.Element;
}
const msg = () => {
  return <h2> This is message method in context</h2>;
};
const contextValue = {
  name: "Dr. Vipin Classes",
  message: msg,
};
export const Name = React.createContext<contextType>(contextValue);
function App() {
  return (
    <div className="container my-5">
      <UseEffectBasic />
      <Name.Provider value={contextValue}>
        <ContextUse name="Dr. Vipin Classes" />
      </Name.Provider>
    </div>
  );
}

export default App;
