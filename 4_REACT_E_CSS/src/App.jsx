import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//css
import './App.css'
import './components/MyComponent.css'

//components
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* CSS global */}
      <h1>React & CSS</h1>
    {/* CSS de componente */}
      <MyComponent/>
      <p>Paragafo App.js</p>
    {/* Inline CSS */}
      <p style={{color:'purple', padding:'25px', borderTop: '2px solid red'}}>Este elemento foi estilizado de forma inline</p>
      
    </>
  )
}

export default App
