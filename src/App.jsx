import { useState } from 'react'
import './App.css'

function App() {

  const [selected,setSelected] = useState("home");

  const items = [
    {"id":"contact","label":"تماس باما"},
    {"id":"skills","label":"مهارت ها"},
    {"id":"home","label":"خانه"},
  ]

  return (
    <>
      <div className='h-[100dvh] w-[100dvw] bg-[#080616]'>
            <div className='flex text-[#EBEBEB] w-full justify-between h-[80px] p-5'>
              <h1 className='font-bold md:text-[36px]'>{"<AMIR/>"} </h1>
              <div className='flex h-full justify-between items-center text-center gap-[75px] '>
                  {items.map((item)=>(
                    <div className='flex flex-col items-center gap-2 h-full'>
                    <button
                      key={item.id}
                      onClick={()=>setSelected(item.id)}
                      className={`transition cursor-pointer text-center items-center ${selected === item.id
                        ? "text-[#2F2FE4] font-bold"
                        : "text-white "
                      }`}
                    >
                    {item.label}
                    </button>
                    {selected === item.id && <span className='h-[6px] w-[6px] rounded-full bg-[#2F2FE4]'></span>}
                    </div>
                  ))}
              </div>
              <input type='button' value={"شروع همکاری"} className='md:h-[50px] md:w-[115px] bg-[#2F2FE4] rounded-[8px]'></input>
            </div>
      </div>
    </>
  )
}

export default App
