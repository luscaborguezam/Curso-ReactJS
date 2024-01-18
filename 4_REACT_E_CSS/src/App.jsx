import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//css
import './App.css'
import './components/MyComponent.css'

//components
import MyComponent from './components/MyComponent'
import Title from './components/Title'

function App() {
    const n = 15
    const [parImpar, setParImpar] = useState(true)
    const [redTitle, setRedTile] = useState(true)
    const handleParImpar = () => {parImpar? setParImpar(false) : setParImpar(true)}
    const handledTitle = () => {redTitle? setRedTile(false) : setRedTile(true)}
  return (
    <>
    {/* CSS global */}
      <h1>React & CSS</h1>
    {/* CSS de componente */}
      <MyComponent/>
      <p>Paragafo App.js</p>
    {/* Inline CSS */}
      <p style={{color:'purple', padding:'25px', borderTop: '2px solid red'}}>Este elemento foi estilizado de forma inline</p>
    {/* CSS iinline dinãmico */}
      <p style={n < 10? ({color:'palegoldenrod'}) : ({color: 'pink'})}>CSS dinãmico</p>
      <p style={parImpar? ({color:'Highlight', backgroundColor:'whitesmoke'}) : ({color: 'pink', backgroundColor:'beige'})}
        onClick={handleParImpar}
      >CSS dinamico (Clique Aqui!)</p>
    {/* Classe dinamica  */}
      <h2 className={redTitle? ('red-title') : ('title')}
        onClick={handledTitle}
      >Titulo classe dinamica (click)</h2>
    {/* CSS Module */}
      <Title/>
      <h1 className='my-title'>TESTANDO</h1>
    </>
  )
}

export default App
