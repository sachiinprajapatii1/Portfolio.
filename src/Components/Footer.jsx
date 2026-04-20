import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const navLinks = [
    { text: "Home", href: "#home" },
    { text: "About", href: "#about" },
    { text: "Skills", href: "#skills" },
    { text: "Portfolio", href: "#portfolio" },
    { text: "Experience", href: "#experience" },
    { text: "Contact", href: "#contact" },
  ]

  const socials = [
    { icon: <FaLinkedin size={16} />, href: "https://www.linkedin.com/in/sachiin-prajapatii", label: "LinkedIn" },
    { icon: <FaGithub size={16} />, href: "https://github.com/sachiinprajapatii1", label: "GitHub" },
    { icon: <FaInstagram size={16} />, href: "https://www.instagram.com/sachiinprajapatii", label: "Instagram" },
    { icon: <FaEnvelope size={16} />, href: "mailto:sachiinprajapatii@gmail.com", label: "Email" },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-8">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className='h-9 w-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold'>S</div>
              <div>
                <h2 className='font-bold text-white text-lg leading-tight'>Sach<span className='text-blue-400'>in</span></h2>
                <p className='text-xs text-gray-400'>Web Developer</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Passionate MERN Stack developer building responsive and functional web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((l, i) => (
                <li key={i}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); document.querySelector(l.href)?.scrollIntoView({ behavior: 'smooth' }) }}
                    className="text-sm text-gray-400 hover:text-blue-400 transition"
                  >
                    {l.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="font-bold text-white mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition">
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Sachin Prajapati. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built with <FaHeart size={12} className="text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer