import React from 'react'

const Skills = () => {
  const skillGroups = [
    {
      category: "Frontend",
      color: "blue",
      skills: [
        { name: "HTML & CSS", level: 90 },
        { name: "JavaScript", level: 78 },
        { name: "React.js", level: 75 },
        { name: "Tailwind CSS", level: 80 },
      ]
    },
    {
      category: "Backend",
      color: "indigo",
      skills: [
        { name: "Node.js", level: 65 },
        { name: "Express.js", level: 65 },
        { name: "MongoDB", level: 60 },
        { name: "REST APIs", level: 68 },
      ]
    },
    {
      category: "Tools & Others",
      color: "violet",
      skills: [
        { name: "Git & GitHub", level: 75 },
        { name: "VS Code", level: 90 },
        { name: "Responsive Design", level: 82 },
        { name: "Problem Solving", level: 78 },
      ]
    }
  ]

  const techIcons = [
    { name: "HTML5", bg: "bg-orange-100", text: "text-orange-600", icon: "📄" },
    { name: "CSS3", bg: "bg-blue-100", text: "text-blue-600", icon: "🎨" },
    { name: "JavaScript", bg: "bg-yellow-100", text: "text-yellow-700", icon: "⚡" },
    { name: "React", bg: "bg-cyan-100", text: "text-cyan-600", icon: "⚛️" },
    { name: "Node.js", bg: "bg-green-100", text: "text-green-700", icon: "🟢" },
    { name: "MongoDB", bg: "bg-emerald-100", text: "text-emerald-700", icon: "🍃" },
    { name: "Express", bg: "bg-gray-100", text: "text-gray-700", icon: "🚀" },
    { name: "Tailwind", bg: "bg-sky-100", text: "text-sky-600", icon: "💨" },
    { name: "Git", bg: "bg-red-100", text: "text-red-600", icon: "🔀" },
    { name: "GitHub", bg: "bg-purple-100", text: "text-purple-700", icon: "🐱" },
  ]

  return (
    <section id="skills" className="py-20 px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-14">
          <p className="text-blue-600 font-medium text-sm uppercase tracking-widest mb-2">What I know</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">My Skills</h2>
          <div className="w-16 h-1 bg-blue-600 rounded-full mx-auto mt-4"></div>
        </div>

        {/* Tech Icons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {techIcons.map((t, i) => (
            <div key={i} className={`flex items-center gap-2 ${t.bg} ${t.text} px-4 py-2 rounded-full text-sm font-semibold hover:scale-105 transition cursor-default`}>
              <span>{t.icon}</span>
              <span>{t.name}</span>
            </div>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <div key={gi} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-5 text-lg border-b pb-3">{group.category}</h3>
              <div className="space-y-4">
                {group.skills.map((skill, si) => (
                  <div key={si}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="font-medium text-gray-700">{skill.name}</span>
                      <span className="text-blue-600 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Skills