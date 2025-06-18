// Enhanced form validation utilities
const validateField = (value, rules) => {
  if (!rules) return null;

  // Required validation
  if (rules.required && (!value || value.toString().trim() === '')) {
    return rules.requiredMessage || "This field is required";
  }

  // Email validation
  if (rules.email && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return rules.emailMessage || "Please enter a valid email address";
    }
  }

  // Phone validation
  if (rules.phone && value) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{7,20}$/;
    if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) {
      return rules.phoneMessage || "Please enter a valid phone number";
    }
  }

  // Min length validation
  if (rules.minLength && value && value.length < rules.minLength) {
    return rules.minLengthMessage || `Minimum ${rules.minLength} characters required`;
  }

  // Max length validation
  if (rules.maxLength && value && value.length > rules.maxLength) {
    return rules.maxLengthMessage || `Maximum ${rules.maxLength} characters allowed`;
  }

  // Pattern validation
  if (rules.pattern && value && !rules.pattern.test(value)) {
    return rules.patternMessage || "Invalid format";
  }

  // Custom validation
  if (rules.custom && value) {
    return rules.custom(value);
  }

  return null;
};

// File upload validation
const validateFile = (file, options = {}) => {
  const {
    maxSize = 5 * 1024 * 1024, // 5MB default
    allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
    maxFiles = 1
  } = options;

  const errors = [];

  if (!file) {
    return { isValid: true, errors: [] };
  }

  // Check file size
  if (file.size > maxSize) {
    errors.push(`File size must be less than ${maxSize / (1024 * 1024)}MB`);
  }

  // Check file type
  if (!allowedTypes.includes(file.type)) {
    errors.push(`File type not allowed. Allowed types: ${allowedTypes.join(', ')}`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

export { validateField, validateFile };
