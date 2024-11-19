//LIST AND KEYS  -------------------------->

// function App() {

//   const items = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

//   return (
//     <>
//       {
//         items.map((item, index) => (
//           <h1 key={index}>{item}</h1>
//         ))
//       }
//     </>
//   )
// }

// export default App


//REACT LYFECYCLE EVENTS


import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  // Runs on mount and updates
  useEffect(() => {
    console.log("Effect: Runs after render.");
    return () => {
      console.log("Cleanup: Runs before next effect or unmount.");
    };
  }, [count]); // Dependency array: runs effect only when `count` changes.

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default MyComponent;
