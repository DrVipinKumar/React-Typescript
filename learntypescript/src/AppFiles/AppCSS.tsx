import React from "react";
import "./App.css";
import CSSProps1 from "../component/CSSProps1";
import CSSProps2 from "../component/CSSProps2";
function App() {
  return (
    <div>
      <CSSProps1 cssstyle={{ textAlign: "center", color: "#FF0000" }} />
      <CSSProps2 cssstyle={{ textAlign: "center", color: "#00ff00" }} />
    </div>
  );
}

export default App;
