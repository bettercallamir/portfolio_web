import React from 'react'

export default function Counter() {
  return (
    <div className={`flex justify-end gap-5 w-full h-[15dvh] p-5  `}>

        <div className={`md:w-[74px] text-center`}>
            <p className={`font-bold text-lg text-[#2F2FE4]`}>+2</p>
            <p >پروژه های تکمیل شده</p>    
        </div>
        <div className='w-[2px] h-[50px] bg-white'></div>

        <div className={`md:w-[74px] text-center`}>
            <p className={`font-bold text-lg text-[#2F2FE4]`}>+3</p>
            <p >سال تجربه</p>    
        </div>
        <div className='w-[2px] h-[50px] bg-white'></div>

        <div className={`md:w-[74px] text-center`}>
            <p className={`font-bold text-lg text-[#2F2FE4]`}>100%</p>
            <p >رضایت کارفرما</p>    
        </div>

        
    </div>
  )
}
