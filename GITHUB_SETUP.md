# 📚 GitHub Repository Setup Guide

Follow these steps to upload your portfolio to GitHub.

## 🚀 Quick Setup Commands

If you haven't initialized Git yet, run these commands in your project directory:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website with React, Vite, and Tailwind CSS"

# Add your GitHub repository as remote
git remote add origin https://github.com/Niharika011205/Portfolio.git

# Push to GitHub
git push -u origin main
```

## 📁 Files to be Uploaded

Your repository will include:

### 📄 Configuration Files
- `package.json` - Project dependencies and scripts
- `package-lock.json` - Locked dependency versions
- `vite.config.js` - Vite build configuration
- `eslint.config.js` - ESLint configuration
- `index.html` - Main HTML file
- `.gitignore` - Git ignore rules

### 📝 Documentation
- `README.md` - Comprehensive project documentation
- `LICENSE` - MIT License
- `DEPLOYMENT.md` - Deployment guide
- `GITHUB_SETUP.md` - This setup guide

### 💻 Source Code
- `src/` - All React components and styles
  - `components/` - React components
  - `assets/` - Images and static files
  - `App.jsx` - Main App component
  - `main.jsx` - React entry point
  - `index.css` - Global styles
  - `App.css` - Component styles

### 🌐 Public Assets
- `public/` - Static files served directly

## 🔒 Environment Variables

**Important:** Your `.env.local` file is NOT uploaded to GitHub (it's in .gitignore).

After uploading to GitHub, you'll need to:
1. Set up environment variables in your deployment platform
2. Configure EmailJS credentials for the contact form

## 📋 Pre-Upload Checklist

- [ ] All personal information is updated
- [ ] Project links are working
- [ ] Resume download link is functional
- [ ] Images are optimized and loading
- [ ] No sensitive data in code
- [ ] README.md is complete and accurate

## 🎯 After Upload

1. **Enable GitHub Pages** (optional):
   - Go to repository Settings
   - Scroll to Pages section
   - Select source branch

2. **Set up deployment** to Vercel/Netlify:
   - Connect your GitHub repository
   - Configure environment variables
   - Deploy!

3. **Update README** with live demo link once deployed

## 🔄 Future Updates

To update your portfolio:

```bash
# Make your changes
git add .
git commit -m "Update: Description of changes"
git push origin main
```

## 🌟 Repository Features

Your GitHub repository will showcase:
- ✅ Clean, professional code structure
- ✅ Comprehensive documentation
- ✅ Modern React/Vite setup
- ✅ Responsive design implementation
- ✅ Best practices and conventions

---

🎉 **Ready to upload to GitHub!** 🎉

Run the commands above to get your portfolio live on GitHub.