# CTOC Books - Independent Bookshop 📚

A customized Gatsby e-commerce site for CTOC Books, an independent bookshop specializing in curated literature, bestsellers, and hidden gems.

## Features

- **Amazon Integration**: Top-selling books with direct Amazon purchase links 🛒
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

Edit `/src/helpers/product.json` to add new books with Amazon links:

```json
{
  "name": "Book Title",
  "vendor": "Author Name", 
  "price": 16.99,
  "amazonUrl": "https://www.amazon.com/dp/PRODUCT_ID",
  "tags": ["fiction", "bestseller"],
  "description": "Book description..."
}
```

### Amazon Integration 🛒

The site features curated Amazon bestsellers with seamless purchase integration:
- **Current Books**: Fourth Wing, Atomic Habits, It Ends with Us, Project Hail Mary, and more
- **Click Behavior**: All book clicks redirect to Amazon product pages
- **Button Text**: "Buy on Amazon" instead of "Add to Cart"
- **Category Navigation**: Books automatically filter by genre (fiction, non-fiction, sci-fi, etc.)
- **Revenue**: Ready for Amazon affiliate program integration

#### Book Organization & Direct Links:
- **Genre-Based Filtering**: Books like "Zero to One" appear in Business/Non-Fiction categories
- **Amazon Product Codes**: Each book uses actual Amazon ASIN for direct linking
- **Category Tags**: Books tagged with genres for automatic categorization
- **Example**: "Atomic Habits" (B07N4C2P6C) → Self-Help category → Amazon direct link

