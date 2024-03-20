import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);

  function handle() {
    setCount(count + 1);
  }

  return (
    <button onClick={handle}>
      You pressed me {count} times
    </button>
  );
}
