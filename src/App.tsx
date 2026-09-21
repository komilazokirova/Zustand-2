
import { useCounterStore } from "./store/counterStore";
import { useNotificationStore } from "./store/useNotificationStore";


const App = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const reset = useCounterStore((state) => state.reset);
  const messages = useNotificationStore((state) => state.messages);
  const clearAll = useNotificationStore((state) => state.clearAll);

  return (
    <div>
      <h1>Counter: {count}</h1>

      <h2>Notifications</h2>


      {messages.map((message, index) => (
        <p key={index}>{message}</p>))}
      <button onClick={clearAll}> Clear All </button>

      

      <button onClick={increment}>+</button>

      <button onClick={decrement}>-</button>

      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;

