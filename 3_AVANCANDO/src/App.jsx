import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components
import Imagens from './components/Imagens'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Imagens/> */}
      {/* <ManageData/> */}
      <ListRender/>

    </>
  )
}

export default App
