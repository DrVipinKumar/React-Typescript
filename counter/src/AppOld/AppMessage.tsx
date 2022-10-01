import React from "react";
import "./App.css";
import Message from "../components/Message";
function App() {
  const message = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log("Event Props", id);
  };
  return (
    <div>
      <Message message={message} />
    </div>
  );
}

export default App;
