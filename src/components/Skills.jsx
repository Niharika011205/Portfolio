import { useState } from "react";
import { 
  FaHtml5, FaCss3Alt, FaJs, FaReact, FaNode, FaBrain, FaChartBar,
  FaGitAlt, FaGithub, FaPython, FaJava, FaDatabase, FaTerminal, FaUsers,
  FaComments, FaLightbulb, FaClock, FaHandshake
} from "react-icons/fa";
import { SiTailwindcss, SiBootstrap, SiExpress, SiCplusplus, SiMongodb, SiLinux, SiMysql, SiNumpy, SiPandas } from "react-icons/si";

const skillsData = [
  // Frontend
  { name: "HTML", icon: FaHtml5, color: "#E34C26", category: "Frontend" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6", category: "Frontend" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E", category: "Frontend" },
  { name: "React", icon: FaReact, color: "#61DAFB", category: "Frontend" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4", category: "Frontend" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3", category: "Frontend" },
  
  // Backend
  { name: "Node.js", icon: FaNode, color: "#339933", category: "Backend" },
  { name: "Express.js", icon: SiExpress, color: "#90C53F", category: "Backend" },
  { name: "MongoDB", icon: SiMongodb, color: "#13AA52", category: "Database" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "Database" },
  
  // Programming Languages
  { name: "C", icon: FaDatabase, color: "#A8B9CC", category: "Programming" },
  { name: "C++", icon: SiCplusplus, color: "#00599C", category: "Programming" },
  { name: "Java", icon: FaJava, color: "#007396", category: "Programming" },
  { name: "Python", icon: FaPython, color: "#3776AB", category: "Programming" },
  
  // DSA
  { name: "Data Structures", icon: FaDatabase, color: "#4CAF50", category: "DSA" },
  { name: "Algorithms", icon: FaBrain, color: "#FF9800", category: "DSA" },
  { name: "Problem Solving", icon: FaLightbulb, color: "#FFC107", category: "DSA" },
  
  // AI/ML & Analytics
  { name: "Machine Learning", icon: FaBrain, color: "#FF6F00", category: "AI/ML" },
  { name: "NumPy", icon: SiNumpy, color: "#013243", category: "AI/ML" },
  { name: "Pandas", icon: SiPandas, color: "#150458", category: "AI/ML" },
  { name: "Power BI", icon: FaChartBar, color: "#F2C811", category: "Analytics" },
  
  // Tools & Linux
  { name: "Git", icon: FaGitAlt, color: "#F1502F", category: "Tools" },
  { name: "GitHub", icon: FaGithub, color: null, category: "Tools" },
  { name: "Linux", icon: SiLinux, color: "#FCC624", category: "Linux Commands" },
  { name: "Terminal", icon: FaTerminal, color: "#4CAF50", category: "Linux Commands" },
  
  // Soft Skills
  { name: "Communication", icon: FaComments, color: "#2196F3", category: "Soft Skills" },
  { name: "Teamwork", icon: FaUsers, color: "#9C27B0", category: "Soft Skills" },
  { name: "Time Management", icon: FaClock, color: "#FF5722", category: "Soft Skills" },
  { name: "Leadership", icon: FaHandshake, color: "#607D8B", category: "Soft Skills" }
];

const categories = ["All", "Frontend", "Backend", "Programming", "Database", "DSA", "AI/ML", "Analytics", "Tools", "Linux Commands", "Soft Skills"];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredSkills = activeCategory === "All" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading-1 font-bold gradient-text mb-4">My Skills</h2>
          <p className="text-body-large text-gray-400 max-w-2xl mx-auto">
            Technologies, tools, and abilities I use to bring ideas to life
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="tab-nav">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`tab-button ${activeCategory === category ? 'active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {filteredSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={`${skill.name}-${index}`}
                className="skill-card group text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4">
                  <IconComponent 
                    size={48} 
                    style={{ 
                      color: skill.color || (
                        document.documentElement.getAttribute('data-theme') === 'light' 
                          ? '#0f172a' 
                          : '#ffffff'
                      )
                    }}
                    className="mx-auto group-hover:scale-125 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-semibold text-gray-200 group-hover:text-white transition-colors mb-1">
                  {skill.name}
                </h3>
                <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                  {skill.category}
                </p>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-4 gap-8">
          <div className="glass-card p-8 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">{skillsData.length}+</div>
            <div className="text-gray-400 font-medium">Total Skills</div>
            <div className="text-sm text-gray-500 mt-2">Technical & Soft Skills</div>
          </div>
          <div className="glass-card p-8 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">{categories.length - 1}</div>
            <div className="text-gray-400 font-medium">Categories</div>
            <div className="text-sm text-gray-500 mt-2">Diverse skill domains</div>
          </div>
          <div className="glass-card p-8 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">5+</div>
            <div className="text-gray-400 font-medium">Languages</div>
            <div className="text-sm text-gray-500 mt-2">Programming languages</div>
          </div>
          <div className="glass-card p-8 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">∞</div>
            <div className="text-gray-400 font-medium">Learning</div>
            <div className="text-sm text-gray-500 mt-2">Always expanding</div>
          </div>
        </div>
      </div>
    </section>
  );
}