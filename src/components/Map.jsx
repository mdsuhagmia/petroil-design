import React from 'react'
import Container from './Container'

const Map = () => {
  return (
    <>
    <section>
      <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58351.272881032695!2d90.67512993476524!3d23.926663266416806!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754304ce44c5b21%3A0xce082a3c68682738!2sNarsingdi!5e0!3m2!1sen!2sbd!4v1752420534289!5m2!1sen!2sbd" className='w-full h-[300px]'></iframe>
      </div>
    </section>

    <section className='bg-[#F40404] py-4 md:py-6'>
      <Container>
          <div className='flex justify-between items-center'>
            <div>
              <h2 className='text-white text-xs md:text-2xl lg:text-4xl font-bold font-pops'>Want to join as member branch in your area?</h2>
            </div>
            <div>
              <a className='text-white text-[10px] md:text-[16px] font-semibold font-pops py-[4px] px-[10px] lg:py-[13px] lg:px-[40px] rounded-[5px] border-2 hover:text-[#ffefef]' href="#">CONTACT</a>
            </div>
          </div>
      </Container>
    </section>
    </>
  )
}

export default Map