import React, { useEffect, useRef, useState } from "react";

const UseRefEx = () => {
  const [message, setMessage] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const msg = useRef<HTMLInputElement>(null);
  const counterRef = useRef<number | null>(null);
  const changeColor = () => {
    if (msg && msg.current) {
      msg.current.style.color = "#FF0000";
    }
  };
  useEffect(() => {
    counterRef.current = window.setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
    return () => {
      if (counterRef.current) window.clearInterval(counterRef.current);
    };
  }, []);
  return (
    <div>
      <h2>Example of UseRef Hook</h2>
      <input
        ref={msg}
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={changeColor}>Change Color</button>
      <h2>Counter:{count} </h2>
      <br />
      <button
        onClick={() => {
          if (counterRef.current) window.clearInterval(counterRef.current);
        }}
      >
        Stop Counter
      </button>
    </div>
  );
};

export default UseRefEx;
