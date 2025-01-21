import React, { useEffect, useState } from 'react'

const Eye = () => {
  const [rotate, setRotate] = useState(0)
  useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
      let mouseX = e.clientX;
      let mouseY = e.clientY;
      let deltaX = mouseX - window.innerWidth/2;
      let deltaY = mouseY - window.innerHeight/2;
      var angle = Math.atan2(deltaY,deltaX)* (180/Math.PI);
      setRotate(angle-180);
      
    })
  })
  return (
    <div  className='w-full h-screen overflow-hidden'>
        <div data-scroll data-scrool-section data-scroll-speed="-.7" className='w-full h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center relative'>
          <div className='flex gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center '>
              <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative overflow-hidden'>
                 <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <div className='w-6 h-6 bg-zinc-100 rounded-full'></div>
                 </div>
              </div>
            </div>
            <div className='w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center '>
              <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative overflow-hidden'>
                 <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <div className='w-6 h-6 bg-zinc-100 rounded-full'></div>
                 </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Eye