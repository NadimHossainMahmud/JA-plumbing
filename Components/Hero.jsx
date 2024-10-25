import React from 'react'

function Hero() {
  return (
 
    <div className='bg-gradient-to-b from-[#C4CBD5] to-white w-full h-screen flex'>
      <div className='w-[70%] h-full flex items-center mt-12'>
      <div className=' w-[70%] h-[60%]'>
      <h1 className="
      font-inter 
      text-slate-950
      text-[52px] 
      font-semibold 
      leading-[63px] 
      text-left
      pl-16
      text-nowrap
    ">
      Fed Up with <span className='text-[#D54E45]'>Overcharges?</span> 
      </h1>
      <div className='text-3xl font-medium leading-[45px] font-inter text-black mt-10 ml-16'>
      Your Trusted Partner in Plumbing & Drain Services. Flowing Solutions for Your <br />
      <span className='text-3xl font-medium leading-[45px] font-inter text-[#D54E45]'>Plumbing Needs 🛠️ </span> 
      <br />
      <button className="px-14 bg-blue-800  text-zinc-200 border-2 border-blue-800 hover:bg-zinc-300  hover:text-blue-800 font-font-thin py-2 rounded whitespace-nowrap mt-10">
        Schedule Online
        </button>
      
      </div>
      
      </div>
      </div>

      <div className=' w-[30%] h-full relative'>
      <img className='w-[
464.25px] h-[826.23px] absolute bottom-0' src="/images/banner.png" alt="" />
      </div>
    </div> 

    
  )
}

export default Hero
 