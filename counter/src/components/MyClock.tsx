import { useEffect, useState } from "react";

function MyClock() {
  const [clock, setClock] = useState<Date>(new Date());
  useEffect(() => {
    let timer: NodeJS.Timer;
    timer = setInterval(() => {
      console.log(clock.toLocaleTimeString());
      setClock(new Date());

      return clearInterval(timer);
    }, 1000);
  }, [clock]);

  return (
    <div>
      <h2>{clock.toLocaleTimeString()}</h2>
    </div>
  );
}

export default MyClock;
