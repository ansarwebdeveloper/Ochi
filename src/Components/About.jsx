import React from 'react'

const About = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.01" data-scroll-sticky  className='min-w-full -mt-[1.5vh] bg-[#CDEA68] text-black rounded-tl-3xl rounded-tr-3xl '>
        <div className='p-[5vw]'>
            <h1 className='font-normal font-["Mon"] text-[4vw] leading-[3.8vw] tracking-tight'>
            Ochi is a strategic presentation agency for forward-thinking businesses that need to raise funds, sell products, explain complex ideas, and hire great people.
            </h1>
        </div>
        <div className='mt-12 py-4 border-t-[1px] border-zinc-600/80 flex justify-between px-[5vw]'>
           <p>What you can expect:</p>
           <div className='w-[55%] max-md:w-[100%] flex'>
              <div className='flex flex-col gap-12'>
              <p className='w-[65%] max-md:w-[100%] font-["Mon"]'>                
                We create tailored presentations to help you persuade your colleagues, clients, or investors. Whether it’s live or digital, delivered for one or a hundred people. 
              </p>
              <p className='w-[65%] font-["Mon"]'>
                We believe the mix of strategy and design (with a bit of coffee) is what makes your message clear, convincing, and captivating.
              </p>
              </div>
              <div className='flex flex-col justify-end pr-[6vw]'>
                    <p>S:</p>
                    <div className='flex flex-col'>
                        {["Instagram","Behance","Facebook","Linkedin"].map((items,index)=>{
                            return (
                            <a href="" key={index}>{items}</a>
                          )
                        })}
                    </div>
              </div>
           </div>        
        </div>
        <div className='mt-16 py-10 px-12 max-md:px-5 border-t-[1px] border-zinc-600/80 flex justify-between'>
           <div className='w-1/2 max-md:w-[30%] '>
              <h1 className='font-["Mon"] text-[3.8vw] max-md:text-[2.8vw]  font-normal'>Our approach:</h1>
              <button className='font-["Mon"] text-white bg-[#212121] uppercase mt-2 px-8 py-4 max-md:py-2 max-md:px-2 max-md:text-[2vw]  rounded-full flex gap-6 items-center '>Read More
                <div className='w-2 h-2 rounded-full bg-zinc-100'></div>
              </button>
           </div>
           <div className='w-1/2 max-md:w-[70%]'> 
              <img className='rounded-lg' src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" />
           </div>
           
        </div>
    </div>
  )
}

export default About