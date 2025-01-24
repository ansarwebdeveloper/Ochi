import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";



const LandingPage = () => {
  
  return (
    <div data-scroll data-scrool-section data-scroll-speed="-.4"  className="w-full h-screen bg-zinc-900 py-1">
        <div id='textstr' className='textstructure mt-36 px-20'>
            {["we create","eye-opening","presentations"].map((items,index)=>{
                return(
                    <div className="masker">
                      <div className='w-fit flex overflow-hidden gap-[1vw]'>
                        {index===1 && (<motion.div
                         initial={{width:0}}
                         animate={{width:"8vw"}}
                         transition={{ease:[0.76, 0, 0.24, 1],duration:1.5}}
                         className='w-[8vw] h-[5.4vw] rounded-md bg-[url(data:image/png;base64,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)] bg-cover bg-center relative top-[0.9vw]'></motion.div>)}
                        <h1 key={index} className='uppercase font-["Grot"] text-[8.6vw] leading-[6.5vw] tracking-[0.01vw] font-bold '>{items}                        
                        </h1>
                      </div>
                    </div>
                )
            })}
        </div>
        <div className='lbtm mt-20 border-t-[1px] border-zinc-600 py-9 px-8 flex justify-between items-center'>
          {["For public and private companies","From the first pitch to IPO"].map((items,index)=>{return(
            <p key={index} className='text-md font-normal'>{items}</p>
          )})}
          <div className='flex items-center gap-3'>
              <div className='px-4  py-2 border-[1px] border-zinc-600 rounded-full uppercase font-normal text-md '>Start The project</div>
              <div className='w-10 h-10 border-[1px] border-zinc-600 rounded-full flex justify-center items-center'><FaArrowRightLong /></div>
          </div>

        </div>
    </div>
  )
}

export default LandingPage