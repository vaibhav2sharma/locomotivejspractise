import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between w-full h-[80px] items-center px-[40px] border-t-[1px] border-black sticky'>

    {/* name div */}
    <div className='text-[30px] font-semibold'>oChi</div>

    {/* div with services */}
    <div className='flex gap-4  ml-80'>
        <div>Services</div>
        <div>Our Work</div>
        <div>About us</div>
        <div>Insights</div>
    </div>
{/* contact us div */}
    <div>Contact us</div>
      
    </div>
  )
}

export default Navbar
