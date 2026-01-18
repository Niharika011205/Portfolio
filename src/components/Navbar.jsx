import { useState, useEffect } from "react";
import { FaBars, FaTimes, FaMoon, FaSun, FaHome, FaUser, FaTools, FaFolderOpen, FaEnvelope } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'dark';
    return localStorage.getItem('theme') || (document.documentElement.getAttribute('data-theme') || 'dark');
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home", icon: FaHome },
    { label: "About", id: "about", icon: FaUser },
    { label: "Skills", id: "skills", icon: FaTools },
    { label: "Projects", id: "projects", icon: FaFolderOpen },
    { label: "Contact", id: "contact", icon: FaEnvelope }
  ];

  return (
    <nav className="fixed top-0 w-full nav-glass z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl md:text-3xl font-bold gradient-text">
            Niharika
          </h1>
        </div>

        {/* Desktop Navigation - Centered */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="glass-card px-8 py-3">
            <ul className="flex gap-8 items-center">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group cursor-pointer transition-all duration-300"
                  >
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300">
                      <Icon size={16} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {item.label}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? 
              <FaSun size={18} className="text-yellow-400" /> : 
              <FaMoon size={18} className="text-slate-600" />
            }
          </button>

          <button
            className="md:hidden glass-card p-3 rounded-full"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? 
              <FaTimes size={20} className="text-gray-300" /> : 
              <FaBars size={20} className="text-gray-300" />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="glass-card mx-4 mb-4 p-6 rounded-2xl">
            <ul className="space-y-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <li
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="group cursor-pointer"
                  >
                    <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300">
                      <Icon size={20} className="text-gray-400 group-hover:text-purple-400 transition-colors" />
                      <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                        {item.label}
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}