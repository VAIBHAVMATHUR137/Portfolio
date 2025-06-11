
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, X, Download, Calendar, Coffee } from "lucide-react"

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    title: "Email",
    value: "vaibhav.mathur@example.com", // Replace with your actual email
    link: "mailto:vaibhav.mathur@example.com",
    color: "from-blue-500 to-cyan-500",
    description: "Drop me a line anytime",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    title: "Phone",
    value: "+91 12345 67890", // Replace with your actual phone
    link: "tel:+911234567890",
    color: "from-green-500 to-emerald-500",
    description: "Let's have a quick chat",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Location",
    value: "India", // Replace with your location
    link: "#",
    color: "from-purple-500 to-pink-500",
    description: "Based in beautiful India",
  },
]

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="w-6 h-6" />,
    url: "https://github.com/yourusername", // Replace with your GitHub
    color: "hover:bg-gray-600/20 hover:border-gray-400/40",
    username: "@yourusername",
    description: "Check out my code",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-6 h-6" />,
    url: "https://linkedin.com/in/yourusername", // Replace with your LinkedIn
    color: "hover:bg-blue-600/20 hover:border-blue-400/40",
    username: "Vaibhav Mathur",
    description: "Let's connect professionally",
  },
  {
    name: "X (Twitter)",
    icon: <X className="w-6 h-6" />,
    url: "https://x.com/yourusername", // Replace with your X/Twitter
    color: "hover:bg-slate-600/20 hover:border-slate-400/40",
    username: "@yourusername",
    description: "Follow my tech journey",
  },
]

const quickActions = [
  {
    icon: <Download className="w-5 h-5" />,
    title: "Download Resume",
    description: "Get my latest CV",
    link: "/resume.pdf", // Replace with your resume link
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: "Schedule a Call",
    description: "Book a meeting",
    link: "https://calendly.com/yourusername", // Replace with your calendar link
    color: "from-indigo-500 to-purple-500",
  },
  {
    icon: <Coffee className="w-5 h-5" />,
    title: "Buy me a Coffee",
    description: "Support my work",
    link: "https://buymeacoffee.com/yourusername", // Replace with your coffee link
    color: "from-yellow-500 to-orange-500",
  },
]

export default function ContactSection() {
  return (
    <section id="contact" className="bg-[#0a132d] py-20 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-4 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h2>
          <motion.p
            className="text-gray-400 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Ready to bring your ideas to life? I'm always excited to discuss new projects and opportunities.
          </motion.p>
        </div>

        {/* Main Contact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <motion.a
              key={info.title}
              href={info.link}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group block bg-[#1a2332] p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_20px_40px_rgba(59,130,246,0.15)] hover:-translate-y-2"
            >
              <div className="text-center">
                <div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${info.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all mb-4`}
                >
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${info.color}`}>{info.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {info.title}
                </h3>
                <p className="text-blue-400 font-medium mb-2">{info.value}</p>
                <p className="text-gray-400 text-sm">{info.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Find Me Online</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group flex items-center gap-4 p-6 bg-[#1a2332] rounded-xl border border-gray-700/50 transition-all duration-300 ${social.color}`}
              >
                <div className="flex-shrink-0">{social.icon}</div>
                <div className="flex-1">
                  <h4 className="text-white font-medium group-hover:text-blue-300 transition-colors">{social.name}</h4>
                  <p className="text-blue-400 text-sm font-medium">{social.username}</p>
                  <p className="text-gray-400 text-xs">{social.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-white text-center mb-8">Quick Actions</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <motion.a
                key={action.title}
                href={action.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center text-center p-6 bg-[#1a2332] rounded-xl border border-gray-700/50 hover:border-blue-500/40 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(59,130,246,0.1)]"
              >
                <div
                  className={`p-3 rounded-lg bg-gradient-to-r ${action.color} bg-opacity-20 group-hover:bg-opacity-30 transition-all mb-3`}
                >
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${action.color}`}>{action.icon}</div>
                </div>
                <h4 className="text-white font-medium group-hover:text-blue-300 transition-colors mb-1">
                  {action.title}
                </h4>
                <p className="text-gray-400 text-sm">{action.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-[#1a2332] to-[#0f1419] p-8 rounded-2xl border border-blue-500/20"
        >
          <h3 className="text-2xl font-semibold text-white mb-4">Ready to Start Something Amazing?</h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Whether you have a project in mind, need technical consultation, or just want to discuss the latest in web
            development, I'm here to help. Let's create something extraordinary together!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:vaibhav.mathur@example.com"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 hover:shadow-[0_5px_20px_rgba(59,130,246,0.3)]"
            >
              <Mail className="w-4 h-4" />
              Send Email
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#1a2332] hover:bg-[#243142] text-white font-medium py-3 px-6 rounded-lg border border-gray-600/50 hover:border-blue-500/40 transition-all duration-300"
            >
              <Linkedin className="w-4 h-4" />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
