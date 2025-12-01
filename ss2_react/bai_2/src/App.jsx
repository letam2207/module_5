import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListComponent from "./component/listComponent.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <ListComponent/>
    </>
  )
}

export default App
