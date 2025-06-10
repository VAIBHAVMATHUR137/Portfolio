"use client"

import { motion } from "framer-motion"
import { Code, Globe, Server, Wrench } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "React", level: 87 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Redux Toolkit", level: 92 },
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "Tailwind CSS", level: 85 },
      { name: "Material UI", level: 80 },
      { name: "ShadCN", level: 80 }

    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express.js", level: 80 },
      { name: "MongoDB", level: 82 },
      { name: "JWT Auth", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "AsyncThunk", level: 85 },
    ],
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Git", level: 90 },
      { name: "GitHub", level: 88 },
      { name: "VS Code", level: 95 },
      { name: "Firebase", level: 75 },
      { name: "Vercel", level: 80 },
      { name: "Render", level: 90 }
    ],
  },
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },

      { name: "Java", level: 65 },
    ],
  },
]

const SkillBar = ({
  skill,
  index,
  categoryIndex,
}: { skill: { name: string; level: number }; index: number; categoryIndex: number }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
        <span className="text-blue-400 text-sm font-semibold">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{
            duration: 1.2,
            delay: categoryIndex * 0.1 + index * 0.1,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  )
}

export default function SkillsSection() {
  return (
    <section id="skills" className="bg-slate-800 py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Technical Skills
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A comprehensive overview of my technical expertise and proficiency levels
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1a2332] p-8 rounded-xl border border-gray-700/50 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}>
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}>
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} categoryIndex={categoryIndex} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-[#1a2332] p-8 rounded-xl border border-gray-700/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Keep Upskilling</h3>
            <p className="text-gray-400 leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies. Currently
              exploring advanced React patterns, microservices architecture, and cloud technologies to build more
              scalable and efficient applications.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {["Next.js", "SocketIO", "Docker", "AWS", "Microservices"].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
