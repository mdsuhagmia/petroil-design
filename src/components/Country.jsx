import React from 'react'
import Container from './Container'

const Country = () => {
  return (
    <section>
      <Container>
        <div className='md:flex md:items-center py-10 md:py-14 lg:py-16'>
          <div className='md:w-2/6 flex justify-center md:justify-start text-center md:text-left'>
            <h2 className='max-w-xs md:max-w-[200px] lg:max-w-[289px]  text-center text-3xl md:text-3xl lg:text-5xl text-black font-bold font-pops md:leading-[45px] lg:leading-[65px] pb-6 md:pb-0'>The biggest supplier on the country</h2>
          </div>
          <div className='md:w-4/6 flex justify-center md:justify-start text-center md:text-left'>
            <p className='max-w-[590px] md:max-w-[520px] lg:max-w-[590px] text-[#6C6C6C] text-[16px] font-medium font-pops'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Country