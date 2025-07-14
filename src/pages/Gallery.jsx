import React from 'react'
import ImageGallery from '../components/ImageGallery'

const Gallery = () => {
  return (
    <>
    <div className='w-full bg-blue-500 text-white text-center'>
     <h1 className='text-4xl font-bold font-pops py-6'>Gallery Page</h1>
    </div>
    <ImageGallery/>
    </>
  )
}

export default Gallery