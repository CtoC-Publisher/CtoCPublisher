/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// Temporarily exclude problematic pages during build
exports.onCreatePage = ({ page, actions }) => {
  const { deletePage } = actions;
  
  // Skip pages that have SSR issues with react-slick
  if (page.path.includes('/account/') || page.path.includes('/shopV2/') || page.path === '/shop/') {
    deletePage(page);
  }
};