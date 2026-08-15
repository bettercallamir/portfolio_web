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
    <div className={`block relative flex items-center justify-center w-[45dvw] flex-1 sm-hidden`} onMouseMove={handleMouseMoveEvent}>
    <svg className='absolute top-1/6' width="580" height="290" viewBox="0 0 580 290" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M578.5 290C578.5 213.485 548.105 140.104 494 85.9997C439.896 31.8955 366.515 1.50001 290 1.5C213.485 1.49999 140.104 31.8954 85.9997 85.9997C31.8955 140.104 1.50001 213.485 1.5 290" stroke="#EBEBEB" stroke-width="3"/>
    </svg>


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
