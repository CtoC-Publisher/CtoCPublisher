# CtoC Publisher - Independent Publishing House 📚

A customized Gatsby e-commerce site for CtoC Publisher, an independent publishing house specializing in curated literature, bestsellers, and emerging voices.

## Features

- **Book Categories**: Fiction, Non-Fiction, Children's books with detailed subcategories 📖
- **Editorial Picks**: Curated selections from our publishing team 🎯
- **Book Reviews**: Insights and recommendations from our editors 📝
- **Author Focus**: Author development, literary events, and publishing support 🚀
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

Visit `http://localhost:5000` to see your publishing site. 🌐

## Customization

### Adding New Publications 📚

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
- Editorial picks and author spotlights

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

*Originally based on the Gatsby E-commerce theme by Matter Design, customized for CtoC Publisher.* 🎨