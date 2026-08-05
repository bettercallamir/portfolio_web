import React from 'react'
import Button from './Button'
import Counter from './Counter'

export default function TextBar() {
  return (
    <div className={`overflow-hidden pt-10 flex flex-col w-[45dvw] h-full text-white items-end`}>
        <div className='lg:ml-[95px] flex items-center rounded-md p-4 border-1 border-[#EBEBEB] gap-2 w-[120px] h-[35px] text-sm text-center self-start'>
            <span className='w-[10px] h-[10px] bg-[#6DFF8D] rounded-full animate-pulse'></span>
         در درسترس</div>

        <div className='w-full flex flex-col  pt-8 text-5xl font-bold items-end text-right'>
            <h1>طراحی و توسعه وب</h1>
            <h2>مدرن</h2>
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
    </div>
  )
}
