import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#0a132d] py-20 px-4 sm:px-6 lg:px-8 text-white"
    >
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Animated Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]">
            Curious Mind. Clean Code. Big Dreams.
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm a full-stack developer who doesn’t just write code—I engineer
            workflows. My obsession is with understanding how things work under
            the hood: from database design to client-side rendering and
            everything in between.
            <br />
            <br />
            I recently built a secure, scalable job portal using the MERN stack
            and TypeScript, integrating role-based authentication, custom data
            schemas, and reusable APIs. Every detail was deliberate—from JWT
            security to custom job ID validations.
            <br />
            <br />
            When I’m not coding, I’m writing blogs on full stack system workflow, as well as posting my debugging experiences on X
          </p>
        </motion.div>

        {/* Animated Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-[#121c37] p-6 rounded-2xl shadow-xl border border-blue-500/30 backdrop-blur-sm hover:shadow-[0_0_40px_rgba(59,130,246,0.4)] transition-all"
        >
          <h3 className="text-2xl font-semibold mb-4 text-[#3b82f6]">
            What I bring:
          </h3>
          <ul className="list-disc list-inside text-gray-300 space-y-2 text-base sm:text-lg">
            <li>🧠 Deep curiosity for system architecture</li>
            <li>🔐 Security-first mindset with JWT & bcrypt</li>
            <li>🛠️ Clean, scalable code in React + TypeScript</li>
            <li>⚙️ API reusability and state management with Redux Toolkit and asyncthunk</li>
            <li>📢 Learning in public via blogs on system workflow and debugging experiences on X</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
