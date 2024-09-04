// import React, { useState } from 'react';

// const Counter: React.FC = () => {
//   const [count, setCount] = useState<number>(0);

//   return (
//     <div>
//       <h2>Counter</h2>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//       <button onClick={() => setCount(count - 1)}>Decrement</button>
//     </div>
//   );
// };

// export default Counter;


import React, { useState } from 'react';
import './Counter.css'; // Import the CSS file

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className="counter-container">
      <h2 className="counter-heading">Counter</h2>
      <div className="counter-display">
        <p className="counter-value">Count: {count}</p>
      </div>
      <div className="counter-buttons">
        <button className="counter-button increment" onClick={() => setCount(count + 1)}>
          Increment
        </button>
        <button className="counter-button decrement" onClick={() => setCount(count - 1)}>
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;

