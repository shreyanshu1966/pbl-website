// Image optimization utilities
export const imageOptimization = {
  // Supported image formats
  formats: {
    webp: 'image/webp',
    avif: 'image/avif',
    jpeg: 'image/jpeg',
    png: 'image/png',
    svg: 'image/svg+xml'
  },

  // Common image sizes for responsive design
  breakpoints: {
    xs: 320,
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536
  },

  // Image quality settings
  quality: {
    thumbnail: 70,
    medium: 80,
    high: 90,
    lossless: 100
  },

  // Generate responsive image srcset
  generateSrcSet: (imagePath, sizes = ['sm', 'md', 'lg', 'xl']) => {
    return sizes.map(size => {
      const width = imageOptimization.breakpoints[size];
      return `${imagePath}?w=${width}&q=${imageOptimization.quality.high} ${width}w`;
    }).join(', ');
  },

  // Generate image URL with optimization parameters
  optimizeImage: (src, options = {}) => {
    const {
      width,
      height,
      quality = imageOptimization.quality.high,
      format = 'webp',
      fit = 'cover'
    } = options;

    if (!src) return '';

    // For external URLs, return as-is
    if (src.startsWith('http')) {
      return src;
    }

    // Build optimization parameters
    const params = new URLSearchParams();
    if (width) params.set('w', width);
    if (height) params.set('h', height);
    if (quality) params.set('q', quality);
    if (format) params.set('f', format);
    if (fit) params.set('fit', fit);

    const queryString = params.toString();
    return queryString ? `${src}?${queryString}` : src;
  },

  // Lazy loading observer
  createLazyLoader: () => {
    if (typeof window === 'undefined') return null;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          const src = img.dataset.src;
          
          if (src) {
            img.src = src;
            img.classList.remove('lazy');
            img.classList.add('loaded');
            observer.unobserve(img);
          }
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    return observer;
  },

  // Check if browser supports modern image formats
  supportsFormat: async (format) => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas');
      canvas.width = 1;
      canvas.height = 1;
      
      canvas.toBlob((blob) => {
        resolve(blob && blob.type === format);
      }, format);
    });
  }
};

// Image component with optimization
export const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  quality,
  format,
  className = '',
  lazy = true,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMiA5VjEzTTEyIDEzTDE1IDEwTTEyIDEzTDkgMTAiIHN0cm9rZT0iIzlDQTNBRiIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4KPC9zdmc+',
  ...props 
}) => {
  const optimizedSrc = imageOptimization.optimizeImage(src, {
    width,
    height,
    quality,
    format
  });

  if (lazy) {
    return (
      <img
        src={placeholder}
        data-src={optimizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={`lazy ${className}`}
        loading="lazy"
        {...props}
      />
    );
  }

  return (
    <img
      src={optimizedSrc}
      alt={alt}
      width={width}
      height={height}
      className={className}
      {...props}
    />
  );
};

// Responsive image component
export const ResponsiveImage = ({ 
  src, 
  alt, 
  sizes = ['sm', 'md', 'lg', 'xl'],
  className = '',
  ...props 
}) => {
  const srcSet = imageOptimization.generateSrcSet(src, sizes);
  
  return (
    <img
      src={imageOptimization.optimizeImage(src, { width: 1024 })}
      srcSet={srcSet}
      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      alt={alt}
      className={className}
      loading="lazy"
      {...props}
    />
  );
};

// Image placeholder component
export const ImagePlaceholder = ({ 
  width = 400, 
  height = 300, 
  text = 'Image',
  className = '' 
}) => (
  <div 
    className={`image-placeholder ${className}`}
    style={{ width, height }}
  >
    <span>{text}</span>
  </div>
);

export default imageOptimization;
