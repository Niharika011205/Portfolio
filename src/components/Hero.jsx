import { FaDownload, FaEnvelope } from "react-icons/fa";
import profile from "../assets/profile.jpeg";
import TypingEffect from "./TypingEffect";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-24 pb-8 sm:pb-12">
      <div className="text-center max-w-4xl mx-auto fade-in-up">
        {/* Profile Image with Enhanced Glow */}
        <div className="relative mx-auto mb-8 sm:mb-12 profile-glow">
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gradient mx-auto shadow-2xl">
            <img
              src={profile}
              alt="Niharika - Full Stack Developer"
              className="w-full h-full object-cover object-[50%_15%] hover:scale-110 transition-transform duration-700"
            />
            {/* Online Status Indicator */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-6 h-6 sm:w-8 sm:h-8 bg-green-400 rounded-full border-2 sm:border-4 border-white shadow-lg">
              <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        {/* Main Heading */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-display mb-3 sm:mb-4">
            Hi, I'm <span className="gradient-text">Niharika</span>
          </h1>
          <div className="text-heading-2 text-gray-400 mb-3 sm:mb-4 min-h-[2.5rem] sm:min-h-[3rem] md:min-h-[4rem] flex items-center justify-center">
            <TypingEffect 
              texts={[
                "Frontend Developer",
                "Backend Developer", 
                "Full Stack Developer",
                "AI/ML Enthusiast"
              ]}
              typingSpeed={120}
              deletingSpeed={60}
              pauseDuration={2500}
            />
          </div>
          <p className="text-base sm:text-body-large text-gray-500 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Passionate about building scalable web applications, machine learning solutions, 
            and solving complex problems with clean, efficient code.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-0">
          <a
            href="https://drive.google.com/file/d/1Zq0D2YNmTrRKjpQsijFmFqhXfmyLCc2x/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg py-3 sm:py-4"
          >
            <FaDownload size={18} className="sm:w-5 sm:h-5" />
            Download Resume
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2 sm:gap-3 text-base sm:text-lg px-6 sm:px-8 py-3 rounded-full bg-transparent text-gray-300 hover:text-white font-semibold transition-all duration-300 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600"
          >
            <FaEnvelope size={18} className="sm:w-5 sm:h-5" />
            Let's Connect
          </a>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6 max-w-2xl mx-auto px-4 sm:px-0">
          <div className="glass-card p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">6+</div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">Projects</div>
          </div>
          <div className="glass-card p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">15+</div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">Technologies</div>
          </div>
          <div className="glass-card p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">2+</div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">Years Learning</div>
          </div>
          <div className="glass-card p-4 sm:p-6 text-center hover:scale-105 transition-transform duration-300">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">∞</div>
            <div className="text-xs sm:text-sm text-gray-400 font-medium">Curiosity</div>
          </div>
        </div>
      </div>
    </section>
  )
}
