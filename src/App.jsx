import { useState } from 'react'
import './App.css'
import { RoutesGlobal } from './Routes/RoutesGlobal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RoutesGlobal />
    </div>
  )
}

export default App
