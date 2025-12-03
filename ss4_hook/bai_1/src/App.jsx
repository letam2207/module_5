import { useState } from 'react'
import './App.css'
import ListComponent from "./component/ListComponent.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ListComponent/>
    </>
  )
}

export default App
