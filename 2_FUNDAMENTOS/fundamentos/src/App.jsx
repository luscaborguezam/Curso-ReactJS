import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// styles / CSS
import './App.css'

//components
import FirstComponent from './components/FirstComponents'
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent'
import Events from './components/Events'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <h1>Fundamentos React</h1>
      <FirstComponent/>
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
    </div>
  )
}

export default App
