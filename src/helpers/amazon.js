// Amazon affiliate helper functions
export const AFFILIATE_ID = 'ctocpublisher-20';

export const buildAmazonUrl = (asin, affiliateId = AFFILIATE_ID) => {
  return `https://www.amazon.com/dp/${asin}?tag=${affiliateId}`;
};

export const redirectToAmazon = (amazonUrl) => {
  window.open(amazonUrl, '_blank', 'noopener,noreferrer');
};

export const getAmazonUrlFromProduct = (product) => {
  if (product.amazonUrl) {
    return product.amazonUrl;
  }
  if (product.productCode || product.asin) {
    return buildAmazonUrl(product.productCode || product.asin);
  }
  return null;
};