import React from 'react'

const FeaturedProj = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.5' className='w-full h-[180vh] flex flex-col gap-[20px] bg-[#F1F1F1]'>
        
        <div className='text-[60px] py-[20px] px-[30px] border-b-[1px] border-black'>Featured Projects</div>
        <div className='flex gap-[40px] w-full px-[40px] py-[40px]'>

           
            <div className= 'bg-red-500 h-[70vh] w-[50%] rounded-[20px] bg-[url("https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png")] '>

               

            </div>

          
        
            





            <div className=' bg-black h-[70vh] w-[50%]  rounded-[20px] bg-[url("https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg")]'>

            </div>






        </div>
        <div className='flex  justify-between px-[50px] gap[30px] uppercase  '>
            <div className=' flex gap-[20px] '>
                <h1 className=' px-[15px] py-[3px] rounded-[20px] border-black border-[1px] hover:text-white hover:bg-black duration-700'>audit</h1>
                <h1 className=' px-[15px] py-[3px] rounded-[20px] border-black border-[1px] hover:text-white hover:bg-black duration-700'>copywriting</h1>
                <h1 className=' px-[15px] py-[3px] rounded-[20px] border-black border-[1px] hover:text-white hover:bg-black duration-700'>salesdeck</h1>
                <h1 className=' px-[15px] py-[3px] rounded-[20px] border-black border-[1px] hover:text-white hover:bg-black duration-700'> slides design</h1>
            </div>


                <div className='flex gap-[20px] uppercase '>
                    <h1 className=' px-[15px] py-[3px] rounded-[20px] border-black border-[1px] hover:text-white hover:bg-black duration-500'>agency</h1>
                    <h1 className=' px-[15px] py-[3px] rounded-[20px] border-black border-[1px] hover:text-white hover:bg-black duration-500'>Company presentation</h1>
                    
                </div>

            
            
            </div>


        <div className='flex gap-[40px] w-full px-[40px] py-[40px]'>

           
            <div className= 'bg-red-500 h-[70vh] w-[50%] rounded-[20px] bg-[url("https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg")] '>

               

            </div>

          
        
            





            <div className=' bg-black h-[70vh] w-[50%]  rounded-[20px] bg-[url("https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png")]'>

            </div>






        </div>
        <div className='flex  justify-between px-[50px] gap[30px] uppercase  '>
            <div className=' flex gap-[20px] '>
                <h1 className=' px-[15px] py-[3px] rounded-[20px] border-black border-[1px] hover:text-white hover:bg-black duration-700'> brand identity</h1>
                <h1 className=' px-[15px] py-[3px] rounded-[20px] border-black border-[1px] hover:text-white hover:bg-black duration-700'>design research</h1>
                <h1 className=' px-[15px] py-[3px] rounded-[20px] border-black border-[1px] hover:text-white hover:bg-black duration-700'>investor deck</h1>
                {/* <h1 className=' px-[15px] py-[3px] rounded-[20px] border-black border-[1px] hover:text-white hover:bg-black duration-700'> slides design</h1> */}
            </div>


                <div className='flex gap-[20px] uppercase '>
                    <h1 className=' px-[15px] py-[3px] rounded-[20px] border-black border-[1px] hover:text-white hover:bg-black duration-500'>bbranded template</h1>
                    {/* <h1 className=' px-[15px] py-[3px] rounded-[20px] border-black border-[1px] hover:text-white hover:bg-black duration-500'>Company presentation</h1> */}
                    
                </div>

            
            
            </div>
            
        
        <div className=' flex justify-center items-center'>
                <h1 className=' px-[40px] py-[15px]  bg-black text-white rounded-[30px] hover:text-black hover:bg-white duration-700'>
                        View all case studies <span className=' ml-[20px]  h-[20px] px-[10px] rounded-[50%] bg-white'></span>
                </h1>

        </div>
    </div>
  )
}

export default FeaturedProj
