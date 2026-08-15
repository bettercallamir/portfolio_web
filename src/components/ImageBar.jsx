import React, { useEffect, useState } from 'react'
import profile from '../assets/1.jpg'

export default function ImageBar() {
    const [mouse , setMouse] = useState({x: 0 ,y: 0})

    const handleMouseMoveEvent = (e)=>{
            const rect = e.currentTarget.getBoundingClientRect();

            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const moveX = (mouseX - centerX) * 0.1;
            const moveY = (mouseY - centerY) * 0.1;
            setMouse({
                x: moveX,
                y: moveY,
            })

            window.addEventListener("mousemove", handleMouseMoveEvent);
        }
  return (
    <div className={`relative flex items-center justify-center w-[45dvw] flex-1`} onMouseMove={handleMouseMoveEvent}>
        <div className={`
        absolute
        w-[430px]
        h-[430px]
        rounded-full
        bg-[#2F2FE4]
        blur-[90px]
        opacity-40
        `} style={{transform: `translate(${mouse.x}px, ${mouse.y}px)`}}/>

        <div className={`
        absolute
        w-[230px]
        h-[230px]
        rounded-full
        bg-[#BEC5E4]
        blur-[90px]
        opacity-40
        `} style={{transform: `translate(${Math.sin(mouse.y-50)}px, ${Math.sin(mouse.x-50)}px)`}}/>


      <div className="
    absolute
    w-[430px]
    h-[430px]
    rounded-full
    bg-[radial-gradient(circle_at_50%_45%,#d8efa5_0%,#8eaa73_35%,#162E93_70%,transparent_78%)]
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
