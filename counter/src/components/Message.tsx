interface messageProps {
  message: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
}

function Message(props: messageProps) {
  return (
    <div>
      <button onClick={(event) => props.message(event, 1)}>Show Message</button>
    </div>
  );
}

export default Message;
