import React from "react";
import { observer } from "mobx-react";
import { useStore } from "../../store";

export const CounterWithOutStore = observer(() => {
  const store = useStore();
  const { count, increase, decrease, reset } = store.counterStore;

  return (
    <div>
      <p>Count (imported store from outside): {count}</p>
      <button onClick={increase}>Increase +</button>
      <button onClick={decrease}>Decrease -</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
});
