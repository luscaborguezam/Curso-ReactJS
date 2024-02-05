import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Components
import ChalengeSoma from './components/Desafio-1-Modulo/ChalengeSoma'
import UserDetails from './components/Desafio-3-Modulo/UserDetails'
import { ChallengeCSS } from './components/Desafio-4-Modulo/ChallengeCSS'

function App() {

  /* 3° módulo*/
  const userData = [
    {id: 1, nome:'Lucas', idade:23, profissao:'Desenvolvedor full Stack'},
    {id:2, nome: 'Kaicha', idade:17, profissao: 'Estágiária em Segurança da Informação'},
    {id:3, nome: 'Vitória', idade: 22, profissao: 'Lider da Equipe de Desenvolvimento'},
    {id:4, nome: 'Daniel', idade: 15, profissao: 'estudante'}
  ]
  /* 3° Módulo */
  const carData = [
    {id: 1, nome:'Porsche 911', modelo: 'Esportivo', ano:2007, cor: 'Azul bêbe', km:70000},
    {id: 2, nome:'Gol', modelo: 'Econômico', ano:2034, cor: 'Branco', km:0},
    {id: 3, nome:'Lamborghini', modelo: 'Esportivo', ano:2020, cor: 'Laranja', km:1000}
  ]
  return (
    <>
    {/* 1° ou 2° Módulo  */}
      {/* <ChalengeSoma/> */}
    {/* 3° Módulo */}
      {/* <h1>Dados dos Usuários</h1>
      {userData.map((user) =>(
        <UserDetails
          key={user.id} 
          nome={user.nome}
          idade={user.idade}
          profissao={user.profissao}
        />
      ))} */}
    {/*  4° Módulo */}
    <h1 className='title1'>Carros Disponíveis</h1>
      {carData.map((car)=>{
        return(<>
          <ChallengeCSS
            key={car.id} 
            nome={car.nome} 
            modelo={car.modelo}
            ano={car.ano}
            cor={car.cor}
            km={car.km}
          />
          <br/>
        </>)
      })}
    </>
  )
}

export default App
