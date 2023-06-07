import { useCountStore } from '../model/store';

export const Counter = () => {
  const { increment, decrement, count } = useCountStore();

  return (
    <div>
      <p data-testid="counter-test">{count}</p>
      <button onClick={() => increment(1)}>
        increment
      </button>
      <button onClick={() => decrement(1)}>
        decrement
      </button>
    </div>
  );
};
