import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Components
import ChalengeSoma from './components/Desafio-1-Modulo/ChalengeSoma'
import UserDetails from './components/Desafio-3-Modulo/UserDetails'

function App() {

  /* 3° módulo*/
  const userData = [
    {id: 1, nome:'Lucas', idade:23, profissao:'Desenvolvedor full Stack'},
    {id:2, nome: 'Kaicha', idade:17, profissao: 'Estágiária em Segurança da Informação'},
    {id:3, nome: 'Vitória', idade: 22, profissao: 'Lider da Equipe de Desenvolvimento'},
    {id:4, nome: 'Daniel', idade: 15, profissao: 'estudante'}
  ]

  return (
    <>
    {/* 1° ou 2° Módulo  */}
      {/* <ChalengeSoma/> */}
    {/* 3° Módulo */}
    <h1>Dados dos Usuários</h1>
    {userData.map((user) =>(
      <UserDetails
        key={user.id} 
        nome={user.nome}
        idade={user.idade}
        profissao={user.profissao}
      />
    ))}
    </>
  )
}

export default App
