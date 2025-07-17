import React from 'react'
import Container from './Container'
import image from '../assets/image.png'
import log from '../assets/log.png'
import log1 from '../assets/log1.png'
import log2 from '../assets/log2.png'
import log3 from '../assets/log3.png'
import img from '../assets/img.png'
import img1 from '../assets/img1.png'
import img2 from '../assets/img2.png'
import { FaArrowRight } from "react-icons/fa";


const LearnMore = () => {
  return (
    <>
    <section className='bg-[#F0F0F0] py-[40px] md:py-[60px] lg:py-[120px]'>
      <Container>
        <div className='grid grid-cols-3'>
          <div className='bg-[#F40404] flex items-center'>
            <h2 className='md:w-[262px] md:mx-auto text-white text-[16px] md:text-[36px] font-bold font-pops text-center'>Learn more about our company</h2>
          </div>
          <div className='relative col-span-2'>
            <img src={image} alt="" className='w-full h-full'/>
            <button className='absolute top-[50%] left-[50%] -translate-x-12 md:-translate-x-10 -translate-y-4 md:-translate-y-0 text-[14px] md:text-[18px] text-[#F40404] bg-white py-[8px] px-[20px] md:py-[14px] md:px-[30px] rounded-[5px] cursor-pointer hover:bg-[#faf1f1] transition-all ease-in-out duration-100'>
              Learn More
            </button>
          </div>
        </div>
      </Container>
    </section>

    <section className='bg-white py-8 md:py-12 lg:py-14'>
      <Container>
        <div className='grid grid-cols-4'>
          <div><img src={log} alt="" /></div>
          <div><img src={log1} alt="" /></div>
          <div><img src={log2} alt="" /></div>
          <div><img src={log3} alt="" /></div>
        </div>
      </Container>
    </section>

    <section className='bg-[#F0F0F0] py-20'>
      <Container>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <div className="relative after:absolute after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.6)] after:top-0 after:left-0">
            <img src={img1} alt="" className='w-full h-full' />
            <div className='absolute top-[30%] left-[30%] -translate-x-10 md:-translate-x-8 -translate-y-10 md:-translate-y-14 z-[2]'>
              <p className='pb-6 text-white text-[25px] md:text-[19px] lg:text-[25px] font-bold font-pops'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
              <a className='text-white bg-[#F40404] text-[16px] font-semibold font-pops py-[8px] px-[24px] lg:py-[13px] lg:px-[40px] rounded-[5px] hover:bg-[#f40404c3]' href="#">Learn More</a>
            </div>
          </div>

          <div className="relative after:absolute after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.6)] after:top-0 after:left-0">
            <img src={img2} alt="" className='w-full h-full' />
            <div className='absolute top-[30%] left-[30%] -translate-x-10 md:-translate-x-8 -translate-y-10 md:-translate-y-14 z-[2]'>
              <p className='pb-6 text-white text-[25px] md:text-[19px] lg:text-[25px] font-bold font-pops'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
              <a className='text-white bg-[#F40404] text-[16px] font-semibold font-pops py-[8px] px-[24px] lg:py-[13px] lg:px-[40px] rounded-[5px] hover:bg-[#f40404c3]' href="#">Learn More</a>
            </div>
          </div>

          <div className="relative after:absolute after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.6)] after:top-0 after:left-0">
            <img src={img} alt="" className='w-full h-full' />
            <div className='absolute top-[30%] left-[30%] -translate-x-10 md:-translate-x-8 -translate-y-10 md:-translate-y-14 z-[2]'>
              <p className='pb-6 text-white text-[25px] md:text-[19px] lg:text-[25px] font-bold font-pops'>lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.</p>
              <a className='text-white bg-[#F40404] text-[16px] font-semibold font-pops py-[8px] px-[24px] lg:py-[13px] lg:px-[40px] rounded-[5px] hover:bg-[#f40404c3]' href="#">Learn More</a>
            </div>
            <div className='flex justify-end items-center mt-6'>
              <button className='text-black text-[12px] md:text-[12px] lg:text-[16px] font-bold font-pops cursor-pointer'>MORE FROM THE BLLOG</button>
              <FaArrowRight className='cursor-pointer text-xl md:text-2xl pl-2'/>
            </div>
          </div>

        </div>
      </Container>
    </section>

    </>
  )
}

export default LearnMore
