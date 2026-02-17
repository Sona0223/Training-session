import { useState } from 'react'
import Book from './components/Book'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div id='app'>
       <Book b = "Maths" p = "250" />
       <Book b = "Physics" p = "300" />
       <Book b = "Chemistry" p = "270" />
       </div>
    
    </>
  )
}

export default App

