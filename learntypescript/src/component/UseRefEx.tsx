import { useEffect, useRef, useState } from "react";

const UseRefEx = () => {
  const [msg, setMsg] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const msgRef = useRef<HTMLInputElement>(null);
  const counterRef = useRef<number | null>(null);
  const stopCounter = () => {
    if (counterRef && counterRef.current)
      window.clearInterval(counterRef.current);
  };
  useEffect(() => {
    if (msgRef && msgRef.current) msgRef.current.focus();
    counterRef.current = window.setInterval(() => {
      setCount((pcount) => pcount + 1);
    }, 1000);
    return () => {
      stopCounter();
    };
  }, []);
  return (
    <div>
      <h2>UseRef Example</h2>
      <input
        ref={msgRef}
        type="text"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button
        onClick={() => {
          if (msgRef && msgRef.current) msgRef.current.style.color = "red";
        }}
      >
        Change Color
      </button>
      <br />
      Counter: {count}
      <br />
      <button onClick={stopCounter}>Stop Counter</button>
    </div>
  );
};

export default UseRefEx;
