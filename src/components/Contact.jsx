import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaCheckCircle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSubmitted(false);
    setLoading(true);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSubmitted(true);
        formRef.current.reset();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setError("Failed to send message. Please try again.");
      })
      .finally(() => setLoading(false));
  };

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Niharika011205",
      icon: FaGithub,
      color: "hover:text-gray-400",
      bgColor: "hover:bg-gray-800/20"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/niharikaramishetty/",
      icon: FaLinkedin,
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-600/20"
    },
    {
      name: "Twitter",
      url: "https://x.com/niharikaRa34259",
      icon: FaXTwitter,
      color: "hover:text-cyan-400",
      bgColor: "hover:bg-cyan-600/20"
    },
    {
      name: "Email",
      url: "mailto:ramishettyniharika@gmail.com",
      icon: FaEnvelope,
      color: "hover:text-red-400",
      bgColor: "hover:bg-red-600/20"
    }
  ];

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-heading-1 font-bold gradient-text mb-3 sm:mb-4">Get In Touch</h2>
          <p className="text-base sm:text-body-large text-gray-400 max-w-2xl mx-auto px-4 sm:px-0">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <div className="glass-card p-6 sm:p-8 md:p-12">
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Send me a message</h3>
              <p className="text-gray-400 text-sm sm:text-base">I'll get back to you as soon as possible</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {/* Hidden field for EmailJS */}
              <input type="hidden" name="title" value="Portfolio Contact Message" />

              {/* Status Messages */}
              {error && (
                <div className="glass-card p-3 sm:p-4 border-red-500/50 bg-red-500/10">
                  <p className="text-red-400 text-xs sm:text-sm flex items-center gap-2">
                    <FaEnvelope size={14} className="sm:w-4 sm:h-4" />
                    {error}
                  </p>
                </div>
              )}

              {submitted && (
                <div className="glass-card p-3 sm:p-4 border-green-500/50 bg-green-500/10">
                  <p className="text-green-400 text-xs sm:text-sm flex items-center gap-2">
                    <FaCheckCircle size={14} className="sm:w-4 sm:h-4" />
                    Message sent successfully! I'll get back to you soon.
                  </p>
                </div>
              )}

              {/* Form Fields */}
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="form-input text-sm sm:text-base"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="form-input text-sm sm:text-base"
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="form-input text-sm sm:text-base"
              />

              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="form-input resize-none text-sm sm:text-base"
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base py-3 sm:py-4 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={16} className="sm:w-5 sm:h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info & Social Links */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Info */}
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Let's connect</h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <FaEnvelope size={16} className="sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-xs sm:text-sm">Email</p>
                    <p className="text-white font-medium text-sm sm:text-base break-all">ramishettyniharika@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                    <FaLinkedin size={16} className="sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-gray-400 text-xs sm:text-sm">LinkedIn</p>
                    <p className="text-white font-medium text-sm sm:text-base">Niharika Ramishetty</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">Follow me on</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`glass-card p-3 sm:p-4 flex items-center gap-2 sm:gap-3 transition-all duration-300 group ${social.bgColor} min-w-0`}
                    >
                      <Icon size={20} className={`sm:w-6 sm:h-6 text-gray-400 transition-colors ${social.color} flex-shrink-0`} />
                      <span className="text-gray-300 group-hover:text-white transition-colors font-medium text-sm sm:text-base truncate">
                        {social.name}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Availability Status */}
            <div className="glass-card p-6 sm:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-400 rounded-full animate-pulse flex-shrink-0"></div>
                <h3 className="text-lg sm:text-xl font-bold text-white">Available for work</h3>
              </div>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">
                I'm currently open to new opportunities and exciting projects.
                Whether it's full-time positions, freelance work, or collaborations,
                I'd love to discuss how we can work together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}