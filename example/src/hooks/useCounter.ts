import { useState, useCallback } from "react";

const useCounter = (step = 1) => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => setCount((c) => c + step), [step]);
  const decrement = useCallback(() => setCount((c) => c - step), [step]);

  return { count, increment, decrement };
};

export { useCounter };
