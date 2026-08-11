import React from 'react'
import Button from './Button'
import Counter from './Counter'
import Console from './Console'
import githubIcon from '../assets/github.svg'
import instagramIcon from '../assets/instagram.svg'
import telegramIcon from '../assets/telegram.svg'

export default function TextBar() {
  return (
    <div className={`overflow-hidden pt-10 flex-1 flex flex-col w-[45dvw]  text-white items-end`}>
        <div className='lg:ml-[95px] flex items-center rounded-md p-4 border-1 border-[#EBEBEB] gap-2 w-[120px] h-[35px] text-sm text-center self-start'>
            <span className='w-[10px] h-[10px] bg-[#6DFF8D] rounded-full animate-pulse'></span>
         در درسترس</div>

        <div className='w-full flex flex-col  pt-8 text-5xl font-bold items-end text-right'>
            <h1>طراحی و توسعه وب</h1>
<h2
  dir="rtl"
  className="inline-block pb-5 pt-2 bg-gradient-to-r from-[#2F2FE4] to-white bg-clip-text text-transparent"
  style={{ WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
>
  Modern Web Design
</h2>
        </div>

        <div className='w-[385px] flex flex-col  pt-8 text-xl items-end text-right'>
            <p>وب‌سایت، داشبورد و پنل‌های اختصاصی با تمرکز
بر سرعت، تجربه کاربری و کیفیت</p>
        </div>

        <div className='flex gap-2 w-full h-auto justify-end pt-[9px] '>
            <Button text={"مشاهده نمونه کار"} type={1}></Button>
            <Button text={"شروع همکاری"} type={0} arrow={true}/>
        </div>
        
        <Counter/>
        <div className='self-start lg:pl-[95px] flex items-end pb-10'>
          <Console/> 
          <div className='flex gap-5 pb-10 pl-5'>
            <div className={`h-[32px] w-[32px] bg-center bg-no-repeat cursor-pointer`} style={{backgroundImage : `url(${githubIcon})`}}></div>
            <div className={`h-[35px] w-[35px] bg-center bg-no-repeat cursor-pointer`} style={{backgroundImage : `url(${instagramIcon})`}}></div>
            <div className={`h-[34px] w-[34px] bg-center bg-no-repeat cursor-pointer`} style={{backgroundImage : `url(${telegramIcon})`}}></div>
          </div>

          </div>
        

        
    </div>
  )
}
