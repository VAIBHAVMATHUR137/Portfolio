"use client"

import { motion } from "framer-motion"
import { Mail, Phone, Github, Linkedin, MessageSquare, FileText, HelpCircle } from "lucide-react"

const contactInfo = [
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Mobile",
    value: "+91 12345 67890", // Replace with your actual phone
    link: "tel:+911234567890",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "vaibhav.mathur@example.com", // Replace with your actual email
    link: "mailto:vaibhav.mathur@example.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
    title: "Twitter",
    value: "@yourusername", // Replace with your Twitter handle
    link: "https://twitter.com/yourusername",
    color: "from-slate-500 to-slate-600",
  },
  {
    icon: <Linkedin className="w-6 h-6" />,
    title: "LinkedIn",
    value: "Vaibhav Mathur", // Replace with your LinkedIn name
    link: "https://linkedin.com/in/yourusername",
    color: "from-blue-600 to-blue-700",
  },
]

const socialProfiles = [
  {
    icon: <Github className="w-6 h-6" />,
    title: "GitHub",
    value: "@yourusername", // Replace with your GitHub username
    link: "https://github.com/yourusername",
    color: "from-gray-500 to-gray-600",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Medium",
    value: "@yourusername", // Replace with your Medium username
    link: "https://medium.com/@yourusername",
    color: "from-gray-700 to-gray-800",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "Discord",
    value: "yourusername#1234", // Replace with your Discord username
    link: "#",
    color: "from-indigo-500 to-purple-600",
  },
  {
    icon: <HelpCircle className="w-6 h-6" />,
    title: "Stack Overflow",
    value: "yourusername", // Replace with your SO username
    link: "https://stackoverflow.com/users/yourprofile",
    color: "from-orange-500 to-orange-600",
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0a132d] py-20 px-4 sm:px-6 lg:px-8 pb-32 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Contact Me
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Feel free to reach out through any of these channels
          </motion.p>
        </div>

        {/* Primary Contact Methods */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              target={info.title === "Email" || info.title === "Mobile" ? "_self" : "_blank"}
              rel={info.title === "Email" || info.title === "Mobile" ? "" : "noopener noreferrer"}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block bg-[#1a2332] p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] hover:-translate-y-1"
            >
              <div className="text-center">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${info.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all mb-3`}
                >
                  <div className="text-white">{info.icon}</div>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                  {info.title}
                </h3>
                <p className="text-gray-300 text-sm font-medium break-all">{info.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Profiles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Professional Profiles</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialProfiles.map((profile, index) => (
              <motion.a
                key={profile.title}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center text-center p-6 bg-[#1a2332] rounded-xl border border-gray-700/50 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)] hover:-translate-y-1"
              >
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${profile.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all mb-3`}
                >
                  <div className="text-white">{profile.icon}</div>
                </div>
                <h4 className="text-white font-medium group-hover:text-blue-300 transition-colors mb-1">
                  {profile.title}
                </h4>
                <p className="text-gray-400 text-sm">{profile.value}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
