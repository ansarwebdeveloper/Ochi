import { delay, motion, useAnimation } from 'framer-motion'
import React from 'react'

const Featured = () => {
  const cards = [useAnimation(),useAnimation()];
  const handleHover =(index)=>{
    cards[index].start({y:0})
  }

  const handleHoverEnd =(index)=>{
    cards[index].start({y:"100%"})
  }
  
  return (
    <div className='w-full bg-zinc-800 '>
        <div className='w-full pt-20 pb-4 px-20 border-b-[1px] border-zinc-600 '>
            <h1 className='font-["Mon"] text-[3.8vw] font-normal tracking-tight'>Featured projects</h1>
        </div>
        <div className='cards w-full px-20 py-20 max-md:px-10 flex items-center justify-between gap-10 max-md:flex-col'>
            <motion.div onHoverStart={()=>handleHover(0)} onHoverEnd={()=>handleHoverEnd(0)} className="w-1/2 max-md:w-full left" >
                   <h1 className='font-["Mon"] uppercase text-[1.4vw] max-md:text-[4vw]'><li>Fyde</li></h1>  
                   <div className='card relative w-full h-[80vh] max-md:h-[60vh]'>
                      <h2 className='font-["Mon"] text-[#CDEA68] flex overflow-hidden font-semibold text-[5vw] uppercase z-10 absolute left-full max-md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 '>
                        {"FYDE".split('').map((items,index)=>{return(
                          <motion.span 
                          initial={{y:"100%"}} 
                          animate={cards[0]} 
                          className='inline-block'
                          transition={{ease:[0.83, 0, 0.17, 1],delay:index*0.1}}
                          key={index}>{items}</motion.span >)})}
                      </h2>
                      <img className='w-full h-full rounded-lg' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                   </div>
            </motion.div>
            <motion.div onHoverStart={()=>handleHover(1)} onHoverEnd={()=>handleHoverEnd(1)} className="w-1/2 max-md:w-full right">
                   <h1 className='font-["Mon"] uppercase text-[1.4vw] max-md:text-[4vw]'><li>Vise</li></h1>  
                   <div className='card relative w-full h-[80vh] max-md:h-[60vh]'>
                      <h2 className='font-["Mon"] text-[#CDEA68] flex overflow-hidden font-semibold text-[5vw] uppercase  absolute right-full max-md:right-1/2 max-md:top-[40%] top-1/2 z-10 translate-x-1/2 -translate-y-1/2 '>
                        {"VISE".split('').map((items,index)=>(<motion.span
                        initial={{y:"100%"}}
                        animate={cards[1]}
                        transition={{ease:[0.83, 0, 0.17, 1],delay:index*0.1}}
                        className='inline-block'
                         key={index}>{items}</motion.span>))}
                      </h2>
                      <img className='w-full h-full rounded-lg' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                   </div>
            </motion.div>
        </div>

    </div>
  )
}

export default Featured