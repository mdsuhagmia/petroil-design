import React from 'react'
import Banner from '../components/Banner'
import Country from '../components/Country'
import ImageGallery from '../components/ImageGallery'
import OurService from '../components/OurService'
import LearnMore from '../components/LearnMore'
import Map from '../components/Map'

const Home = () => {
  return (
    <>
     <Banner/>
      <Country/>
      <ImageGallery/>
      <OurService/>
      <LearnMore/>
      <Map/>
    </>
  )
}

export default Home