import React, { useState } from 'react'
import ser from '../assets/ser.png'
import ser1 from '../assets/ser1.png'
import ser2 from '../assets/ser2.png'
import Container from './Container'

const OurService = () => {
  return (
    <section>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <Container>
          <div className='text-center md:text-left'>
           <h2 className='text-black text-[34px] md:text-[30px] lg:text-[64px] font-bold font-pops pb-2 pt-[34px] md:pt-[20px] lg:pt-[34px]'>Our Services</h2>
           <p className='max-w-md lg:max-w-xl text-[16px] text-[#6C6C6C] font-medium font-pops pb-4 md:pb-0'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
         </div>
        </Container>

        <div className="relative after:absolute after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.6)] after:top-0 after:left-0"><img src={ser2} alt=""  />
         <div className='absolute top-[50%] left-[50%] -translate-x-35 md:-translate-x-44 -translate-y-14 z-[2]'>
          <h2 className='text-white text-[16px] md:text-[18px] lg:text-[25px] font-bold font-pops pb-5'>Modern natural oil and gas refineries.</h2>
          <div><a className='text-white bg-[#F40404] text-[16px] font-semibold font-pops py-[8px] px-[24px] lg:py-[13px] lg:px-[40px] rounded-[5px] hover:bg-[#f40404c3]' href="#">Learn More</a></div>
         </div>
        </div>

        <div className="relative after:absolute after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.6)] after:top-0 after:left-0"><img src={ser} alt=""  />
         <div className='absolute top-[50%] left-[50%] -translate-x-35 md:-translate-x-44 -translate-y-14 z-[2]'>
          <h2 className='text-white text-[16px] md:text-[18px] lg:text-[25px] font-bold font-pops pb-5'>Supply of national industries.</h2>
          <div><a className='text-white bg-[#F40404] text-[16px] font-semibold font-pops py-[8px] px-[24px] lg:py-[13px] lg:px-[40px] rounded-[5px] hover:bg-[#f40404c3]' href="#">Learn More</a></div>
         </div>
        </div>

        <div className="relative after:absolute after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.6)] after:top-0 after:left-0"><img src={ser1} alt=""  />
         <div className='absolute top-[50%] left-[50%] -translate-x-35 md:-translate-x-44 -translate-y-14 z-[2]'>
          <h2 className='text-white text-[16px] md:text-[18px] lg:text-[25px] font-bold font-pops pb-5'>National fuel distribution and supply.</h2>
          <div><a className='text-white bg-[#F40404] text-[16px] font-semibold font-pops py-[8px] px-[24px] lg:py-[13px] lg:px-[40px] rounded-[5px] hover:bg-[#f40404c3]' href="#">Learn More</a></div>
         </div>
        </div>

      </div>
    </section>
  )
}

export default OurService