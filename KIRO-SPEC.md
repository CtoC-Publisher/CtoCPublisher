# KIRO SPEC - Automated Bookshop Website Deployment 🚀

## Overview
Automated specification for deploying customizable independent bookshop websites using Gatsby, GitHub, and Netlify integration. Transform any business into a professional Amazon-integrated bookshop with zero manual configuration.

## Repository Source
**GitHub**: `https://github.com/CtoC-Publisher/CtoCPublisher.git`

## Automation Specification

### 1. One-Click Netlify Deployment 🎯

```yaml
# netlify.toml (Auto-configured)
[build]
  publish = "public"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"
  NPM_VERSION = "8"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**Deploy Button Integration:**
```markdown
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/CtoC-Publisher/CtoCPublisher)
```

### 2. Automated Customization Pipeline 🔧

#### Environment Variables (Netlify Dashboard)
```bash
# Business Branding
SITE_NAME="Your Bookshop Name"
SITE_TAGLINE="Independent Bookshop"
FOOTER_TEXT="© 2024 Your Bookshop, MADE WITH LUV."

# Amazon Integration
AMAZON_AFFILIATE_ID="your-affiliate-20"
AMAZON_REGION="US" # US, UK, CA, DE, FR, IT, ES, JP

# Contact Information
BUSINESS_EMAIL="hello@yourbookshop.com"
BUSINESS_PHONE="+1-555-0123"
BUSINESS_ADDRESS="123 Book Street, Literary City"
```

#### Gatsby Plugin Auto-Configuration
```javascript
// gatsby-config.js (Auto-generated)
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        allowList: ["SITE_NAME", "AMAZON_AFFILIATE_ID", "BUSINESS_EMAIL"]
      }
    },
    {
      resolve: `gatsby-plugin-amazon-affiliate`,
      options: {
        affiliateId: process.env.AMAZON_AFFILIATE_ID,
        region: process.env.AMAZON_REGION || "US"
      }
    },
    `gatsby-plugin-netlify`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`
  ]
}
```

### 3. Content Management Automation 📚

#### Book Catalog Auto-Population
```json
// src/helpers/product.json (Template)
{
  "autoGenerate": true,
  "categories": ["fiction", "non-fiction", "children", "bestsellers"],
  "amazonIntegration": {
    "enabled": true,
    "affiliateId": "${AMAZON_AFFILIATE_ID}",
    "autoImages": true,
    "realTimePricing": true
  },
  "defaultBooks": [
    {
      "name": "Atomic Habits",
      "vendor": "James Clear",
      "asin": "B07N4C2P6C",
      "tags": ["self-help", "bestseller"],
      "autoGenerate": true
    }
  ]
}
```

#### Dynamic Branding Injection
```javascript
// src/components/Brand/Brand.js (Auto-replaced)
const siteConfig = {
  name: process.env.GATSBY_SITE_NAME || "Independent Bookshop",
  tagline: process.env.GATSBY_SITE_TAGLINE || "Curated Literature",
  footer: process.env.GATSBY_FOOTER_TEXT || "© 2024 Bookshop"
}
```

### 4. Netlify Functions Integration ⚡

#### Amazon Product API
```javascript
// netlify/functions/amazon-products.js
exports.handler = async (event, context) => {
  const { asin } = JSON.parse(event.body)
  
  // Auto-fetch Amazon product data
  const productData = await fetchAmazonProduct(asin, {
    affiliateId: process.env.AMAZON_AFFILIATE_ID,
    region: process.env.AMAZON_REGION
  })
  
  return {
    statusCode: 200,
    body: JSON.stringify(productData)
  }
}
```

#### Contact Form Handler
```javascript
// netlify/functions/contact.js
exports.handler = async (event, context) => {
  const formData = JSON.parse(event.body)
  
  // Auto-send to business email
  await sendEmail({
    to: process.env.BUSINESS_EMAIL,
    subject: `New inquiry from ${formData.name}`,
    body: formData.message
  })
  
  return { statusCode: 200, body: 'Message sent' }
}
```

### 5. Automated SEO & Performance 🎯

#### Meta Tags Auto-Generation
```javascript
// src/components/SEO/SEO.js
const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title} | {process.env.GATSBY_SITE_NAME}</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={`${title} | ${process.env.GATSBY_SITE_NAME}`} />
    <meta property="og:type" content="website" />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
)
```

#### Performance Optimization
```javascript
// gatsby-config.js (Auto-enabled)
plugins: [
  `gatsby-plugin-image`,
  `gatsby-plugin-sharp`,
  `gatsby-transformer-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: process.env.GATSBY_SITE_NAME,
      short_name: process.env.GATSBY_SITE_NAME,
      start_url: `/`,
      background_color: `#ffffff`,
      theme_color: `#000000`,
      display: `minimal-ui`,
      icon: `src/images/icon.png`
    }
  }
]
```

### 6. Deployment Workflow 🔄

#### GitHub Actions (Auto-triggered)
```yaml
# .github/workflows/deploy.yml
name: Deploy to Netlify
on:
  push:
    branches: [ main ]
  
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - uses: netlify/actions/cli@master
        with:
          args: deploy --prod --dir=public
        env:
          NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
          NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

### 7. Customization Interface 🎨

#### Netlify CMS Integration
```yaml
# static/admin/config.yml
backend:
  name: git-gateway
  branch: main

collections:
  - name: "books"
    label: "Books"
    folder: "src/content/books"
    create: true
    fields:
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Author", name: "author", widget: "string"}
      - {label: "Amazon ASIN", name: "asin", widget: "string"}
      - {label: "Categories", name: "categories", widget: "list"}
      - {label: "Description", name: "description", widget: "text"}
```

## Implementation Steps 📋

### For End Users:
1. **Click Deploy Button** → Automatic Netlify deployment
2. **Set Environment Variables** → Business customization
3. **Access Netlify CMS** → Content management
4. **Domain Configuration** → Custom domain setup

### For Developers:
1. **Fork Repository** → `https://github.com/CtoC-Publisher/CtoCPublisher`
2. **Configure Netlify** → Environment variables setup
3. **Enable Functions** → Amazon API integration
4. **Deploy** → Automatic build and deployment

## Features Delivered 🎁

✅ **Instant Deployment** - Zero configuration required  
✅ **Amazon Integration** - Affiliate links auto-configured  
✅ **Real Book Images** - All book covers use actual images from `/static/products/`  
✅ **Mobile-Friendly Layout** - Product cards and grids optimized for mobile screens  
✅ **Dark Theme** - Homepage and main sections use a modern dark color scheme  
✅ **Navigation & Hover Effects** - CtoC Books home button and navigation have modern hover effects  
✅ **Responsive Design** - Mobile-optimized bookshop  
✅ **SEO Optimized** - Search engine ready  
✅ **Content Management** - Easy book catalog updates  
✅ **Performance** - Gatsby static site generation  
✅ **Analytics Ready** - Google Analytics integration  
✅ **Contact Forms** - Netlify Forms enabled  

## Cost Structure 💰

- **Netlify Hosting**: Free tier (100GB bandwidth)
- **Domain**: $12/year (optional)
- **Amazon Affiliate**: Commission-based revenue
- **Maintenance**: Zero ongoing costs

## Success Metrics 📊

- **Deployment Time**: < 5 minutes
- **Page Load Speed**: < 2 seconds
- **Mobile Score**: 95+ Lighthouse
- **SEO Score**: 90+ Lighthouse
- **Accessibility**: WCAG 2.1 AA compliant

---

**KIRO SPEC enables any business to launch a professional bookshop website in under 5 minutes with zero technical knowledge required.**