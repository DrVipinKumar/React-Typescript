import React, { useEffect, useState } from "react";
import MyClock from "./MyClock";

function UseEffectBasic() {
  const [rclock, setRClock] = useState<boolean>(true);
  const [name, setName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [checkUseEffec, setCheckUseEffect] = useState<string>("");

  const removeClock = (event: React.MouseEvent) => {
    event.preventDefault();
    setRClock(false);
  };
  useEffect(() => {
    let msg = `UseEffect executing ${count} times`;
    setCheckUseEffect(msg);
  }, []);
  const changeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCount(count + 1);
    switch (name) {
      case "name":
        setName(value);
        break;
      case "address":
        setAddress(value);
        break;
    }
  };
  return (
    <div>
      <h2>Use of UseEffect Hook with Typescript</h2>
      <form>
        <label htmlFor="name">Enter your name</label>
        <br />
        <input type="text" value={name} name="name" onChange={changeValue} />
        <br />
        <br />
        <label htmlFor="address">Enter your address</label>
        <br />
        <input
          type="text"
          value={address}
          name="address"
          onChange={changeValue}
        />
        <br />
        {rclock ? <MyClock /> : ""}
        <br />
        <button className="btn btn-warning" onClick={removeClock}>
          Remove Clock
        </button>
      </form>
      {checkUseEffec}
    </div>
  );
}

export default UseEffectBasic;
