import React from 'react'
import gal from '../assets/gal.png'
import gal1 from '../assets/gal1.png'
import gal2 from '../assets/gal2.png'
import gal3 from '../assets/gal3.png'

const ImageGallery = () => {
  return (
    <section className='pb-4'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className=''><img src={gal} alt="" className='cursor-pointer transition-transform duration-600 ease-in-out hover:scale-80' /></div>
          <div className='z-[8]'><img src={gal1} alt="" className='cursor-pointer transition-transform duration-600 ease-in-out hover:scale-80'/></div>
          <div><img src={gal2} alt="" className='cursor-pointer transition-transform duration-600 ease-in-out hover:scale-80' /></div>
          <div><img src={gal3} alt="" className='cursor-pointer transition-transform duration-600 ease-in-out hover:scale-80'/></div>
        </div>
    </section>
  )
}

export default ImageGallery