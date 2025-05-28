# Portfolio Deployment Guide

## 🚀 Complete Guide to Deploy Your Portfolio

### Step 1: Push to GitHub

#### Option A: Create Repository via GitHub Website (Recommended)
1. **Go to GitHub**: https://github.com
2. **Sign in** to your account
3. **Click "New"** or the "+" icon → "New repository"
4. **Repository settings**:
   - Repository name: `portfolio-website` or `vikas-portfolio`
   - Description: `Personal portfolio website built with React, TypeScript, and Tailwind CSS`
   - Set to **Public** (required for free Vercel hosting)
   - **Don't** initialize with README (we already have files)
5. **Click "Create repository"**

#### Option B: Create Repository via Command Line
```bash
# Install GitHub CLI (if not installed)
# Download from: https://cli.github.com/

# Login to GitHub
gh auth login

# Create repository
gh repo create portfolio-website --public --description "Personal portfolio website"
```

### Step 2: Connect Local Repository to GitHub

After creating the GitHub repository, you'll see instructions. Use these commands:

```bash
# Add GitHub as remote origin (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Deploy to Vercel

#### Method 1: Vercel Website (Easiest)
1. **Go to Vercel**: https://vercel.com
2. **Sign up/Login** with your GitHub account
3. **Click "New Project"**
4. **Import your repository**:
   - Select your portfolio repository
   - Click "Import"
5. **Configure project**:
   - Project Name: `portfolio-website`
   - Framework Preset: **Vite** (should auto-detect)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `dist` (default)
6. **Environment Variables** (Optional):
   - Add EmailJS variables if you want to enable email functionality:
     - `VITE_EMAILJS_SERVICE_ID`
     - `VITE_EMAILJS_TEMPLATE_ID`
     - `VITE_EMAILJS_PUBLIC_KEY`
7. **Click "Deploy"**

#### Method 2: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts:
# - Set up and deploy? Y
# - Which scope? (select your account)
# - Link to existing project? N
# - Project name: portfolio-website
# - Directory: ./
# - Override settings? N
```

### Step 4: Custom Domain (Optional)

#### If you have a custom domain:
1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Add your domain (e.g., `yourname.com`)
2. **Update DNS records** at your domain provider:
   - Add CNAME record pointing to your Vercel URL

### Step 5: Environment Variables for EmailJS

If you want to enable direct email sending:

1. **In Vercel Dashboard**:
   - Go to Project Settings → Environment Variables
   - Add these variables:
     ```
     VITE_EMAILJS_SERVICE_ID = your_service_id
     VITE_EMAILJS_TEMPLATE_ID = your_template_id
     VITE_EMAILJS_PUBLIC_KEY = your_public_key
     ```
2. **Redeploy** the project for changes to take effect

### Step 6: Automatic Deployments

Once connected to GitHub:
- ✅ **Auto-deploy on push**: Every push to main branch triggers deployment
- ✅ **Preview deployments**: Pull requests get preview URLs
- ✅ **Rollback capability**: Easy to revert to previous versions

## 🔧 Build Configuration

Your project is already configured for deployment:

### package.json scripts:
```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  }
}
```

### Vercel settings:
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

## 📁 Files Ready for Deployment

✅ **Production Build**: `npm run build` creates optimized files
✅ **Static Assets**: All images and assets included
✅ **Environment Variables**: Configured for EmailJS
✅ **Responsive Design**: Works on all devices
✅ **SEO Ready**: Proper meta tags and structure

## 🌐 Expected URLs

After deployment, you'll get:
- **Vercel URL**: `https://portfolio-website-username.vercel.app`
- **Custom Domain**: `https://yourname.com` (if configured)

## 🚀 Quick Commands Summary

```bash
# 1. Push to GitHub (after creating repository)
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git branch -M main
git push -u origin main

# 2. Deploy to Vercel (if using CLI)
npm i -g vercel
vercel login
vercel

# 3. Future updates
git add .
git commit -m "Update portfolio"
git push
# Vercel automatically deploys!
```

## ✅ Deployment Checklist

- [ ] GitHub repository created
- [ ] Local code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported to Vercel
- [ ] Build successful
- [ ] Website accessible via Vercel URL
- [ ] Contact form tested
- [ ] Mobile responsiveness verified
- [ ] All sections working properly

## 🎯 Next Steps After Deployment

1. **Test everything**: Contact form, navigation, responsiveness
2. **Share your portfolio**: Add URL to LinkedIn, resume, GitHub profile
3. **Monitor analytics**: Vercel provides basic analytics
4. **Regular updates**: Keep adding new projects and skills
5. **SEO optimization**: Submit to Google Search Console

Your portfolio is now ready for the world! 🌟
