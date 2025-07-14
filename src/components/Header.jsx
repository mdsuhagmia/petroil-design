import React from 'react'
import Container from './Container'
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";


const Header = () => {
  return (
    <header className='bg-[#282828] hidden md:block'>
      <Container>
        <div className='md:flex py-2'>
          <div className='md:w-4/12 lg:w-1/4 flex justify-center md:justify-start gap-2 text-white items-center pb-2 md:pb-0'>
            <a href="#"><MdOutlineMarkEmailUnread /></a>
            <p>mail@yourcompany.com</p>
          </div>
          <div className='md:w-4/12 lg:w-1/4 md:mx-auto flex justify-center md:justify-start gap-2 text-white items-center pb-2 md:pb-0'>
            <a href="#"><FiPhoneCall /></a>
            <p>+896 120 5889 (Toll free)</p>
          </div>
          <div className='md:w-4/12 lg:w-2/4 flex justify-center md:justify-end gap-2 lg:gap-4 text-white items-center pb-2 md:pb-0'>
            <a href="#"><FaFacebookF className='hover:text-[#ffffffd2]' /></a>
            <a href="#"><FaTwitter className='hover:text-[#ffffffd2]' /></a>
            <a href="#"><FaLinkedinIn className='hover:text-[#ffffffd2]' /></a>
            <a href="#"><FaInstagram className='hover:text-[#ffffffd2]' /></a>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header