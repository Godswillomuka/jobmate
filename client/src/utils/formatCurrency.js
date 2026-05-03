// utils/formatCurrency.js

/**
 * Format currency in Kenyan Shillings
 * @param {number} amount - The amount to format
 * @param {string} currency - Currency code (default: 'KES')
 * @returns {string} Formatted currency string
 */
export const formatCurrency = (amount, currency = 'KES') => {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

/**
 * Format number with K/M/B suffix
 * @param {number} num - The number to format
 * @returns {string} Formatted number string
 */
export const formatCompactNumber = (num) => {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return num.toString();
};