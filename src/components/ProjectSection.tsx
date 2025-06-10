"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, BookOpen, ArrowRight } from "lucide-react"
import { projects, blogs } from "../PersonalDetails"

export default function ProjectSection() {
  return (
    <section id="projects" className="bg-[#0a132d] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto">
        {/* Projects Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
            My Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here are some of my recent projects showcasing full-stack development skills
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group relative bg-gradient-to-br from-[#1a2332] to-[#0f1419] p-8 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)]"
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-blue-500/20 hover:bg-blue-500/30 rounded-lg transition-colors group/link"
                    >
                      <ExternalLink size={18} className="text-blue-400 group-hover/link:text-blue-300" />
                    </a>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-500/20 hover:bg-gray-500/30 rounded-lg transition-colors group/link"
                    >
                      <Github size={18} className="text-gray-400 group-hover/link:text-gray-300" />
                    </a>
                  </div>
                </div>

                <p className="text-gray-300 text-base mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium rounded-full hover:bg-blue-500/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Blog Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
            Technical Blogs
          </h3>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Sharing knowledge about Redux, AsyncThunk, and modern React patterns with detailed flowcharts
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.a
              key={blog.title}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block bg-[#1a2332] rounded-xl border border-gray-700/50 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-48 w-full overflow-hidden">
                <img
                  src={blog.imageUrl || "https://via.placeholder.com/800x400/1a2332/3b82f6?text=Flowchart"}
                  alt={`Flowchart for ${blog.title}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a132d] to-transparent opacity-60" />
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="inline-flex items-center gap-1 bg-blue-500/80 text-white text-xs font-medium px-2.5 py-1 rounded-full">
                    <BookOpen size={12} />
                    {blog.readTime}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-xl font-semibold text-white group-hover:text-blue-300 transition-colors">
                    {blog.title}
                  </h4>
                  <ArrowRight
                    size={18}
                    className="text-gray-400 group-hover:text-blue-400 group-hover:translate-x-1 transition-all"
                  />
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{blog.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {blog.tags.map((tag) => (
                    <span key={tag} className="px-2 py-0.5 bg-blue-500/10 text-blue-300 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
