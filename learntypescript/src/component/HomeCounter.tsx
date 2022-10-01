import { useState } from "react";
import Counter from "./Counter";

interface HomeCounterProps {
  id: number;
  count: number;
}
const Counters: HomeCounterProps[] = [
  { id: 1, count: 5 },
  { id: 2, count: 0 },
  { id: 3, count: 3 },
  { id: 4, count: 2 },
];
function HomeCounter() {
  const [counters, setCounters] = useState<HomeCounterProps[]>(Counters);
  const increment = (counter: HomeCounterProps) => {
    const lcounters = [...counters];
    const index = lcounters.indexOf(counter);
    lcounters[index].count = lcounters[index].count + 1;
    setCounters(lcounters);
  };
  const decrement = (counter: HomeCounterProps) => {
    const lcounters = [...counters];
    const index = lcounters.indexOf(counter);
    lcounters[index].count = lcounters[index].count - 1;
    setCounters(lcounters);
  };
  const resetAll = () => {
    const counter = counters.map((c) => {
      c.count = 0;
      return c;
    });

    setCounters(counter);
  };
  return (
    <div className="my-5">
      <button className="btn btn-warning" onClick={resetAll}>
        Reset ALL
      </button>
      {Counters.map((c) => (
        <Counter
          key={c.id}
          counter={c}
          onDecrement={decrement}
          onIncrement={increment}
        />
      ))}
    </div>
  );
}

export default HomeCounter;
