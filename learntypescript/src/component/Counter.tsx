interface singleCounter {
  id: number;
  count: number;
}
interface counterProps {
  counter: singleCounter;
  onDecrement: (counter: singleCounter) => void;
  onIncrement: (counter: singleCounter) => void;
}
function Counter(props: counterProps) {
  // const [count, setCount] = useState<number>(props.count);
  return (
    <div className="m-4">
      <button
        className="btn btn-primary m-2"
        onClick={() => props.onDecrement(props.counter)}
      >
        Decrement
      </button>
      <span className="btn btn-warning">{props.counter.count}</span>
      <button
        className="btn btn-primary m-2"
        onClick={() => props.onIncrement(props.counter)}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;
