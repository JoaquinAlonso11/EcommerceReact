import { useState } from "react";

export const useCounter = (initial = 0) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    setCounter(counter + 1);
  };

  const restar = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  const reset = () => {
    setCounter(initial);
  };

  return {
    counter,
    sumar,
    restar,
    reset,
  };
};
