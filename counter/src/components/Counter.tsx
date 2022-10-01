interface CounterTypes {
  id: number;
  count: number;
}
interface counterProps {
  counter: CounterTypes;
  onIncrement: (counter: CounterTypes) => void;
  onDecrement: (counter: CounterTypes) => void;
}
const Counter = (props: counterProps) => {
  // const [count, setCount] = useState<number>(props.count);
  const { counter, onIncrement, onDecrement } = props;
  const displayCount = () => {
    return counter.count === 0 ? "Zero" : counter.count;
  };
  const checkZero = () => {
    return counter.count === 0 ? "btn btn-danger" : "btn btn-warning";
  };
  const disableCheck = () => {
    return counter.count <= 0 ? true : false;
  };
  return (
    <div>
      <button
        className="btn btn-primary m-2"
        onClick={() => onDecrement(counter)}
        disabled={disableCheck()}
      >
        Decrement
      </button>
      <span className={checkZero()}>{displayCount()} </span>
      <button
        className="btn btn-primary m-2"
        onClick={() => onIncrement(counter)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
