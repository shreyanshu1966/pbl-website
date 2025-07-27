import React from 'react';
import { getPlaceholder } from '../utils/imageUtils';

/**
 * PlaceholderImage component - A reliable replacement for placeholder images
 * Use this instead of directly referencing /placeholder/ URLs
 */
const PlaceholderImage = ({ 
  width = 200, 
  height = 200, 
  text = '', 
  className = '', 
  alt = 'Placeholder image',
  ...props 
}) => {
  return (
    <img
      src={getPlaceholder(width, height, text)}
      width={width}
      height={height}
      alt={alt}
      className={className}
      {...props}
    />
  );
};

export default PlaceholderImage;
