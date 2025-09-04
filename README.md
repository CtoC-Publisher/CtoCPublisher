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

## Website Improvement Tasks 🚀

### Priority 1: Amazon Integration Enhancement
1. **Replace All Images with Amazon Book Covers**
   - Update `/static/products/` with actual Amazon book cover images
   - Implement Amazon Product Advertising API for real-time covers
   - Replace placeholder images (pdp1.jpeg, shirt1.jpg, etc.) with book covers

2. **Add Missing Bestsellers**
   - Add "Zero to One" by Peter Thiel to Business/Non-Fiction category
   - Include proper Amazon ASIN: B00J6YBOFQ
   - Update product.json with complete bestseller list

3. **Fix Copyright Footer**
   - Locate and remove "SYDNEY" reference
   - Update "2025 (c) . Built by Matter. Powered by JAMM.™" to "2025 © CtoC Books. Independent Bookshop."

### Priority 2: Featured Collections Update
4. **Replace Generic Categories**
   - Change "Men", "Women", "Accessories" to book categories:
     - "Fiction Bestsellers"
     - "Non-Fiction Essentials" 
     - "Staff Recommendations"
     - "New Releases"

5. **Live Review Animations**
   - Implement rotating customer reviews
   - Add Amazon review integration
   - Create animated testimonials section

### Priority 3: Amazon Affiliate Integration
6. **Revenue Optimization**
   - Add Amazon Associate ID to all product URLs
   - Implement click tracking for analytics
   - Add "Buy on Amazon" buttons with affiliate links

### Priority 4: Content Enhancement
7. **Book-Specific Features**
   - Add book descriptions from Amazon API
   - Include author information and ratings
   - Implement "Customers also bought" suggestions

8. **Navigation Improvements**
   - Update header menu to book genres
   - Add search functionality for books
   - Implement filtering by price, rating, genre

### Implementation Steps
```bash
# 1. Update product images
cp /path/to/amazon/covers/* ./static/products/

# 2. Add Zero to One book
# Edit src/helpers/product.json

# 3. Find and fix footer
grep -r "SYDNEY" src/
grep -r "Built by Matter" src/

# 4. Test changes
npm start
```

### Files to Modify
- `/src/helpers/product.json` - Add missing books
- `/src/components/Footer/` - Fix copyright text
- `/src/components/ProductCollectionGrid/` - Update categories
- `/static/products/` - Replace with book cover images

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