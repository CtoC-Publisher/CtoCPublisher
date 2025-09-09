# CTOC Books - Independent Bookshop 📚

A customized Gatsby e-commerce site for CTOC Books, an independent bookshop specializing in curated literature, bestsellers, and hidden gems.

## Features

- **Book Categories**: Fiction, Non-Fiction, Children's books with detailed subcategories 📖
- **Staff Picks**: Curated recommendations from knowledgeable staff 🎯
- **Book Reviews**: Insights and recommendations from the team 📝
- **Community Focus**: Book clubs, author events, and literary discussions 🚀
- **Responsive Design**: Mobile-friendly shopping experience 📱

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

Visit `http://localhost:5000` to see your bookshop site. 🌐

## Customization

### Adding New Books 📚

Edit `/src/helpers/product.json` to add new books:

```json
{
  "name": "Book Title",
  "vendor": "Author Name", 
  "price": 16.99,
  "tags": ["fiction", "bestseller"],
  "description": "Book description..."
}
```

### Navigation & Categories 🧭

Update `/src/config.json` to modify:
- Header navigation and book categories
- Footer links  
- Filter options (genre, format, age group)

### Homepage Content 🏠

Customize `/src/pages/index.js` for:
- Hero sections and promotional banners
- Featured collections and new releases
- Staff picks and community events

## Book Categories 📂

- **Fiction**: Literary, Mystery & Thriller, Science Fiction, Romance
- **Non-Fiction**: Biography, History, Self-Help, Business  
- **Children's**: Picture Books, Young Adult, Educational

## Technology Stack 🛠️

- [Gatsby](https://www.gatsbyjs.com/) - React-based static site generator
- [CSS Modules](https://github.com/css-modules/css-modules) - Scoped styling
- [React Helmet](https://github.com/nfl/react-helmet) - Document head management

## Deployment 🚀

Deploy to Netlify, Vercel, or any static hosting service:

```bash
npm run build
# Upload 'public' folder to your hosting provider
```

---
          
*Originally based on the Gatsby E-commerce theme by Matter Design, customized for CTOC Books.* 🎨


---

### ✅ Task: Make Website Responsive and Fix Image Issues

#### **Overview**

The website hosted at `ctocpublisher.netlify.app` currently has two major issues:

1. Images (book covers, reviews) are **not displaying** — broken image icons appear instead.
2. The website has **layout issues on mobile** — it needs to be properly responsive.

---

### 🔧 Issues to Fix

#### 1. 🔄 **Fix Broken Images**

* Book cover images (e.g., *It Ends With Us*, *Atomic Habits*) are not loading.
* Likely causes:

  * Incorrect image `src` URLs
  * Broken links to assets
  * Case-sensitive filename mismatches
  * Hosting or CORS issues
* **Action Items:**

  * Verify all image file paths in the HTML/JSX/CSS.
  * Check if images are hosted locally or via URL.
  * Ensure images are included in the `/public` folder (for React) or correctly linked.
  * Test image links in browser directly to confirm they work.
  * Add fallback `alt` text or placeholders in case an image fails.

#### 2. 📱 **Make the Website Mobile-Responsive**

* On small screens (like mobile), content is cramped or misaligned.
* Horizontal scrolling and layout stacking issues observed.
* **Action Items:**

  * Use responsive units (`%, vw, vh, rem`, etc.).
  * Implement **CSS media queries** to adjust layout for different screen sizes.
  * Ensure book cards and review components **stack properly on mobile**.
  * Use **flexbox/grid** for layout and spacing.
  * Set `max-width` and `object-fit: cover` for images to prevent distortion.
  * Ensure the navigation bar and search bar are responsive.

---

### ✅ Completion Criteria

* All images load successfully on both desktop and mobile.
* Layout adjusts fluidly on all screen sizes (desktop, tablet, mobile).
* No horizontal scrollbars on mobile view.
* All interactive components (search bar, menu, etc.) function on mobile.

