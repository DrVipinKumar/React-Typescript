import React, { useEffect, useState } from "react";
import MyClock from "./MyClock";

function UseEffectBasic() {
  const [user, setUser] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [showClock, setShowClock] = useState<boolean>(true);
  useEffect(() => {
    setMessage(`UseEffect Called ${count} times`);
  }, [count]);
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCount(count + 1);
    switch (name) {
      case "user":
        setUser(value);
        break;
      case "address":
        setAddress(value);
        break;
    }
  };
  return (
    <div>
      <h2>User Information</h2>
      <form>
        <label htmlFor="name">Enter your name</label>
        <br />
        <input type="text" name="user" value={user} onChange={changeValue} />
        <br />
        <label htmlFor="address">Enter your address</label>
        <br />
        <input
          type="text"
          name="address"
          value={address}
          onChange={changeValue}
        />
        <br />
        <h2>{showClock && <MyClock />}</h2>
        <br />
        <button
          className="btn btn-warning m-4"
          onClick={(event: React.MouseEvent) => {
            event.preventDefault();
            setShowClock(false);
          }}
        >
          Remove Clock
        </button>
      </form>

      {message}
    </div>
  );
}

export default UseEffectBasic;
