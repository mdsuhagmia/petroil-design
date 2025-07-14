import React, { useState } from 'react'
import Container from './Container'
import logo from '../assets/logo.png'
import { AiOutlineClose } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom';

const Menu = () => {
  let [openMenu, setOpenMenu] = useState(false)
  return (
    <nav className='bg-[#F40404] relative'>
      <Container>
        <div className='flex justify-between items-center py-3'>
          <div className=''>
            <a href="#"><img src={logo} alt="" /></a>
          </div>
          <div className='hidden md:block'>
            <ul className='flex'>
              <li><Link className='text-[#fff] text-[16px] md:text-[14px] lg:text-[18px] hover:text-[#ffffffdc] font-pops font-semibold ml-4' to={"/"}>Home</Link></li>
              <li><Link className='text-[#fff] text-[16px] md:text-[14px] lg:text-[18px] hover:text-[#ffffffdc] font-pops font-semibold ml-4' to={"/about"}>About</Link></li>
              <li><Link className='text-[#fff] text-[16px] md:text-[14px] lg:text-[18px] hover:text-[#ffffffdc] font-pops font-semibold ml-4' to={"/about/service"}>Services</Link></li>
              <li><Link className='text-[#fff] text-[16px] md:text-[14px] lg:text-[18px] hover:text-[#ffffffdc] font-pops font-semibold ml-4' to={"/about/service/gallery"}>Gallery</Link></li>
              <li><Link className='text-[#fff] text-[16px] md:text-[14px] lg:text-[18px] hover:text-[#ffffffdc] font-pops font-semibold ml-4' to={"/about/service/gallery/blog"}>Blog</Link></li>
              <li><Link className='text-[#fff] text-[16px] md:text-[14px] lg:text-[18px] hover:text-[#ffffffdc] font-pops font-semibold ml-6 border-2 py-2 px-4 rounded-xs' to={"/about/service/gallery/blog/contact"}>CONTACT</Link></li>
            </ul>
          </div>
          <div className='block md:hidden'>
            <button onClick={() => setOpenMenu(!openMenu)} className=' cursor-pointer text-white'>
              {openMenu == true ? "" : <CiMenuFries className='text-4xl' />}
            </button>
          </div>
        </div>
        
        <div className={`absolute top-0 left-0 bg-[#F40404] transition-all duration-700 ease-in-out ${openMenu ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'} z-50`}>
          <div className='block md:hidden text-right'>
            <button onClick={() => setOpenMenu(!openMenu)} className=' cursor-pointer text-white'>
              {openMenu == true ? <AiOutlineClose className='text-4xl pt-2 pr-2' /> : ""}
            </button>
          </div>
            {openMenu && (
             <div className='w-[200px] text-center'>
              <ul className=''>
                <li className='pb-1'><a className='text-[#fff] text-[16px] hover:text-[#ffffffdc] font-pops font-semibold' href="/">Home</a></li>
                <li className='pb-1'><a className='text-[#fff] text-[16px] hover:text-[#ffffffdc] font-pops font-semibold' href="/about">About</a></li>
                <li className='pb-1'><a className='text-[#fff] text-[16px] hover:text-[#ffffffdc] font-pops font-semibold' href="/about/service">Services</a></li>
                <li className='pb-1'><a className='text-[#fff] text-[16px] hover:text-[#ffffffdc] font-pops font-semibold' href="/about/service/gallery">Gallery</a></li>
                <li className='pb-4'><a className='text-[#fff] text-[16px] hover:text-[#ffffffdc] font-pops font-semibold' href="/about/service/gallery/blog">Blog</a></li>
                <li className='pb-8'><a className='text-[#fff] text-[16px] hover:text-[#ffffffdc] font-pops font-semibold border-2 py-2 px-4 rounded-xs' href="/about/service/gallery/blog/contact">CONTACT</a></li>
              </ul>
            </div>
          )}
        </div>

      </Container>
    </nav>
  )
}

export default Menu