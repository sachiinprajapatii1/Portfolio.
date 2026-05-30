import React, { useState, useEffect } from 'react'
import { TiThMenuOutline } from "react-icons/ti";
import { RiCloseFill } from "react-icons/ri";

function Navbar() {
  const [menu, setMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')

  const navItems = [
    { id: 1, text: "Home", href: "#home" },
    { id: 2, text: "About", href: "#about" },
    { id: 3, text: "Skills", href: "#skills" },
    { id: 4, text: "Projects", href: "#projects" },
    { id: 5, text: "Experience", href: "#experience" },
    { id: 6, text: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (text, href) => {
    setActive(text)
    setMenu(false)
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-sm'}`}>
      <div className='flex justify-between h-16 items-center'>
        <div className='flex space-x-2 items-center'>
          <img className='h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white font-bold text-lg' src="\SachinDP.jpg" alt="S" />
          <div>
            <h1 className='font-bold text-xl cursor-pointer leading-tight'>Sach<span className='text-blue-600'>in</span></h1>
            <p className='text-xs text-gray-500 leading-none'>Web Developer</p>
          </div>
        </div>

        <ul className='hidden md:flex space-x-6 items-center'>
          {navItems.map(({ id, text, href }) => (
            <li
              key={id}
              onClick={() => handleNav(text, href)}
              className={`cursor-pointer text-sm font-medium transition-all duration-200 hover:text-blue-600 relative group ${active === text ? 'text-blue-600' : 'text-gray-700'}`}
            >
              {text}
              <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${active === text ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </li>
          ))}
          <li>
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className='px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition shadow-sm'
            >
              Hire Me
            </button>
          </li>
        </ul>

        <div className='cursor-pointer md:hidden' onClick={() => setMenu(!menu)}>
          {menu ? <RiCloseFill size={24} /> : <TiThMenuOutline size={24} />}
        </div>
      </div>

      {menu && (
  <div className="md:hidden fixed top-0 left-0 w-full h-screen bg-white z-[100] flex flex-col">
    {/* Top Bar inside menu to show Logo and Close button */}
    <div className="flex justify-between items-center px-4 h-16 border-b">
      <div className='flex space-x-2 items-center'>
        <h1 className='font-bold text-xl cursor-pointer leading-tight'>
          Sach<span className='text-blue-600'>in</span>
          <p className='text-xs text-gray-500 leading-none'>Web Developer</p>
        </h1>
      </div>
      <div className='cursor-pointer' onClick={() => setMenu(false)}>
        <RiCloseFill size={28} />
      </div>
    </div>

    {/* Navigation Links */}
    <ul className="flex flex-col items-center justify-center flex-1 space-y-8 text-xl">
      {navItems.map(({ id, text, href }) => (
        <li
          key={id}
          onClick={() => handleNav(text, href)}
          className={`cursor-pointer font-semibold transition-all duration-200 ${
            active === text ? 'text-blue-600' : 'text-gray-700'
          }`}
        >
          {text}
        </li>
      ))}
      <li>
        <button
          onClick={() => {
            setMenu(false);
            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className='px-10 py-3 bg-blue-600 text-white font-bold rounded-lg shadow-md'
        >
          Hire Me
        </button>
      </li>
    </ul>
  </div>
)}
    </div>
  )
}

export default Navbar