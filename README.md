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

The site features popular Amazon bestsellers with direct purchase links:
- **Current Books**: Fourth Wing, Atomic Habits, It Ends with Us, and more
- **Click Behavior**: All book clicks redirect to Amazon product pages
- **Button Text**: "Buy on Amazon" instead of "Add to Cart"
- **Revenue**: Ready for Amazon affiliate program integration

#### Next Steps (Optional):
1. **Add Amazon Affiliate ID** to URLs for commission
2. **Update book covers** with actual Amazon images
3. **Add more books** by editing `product.json`

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

## Deployment 🚀

Deploy to Netlify, Vercel, or any static hosting service:

```bash
npm run build
# Upload 'public' folder to your hosting provider
```

---

*Originally based on the Gatsby E-commerce theme by Matter Design, customized for CTOC Books.* 🎨