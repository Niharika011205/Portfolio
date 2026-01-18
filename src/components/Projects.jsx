import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt, FaCode, FaEye } from "react-icons/fa";

const projectsData = {
  core: [
    {
      title: "OS Desktop Task Manager",
      description:
        "A comprehensive task management system built with Java Swing UI AWT that monitors and manages system processes.",
      image:
        "https://i.pinimg.com/1200x/4c/e8/bb/4ce8bb686e74f3cd5a6936de2a745196.jpg",
      github:
        "https://github.com/Niharika011205/OS-Desktop-Application-Advanced-Task-Manager-Java-Swing-AWT",
      tech: ["Java", "System Programming", "Desktop App"],
      features: [
        "Process monitoring",
        "Resource tracking",
        "System optimization",
      ],
    },
    {
      title: "Marathon Results Analyzer",
      description:
        "Written in 8086 Assembly language using EMU8086, simulating the top 3 winners of a marathon race.",
      image:
        "https://i.pinimg.com/736x/af/da/aa/afdaaaccf417efe4e77ede62936adfd8.jpg",
      github: "https://github.com/Niharika011205/Marathon_Result",
      tech: ["Assembly Language", "EMU8086", "Data Analysis"],
      features: [
        "Data sorting",
        "Winner determination",
        "Performance analysis",
      ],
    },
  ],

  mernStack: [
    {
      title: "Nivonix AI Chatbot",
      description:
        "Nivonix AI is a full-stack AI chatbot web application that enables secure user authentication, persistent multi-thread conversations and intelligent responses powered by Google Gemini API",
      image:
        "https://i.pinimg.com/1200x/89/6d/db/896ddbf9e8fa62e39d347fabf606bb83.jpg",
      github: "https://github.com/Niharika011205/nivonixaichatbot/",
      live: "https://nivonix-ai-chatbot.vercel.app/",
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Google Gemini API", "JWT", "OAuth"],
      role: "Full Stack",
      features: [
        "AI-powered chatbot conversations",
        "Google OAuth authentication",
        "JWT-based secure access",
        "Multi-thread chat history",
        "File upload and analysis",
        "Persistent user sessions",
        "Responsive mobile-first design"
      ],
    },
    {
      title: "Blog Website",
      description:
        "Full-featured blog platform with authentication, post creation, and commenting.",
      image:
        "https://i.pinimg.com/736x/18/15/bb/1815bb43765ab9681ecef1b32aabfb02.jpg",
      github: "https://github.com/Niharika011205/lifescroll",
      live: "https://lifescroll-3.onrender.com/",
      tech: ["React", "Node.js", "MongoDB", "Express.js"],
      role: "Full Stack",
    },
    {
      title: "Weather Report",
      description:
        "Real-time weather application with location-based forecasting.",
      image:
        "https://i.pinimg.com/1200x/70/1f/6a/701f6a01c835db3168b532971012a8a5.jpg",
      github: "https://github.com/Niharika011205/mini-project",
      live: "https://mini-project-five-blue.vercel.app/",
      tech: ["React", "API Integration"],
      role: "Frontend",
    },
    {
      title: "Library Management System",
      description:
        "Library system with book inventory and user management.",
      image:
        "https://i.pinimg.com/1200x/c4/21/ff/c421ff0fa2d163b0464b91c131369d2a.jpg",
      github: "https://github.com/Niharika011205/Book_Finder",
      live: "https://library-management.vercel.app",
      tech: ["React", "Tailwind CSS", "REST API"],
      role: "Frontend",
    },
    {
      title: "Security Authentication System",
      description:
        "Authentication system using JWT, encryption, and security best practices.",
      image:
        "https://i.pinimg.com/736x/98/d5/49/98d549f3ff77bc01218df66bd3914eb1.jpg",
      github: "https://github.com/Niharika011205/Secure-Auth-System",
      live: "https://secure-auth-system-8q5p.onrender.com/",
      tech: ["Node.js", "Express", "MongoDB", "JWT"],
      role: "Backend",
    },
  ],

  ml: [
    {
      title: "Hybrid Movie Recommendation System",
      description:
        "ML-based recommendation system using collaborative and content filtering.",
      image:
        "https://i.pinimg.com/1200x/19/8b/2f/198b2f01e73b905772279616eccc7c65.jpg",
      github:
        "https://github.com/Niharika011205/Hybrid_Recommendation_System-Using-ML-",
      tech: ["Python", "Machine Learning", "TensorFlow", "Scikit-learn"],
      accuracy: "98.9%",
    },
  ],
};

