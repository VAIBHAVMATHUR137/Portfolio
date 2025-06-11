import { motion } from "framer-motion";
import { Code, Globe, Server, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: <Globe className="w-6 h-6" />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      "React",
      "TypeScript",
      "JavaScript",
      "Redux Toolkit",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
      "Material UI",
      "ShadCN",
      "AsyncThunk",
      'Token interception'
    ],
  },
  {
    title: "Backend Development",
    icon: <Server className="w-6 h-6" />,
    color: "from-green-500 to-emerald-500",
    skills: ["Node.js", "Express.js", "MongoDB", "JWT Auth", "REST APIs", 'Backend Caching for authentication'],
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench className="w-6 h-6" />,
    color: "from-purple-500 to-pink-500",
    skills: ['Redis', "GitHub", "VS Code", "Firebase", "Vercel", "Render"],
  },
  {
    title: "Programming Languages",
    icon: <Code className="w-6 h-6" />,
    color: "from-orange-500 to-red-500",
    skills: ["JavaScript", "TypeScript", "Java"],
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="bg-slate-800 py-20 px-4 sm:px-6 lg:px-8 text-white"
    >
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
            A comprehensive overview of my technical expertise
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
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}
                >
                  <div
                    className={`text-transparent bg-clip-text bg-gradient-to-r ${category.color}`}
                  >
                    {category.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + index * 0.05,
                      type: "spring",
                      stiffness: 100,
                    }}
                    viewport={{ once: true }}
                    className={`px-4 py-2 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-10 
                      border border-gray-700/50 hover:border-blue-500/30 transition-all duration-300
                      hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:-translate-y-1`}
                  >
                    <span className="text-white font-medium">{skill}</span>
                  </motion.div>
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
            <h3 className="text-2xl font-semibold text-white mb-4">
              Keep Upskilling
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I'm constantly expanding my skill set and staying up-to-date with
              the latest technologies. Currently exploring advanced React
              patterns, microservices architecture, and cloud technologies to
              build more scalable and efficient applications.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {["Next.js", "SocketIO", "Docker", "AWS", "Microservices"].map(
                (tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium rounded-full"
                  >
                    {tech}
                  </span>
                )
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
