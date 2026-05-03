// utils/validateForm.js

/**
 * Validate email format
 * @param {string} email - Email to validate
 * @returns {boolean} True if valid
 */
export const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

/**
 * Validate phone number (Kenyan format)
 * @param {string} phone - Phone to validate
 * @returns {boolean} True if valid
 */
export const isValidKenyanPhone = (phone) => {
  // Accepts: +2547XX, 07XX, 2547XX formats
  return /^(\+254|0|254)?[79]\d{8}$/.test(phone.replace(/\s/g, ''));
};

/**
 * Validate password strength
 * @param {string} password - Password to validate
 * @returns {object} Validation result with score and feedback
 */
export const validatePassword = (password) => {
  const checks = {
    length: password.length >= 8,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*]/.test(password)
  };
  
  const score = Object.values(checks).filter(Boolean).length;
  
  return {
    isValid: score >= 3 && checks.length,
    score,
    feedback: {
      length: checks.length ? '' : 'At least 8 characters',
      uppercase: checks.uppercase ? '' : 'Add uppercase letter',
      lowercase: checks.lowercase ? '' : 'Add lowercase letter',
      number: checks.number ? '' : 'Add a number',
      special: checks.special ? '' : 'Add special character (!@#$%^&*)'
    }
  };
};

/**
 * Generic form validator
 * @param {object} formData - Form data to validate
 * @param {object} rules - Validation rules
 * @returns {object} Errors object
 */
export const validateForm = (formData, rules) => {
  const errors = {};
  
  for (const [field, value] of Object.entries(formData)) {
    const fieldRules = rules[field];
    if (!fieldRules) continue;
    
    if (fieldRules.required && !value) {
      errors[field] = fieldRules.requiredMessage || 'This field is required';
      continue;
    }
    
    if (value && fieldRules.pattern && !fieldRules.pattern.test(value)) {
      errors[field] = fieldRules.patternMessage || 'Invalid format';
      continue;
    }
    
    if (value && fieldRules.minLength && value.length < fieldRules.minLength) {
      errors[field] = `Must be at least ${fieldRules.minLength} characters`;
      continue;
    }
    
    if (fieldRules.custom && !fieldRules.custom(value, formData)) {
      errors[field] = fieldRules.customMessage || 'Invalid value';
    }
  }
  
  return errors;
};