import React from 'react'

const Casestudies = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='-.2' className='w-full h-[100vh] flex-col flex shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] bg-[#CDEA68]'>
      <div className='h-[30%]'>
        <h1 className='border-b-[1px] border-black text-[60px] py-5'>Clients' reviews</h1>
      </div> 
      
      <div className=' flex h-[70%]  flex-row w-full justify-between'>
        <h1 className=' leading-[100%] tracking-tighter'>KarmanVentures</h1>
        <div className=' flex flex-col gap-9'>
            Services

            <h1>
                Investor Deck
            </h1>
            <h1>
                SAles Deck
            </h1>
        </div>
        <div className=' flex flex-col gap-10  items-center '>

            <div>
William Barnes</div>

        <img className='h-[300px] w-[300px]' src="https://ochi.design/wp-content/uploads/2023/02/William-Barnes-1-300x300.png" alt="" />


          <div className=' tracking-tighter leading-[100%] text-center'>They were transparent about the time and the stages of the project. The end product is high quality, and I feel confident about how they were handholding the client through the process. I feel like I can introduce them to someone who needs to put a sales deck together from scratch, and they would be able to handhold the client experience from 0 to 100 very effectively from story to design. 5/5</div>  









        </div>
      </div>
      
      
      
    </div>
  )
}

export default Casestudies
