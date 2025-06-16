import React from 'react';
import Icon from './Icon';
import { customSvgIcons } from './CustomIcons';

const IconShowcase = () => {
  const iconCategories = {
    'Custom MIT ADT Icons': [
      'mit-adt',
      'pbl-process',
      'innovation-hub',
      'collaboration',
      'learning-path',
      'tech-stack',
      'project-timeline',
      'mentorship',
      'research',
      'industry-partnership',
      'skills-development'
    ],
    'Navigation & UI': [
      'home',
      'menu',
      'close',
      'chevron-down',
      'chevron-up',
      'chevron-left',
      'chevron-right',
      'arrow-right',
      'arrow-left',
      'external-link'
    ],
    'Actions': [
      'download',
      'upload',
      'search',
      'filter',
      'plus',
      'minus',
      'edit',
      'delete',
      'save',
      'copy',
      'share'
    ],
    'Communication': [
      'email',
      'phone',
      'message',
      'send'
    ],
    'Social Media': [
      'github',
      'linkedin',
      'twitter',
      'facebook',
      'instagram',
      'youtube'
    ],
    'Academic & PBL': [
      'book',
      'education',
      'team',
      'user',
      'award',
      'target',
      'idea',
      'brain',
      'innovation',
      'rocket',
      'star',
      'achievement'
    ],
    'Project & Development': [
      'code',
      'database',
      'server',
      'website',
      'settings',
      'tools'
    ],
    'File & Document': [
      'file',
      'document',
      'image',
      'video'
    ],
    'Status & Alerts': [
      'success',
      'success-circle',
      'warning',
      'error',
      'info',
      'error-circle',
      'check'
    ],
    'Time & Calendar': [
      'calendar',
      'time',
      'timer'
    ],
    'Location': [
      'location',
      'map'
    ],
    'Miscellaneous': [
      'heart',
      'view',
      'hide',
      'lock',
      'unlock',
      'security',
      'refresh',
      'loading'
    ],
    'Charts & Analytics': [
      'bar-chart',
      'pie-chart',
      'trending-up',
      'trending-down',
      'analytics'
    ]
  };

  const copyIconCode = (iconName) => {
    const code = `<Icon name="${iconName}" size={24} />`;
    navigator.clipboard.writeText(code);
    alert(`Copied: ${code}`);
  };

  return (
    <div className="container py-20">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">SVG Icon System</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our custom SVG icon system provides lightweight, scalable icons optimized for the MIT ADT PBL website.
          Click any icon to copy its usage code.
        </p>
      </div>

      {Object.entries(iconCategories).map(([category, icons]) => (
        <section key={category} className="mb-12">
          <h2 className="text-2xl font-bold mb-6 pb-2 border-b border-gray-200">
            {category}
          </h2>
          <div className="grid grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-4">
            {icons.map((iconName) => (
              <div
                key={iconName}
                className="flex flex-col items-center p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition-all duration-200 group"
                onClick={() => copyIconCode(iconName)}
                title={`Click to copy code for ${iconName}`}
              >
                <div className="text-gray-700 group-hover:text-blue-600 mb-2 transition-colors">
                  <Icon name={iconName} size={24} />
                </div>
                <span className="text-xs text-gray-500 text-center leading-tight">
                  {iconName}
                </span>
              </div>
            ))}
          </div>
        </section>
      ))}

      <section className="mt-16 p-8 bg-gray-50 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Usage Examples</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <Icon name="brain" size={32} className="text-blue-600" />
            <code className="bg-white px-3 py-1 rounded border text-sm">
              {'<Icon name="brain" size={32} className="text-blue-600" />'}
            </code>
          </div>
          <div className="flex items-center gap-4">
            <Icon name="team" size={28} className="text-green-600" />
            <code className="bg-white px-3 py-1 rounded border text-sm">
              {'<Icon name="team" size={28} className="text-green-600" />'}
            </code>
          </div>
          <div className="flex items-center gap-4">
            <Icon name="mit-adt" size={30} className="text-purple-600" />
            <code className="bg-white px-3 py-1 rounded border text-sm">
              {'<Icon name="mit-adt" size={30} className="text-purple-600" />'}
            </code>
          </div>
        </div>
      </section>

      <section className="mt-16 p-8 bg-blue-50 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Benefits of SVG Icons</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="rocket" size={20} className="text-blue-600" />
              Performance
            </h4>
            <p className="text-gray-600 text-sm">
              Lightweight SVGs reduce bundle size compared to icon libraries. Only the icons you use are included.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="target" size={20} className="text-green-600" />
              Customizable
            </h4>
            <p className="text-gray-600 text-sm">
              Easy to modify colors, sizes, and styles. Custom icons designed specifically for MIT ADT PBL.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="innovation" size={20} className="text-purple-600" />
              Scalable
            </h4>
            <p className="text-gray-600 text-sm">
              Vector-based icons look crisp at any size, from 16px thumbnails to large hero sections.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Icon name="security" size={20} className="text-orange-600" />
              Accessible
            </h4>
            <p className="text-gray-600 text-sm">
              Built with accessibility in mind, supporting screen readers and keyboard navigation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IconShowcase;
