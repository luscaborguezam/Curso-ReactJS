import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//components
import Imagens from './components/Imagens'
import ManageData from './components/ManageData'
import ListRender from './components/ListRender'
import ConditionalRender from './components/ConditionalRender'
import PropsShowName from './components/PropsShowName'
import DestructuringCarDetails from './components/DestructuringCarDetails'
import Fragments from './components/Fragments'
import { Children } from 'react'
import ChildrenPropContainer from './components/ChildrenPropContainer'
import ExecutionFunction from './components/ExecutionFunction'
import StateLift from './components/StateLift'
import ChangeMessageState from './components/ChangeMessageState'

function App() {
  // const [count, setCount] = useState(0)
  // const [userName] = useState("Maria")
  // const age = 22

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    {id: 2, brand: "KIA", color: "Branco", newCar: false, km: 34343 },
    {id: 3, brand: "Renaut", color: "Azul", newCar: false, km: 234 }
  ]

  function showMessage(){
    console.log("texto")
  }

  //State Lift
  const [message, setMessage] = useState("")
  const handleMessage = (msg) => {
    setMessage(msg)
  }


  return (
    <>
      <Imagens />
      <ManageData />
      <ListRender />
      <ConditionalRender />
      {/* Props */}
      {/* <PropsShowName name={userName} idade={age} newCar/> */}
      {/* destructuring */}
      <DestructuringCarDetails brand="VW" km={1000} color="azul" newCar={false} />
      {/* reapriveitamento */}
      <DestructuringCarDetails brnad="Fiat" color="Vermelha" km={0} newCar={true} />
      <DestructuringCarDetails brand="Ford" color="Branco" km={4500} newCar={false} />
      {/* loop em array de objetos */}
      {cars.map((car) => (
        <DestructuringCarDetails
          key={car.id}
          brand={car.brand}
          color={car.color}
          km={car.km}
          newCar={car.newCar}
        />
      ))}
      {/* Fragments */}
      <Fragments/>
      {/* Children Prop */}
      <ChildrenPropContainer>
        /* Se não for utilizado o children porps, o que está aqui dentro não renderiza, 
         * apenas é iginorado*/
	      <p>E este é o conteúdo</p>
        <h3>teste</h3>
      </ChildrenPropContainer>
      {/* Execution function */}
      <ExecutionFunction myfunction={showMessage}/>
      {/* State Lift */}
      <StateLift msg={message}/> {/* Mostra a menssgaem */} 
      <ChangeMessageState handleMessage={handleMessage}/> {/* Modifica a Menssagem */}


    </>
  )
}

export default App
