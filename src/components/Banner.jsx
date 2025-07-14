import React, { useState } from 'react'
import Container from './Container'

const Banner = () => {
  let [showText, setShowText] = useState(false)
  return (
    <section className="bg-[url(./assets/banner.png)] bg-contian  bg-cover bg-center bg-no-repeat relative z-[1] after:absolute after:content-[''] after:h-full after:w-full after:bg-[rgba(0,0,0,0.6)] after:top-0 after:left-0 after:z-[-1]">
      <Container>
        <div className=''>
          <h1 className='max-w-xs md:max-w-xl lg:max-w-4xl text-white font-bold font-pops text-[20px] md:text-[44px] lg:text-[64px] pb-8 pt-[50px] md:pt-[157px] lg:pt-[237px]'>We exist since 1975 on the oil and gas industry.</h1>
          <div className='pb-[78px] md:pb-[158px] lg:pb-[228px]'>
            {showText === true ? <h1 className='max-w-xs md:max-w-xl lg:max-w-4xl text-white font-bold font-pops text-[20px] md:text-[44px] lg:text-[64px] pb-8'>Customer satisfaction drives every decision we make.</h1> : ""}

            <button className='text-white bg-[#F40404] text-[16px] font-semibold font-pops py-[10px] px-[30px] lg:py-[13px] lg:px-[40px] rounded-[5px] cursor-pointer hover:bg-[#f40404c3]' onClick={()=>setShowText(!showText)}>LEARN MORE</button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Banner