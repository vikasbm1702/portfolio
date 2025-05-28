# 🚀 Quick Deployment Reference

## Step 1: Create GitHub Repository
1. Go to https://github.com
2. Click "+" → "New repository"
3. Name: `portfolio-website`
4. Set to **Public**
5. **Don't** initialize with README
6. Click "Create repository"

## Step 2: Push Code to GitHub
```bash
# Replace YOUR_USERNAME with your GitHub username
git remote add origin https://github.com/YOUR_USERNAME/portfolio-website.git
git push -u origin main
```

## Step 3: Deploy to Vercel
1. Go to https://vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your `portfolio-website` repository
5. Click "Deploy"

## Step 4: Your Portfolio is Live! 🎉
You'll get a URL like: `https://portfolio-website-username.vercel.app`

## Future Updates
```bash
# Make changes to your code
git add .
git commit -m "Update portfolio"
git push
# Vercel automatically redeploys!
```

## 📧 Enable EmailJS (Optional)
In Vercel dashboard → Settings → Environment Variables:
- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID` 
- `VITE_EMAILJS_PUBLIC_KEY`

## ✅ Your Portfolio Features
- ✅ Responsive design
- ✅ Contact form with email functionality
- ✅ Skills section at top
- ✅ Projects including Shopease
- ✅ Personal info at bottom
- ✅ Professional animations
- ✅ Fast loading with Vite
- ✅ SEO optimized

## 🎯 Next Steps
1. Share your portfolio URL
2. Add to LinkedIn profile
3. Include in resume
4. Submit to job applications
5. Keep updating with new projects!
