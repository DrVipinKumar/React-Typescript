import { useState } from "react";
import Counter from "./Counter";
interface CounterTypes {
  id: number;
  count: number;
}
const Counters4: CounterTypes[] = [
  { id: 1, count: 2 },
  { id: 2, count: 3 },
  { id: 3, count: 1 },
  { id: 4, count: 0 },
];
function HomeCounter() {
  const [counters, setCounters] = useState<CounterTypes[]>(Counters4);
  const resetAll = () => {
    const lcounters = counters.map((c) => {
      c.count = 0;
      return c;
    });
    setCounters(lcounters);
  };
  const increment = (counter: CounterTypes) => {
    const lcounters = [...counters];
    const index = counters.indexOf(counter);
    lcounters[index].count = lcounters[index].count + 1;
    setCounters(lcounters);
  };
  const decrement = (counter: CounterTypes) => {
    const lcounters = [...counters];
    const index = counters.indexOf(counter);
    lcounters[index].count = lcounters[index].count - 1;
    setCounters(lcounters);
  };
  return (
    <div>
      <button className="btn btn-warning" onClick={resetAll}>
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          counter={counter}
          onDecrement={decrement}
          onIncrement={increment}
        />
      ))}
    </div>
  );
}

export default HomeCounter;
