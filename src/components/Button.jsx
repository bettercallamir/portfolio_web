import React from 'react'

export default function Button({text,type=0,arrow=false}) {
  return (
    <div>
      <input type='button' value={`${arrow ? `← ${text}`: `${text}`}`} className={`transition  cursor-pointer rounded-[8px] h-[45px] w-[90px] text-sm md:text-md  md:h-[50px] md:w-[115px] ${type==0 ? " bg-[#2F2FE4] hover:shadow-md shadow-[#1A1953] active:shadow-[#1A1953] active:bg-[#1A1953]" : "border-1 text-white rounded-[8px]" }`}>
      
      </input>

    </div>
  )
}
