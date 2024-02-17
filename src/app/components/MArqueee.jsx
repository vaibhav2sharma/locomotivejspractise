import React from 'react'
import '../globals.css'
import Marquee from 'react-fast-marquee'

const MArqueee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className=' w-full h-[60vh] rounded-t-[30px] flex items-center' id='marque'>
      <Marquee className='text-white text-[200px] font-bold  pt-[60px]' speed={120} loop={0} >
        <h1 className=' border-t-2 border-white border-b-2 items-center pt-9 uppercase'>I can be a React component, multiple React components, or just some text.</h1>
    </Marquee>
    </div>
  )
}

export default MArqueee
