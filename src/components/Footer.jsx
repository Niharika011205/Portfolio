import { FaGithub, FaLinkedin, FaHeart, FaCode, FaRocket } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/Niharika011205",
      icon: FaGithub,
      color: "hover:text-gray-300"
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/niharikaramishetty/",
      icon: FaLinkedin,
      color: "hover:text-blue-400"
    },
    {
      name: "Twitter",
      href: "https://x.com/niharikaRa34259",
      icon: FaXTwitter,
      color: "hover:text-cyan-400"
    }
  ];

  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold gradient-text mb-3">Niharika</h3>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Full Stack Developer & ML Enthusiast passionate about creating 
                innovative solutions and building amazing web experiences.
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FaCode size={16} />
              <span>Built with React & Tailwind CSS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <div className="w-1 h-1 rounded-full bg-purple-400 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-gray-400 transition-colors duration-300 group ${social.color}`}
                  >
                    <Icon size={20} className="group-hover:scale-110 transition-transform" />
                    <span className="group-hover:text-white">{social.name}</span>
                  </a>
                );
              })}
            </div>

            {/* Status */}
            <div className="mt-6 glass-card p-4 rounded-xl">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-green-400">Available for work</span>
              </div>
              <p className="text-xs text-gray-500">
                Open to new opportunities
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span>© {currentYear} Niharika Ramishetty</span>
              <span>•</span>
              <span className="flex items-center gap-1">
                Made with <FaHeart size={12} className="text-red-500 animate-pulse" /> & <FaRocket size={12} className="text-purple-400" />
              </span>
            </div>
            
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>All rights reserved</span>
              <span>•</span>
              <a 
                href="mailto:ramishettyniharika@gmail.com" 
                className="hover:text-purple-400 transition-colors"
              >
                Get in touch
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </footer>
  );
}