// Image utility functions for generating real images from Unsplash
// This replaces placeholder images with real, high-quality stock images

/**
 * Generate Unsplash image URL with specific parameters
 * @param {number} width - Image width
 * @param {number} height - Image height  
 * @param {string} category - Image category/search term
 * @param {number} seed - Optional seed for consistent images
 * @returns {string} Unsplash image URL
 */
export const generateUnsplashImage = (width, height, category = '', seed = null) => {
  const baseUrl = 'https://images.unsplash.com';
  const params = new URLSearchParams();
  
  // Add dimensions
  params.append('w', width.toString());
  params.append('h', height.toString());
  
  // Add category/search if provided
  if (category) {
    params.append('q', category);
  }
  
  // Add seed for consistent images
  if (seed) {
    params.append('sig', seed.toString());
  }
  
  // Add fit and quality parameters
  params.append('fit', 'crop');
  params.append('crop', 'entropy');
  params.append('auto', 'format');
  params.append('q', '80');
  
  return `${baseUrl}/photo-1518837695005-2083093ee35b?${params.toString()}`;
};

/**
 * Generate a placeholder image using reliable placeholders instead of /placeholder/
 * This function replaces the problematic /placeholder/ URLs
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @param {string} text - Optional text to display on placeholder
 * @returns {string} Placeholder image URL
 */
export const getPlaceholder = (width, height, text = '') => {
  // Use Unsplash instead of the failing placeholder service
  const randomId = Math.floor(Math.random() * 1000);
  return `https://source.unsplash.com/random/${width}x${height}?sig=${randomId}`;
};

/**
 * Get avatar placeholder for profiles
 * @param {number} size - Square avatar size
 * @param {number} id - User ID or unique identifier (for consistent avatar)
 * @returns {string} Avatar URL
 */
export const getAvatarPlaceholder = (size = 200, id = 1) => {
  const avatarCollection = [
    'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d',
    'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    'https://images.unsplash.com/photo-1580489944761-15a19d654956',
    'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb',
    'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604'
  ];
  
  // Use ID to get consistent avatar for the same user
  const index = id % avatarCollection.length;
  const avatarUrl = avatarCollection[index];
  
  // Add parameters for sizing
  return `${avatarUrl}?w=${size}&h=${size}&fit=crop&crop=faces&auto=format&q=80`;
};

/**
 * Get curated real image URLs for different categories
 */
export const getImageUrls = {
  // Student projects and academic
  studentProjects: {
    aiHealthcare: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    iotCampus: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    robotics: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    webDev: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    mobileApp: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    blockchain: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    cybersecurity: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    dataAnalytics: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'
  },
  
  // Labs and facilities
  labs: {
    computerLab: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    engineeringLab: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    researchLab: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    electronicsLab: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    library: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    classroom: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'
  },
  
  // Events and workshops
  events: {
    workshop: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    seminar: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    presentation: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    teamwork: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    hackathon: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    conference: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'
  },
  
  // Awards and recognition
  awards: {
    trophy: 'https://images.unsplash.com/photo-1552744693-f4d4d4d05b5c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    certificate: 'https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    graduation: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    celebration: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'
  },
  
  // Technology domains
  technology: {
    ai: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    ml: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    blockchain: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    iot: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    cybersecurity: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    cloud: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    mobile: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    web: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'
  },
  
  // Industry sectors
  industry: {
    healthcare: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    finance: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    education: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    manufacturing: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    agriculture: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    energy: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    transportation: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    retail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'
  },
  
  // People and team photos
  people: {
    students: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    faculty: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    teamwork: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    presentation: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    discussion: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    collaboration: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'
  },
  
  // General academic/university
  campus: {
    building: 'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    library: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    studyArea: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    courtyard: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    entrance: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'
  }
};

/**
 * Get thumbnail and full-size image URLs for gallery items
 * @param {string} category - Image category
 * @param {string} type - Specific image type
 * @returns {object} Object with thumbnail and fullImage URLs
 */
export const getGalleryImages = (category, type) => {
  const baseUrl = getImageUrls[category]?.[type] || getImageUrls.campus.building;
  
  return {
    thumbnail: baseUrl.replace('w=800&h=600', 'w=400&h=300'),
    fullImage: baseUrl.replace('w=800&h=600', 'w=1200&h=800')
  };
};

/**
 * Get hero section background images
 */
export const getHeroImages = {
  home: 'https://images.unsplash.com/photo-1523050854058-8df90110c9d1?w=1920&h=1080&fit=crop&crop=entropy&auto=format&q=80',
  about: 'https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop&crop=entropy&auto=format&q=80',
  projects: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1920&h=1080&fit=crop&crop=entropy&auto=format&q=80',
  gallery: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1920&h=1080&fit=crop&crop=entropy&auto=format&q=80',
  contact: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&h=1080&fit=crop&crop=entropy&auto=format&q=80'
};

/**
 * Get profile/avatar images for team members, students, etc.
 */
export const getProfileImages = {
  student1: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
  student2: 'https://images.unsplash.com/photo-1494790108755-2616c1c6c946?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
  student3: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
  faculty1: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format&q=80',
  faculty2: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face&auto=format&q=80'
};

export default {
  generateUnsplashImage,
  getImageUrls,
  getGalleryImages,
  getHeroImages,
  getProfileImages
};
