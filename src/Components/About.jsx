import React from 'react'
import { FaGraduationCap, FaCode, FaHeart } from 'react-icons/fa'

const About = () => {
  const highlights = [
    {
      icon: <FaGraduationCap size={22} className="text-blue-600" />,
      title: "Education",
      desc: "Bachelor of Computer Application (BCA)",
      sub: "Currently pursuing degree in computer science fundamentals"
    },
    {
      icon: <FaCode size={22} className="text-blue-600" />,
      title: "Experience",
      desc: "MERN Stack Development",
      sub: "HTML, CSS, JavaScript, React, Node.js, MongoDB, Express.js"
    },
    {
      icon: <FaHeart size={22} className="text-blue-600" />,
      title: "Passion",
      desc: "Clean Code & Great UX",
      sub: "Love building products that are both functional and beautiful"
    },
  ]

  const tags = ["React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "Tailwind CSS", "HTML/CSS", "Git & GitHub"]

  return (
    <section id="about" className="py-20 px-8 bg-white">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-blue-600 font-medium text-sm uppercase tracking-widest mb-2">Who I am</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <p className="text-gray-700 leading-relaxed text-base mb-4">
              Hello! I'm <span className="font-bold text-blue-600">Sachin Prajapati</span>, a passionate web developer who loves turning ideas into functional, beautiful web experiences.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              I specialize in the <span className="font-semibold text-gray-800">MERN Stack</span> — MongoDB, Express.js, React, and Node.js. I enjoy building projects that solve real problems and deliver seamless user experiences.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Beyond coding, I'm an analytical thinker who thrives in collaborative environments and constantly seeks to grow through new challenges and technologies.
            </p>

            <div className="flex flex-wrap gap-2">
              {tags.map((tag, i) => (
                <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-100 hover:bg-blue-100 transition cursor-default">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="space-y-4">
            {highlights.map((h, i) => (
              <div key={i} className="flex gap-4 p-5 border border-gray-100 rounded-xl shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 bg-white">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  {h.icon}
                </div>
                <div>
                  <h3 className="font-bold text-gray-800 mb-0.5">{h.title}</h3>
                  <p className="text-sm font-medium text-gray-700">{h.desc}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{h.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About