import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import TextBar from './components/TextBar'


function App() {


  return (
    <>
      <div className='h-screen w-dvw bg-[#080616] flex flex-col'>
       <NavBar/>
       <TextBar/>

      </div>
    </>
  )
}

export default App
