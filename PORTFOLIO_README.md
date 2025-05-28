# Vikas B M - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS, featuring a functional contact form with email capabilities.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Email Functionality**: Working contact form with EmailJS integration
- **Fast Performance**: Built with Vite for optimal performance
- **Type Safety**: Full TypeScript support
- **Animations**: Smooth animations with Framer Motion

## 📧 Email Functionality

The contact form supports two methods of sending emails:

### Method 1: EmailJS (Recommended)
- Direct email sending from the website
- No page refresh required
- Professional email templates
- Free tier: 200 emails/month

### Method 2: Mailto Fallback
- Opens user's default email client
- Works without any configuration
- Automatic fallback when EmailJS is not configured

## 🛠️ Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Set up email functionality (optional):
   - Follow the guide in `EMAILJS_SETUP.md`
   - Update `.env` with your EmailJS credentials

4. Start development server:
```bash
npm run dev
```

5. Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── Skills.tsx      # Skills showcase
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects portfolio
│   ├── Experience.tsx  # Work experience
│   ├── PersonalInfo.tsx # Personal information
│   ├── Contact.tsx     # Contact form
│   └── Footer.tsx      # Footer
├── utils/              # Utility functions
│   └── emailService.ts # Email handling logic
├── App.tsx             # Main app component
└── main.tsx           # App entry point
```

## 🎨 Technologies Used

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **EmailJS** - Email functionality
- **Lucide React** - Icons

## 📱 Sections

1. **Hero** - Introduction and main call-to-action
2. **Skills** - Technical skills and expertise
3. **About** - Brief personal information
4. **Projects** - Portfolio of work including:
   - AI Mock Interview Platform
   - College Timetable Generator
   - Serverless Image Processing System
   - Shopease E-commerce Platform
5. **Experience** - Professional experience
6. **Personal Info** - Detailed background and education
7. **Contact** - Functional contact form

## 🚀 Deployment

The project can be deployed to any static hosting service:

- **Vercel**: `npm run build` then deploy `dist` folder
- **Netlify**: Connect repository for automatic deployments
- **GitHub Pages**: Use GitHub Actions for deployment

## 📞 Contact

- **Email**: vikashm.1st22cs199@gmail.com
- **Phone**: +91 9845251824
- **LinkedIn**: [vikas-bm-014902300](https://linkedin.com/in/vikas-bm-014902300)
- **GitHub**: [vikasbm1702](https://github.com/vikasbm1702)
