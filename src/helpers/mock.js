import productJson from './product.json';
import blogJson from './blog.json';

function generateMockBookData(count, tag) {
  const books = productJson;
  if (tag) {
    const filtered = books.filter((item) => item.tags.includes(tag));
    return filtered.slice(0, count);
  }
  return books.slice(0, count);
}

function generateMockProductData(count, tag) {
  return generateMockBookData(count, tag);
}

function generateMockBlogData(count) {
  return blogJson.slice(0, count);
}

export { generateMockBookData, generateMockProductData, generateMockBlogData };
