import React, { useState } from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const Portfolio = () => {
  const [filter, setFilter] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Universal Media Downloader",
      desc: "A full-stack MERN media downloader web app that lets users download videos, audio, and images from multiple platforms. Features a clean React UI for pasting URLs, choosing format/quality, real-time download status, a Node.js + Express backend for processing requests, MongoDB for history/logs, and live deployment with Vercel + Render.",
      tech: ["React", "MongoDB", "NodeJs", "ExpressJs","Tailwind CSS", "Vercel", "Render"],
      link: "https://universal-media-downloader-tys.vercel.app/",
      github: "https://github.com/sachiinprajapatii1",
      category: "React",
      image: "/image5.png",
      color: "from-orange-400 to-rose-500",
    },
    {
      id: 2,
      title: "Portfolio Website",
      desc: "This very portfolio — built with React and Tailwind CSS. Features smooth scrolling, responsive design, animations, and a working contact form.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      link: "https://portfolio-sachin-tys.vercel.app/",
      github: "https://github.com/sachiinprajapatii1",
      category: "React",
      image: "/image4.png",
      color: "from-orange-400 to-rose-500",
    },
    
    {
      id: 3,
      title: "Dashboard UI Project",
      desc: "A responsive dashboard layout with multiple sections and navigation. Structured UI components focused on clean design and responsive behavior.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://sachiinprajapatii1.github.io/DashBoard/",
      github: "https://github.com/sachiinprajapatii1",
      category: "JavaScript",
      image: "/image3.png",
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 4,
      title: "Image Editor Web App",
      desc: "An image editing tool with real-time preview and basic manipulation. Handles user input dynamically and provides an intuitive UI.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://sachiinprajapatii1.github.io/Image-Editor/",
      github: "https://github.com/sachiinprajapatii1",
      category: "JavaScript",
      image: "/image2.png",
      color: "from-purple-400 to-violet-500",
    },
    {
      id: 5,
      title: "Drag and Drop Todo App",
      desc: "A task management app with drag-and-drop functionality. Dynamic task movement using JavaScript events with real-time updates without page reload.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://sachiinprajapatii1.github.io/Drag-and-Drop-TODO/",
      github: "https://github.com/sachiinprajapatii1",
      category: "JavaScript",
      image: "/image.png",
      color: "from-green-400 to-emerald-500",
    },
    
    
  ];

  const categories = ["All", "JavaScript", "React"];

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <section id="portfolio" className="py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-blue-600 font-medium text-sm uppercase tracking-widest mb-2">
            What I've Built
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((project) => (
            <div
              key={project.id}
              className="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white"
            >
              {/* Card Header with Image */}
              <div className={`h-48 bg-gradient-to-br ${project.color} overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-top group-hover:scale-105 transition duration-300"
                />
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full text-xs font-semibold border border-blue-100"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 flex-wrap">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition"
                  >
                    <FaExternalLinkAlt size={12} />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-gray-200 text-gray-700 text-sm font-semibold rounded-lg hover:bg-gray-50 transition"
                  >
                    <FaGithub size={14} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub Button */}
        <div className="text-center mt-10">
          <a
            href="https://github.com/sachiinprajapatii1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border-2 border-gray-200 rounded-xl text-gray-700 font-semibold hover:border-blue-600 hover:text-blue-600 transition"
          >
            <FaGithub size={18} />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;