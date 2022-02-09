import { useState } from "react";
import useTitle from "../hooks/useTitle";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [prevCount, setPrevCount] = useState(0);

  const handleClick = () => {
    setCount((prev) => {
      setCount(prev + 1);
      setPrevCount(prev);
      useTitle(`Count: ${count}`);
    });
  };

  return (
    <div>
      <h3>Current count: {count}</h3>
      <h3>Previous count: {prevCount}</h3>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Counter;
