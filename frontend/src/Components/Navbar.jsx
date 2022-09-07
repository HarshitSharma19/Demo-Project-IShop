
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../Images/iSHOP Logo.svg'
import NavDropdown from './NavDropdown'
import { Link } from 'react-router-dom';
import Container from './Container.jsx'
import Top from './Top.jsx'

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (

    <Container>


      <div className=' md:flex   md:justify-center' >
        <img className='m-auto  ' src={Logo} alt="" />
      </div>

      <div className='Navbar hidden md:block    md:font-bold  ' >
        <ul className='flex  md:flex justify-center' >
          <li className='p-6 cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-300  hover:text-blue-500 '><Link to="/"> HOME</Link></li>
          <li className='p-6 cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-300 relative ' >
            <Link to="/store"> STORE</Link>
            <div className=' w-[550px] m-auto submenu p-5 bg-[#F1F1F1] flex absolute justify-between'>

              <ul className='  text-left  leading-6  ' >
                <li className='md:font-bold ' >Accessories</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >AirPort & Wireless</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >AppleCare Bags</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Shells & Sleeves</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Business & Security</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Cables & Docks</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Cameras & Video</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Car & Travel</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Cases & Films</li>
              </ul>

              <ul className=' w-300 text-left  leading-6  ' >
                <li className='md:font-bold' >Category</li>
                <li className='cursor-pointer md:font-normal hover:font-bold  hover:-translate-y-1 hover:scale-110 duration-300' >Charging Devices</li>
                <li className='cursor-pointer md:font-normal hover:font-bold  hover:-translate-y-1 hover:scale-110 duration-300' >Connected Home</li>
                <li className='cursor-pointer md:font-normal hover:font-bold  hover:-translate-y-1 hover:scale-110 duration-300' >Device Care</li>
                <li className='cursor-pointer md:font-normal hover:font-bold  hover:-translate-y-1 hover:scale-110 duration-300' > Display & Graphic</li>
                <li className='cursor-pointer md:font-normal hover:font-bold  hover:-translate-y-1 hover:scale-110 duration-300' > Fitness & Sport</li>
                <li className='cursor-pointer md:font-normal hover:font-bold  hover:-translate-y-1 hover:scale-110 duration-300' > Headphones</li>
                <li className='cursor-pointer md:font-normal hover:font-bold  hover:-translate-y-1 hover:scale-110 duration-300' > HealthKit</li>
              </ul>
              <ul className='w-300  text-left leading-6  ' >
                <li className='md:font-bold' >Category</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' > Mice & Keyboards</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' > Music Creation</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' > Networking & Server</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Mobiles</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Tablets</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Laptops</li>
                <li className='cursor-pointer md:font-normal hover:font-bold hover:-translate-y-1 hover:scale-110 duration-300' >Watches</li>
              </ul>
            </div>
          </li>
          <li className='p-6 cursor-pointer  hover:-translate-y-1 hover:scale-110 duration-300  hover:text-blue-500 ' ><Link to="/offers"> OFFERS</Link></li>
        </ul>
      </div>
      <div className='  black md:bg-none flex justify-between md:hidden items-center h-30 max-w-[1240px] mx-auto px-4 text-b'>
        <div onClick={handleNav} className='md:hidden text-[30px] z-10'>
          {!nav ? <AiOutlineMenu /> : <AiOutlineClose />}
        </div>

        <ul className={

          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-transparent  backdrop-blur-sm  to-blue-500 flex flex-col justify-center  items-center'
        }>
          <div className='fixed drop-shadow-2xl   w-full  top-0 ' >
            <Top />
          </div>
          <form className="flex fixed top-[15%] items-center">
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
              </div>
              <input type="text" id="simple-search" className="bg-gray-50  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
            </div>
            <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
          <div className='fixed text-center top-[30%]' >
          <li className='p-3 text-lg font-bold border-b border-black'>HOME</li>
          <li className='p-3 text-lg font-bold border-b border-black'>STORE</li>
          <li className='p-3 text-lg font-bold border-b border-black'>
            <NavDropdown />
          </li>
          </div>

        </ul>
      </div>

    </Container>

  )
}
export default Navbar;

