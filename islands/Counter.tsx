/** @jsx h */
import { h } from "preact";
import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);
  const plus = () => {
    setCount((count) => count + 1);
  }
  const minus = () => {
    setCount((count) => count - 1);
  }
  return (
    <div>
      <p>{count}</p>
      <button onClick={minus} disabled={!IS_BROWSER}>
        -1
      </button>
      <button onClick={plus} disabled={!IS_BROWSER}>
        +1
      </button>
    </div>
  );
}
