import React from 'react'

const Cards = () => {
  return (
    <div className='w-full pt-20 max-md:py-10 pb-40  px-14 max-md:px-8 bg-zinc-100 flex gap-4 max-md:flex-col'>
        <div className="cardcontainer w-1/2 max-md:w-full h-[60vh] ">
          <div className='w-full h-full relative bg-[#004D43] rounded-lg flex justify-center items-center'>
            <img className='w-[150px] ' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className='py-1 px-4 border-[1px] border-[#cdea68] rounded-full text-[#cdea68]  absolute left-8 bottom-8 '>
                &copy;2019-2025
            </button>
          </div>
        </div>
        <div className="cardcontainer relative w-1/2 max-md:w-full h-[60vh] flex gap-4 ">
          <div className='w-1/2 h-full bg-[#212121] rounded-lg flex justify-center items-center relative'>
             <img className='w-[150px] ' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
             <button className=' uppercase py-1 px-4 border-[1px] border-[#f6ffd6] rounded-full text-[#f6ffd6]  absolute left-8 bottom-8 max-md:left-4 max-md:text-[2vw] '>
             Rating 5.0 on Clutch
            </button>
          </div>
          <div className='w-1/2 h-full bg-[#212121] rounded-lg flex justify-center items-center relative'>
             <img className='w-[102px] ' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
             <button className=' uppercase py-1 px-4 border-[1px] border-[#f6ffd6] rounded-full text-[#f6ffd6]  absolute left-8 bottom-8 max-md:left-4 max-md:text-[2vw] '>
             Business Bootcamp Alumni
            </button>
          </div>
        </div>
    </div>
  )
}

export default Cards