#### Next Steps (Optional):
1. **Add Amazon Affiliate ID** to URLs for commission (append `?tag=YOUR_AFFILIATE_ID`)
2. **Update book covers** with actual Amazon images using Amazon Product API
3. **Add more books** by editing `product.json` with proper ASINs and category tags
4. **Implement Amazon Product API** for real-time pricing and availability

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
- [CSS Modules](https://github.com/css-modules/css-modules) - Scoped styling with smooth scrolling
- [React Helmet](https://github.com/nfl/react-helmet) - Document head management
- **Amazon Integration** - Direct product linking and affiliate-ready

## Current Implementation Status ✅

### ✅ COMPLETED: Major Refactor & Features
1. **Real Book Images** ✅
   - All book covers now use actual images from `/static/products/`
   - `product.json` updated to reference correct image paths

2. **Mobile-Friendly Layout** ✅
   - Product cards and grids optimized for mobile screens
   - Smaller images and text for better mobile experience

3. **Dark Theme** ✅
   - Homepage and main sections use a modern dark color scheme
   - Improved readability and visual appeal

4. **Navigation & Hover Effects** ✅
   - CtoC Books home button has a modern hover effect
   - Header navigation and dropdowns are interactive and responsive

5. **Amazon Integration** ✅
   - All books link directly to Amazon with affiliate tag
   - Product cards show "Buy on Amazon" functionality

6. **Homepage Sections** ✅
   - Amazon Bestsellers, Fiction Favorites, Non-Fiction Essentials, Book Reviews & Recommendations
   - Real book data and images displayed in all sections

7. **Completed Tasks** ✅
   - All code and images committed and pushed to `active` branch
   - Ready for deployment and review

## Next Implementation Tasks 🚀

### Priority 1: Enhanced Shop Experience
1. **Search Functionality** 🔄
   - Add search bar for book titles/authors
   - Filter by price range
   - Sort by popularity, price, rating

2. **Replace Placeholder Images**
   - Update `/static/products/` with actual book cover images
   - Replace generic images (pdp1.jpeg, shirt1.jpg) with book covers
   - Optimize images for web performance

### Priority 2: Mobile Optimization
3. **Mobile Navigation Menu**
   - Implement mobile dropdown for Books categories
   - Touch-friendly category navigation
   - Responsive grid layouts (4→2→1 columns)

4. **Mobile Product Cards**
   - Optimize book card sizing for mobile
   - Touch-friendly "Buy on Amazon" buttons
   - Improved mobile typography

### Priority 3: Content & SEO
5. **Footer Branding Update**
   - Remove "SYDNEY" and "Built by Matter" references
   - Update to "2025 © CtoC Books. Independent Bookshop."
   - Add proper bookshop footer links

6. **SEO Optimization**
   - Add book-specific meta descriptions
   - Implement structured data for books
   - Category page SEO optimization

### Priority 4: Advanced Features
7. **Amazon API Integration**
   - Real-time pricing from Amazon Product API
   - Customer review integration
   - "Customers also bought" suggestions

8. **Analytics & Tracking**
   - Amazon affiliate click tracking
   - Google Analytics for book categories
   - Conversion tracking for affiliate revenue

### Quick Implementation Commands
```bash
# 1. Start development server
npm start

# 2. Test current bookshop features
# - Visit homepage to see category sections
# - Test Books dropdown navigation
# - Click books to verify Amazon affiliate links

# 3. Add more books to product.json
# Edit src/helpers/product.json

# 4. Update book cover images
# Copy new book covers to ./static/products/ and update product.json image paths

# 5. Find and fix footer branding
grep -r "SYDNEY" src/
grep -r "Built by Matter" src/
```

### Key Files Modified
- ✅ `/src/components/Header/Header.js` - Books dropdown navigation
- ✅ `/src/components/Header/Header.module.css` - Dropdown styling
- ✅ `/src/pages/index.js` - Homepage refactor: real images, dark theme, mobile-friendly
- ✅ `/src/pages/index.module.css` - Section styling, dark theme
- ✅ `/src/pages/shop.js` - Category filtering with buttons
- ✅ `/src/pages/shop.module.css` - Filter button styling
- ✅ `/src/helpers/product.json` - Book database with Amazon links and image paths
- ✅ `/src/components/ProductCard/ProductCard.js` - Amazon affiliate integration, mobile-friendly
- ✅ `/src/components/Brand/Brand.module.css` - Home button hover effect

### Files Still To Modify
- 🔄 `/src/components/Footer/` - Update branding
- 🔄 `/static/products/` - Replace with book covers
- 🔄 `/src/components/MobileNavigation/` - Mobile menu updates
- 🔄 Add search functionality to shop page

## Automated Deployment 🚀

### One-Click Netlify Deployment
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/CtoC-Publisher/CtoCPublisher)

**Instant Bookshop Setup:**
1. Click deploy button above
2. Connect GitHub account
3. Set environment variables (business name, affiliate ID)
4. Your bookshop goes live automatically!

### Manual Deployment
Deploy to Netlify, Vercel, or any static hosting service:

```bash
npm run build
# Upload 'public' folder to your hosting provider
```

### KIRO SPEC - Automation Framework
📋 **See [KIRO-SPEC.md](./KIRO-SPEC.md)** for complete automated deployment specifications including:
- Environment variable configuration
- Gatsby plugin auto-setup
- Amazon affiliate integration
- Netlify Functions for dynamic content
- Content management system
- Performance optimization
- SEO automation

**Perfect for agencies and developers** who need to deploy multiple bookshop websites with zero manual configuration.

---

*CtoC Books - Independent Bookshop specializing in curated literature and Amazon bestsellers.* 📚


CTOC Books - Independent Bookshop 📚

A customized Gatsby e-commerce site for CTOC Books, an independent bookshop specializing in curated literature, bestsellers, and hidden gems.

Features

Book Categories: Fiction, Non-Fiction, Children's books with detailed subcategories 📖
Staff Picks: Curated recommendations from knowledgeable staff 🎯
Book Reviews: Insights and recommendations from the team 📝
Community Focus: Book clubs, author events, and literary discussions 🚀
Responsive Design: Mobile-friendly shopping experience 📱
Quick Start

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
Visit http://localhost:5000 to see your bookshop site. 🌐

Customization

Adding New Books 📚

Edit /src/helpers/product.json to add new books:

{
  "name": "Book Title",
  "vendor": "Author Name", 
  "price": 16.99,
  "tags": ["fiction", "bestseller"],
  "description": "Book description..."
}
Navigation & Categories 🧭

Update /src/config.json to modify:

Header navigation and book categories
Footer links
Filter options (genre, format, age group)
Homepage Content 🏠

Customize /src/pages/index.js for:

Hero sections and promotional banners
Featured collections and new releases
Staff picks and community events
Book Categories 📂

Fiction: Literary, Mystery & Thriller, Science Fiction, Romance
Non-Fiction: Biography, History, Self-Help, Business
Children's: Picture Books, Young Adult, Educational
Technology Stack 🛠️

Gatsby - React-based static site generator
CSS Modules - Scoped styling
React Helmet - Document head management
Deployment 🚀

Deploy to Netlify, Vercel, or any static hosting service:

npm run build
# Upload 'public' folder to your hosting provider
Originally based on the Gatsby E-commerce theme by Matter Design, customized for CTOC Books. 🎨



✅ Major Task: Make Website Responsive and Fix Image Issues

Overview

The website hosted at ctocpublisher.netlify.app currently has two major issues:

Images (book covers, reviews) are not displaying — broken image icons appear instead.
The website has layout issues on mobile — it needs to be properly responsive.
🔧 Issues to Fix

1. 🔄 Fix Broken Images

Book cover images (e.g., It Ends With Us, Atomic Habits) are not loading.

Likely causes:

Incorrect image src URLs
Broken links to assets
Case-sensitive filename mismatches
Hosting or CORS issues
Action Items:

Verify all image file paths in the HTML/JSX/CSS.
Check if images are hosted locally or via URL.
Ensure images are included in the /public folder (for React) or correctly linked.
Test image links in browser directly to confirm they work.
Add fallback alt text or placeholders in case an image fails.
2. 📱 Make the Website Mobile-Responsive

On small screens (like mobile), content is cramped or misaligned.

Horizontal scrolling and layout stacking issues observed.

Action Items:

Use responsive units (%, vw, vh, rem, etc.).
Implement CSS media queries to adjust layout for different screen sizes.
Ensure book cards and review components stack properly on mobile.
Use flexbox/grid for layout and spacing.
Set max-width and object-fit: cover for images to prevent distortion.
Ensure the navigation bar and search bar are responsive.
✅ Completion Criteria

All images load successfully on both desktop and mobile.
Layout adjusts fluidly on all screen sizes (desktop, tablet, mobile).
No horizontal scrollbars on mobile view.
All interactive components (search bar, menu, etc.) function on mobile.