import { useEffect, useState } from "react";
function MyClock() {
  const [clock, setClock] = useState<Date>(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      console.log(clock.toLocaleTimeString());
      setClock(new Date());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <div>{clock.toLocaleTimeString()}</div>;
}

export default MyClock;
