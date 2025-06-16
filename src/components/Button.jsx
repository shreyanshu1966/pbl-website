import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md',
  href,
  to,
  onClick,
  disabled = false,
  loading = false,
  icon,
  className = '',
  animate = true,
  ...props 
}) => {
  // Base button classes
  const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
  
  // Variant classes
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-sm hover:shadow-md',
    secondary: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-sm hover:shadow-md',
    outline: 'bg-transparent text-blue-600 border-2 border-blue-600 hover:bg-blue-600 hover:text-white focus:ring-blue-500',
    ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-sm hover:shadow-md',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-sm hover:shadow-md',
    warning: 'bg-yellow-500 text-white hover:bg-yellow-600 focus:ring-yellow-500 shadow-sm hover:shadow-md'
  };

  // Size classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-sm rounded-md',
    lg: 'px-6 py-3 text-base rounded-lg',
    xl: 'px-8 py-4 text-lg rounded-lg'
  };

  // Combine all classes
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
    </svg>
  );

  // Button content with icon and loading states
  const buttonContent = (
    <>
      {loading && <LoadingSpinner />}
      {icon && !loading && <span className="mr-2">{icon}</span>}
      {children}
    </>
  );

  // Animation wrapper
  const AnimatedButton = ({ children: content, ...animationProps }) => {
    if (!animate) return content;
    
    return (
      <motion.div
        whileHover={{ scale: 1.02, y: -1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        {...animationProps}
      >
        {content}
      </motion.div>
    );
  };

  // External link
  if (href) {
    return (
      <AnimatedButton>
        <a
          href={href}
          className={buttonClasses}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        >
          {buttonContent}
        </a>
      </AnimatedButton>
    );
  }

  // Internal link (React Router)
  if (to) {
    return (
      <AnimatedButton>
        <Link
          to={to}
          className={buttonClasses}
          {...props}
        >
          {buttonContent}
        </Link>
      </AnimatedButton>
    );
  }

  // Regular button
  return (
    <AnimatedButton>
      <button
        className={buttonClasses}
        onClick={onClick}
        disabled={disabled || loading}
        {...props}
      >
        {buttonContent}
      </button>
    </AnimatedButton>
  );
};

// Pre-configured button variants for common use cases
export const PrimaryButton = (props) => <Button variant="primary" {...props} />;
export const SecondaryButton = (props) => <Button variant="secondary" {...props} />;
export const OutlineButton = (props) => <Button variant="outline" {...props} />;
export const GhostButton = (props) => <Button variant="ghost" {...props} />;
export const DangerButton = (props) => <Button variant="danger" {...props} />;
export const SuccessButton = (props) => <Button variant="success" {...props} />;
export const WarningButton = (props) => <Button variant="warning" {...props} />;

// CTA Button with enhanced styling for call-to-action purposes
export const CTAButton = ({ children, className = '', ...props }) => (
  <Button
    variant="primary"
    size="lg"
    className={`bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${className}`}
    {...props}
  >
    {children}
  </Button>
);

export default Button;
