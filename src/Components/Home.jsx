import React, { useEffect, useState } from 'react'
import { ReactTyped } from "react-typed";

import { FaLinkedin, FaGithub, FaInstagram, FaDownload, FaEnvelope } from 'react-icons/fa'

function Home() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  const handleDownloadCV = () => {
  const link = document.createElement("a");
  link.href = "/SachinCV.pdf";   // public folder file
  link.download = "Sachin_Prajapati_CV.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  const handleContactMe = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 bg-gradient-to-br from-white via-blue-50 to-gray-100 relative overflow-hidden">

      {/* Background decorative blobs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-56 h-56 bg-indigo-100 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Left Side */}
      <div className={`flex-1 text-center md:text-left order-2 md:order-1 mt-10 md:mt-0 z-10 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-4">
          👋 Welcome to my portfolio
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-3">
          Hi, I'm <span className="text-blue-600">Sachin</span>
        </h1>

        <div className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 h-10">
          I'm a{' '}
          <ReactTyped
            className='text-blue-600'
            strings={["Developer", "MERN Stack Dev", "React Specialist", "Problem Solver"]}
            typeSpeed={50}
            backSpeed={40}
            loop={true}
          />
        </div>

        <p className="max-w-xl text-gray-600 leading-relaxed mb-8 text-base md:text-lg">
          I build modern, responsive web applications using the <span className="font-semibold text-gray-800">MERN Stack</span>.
          Passionate about clean code, great UX, and turning ideas into real digital products.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-4 mb-8">
          {[
            { icon: <FaLinkedin size={20} />, href: "https://www.linkedin.com/in/sachiin-prajapatii", color: "hover:text-blue-600" },
            { icon: <FaGithub size={20} />, href: "https://github.com/sachiinprajapatii1", color: "hover:text-gray-900" },
            { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/sachiinprajapatii", color: "hover:text-pink-600" },
          ].map((s, i) => (
            <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
              className={`w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-500 ${s.color} transition-all hover:scale-110 border border-gray-100`}>
              {s.icon}
            </a>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <button
            onClick={handleContactMe}
            className="flex items-center gap-2 px-7 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-0.5"
          >
            <FaEnvelope size={16} /> Contact Me
          </button>
          <button
            onClick={handleDownloadCV}
            className="flex items-center gap-2 px-7 py-3 border-2 border-blue-600 text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition hover:-translate-y-0.5"
          >
            <FaDownload size={16} /> Download CV
          </button>
        </div>

        {/* Stats */}
        <div className="flex justify-center md:justify-start gap-8 mt-10">
          {[{ num: "3+", label: "Projects" }, { num: "1+", label: "Years Learning" }, { num: "5+", label: "Technologies" }].map((s, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-2xl font-bold text-blue-600">{s.num}</p>
              <p className="text-xs text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side: Avatar */}
      <div className={`flex-1 flex justify-center order-1 md:order-2 z-10 transition-all duration-700 delay-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="relative mt-16 md:mt-0">
          <div className="absolute -inset-6 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-full blur-2xl opacity-60 animate-pulse"></div>
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white shadow-2xl bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center overflow-hidden">
            <span className="text-white text-8xl font-bold select-none"><img src="\SachinDP.jpg" alt="" /></span>
          </div>
          {/* Floating badge */}
          <div className="absolute -bottom-2 -right-2 bg-white rounded-2xl px-4 py-2 shadow-lg border border-gray-100">
            <p className="text-xs text-gray-500 font-medium">Available for hire</p>
            <div className="flex items-center gap-1.5 mt-0.5">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-sm font-semibold text-gray-800">Open to work</span>
            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Home;