function ProjectCard({ project, index }) {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    // Get initial theme
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    setTheme(currentTheme);

    // Listen for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') || 'dark';
          setTheme(newTheme);
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="project-card group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Overlay Buttons */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-3 rounded-full hover:scale-110 transition-transform"
          >
            <FaCode size={20} className="text-white" />
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-3 rounded-full hover:scale-110 transition-transform"
            >
              <FaEye size={20} className="text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <h3 className={`text-xl font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 ${theme === 'light' ? 'text-gray-900' : 'text-white'
            }`}>
            {project.title}
          </h3>
          {project.role && (
            <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-500/30">
              {project.role}
            </span>
          )}
        </div>

        <p className={`mb-6 leading-relaxed ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech, i) => (
            <span
              key={i}
              className={`text-xs px-3 py-1 rounded-full border transition-colors ${theme === 'light'
                ? 'bg-gray-100 text-gray-700 border-gray-300 hover:border-purple-400'
                : 'bg-gray-800/50 text-gray-300 border-gray-700 hover:border-purple-500/50'
                }`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        {project.features && (
          <div className="mb-6">
            <h4 className={`text-sm font-semibold mb-3 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'
              }`}>Key Features:</h4>
            <ul className="space-y-1">
              {project.features.map((feature, i) => (
                <li key={i} className={`text-xs flex items-center gap-2 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                  <div className="w-1 h-1 rounded-full bg-purple-400"></div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Accuracy Badge */}
        {project.accuracy && (
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
              <div className="w-2 h-2 rounded-full bg-green-400"></div>
              Accuracy: {project.accuracy}
            </span>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl border transition-all duration-300 group/btn ${theme === 'light'
              ? 'bg-gray-900 hover:bg-gray-800 text-white border-gray-700 hover:border-gray-600'
              : 'bg-gray-900 hover:bg-gray-800 text-white border-gray-700 hover:border-gray-600'
              }`}
          >
            <FaGithub size={18} className="group-hover/btn:scale-110 transition-transform text-white" />
            <span className="font-medium text-white">Code</span>
          </a>

          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white transition-all duration-300 group/btn"
            >
              <FaExternalLinkAlt size={16} className="group-hover/btn:scale-110 transition-transform" />
              <span className="font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleCount, setVisibleCount] = useState(6);

  const allProjects = [
    ...projectsData.core,
    ...projectsData.mernStack,
    ...projectsData.ml,
  ];

  const getProjects = () => {
    if (activeTab === "core") return projectsData.core;
    if (activeTab === "mern") return projectsData.mernStack;
    if (activeTab === "ml") return projectsData.ml;
    return allProjects;
  };

  const projectsToShow = getProjects();
  const displayedProjects = activeTab === "all"
    ? projectsToShow.slice(0, visibleCount)
    : projectsToShow;

  const tabLabels = {
    all: "All Projects",
    core: "Core Programming",
    mern: "MERN Stack",
    ml: "Machine Learning"
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-heading-1 font-bold gradient-text mb-3 sm:mb-4">My Projects</h2>
          <p className="text-base sm:text-body-large text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            A showcase of my work across different technologies and domains
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 sm:mb-12">
          <div className="tab-nav w-full max-w-2xl">
            <div className="flex flex-wrap justify-center gap-1 sm:gap-2">
              {Object.entries(tabLabels).map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => {
                    setActiveTab(key);
                    setVisibleCount(6);
                  }}
                  className={`tab-button text-xs sm:text-sm ${activeTab === key ? 'active' : ''}`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {displayedProjects.map((project, index) => (
            <ProjectCard key={`${project.title}-${index}`} project={project} index={index} />
          ))}
        </div>

        {/* Load More Button */}
        {activeTab === "all" && projectsToShow.length > visibleCount && (
          <div className="text-center">
            <button
              onClick={() => setVisibleCount(prev => prev + 3)}
              className="btn-primary"
            >
              Load More Projects
            </button>
          </div>
        )}

        {/* Projects Summary */}
        <div className="mt-12 sm:mt-16 grid sm:grid-cols-3 gap-6 sm:gap-8">
          <div className="glass-card p-6 sm:p-8 text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">{allProjects.length}</div>
            <div className="text-gray-400 font-medium text-sm sm:text-base">Total Projects</div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">Across multiple domains</div>
          </div>
          <div className="glass-card p-6 sm:p-8 text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">5</div>
            <div className="text-gray-400 font-medium text-sm sm:text-base">Live Demos</div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">Deployed and accessible</div>
          </div>
          <div className="glass-card p-6 sm:p-8 text-center">
            <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">100%</div>
            <div className="text-gray-400 font-medium text-sm sm:text-base">Open Source</div>
            <div className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-2">Available on GitHub</div>
          </div>
        </div>
      </div>
    </section>
  );
}
