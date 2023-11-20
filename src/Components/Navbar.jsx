import React, { useContext, useEffect, useState } from 'react'
import '../Styling/Navbar.css'
import { BiChevronDown } from 'react-icons/bi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AppContext } from './AuthContext'

const Navbar = () => {
  // const [showMedia, setShowMedia] = useState(false)

  // const [isSticky, setSticky] = useState(false);

  const { isSticky, setSticky, showMedia, setShowMedia, } = useContext(AppContext)

  const handleScroll = () => {
    setSticky(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <div className={`navbar ${isSticky ? 'sticky' : ''}`}>
      <div className={showMedia ? "mobile-menu-link" : 'nav-links flex gap-[30px] w-[100vw] justify-center mx-auto mt-5'}>
        <div className='home flex justify-center items-center'>
          <p className='text-white font-semibold'>Home</p>
        </div>

        <div className='flex categories justify-center items-center'>
          <p>Categories</p>
          <BiChevronDown className='down-arrow text-[20px] mt-[3px]' />
        </div>

        <div className='flex religious-books justify-center items-center'>
          <p>Religious Books</p>
          <BiChevronDown className='down-arrow text-[20px] mt-[3px]' />
        </div>

        <div className='flex clothing justify-center items-center'>
          <p>Clothings</p>
        </div>

        <div className='puja-items flex justify-center items-center'>
          <p> Puja Items</p>
        </div>

        <div className='flex justify-center items-center Customised-murti-of-deities'>
          <p>Customised murti of deities</p>
        </div>

        <div className='flex justify-center items-center Deity-status-and-Idols'>
          <p>Deity's status and Idols</p>
        </div>

        <div className='flex justify-center items-center Original-Jap-Malas'>
          <p>Original Jap Malas</p>
        </div>

      </div>
      <div className='lg:hidden hamburger-menu sm:block'>
        <a href="#" onClick={() => setShowMedia(!showMedia)}>
          <GiHamburgerMenu className="text-[25px] mt-3 vertical-bar" /></a>
      </div>
    </div>
  )
}

export default Navbar