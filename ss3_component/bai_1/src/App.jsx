import { useState } from 'react'
import './App.css'
import ListClassComponent from "./component/ListClassComponent.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ListClassComponent/>
    </>
  )
}

export default App
