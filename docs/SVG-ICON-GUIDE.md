# SVG Icon System Guide

## Overview
The MIT ADT PBL website uses a custom SVG icon system instead of external icon libraries. This provides better performance, smaller bundle size, and complete customization control.

## Adding New Icons

### 1. Basic SVG Icon
To add a new icon, edit `/src/components/Icon.jsx` and add your SVG path to the `iconSvgs` object:

```javascript
// In the iconSvgs object
'my-new-icon': (
  <path 
    d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none"
  />
),
```

### 2. Custom MIT ADT Icons
For complex or brand-specific icons, add them to `/src/components/CustomIcons.jsx`:

```javascript
// In the customSvgIcons object
'custom-icon': (
  <g>
    <circle cx="12" cy="8" r="3" fill="currentColor" />
    <path d="M9 12h6l-1.5 8h-3L9 12z" fill="currentColor" />
  </g>
),
```

### 3. Using Icons
```jsx
import Icon from './components/Icon';

// Basic usage
<Icon name="star" size={24} />

// With custom styling
<Icon name="brain" size={32} className="text-blue-600" />

// In buttons
<Button icon={<Icon name="download" />}>Download</Button>
```

## Icon Guidelines

### Design Principles
- **24x24 viewBox**: All icons should use a 24x24 coordinate system
- **2px stroke width**: Use consistent stroke width for outline icons
- **currentColor**: Use `currentColor` for stroke and fill to inherit text color
- **Semantic naming**: Use clear, descriptive names (e.g., `user-profile`, not `icon1`)

### SVG Best Practices
```jsx
// Good ✅
'user': (
  <path 
    d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  />
),

// Avoid ❌
'user': (
  <path 
    d="..." 
    stroke="#3b82f6" 
    strokeWidth="3"
    fill="#ffffff"
  />
),
```

### Performance Tips
- Keep SVG paths simple and optimized
- Remove unnecessary attributes and whitespace
- Use path elements instead of complex shapes when possible
- Avoid embedded styles or scripts

## Icon Categories

### Available Categories
- **Navigation & UI**: menu, close, chevrons, arrows
- **Actions**: download, upload, search, edit, delete
- **Communication**: email, phone, message, send
- **Social Media**: github, linkedin, twitter, facebook
- **Academic & PBL**: book, education, team, brain, innovation
- **Custom MIT ADT**: mit-adt, pbl-process, innovation-hub

### Adding to Categories
When adding icons, update the `IconShowcase.jsx` categories for documentation:

```javascript
const iconCategories = {
  'Your Category': [
    'new-icon-1',
    'new-icon-2'
  ],
  // ... other categories
};
```

## Testing Icons
1. Add your icon to the system
2. View it in the ComponentShowcase or IconShowcase
3. Test different sizes: 16px, 24px, 32px, 48px
4. Test color inheritance with different text colors
5. Verify accessibility with screen readers

## Troubleshooting

### Icon Not Showing
- Check the icon name spelling
- Ensure the SVG path is valid
- Verify the icon is added to the correct file

### Icon Looks Distorted
- Check viewBox is 24x24
- Ensure paths use appropriate coordinate system
- Verify strokeWidth is consistent

### Icon Color Issues
- Use `currentColor` instead of hard-coded colors
- Check CSS text color inheritance
- Verify no conflicting fill or stroke attributes

## Migration from Lucide React
If you need icons similar to Lucide React:
1. Find the icon on [lucide.dev](https://lucide.dev)
2. Copy the SVG path
3. Add to our icon system using the guidelines above
4. Update any existing usage to use the new icon name

## Example: Complete Icon Addition

```javascript
// 1. Add to Icon.jsx iconSvgs object
'graduation-cap': (
  <>
    <path 
      d="M22 10v6M6 12v5c3 3 9 3 12 0v-5" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <path 
      d="m2 10 10-5 10 5-10 5z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </>
),

// 2. Use in component
<Icon name="graduation-cap" size={28} className="text-blue-600" />

// 3. Add to category in IconShowcase.jsx
'Academic & PBL': [
  'book',
  'education',
  'graduation-cap', // Add here
  // ... other icons
],
```
