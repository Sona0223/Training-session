// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <h1>
//         Hello World!
//       </h1>
//     </> 
//   )
// }

// export default App


import React from 'react';
import Card from './card.jsx';

function App() {
  return (
    <div>
      <Card 
        name="Naruto Uzumaki" 
        className="God of shinobi" 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw7zqhlsvdBWWgri5-S6JK95EowJu2-SGJuA&s"
      />
      <Card 
        name="Sung jinwoo" 
        className="Shadow monarch" 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDTSiLXdK7pVHu_uAE8Rli0oG3dak6q-2Pnw&s" 
      /> 
    </div>
  );
}

export default App; 
