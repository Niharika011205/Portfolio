# 🌟 Niharika's Portfolio

A modern, responsive portfolio website showcasing my journey as a Full Stack Developer and AI/ML Enthusiast. Built with React, featuring glassmorphism design, dark/light themes, and smooth animations.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![React](https://img.shields.io/badge/React-18.x-blue)
![Vite](https://img.shields.io/badge/Vite-Latest-purple)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-cyan)

## ✨ Features

### 🎨 Design & UI
- **Glassmorphism Design** - Modern glass-like components with backdrop blur effects
- **Dark/Light Theme Toggle** - Seamless theme switching with persistent preferences
- **Responsive Design** - Optimized for all devices (mobile-first approach)
- **Smooth Animations** - CSS transitions and hover effects for enhanced UX
- **Gradient Accents** - Beautiful purple-pink gradient elements throughout

### 🚀 Interactive Elements
- **Typing Effect** - Dynamic role cycling (Frontend → Backend → Full Stack → AI/ML)
- **Animated Background** - Floating gradient blobs with smooth animations
- **Hover Effects** - Interactive project cards and buttons
- **Smooth Scrolling** - Navigation with smooth scroll behavior

### 📱 Sections
- **Hero Section** - Introduction with profile image and call-to-action buttons
- **About** - Personal background and journey
- **Skills** - Technical expertise with categorized skill cards
- **Projects** - Showcase of work with filtering tabs (All, Core Programming, MERN Stack, ML)
- **Contact** - Functional contact form with EmailJS integration
- **Footer** - Social links and additional information

### 🛠️ Technical Features
- **EmailJS Integration** - Working contact form with email notifications
- **Project Filtering** - Dynamic project categorization and display
- **Theme Persistence** - Local storage for theme preferences
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Performance Optimized** - Fast loading with Vite build system

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## 📋 Projects Showcase

### 🤖 AI/ML Projects
- **Nivonix AI Chatbot** - Full-stack AI chatbot with Google Gemini API, OAuth authentication, and multi-thread conversations
- **Hybrid Movie Recommendation System** - ML-based system with 98.9% accuracy using collaborative and content filtering

### 💻 MERN Stack Projects
- **Blog Website** - Full-featured platform with authentication and commenting
- **Weather Application** - Real-time weather with location-based forecasting
- **Library Management System** - Book inventory and user management
- **Security Authentication System** - JWT-based secure authentication

### ⚙️ Core Programming
- **OS Desktop Task Manager** - Java Swing application for system process monitoring
- **Marathon Results Analyzer** - Assembly language program for race result analysis

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Comprehensive icon library

### Styling & Design
- **Custom CSS Variables** - Theme-based color system
- **Glassmorphism Effects** - Backdrop blur and transparency
- **Responsive Grid** - CSS Grid and Flexbox layouts
- **CSS Animations** - Keyframe animations and transitions

### Integrations
- **EmailJS** - Contact form email service
- **Google Fonts** - Inter and Poppins font families
- **External APIs** - Various project integrations

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── profile.jpeg
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── TypingEffect.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Niharika011205/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📧 Contact Form Setup

To enable the contact form functionality:

1. **Create an EmailJS account** at [emailjs.com](https://www.emailjs.com/)
2. **Set up a service** (Gmail, Outlook, etc.)
3. **Create an email template** with the following variables:
   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
4. **Add your credentials** to the `.env.local` file

## 🎨 Customization

### Theme Colors
Modify the CSS variables in `src/index.css`:
```css
:root {
  --gradient-primary: linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%);
  --gradient-secondary: linear-gradient(135deg, #a855f7 0%, #f472b6 100%);
  /* Add your custom colors */
}
```

### Content Updates
- **Personal Info**: Update `src/components/Hero.jsx` and `src/components/About.jsx`
- **Projects**: Modify the `projectsData` object in `src/components/Projects.jsx`
- **Skills**: Update skill categories in `src/components/Skills.jsx`
- **Contact Info**: Change social links in `src/components/Contact.jsx`

## 📱 Mobile Responsiveness

The portfolio is fully responsive with:
- **Mobile-first design** approach
- **Flexible grid layouts** that adapt to screen sizes
- **Touch-friendly buttons** and interactive elements
- **Optimized typography** scaling for different devices
- **Improved form inputs** for mobile devices

## 🌟 Key Features Breakdown

### Typing Effect Component
- Cycles through different developer roles
- Customizable typing and deleting speeds
- Smooth cursor animation with gradient colors

### Glassmorphism Design
- Backdrop blur effects on cards and navigation
- Semi-transparent backgrounds with border highlights
- Consistent glass-like appearance across components

### Theme System
- Automatic theme detection and persistence
- Smooth transitions between light and dark modes
- Comprehensive color variable system

### Project Filtering
- Dynamic tab-based filtering system
- Smooth animations when switching categories
- Load more functionality for better performance

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Niharika Ramishetty**
- GitHub: [@Niharika011205](https://github.com/Niharika011205)
- LinkedIn: [Niharika Ramishetty](https://www.linkedin.com/in/niharikaramishetty/)
- Email: ramishettyniharika@gmail.com
- Twitter: [@niharikaRa34259](https://x.com/niharikaRa34259)

## 🙏 Acknowledgments

- **React Team** for the amazing framework
- **Tailwind CSS** for the utility-first CSS framework
- **Vite** for the fast build tool
- **EmailJS** for the contact form service
- **React Icons** for the comprehensive icon library
- **Google Fonts** for the beautiful typography

---

⭐ **If you found this portfolio helpful, please give it a star!** ⭐

Made with ❤️ by Niharika Ramishetty