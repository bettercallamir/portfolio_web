import React from 'react'
import profile from '../assets/1.jpg'

export default function ImageBar() {
  return (
    <div className={`relative flex items-center justify-center w-[45dvw] h-screen`}>
        <div className="
        absolute
        w-[430px]
        h-[430px]
        rounded-full
        bg-[#9fc47a]
        blur-[90px]
        opacity-40
    "/>

      <div className="
    absolute
    w-[430px]
    h-[430px]
    rounded-full
    bg-[radial-gradient(circle_at_50%_45%,#d8efa5_0%,#8eaa73_35%,#26334d_70%,transparent_78%)]
  "/>
    <img
    src={profile}
    className="
      relative
      z-10
      w-[400px]
      h-[400px]
      rounded-full
      object-cover
      border-4 border-white/30
    "
  />
    </div>

    
  )
}
