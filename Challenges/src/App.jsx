import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Components
import ChalengeSoma from './components/ChalengeSoma'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ChalengeSoma/>
      
    </>
  )
}

export default App
