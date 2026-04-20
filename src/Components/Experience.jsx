import React from 'react'
import { FaCode, FaLaptopCode, FaBookOpen } from 'react-icons/fa'

const Experience = () => {
  const timeline = [
    {
      year: "2026 – Present",
      title: "MERN Stack Developer (Learning)",
      company: "Self-Directed Projects",
      desc: "Building full-stack web apps using MongoDB, Express.js, React, and Node.js. Working on personal projects to strengthen backend and frontend integration skills.",
      icon: <FaCode />,
      color: "bg-blue-600",
      tags: ["React", "Node.js", "MongoDB", "Express.js"]
    },
    {
      year: "2024 – 2026",
      title: "Frontend Developer",
      company: "Freelance / Personal Projects",
      desc: "Developed multiple responsive web applications and UI projects. Built interactive UIs using HTML, CSS, and vanilla JavaScript with a focus on clean design.",
      icon: <FaLaptopCode />,
      color: "bg-indigo-500",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design"]
    },
    {
      year: "2021 – 2024",
      title: "Bachelor of Computer Application",
      company: "University",
      desc: "Completed BCA with a focus on programming fundamentals, data structures, web technologies, and software engineering principles.",
      icon: <FaBookOpen />,
      color: "bg-violet-500",
      tags: ["BCA", "Computer Science", "Programming"]
    },
  ]

  return (
    <section id="experience" className="py-20 px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-blue-600 font-medium text-sm uppercase tracking-widest mb-2">My Journey</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Experience</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gray-200 md:left-8"></div>

          <div className="space-y-8">
            {timeline.map((item, i) => (
              <div key={i} className="relative flex gap-6 md:gap-8">
                {/* Icon */}
                <div className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 ${item.color} rounded-full flex items-center justify-center text-white text-lg z-10 shadow-md`}>
                  {item.icon}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-5 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                    <div>
                      <h3 className="font-bold text-gray-800">{item.title}</h3>
                      <p className="text-blue-600 text-sm font-medium">{item.company}</p>
                    </div>
                    <span className="text-xs text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium whitespace-nowrap">{item.year}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag, ti) => (
                      <span key={ti} className="bg-blue-50 text-blue-700 text-xs font-semibold px-2.5 py-0.5 rounded-full border border-blue-100">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience