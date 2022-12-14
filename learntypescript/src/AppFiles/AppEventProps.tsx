import React from "react";
import "./App.css";
import Message from "../component/Message";
function App() {
  const message = (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    console.log("Welcome to React with Typescript", id);
  };
  return (
    <div>
      <Message onMessage={message} />
      <button onClick={(event) => message(event, 10)}>
        Show Message from APP
      </button>
    </div>
  );
}

export default App;
