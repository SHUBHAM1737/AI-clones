import React, { useState } from "react";

function App() {
  // counter state
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      
      <p className="text-2xl mb-4">Count: {count}</p>

      <div className="flex gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600"
        >
          Add Counter
        </button>

        <button
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
        >
          Remove Counter
        </button>
      </div>
    </div>
  );
}

export default App;
