import { useCounter } from "../../../hooks/useCounter";

export const Counter = () => {
  const { counter, sumar, restar, reset } = useCounter();

  return (
    <div>
      <button onClick={sumar}>+</button>
      <h4> {counter} </h4>
      <button onClick={reset}>Reset</button>
      <button onClick={restar}>-</button>
    </div>
  );
};
