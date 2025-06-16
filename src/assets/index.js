// Asset management system for MIT ADT PBL Website

// Image assets configuration
export const imageAssets = {
  // Brand assets
  logo: {
    main: '/src/assets/images/logo/mit-adt-logo.png',
    dark: '/src/assets/images/logo/mit-adt-logo-dark.png',
    icon: '/src/assets/images/logo/mit-adt-icon.png',
    favicon: '/src/assets/images/logo/favicon.ico'
  },

  // Hero section images
  hero: {
    background: '/src/assets/images/hero/hero-bg.jpg',
    student1: '/src/assets/images/hero/student-collaboration.jpg',
    student2: '/src/assets/images/hero/student-presentation.jpg',
    innovation: '/src/assets/images/hero/innovation-lab.jpg'
  },

  // About page images
  about: {
    campus: '/src/assets/images/about/campus-view.jpg',
    pblProcess: '/src/assets/images/about/pbl-process.svg',
    collaboration: '/src/assets/images/about/team-collaboration.jpg',
    innovation: '/src/assets/images/about/innovation-center.jpg'
  },

  // Events images
  events: {
    defaultBanner: '/src/assets/images/events/default-event-banner.jpg',
    hackathon: '/src/assets/images/events/hackathon-2024.jpg',
    techTalk: '/src/assets/images/events/tech-talk-series.jpg',
    projectShow: '/src/assets/images/events/project-showcase.jpg'
  },

  // Project images
  projects: {
    placeholder: '/src/assets/images/projects/project-placeholder.jpg',
    webDev: '/src/assets/images/projects/web-development.jpg',
    aiMl: '/src/assets/images/projects/ai-ml-project.jpg',
    iot: '/src/assets/images/projects/iot-project.jpg'
  },

  // Team/Faculty images
  team: {
    placeholder: '/src/assets/images/team/person-placeholder.jpg',
    faculty1: '/src/assets/images/team/faculty-1.jpg',
    faculty2: '/src/assets/images/team/faculty-2.jpg'
  },

  // Background patterns and decorative elements
  patterns: {
    geometric: '/src/assets/images/patterns/geometric-pattern.svg',
    dots: '/src/assets/images/patterns/dots-pattern.svg',
    waves: '/src/assets/images/patterns/waves-pattern.svg'
  }
};

// Icon assets (for custom icons not available in Lucide)
export const iconAssets = {
  custom: {
    mitAdt: '/src/assets/icons/mit-adt-icon.svg',
    pbl: '/src/assets/icons/pbl-icon.svg',
    innovation: '/src/assets/icons/innovation-icon.svg'
  }
};

// Placeholder image generator
export const generatePlaceholder = (width = 400, height = 300, text = 'Image') => {
  return `data:image/svg+xml;base64,${btoa(`
    <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#F3F4F6"/>
      <text x="50%" y="50%" text-anchor="middle" dy="0.3em" font-family="Inter, sans-serif" font-size="16" fill="#9CA3AF">
        ${text}
      </text>
    </svg>
  `)}`;
};

// Asset preloader utility
export const preloadAssets = (assets = []) => {
  return Promise.all(
    assets.map(src => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(new Error(`Failed to load: ${src}`));
        img.src = src;
      });
    })
  );
};

// Critical assets to preload
export const criticalAssets = [
  imageAssets.logo.main,
  imageAssets.hero.background,
  imageAssets.hero.student1
];

// Asset optimization recommendations
export const assetGuidelines = {
  images: {
    maxSize: '2MB',
    recommendedFormats: ['WebP', 'AVIF', 'JPEG'],
    dimensions: {
      hero: { width: 1920, height: 1080 },
      card: { width: 400, height: 300 },
      thumbnail: { width: 150, height: 150 },
      avatar: { width: 80, height: 80 }
    }
  },
  
  naming: {
    convention: 'kebab-case',
    structure: 'category-description-size.extension',
    examples: [
      'hero-background-1920x1080.webp',
      'project-card-400x300.jpg',
      'team-avatar-80x80.png'
    ]
  },

  optimization: {
    compression: {
      photos: 'Use JPEG with 80-90% quality',
      graphics: 'Use PNG for transparency, WebP for better compression',
      icons: 'Use SVG for scalability'
    },
    responsive: 'Provide multiple sizes for different screen resolutions',
    lazyLoading: 'Implement lazy loading for images below the fold'
  }
};

// Image helper functions
export const getImageUrl = (category, name) => {
  return imageAssets[category]?.[name] || generatePlaceholder();
};

export const getOptimizedImageUrl = (src, options = {}) => {
  // This would integrate with your image optimization service
  // For now, return the original src
  return src;
};

export default {
  imageAssets,
  iconAssets,
  generatePlaceholder,
  preloadAssets,
  criticalAssets,
  assetGuidelines,
  getImageUrl,
  getOptimizedImageUrl
};
