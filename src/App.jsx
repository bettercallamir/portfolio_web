import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import TextBar from './components/TextBar'

function App() {


  return (
    <>
      <div className='h-[100dvh] w-[100dvw] bg-[#080616]'>
       <NavBar/>
       <TextBar/>
      </div>
    </>
  )
}

export default App
