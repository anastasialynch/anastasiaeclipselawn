# Anastasia's Eclipse Lawn - Landscaping Website

A professional, elegant website template for marketing landscape services. Built with Next.js 16, React 19, and Tailwind CSS.

## 🌐 Live Website

**👉 [View Live Site](https://anastasiaeclipselawn.vercel.app)**

The website is deployed and live on Vercel! 🎉

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 What's Included

- **Homepage** - Hero section, services overview, about section, contact form
- **Gallery Page** - Portfolio showcase of completed projects
- **Mobile-Responsive Design** - Works perfectly on all devices
- **SEO-Ready** - Proper metadata and semantic HTML
- **Contact Form** - Ready for Formspree integration (free tier available)

## 🔧 Setup Contact Form

1. Sign up for a free account at [Formspree.io](https://formspree.io/)
2. Create a new form
3. Copy your form ID
4. Replace `YOUR_FORM_ID` in `app/page.tsx` (line ~242) with your actual Formspree form ID

Example:
```tsx
action="https://formspree.io/f/abc123xyz"
```

## 🚢 Deployment (Vercel - Free Tier)

This site is perfect for Vercel's free tier (as mentioned in your pricing guide):

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy (it's automatic!)

**Free tier includes:**
- Unlimited deployments
- Custom domain support
- SSL certificates
- Global CDN

## 📝 Customization

### Update Business Information
- **Company Name**: Search and replace "Anastasia's Eclipse Lawn" throughout the files
- **Contact Info**: Update phone and email in:
  - `app/page.tsx` (contact section & footer)
  - `app/gallery/page.tsx` (footer)
- **Services**: Modify service cards in `app/page.tsx` (services section)

### Colors
The site uses a green color scheme. To change colors, update Tailwind classes:
- Primary green: `green-700`, `green-800`
- Accent green: `green-400`, `emerald-600`
- Backgrounds: `green-50`, `emerald-50`

### Images
Replace placeholder gradients with actual images:
- Hero section image
- Gallery items
- About section image

## 💰 Pricing Guide Reference

This template is designed for:
- **One-time build**: $300-$1,500 (depending on customization)
- **Monthly maintenance**: $50-$100/month (hosting + updates)

### What's Included in Build:
✅ 4-5 page site (Home, Services, Gallery, Contact, About)  
✅ Mobile-friendly design  
✅ Contact/quote form  
✅ Basic SEO (titles, descriptions, headings)  
✅ Professional, elegant design  

### Monthly Maintenance Covers:
- Hosting (Vercel free tier or ~$20/month)
- Domain renewal (~$10-20/year)
- Security updates
- Small content edits (1-2 per month)
- Basic support

## 📄 Pages Structure

```
app/
├── layout.tsx      # Root layout with metadata
├── page.tsx        # Homepage (all sections)
├── globals.css     # Global styles
└── gallery/
    └── page.tsx    # Gallery page
```

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.7
- **React**: 19.2.0
- **Styling**: Tailwind CSS 4
- **TypeScript**: 5
- **Deployment**: Vercel (recommended)

## 📱 Features

- ✅ Fully responsive design
- ✅ Smooth scrolling navigation
- ✅ Modern, elegant UI
- ✅ SEO optimized
- ✅ Fast loading (static generation)
- ✅ Accessible markup

## 📞 Support

For questions or customizations, refer to your development agreement scope.

---

**Built for small landscaping businesses** | Static brochure site | No database required
