// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React, { useEffect, useState } from "react";
import Card from "./card";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/system")
      .then(res => res.json())
      .then(data => setData(data));
  }, []);

  return (
    <div className="container">
      {/* HOME PAGE */}
      <div className="page">
        <h1>ABES</h1>
        <p>College</p>
      </div>

      {/* WORK PAGE */}
      <div className="page">
        <h2>Work with Node.js</h2>

        {data && (
          <div className="grid">
            <Card title="Total Memory" value={data.totalMemory} />
            <Card title="Free Memory" value={data.freeMemory} />
            <Card title="User Info" value={data.user} />
            <Card title="CPU Architecture" value={data.cpu} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;