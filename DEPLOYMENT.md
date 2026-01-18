# 🚀 Deployment Guide

This guide covers how to deploy your portfolio to various platforms.

## 📋 Pre-deployment Checklist

- [ ] All environment variables are set up
- [ ] Contact form is configured with EmailJS
- [ ] Resume link is working
- [ ] All project links are valid
- [ ] Images are optimized and loading properly
- [ ] Build process completes without errors

## 🌐 Deployment Platforms

### 1. Vercel (Recommended)

**Why Vercel?**
- Zero-config deployment for React/Vite projects
- Automatic HTTPS and CDN
- Easy custom domain setup
- Excellent performance

**Steps:**
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign up
3. Click "New Project" and import your GitHub repository
4. Configure environment variables in Vercel dashboard:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
5. Deploy!

**Custom Domain:**
1. Go to your project settings in Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update DNS records as instructed

### 2. Netlify

**Steps:**
1. Build your project: `npm run build`
2. Go to [netlify.com](https://netlify.com) and sign up
3. Drag and drop the `dist` folder to deploy
4. Or connect your GitHub repository for automatic deployments

**Environment Variables:**
- Go to Site Settings → Environment Variables
- Add your EmailJS credentials

### 3. GitHub Pages

**Steps:**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   {
     "homepage": "https://yourusername.github.io/Portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```
3. Run: `npm run deploy`

**Note:** GitHub Pages doesn't support environment variables, so you'll need to hardcode EmailJS credentials or use a different approach.

### 4. Firebase Hosting

**Steps:**
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Build: `npm run build`
5. Deploy: `firebase deploy`

## 🔧 Environment Variables Setup

Create a `.env.local` file (not committed to Git):

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**For production deployment, add these variables to your hosting platform's environment settings.**

## 📧 EmailJS Configuration

1. **Create Account:** Sign up at [emailjs.com](https://www.emailjs.com/)

2. **Add Email Service:**
   - Go to Email Services
   - Add your email provider (Gmail, Outlook, etc.)
   - Note the Service ID

3. **Create Email Template:**
   - Go to Email Templates
   - Create a new template with these variables:
     ```
     From: {{name}} <{{email}}>
     Subject: Portfolio Contact: {{subject}}
     
     Message:
     {{message}}
     
     ---
     Sent from your portfolio contact form
     ```
   - Note the Template ID

4. **Get Public Key:**
   - Go to Account → API Keys
   - Copy your Public Key

5. **Add to Environment Variables:**
   - Use the IDs and key in your `.env.local` file

## 🎯 Performance Optimization

### Before Deployment:

1. **Optimize Images:**
   ```bash
   # Install imagemin-cli
   npm install -g imagemin-cli imagemin-webp
   
   # Optimize images
   imagemin src/assets/*.{jpg,jpeg,png} --out-dir=src/assets/optimized --plugin=webp
   ```

2. **Analyze Bundle Size:**
   ```bash
   npm run build
   npx vite-bundle-analyzer dist
   ```

3. **Check Performance:**
   - Use Lighthouse in Chrome DevTools
   - Aim for 90+ scores in all categories

### Build Optimization:

The Vite configuration already includes:
- Code splitting
- Tree shaking
- Asset optimization
- Minification

## 🔍 Testing Before Deployment

1. **Build Locally:**
   ```bash
   npm run build
   npm run preview
   ```

2. **Test All Features:**
   - [ ] Navigation works
   - [ ] Theme toggle functions
   - [ ] Contact form submits
   - [ ] All links work
   - [ ] Mobile responsiveness
   - [ ] Resume download works

3. **Cross-browser Testing:**
   - Chrome, Firefox, Safari, Edge
   - Mobile browsers (iOS Safari, Chrome Mobile)

## 🚨 Common Issues & Solutions

### Build Errors:
- **Missing dependencies:** Run `npm install`
- **Environment variables:** Check if all required vars are set
- **Import errors:** Verify all file paths are correct

### Contact Form Not Working:
- Check EmailJS credentials
- Verify CORS settings in EmailJS dashboard
- Test with browser network tab open

### Images Not Loading:
- Ensure images are in `src/assets/` or `public/`
- Check file paths and extensions
- Verify image files are committed to Git

### Routing Issues (SPA):
- Add `_redirects` file for Netlify: `/* /index.html 200`
- Configure `vercel.json` for Vercel:
  ```json
  {
    "rewrites": [
      { "source": "/(.*)", "destination": "/index.html" }
    ]
  }
  ```

## 📊 Post-Deployment

### Analytics Setup:
1. **Google Analytics:**
   - Add tracking code to `index.html`
   - Or use React GA library

2. **Monitor Performance:**
   - Set up Vercel Analytics
   - Use Google PageSpeed Insights
   - Monitor Core Web Vitals

### SEO Optimization:
1. **Meta Tags:** Already included in `index.html`
2. **Sitemap:** Generate and submit to Google Search Console
3. **Open Graph:** Add OG tags for social sharing

### Maintenance:
- Regularly update dependencies
- Monitor for security vulnerabilities
- Keep content and projects updated
- Check for broken links

---

🎉 **Congratulations! Your portfolio is now live!** 🎉

Remember to update your resume, add new projects, and keep your skills section current.