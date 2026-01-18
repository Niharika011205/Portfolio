export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading-1 font-bold gradient-text mb-4">About Me</h2>
          <p className="text-body-large text-gray-400 max-w-2xl mx-auto">
            Discover my journey, passion, and the technologies that drive my development career
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Content */}
          <div className="glass-card p-8 md:p-12 space-y-6">
            <div className="space-y-6 text-gray-300">
              <p className="text-body-large leading-relaxed">
                I'm a passionate <span className="gradient-text font-semibold">Full Stack Developer</span> and 
                <span className="gradient-text font-semibold"> ML enthusiast</span> from India. I specialize in 
                building modern, scalable web applications using the MERN stack and exploring innovative 
                machine learning solutions.
              </p>

              <p className="text-body leading-relaxed">
                With a strong foundation in core programming languages and web technologies, I enjoy 
                tackling complex challenges and creating intuitive user experiences. My approach combines 
                technical expertise with creative problem-solving to deliver impactful solutions.
              </p>
            </div>

            {/* Interests List */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white mb-4">What I'm passionate about:</h3>
              <div className="grid gap-3">
                {[
                  "Full-stack web development (MERN stack)",
                  "Machine learning and AI applications", 
                  "System design and scalable architecture",
                  "Open-source contributions and collaboration"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 group-hover:scale-150 transition-transform"></div>
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <p className="text-body text-gray-400 leading-relaxed">
                I'm always excited to collaborate on innovative projects, learn cutting-edge technologies, 
                and contribute to the developer community. Let's build something extraordinary together!
              </p>
            </div>
          </div>

          {/* Skills Preview */}
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Core Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "React", level: 90 },
                  { name: "Node.js", level: 85 },
                  { name: "Python", level: 88 },
                  { name: "MongoDB", level: 82 }
                ].map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card p-8">
              <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Location</span>
                  <span className="text-gray-300">India 🇮🇳</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Focus</span>
                  <span className="text-gray-300">Full Stack + ML</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Experience</span>
                  <span className="text-gray-300">2+ Years Learning</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status</span>
                  <span className="text-green-400 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    Available for opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}