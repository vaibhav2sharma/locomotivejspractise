import React from 'react'

const Landingpage = () => {
  return (
   <div data-scroll data-scroll-section data-scroll-speed ='-.6' className=' flex flex-col h-[90vh]'>
   <div className='w-full h-[80%] border-b-[1px] border-slate-500 '>
    <h1 className='text-[100px] leading-[100%] font-bold tracking-tighter pl-[40px] pt-[40px] text-left'>
    WE CREATE <br />
    <div className='h-[74px] w-[90px] rounded-[10px] bg-red-600 inline-block'></div>EYE-OPENING <br />
PRESENTATIONS
    </h1>
    </div>
     <div className='w-full h-[20vh] flex  justify-between px-[50px] py-[30px]'>
      <div>For public and private companies</div>
      <div>
From the first pitch to IPO</div>
      <div >
        <h3 className=' border-2 border-black px-3 py-1 rounded-[20px] items-center hover:bg-black hover:text-white duration-500 ease-in-out'>
        start the project
        </h3>
        
      </div>
   </div>
   </div>
  )
}

export default Landingpage
