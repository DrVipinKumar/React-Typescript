// interface MessageProps {
//   onMessage: () => void;

import React from "react";

// }
type MessageProps = {
  onMessage: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Message = (props: MessageProps) => {
  return (
    <div>
      <h2>Event Props in React with Typescript</h2>
      <button onClick={(event) => props.onMessage(event, 20)}>
        Show Message from Message
      </button>
    </div>
  );
};

export default Message;
