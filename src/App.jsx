import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import TextBar from './components/TextBar'
import ImageBar from './components/ImageBar'


function App() {


  return (
    <>
      <div className='h-screen w-dvw bg-[#080616] flex flex-col'>
       <NavBar/>
       <div className='flex'>
        <TextBar/>
        <ImageBar/>
       </div>

      </div>
    </>
  )
}

export default App
