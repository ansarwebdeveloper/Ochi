import { motion } from 'framer-motion'
import React from 'react'

const Marquee = () => {
  
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.00001" data-scroll-sticky className='min-w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004d43]'>
        <div className='text border-y-[1px] border-zinc-400/80 flex  whitespace-nowrap py-0 overflow-hidden'>
            <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{ease:"linear", duration:8, repeat:Infinity}} className='text-[22vw] leading-none uppercase font-bold pl-8 font-["Grot"] -my-[3vw] pb-[1.7vw]'>we are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{ease:"linear", duration:8, repeat:Infinity}} className='text-[22vw] leading-none uppercase font-bold pl-8 font-["Grot"] -my-[3vw] pb-[1.7vw]'>we are ochi</motion.h1>
            <motion.h1 initial={{x:"0"}} animate={{x: "-100%"}} transition={{ease:"linear", duration:8, repeat:Infinity}} className='text-[22vw] leading-none uppercase font-bold pl-8 font-["Grot"] -my-[3vw] pb-[1.7vw]'>we are ochi</motion.h1>
        </div>        
    </div>
  )
}

export default Marquee