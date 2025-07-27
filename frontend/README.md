# MIT ADT PBL Website

A modern, responsive website for MIT ADT University's Project-Based Learning program, built with React, Vite, and Tailwind CSS.

## Features

- 🎨 **MIT ADT Branding**: Custom color scheme matching MIT ADT University's official brand colors
- 📱 **Responsive Design**: Optimized for all devices and screen sizes  
- 🚀 **Fast Loading**: Built with Vite for optimal performance
- 🔧 **Modern Tech Stack**: React 18, JavaScript, Tailwind CSS
- 🎭 **Smooth Animations**: Framer Motion for engaging user experience
- 🔐 **Simple Login**: Student login with enrollment number and password
- 🎯 **Complete Icon System**: Comprehensive SVG icon library with 50+ icons
- ✨ **Polished UI/UX**: All visual elements and interactions fully functional

## Color Scheme

The website uses MIT ADT University's official colors:
- **Primary Purple**: `#431369` - Headers, navigation, primary buttons
- **MIT Navy Blue**: `#04205d` - Secondary elements, gradients
- **MIT Red**: `#ff0000` - Accent colors, highlights
- **Secondary Blue**: `#04205d` - Supporting elements

## Pages

- **Home**: Landing page with PBL overview and key highlights
- **About PBL**: Detailed information about Project-Based Learning methodology with benefits showcase
- **Multidisciplinary Projects**: Showcase of student projects across various domains
- **Project Resources**: Learning materials, templates, and project guidelines
- **Management Team**: Faculty and leadership information with contact details
- **Events**: Ongoing, upcoming, and past events with interactive features
- **Support**: Help center with troubleshooting guides and contact information
- **Documentation**: Guidelines, frameworks, and academic resources
- **FAQs**: Frequently asked questions about PBL program
- **Login**: Student authentication portal

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd pbl-website
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Deployment

The website is configured for deployment on Vercel with the included `vercel.json` configuration.

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
├── utils/              # Utility functions
├── assets/             # Static assets
└── index.css          # Global styles and CSS variables
```

## Key Features Implemented

### 1. Custom Branding & Theme
- MIT ADT favicon (`/icon.png`)
- Official color scheme implementation with CSS cascade layers
- Consistent typography using Inter font
- MIT ADT gradient backgrounds and styling

### 2. Enhanced Login System
- Simplified enrollment number + password authentication
- Custom MIT icon integration
- Responsive design with error handling

### 3. Management Team Page
- Complete faculty and leadership information
- PBL team structure explanation with specialization diagram
- Contact information and office details
- Professional layout with Vice-Chancellor prominence

### 4. Comprehensive Icon System
- **50+ SVG Icons**: Complete icon library covering all UI needs
- **Standardized Naming**: All icons use lowercase kebab-case (e.g., `check-circle`, `external-link`)
- **Missing Icons Fixed**: Added icons for all missing elements across pages
- **Icon Categories**: Navigation, actions, communication, academic, files, and more

### 5. Events Management System
- Interactive event calendar with ongoing, upcoming, and past events
- Event categories and search functionality
- Participant tracking and registration status
- Fully isolated CSS modules for styling

### 6. Project Resources Hub
- Template library with file type icons
- Expert directory and technology pool
- Guidelines and documentation access
- Search and filter capabilities

### 7. Support & Help Center
- Troubleshooting guides with visual icons
- Multiple contact methods (chat, email, phone)
- FAQ system and help documentation
- Quick access to common issues

### 8. Visual Polish & Bug Fixes
- **Timeline Issues**: Fixed z-index problems in Implementation Framework
- **Text Visibility**: Resolved all text contrast and readability issues
- **Image Optimization**: Proper image paths and alt text
- **Responsive Design**: All components work across device sizes
- **Animation Performance**: Smooth Framer Motion animations

## Technologies Used

- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **Tailwind CSS**: Utility-first CSS framework with custom MIT ADT theme
- **Framer Motion**: Animation library for smooth transitions
- **React Router**: Client-side routing
- **React Hook Form**: Form handling and validation
- **CSS Modules**: Scoped styling for component isolation
- **SVG Icons**: Custom icon system with comprehensive coverage

## Recent Updates (June 2025)

### Icon System Overhaul
- ✅ **Added 15+ New Icons**: `check-circle`, `chevron-right`, `book-open`, `star`, `x`, `file-text`, `user-x`, `help-circle`, and more
- ✅ **Fixed All Missing Icons**: Every page now displays all intended icons
- ✅ **Standardized Naming**: Converted all capitalized icon names to lowercase kebab-case
- ✅ **Updated All Pages**: AboutPBL, ManagementTeam, Support, Events, ProjectResources, and MultidisciplinaryProjects

### UI/UX Improvements
- ✅ **Fixed Timeline Dots**: Resolved z-index issues in Implementation Framework
- ✅ **Enhanced Visibility**: Improved text contrast and readability across all pages
- ✅ **Mobile Responsiveness**: All components now work seamlessly on mobile devices
- ✅ **Professional Styling**: Consistent branding and visual hierarchy

### New Features
- ✅ **Events Page**: Complete event management system with filtering and search
- ✅ **Support Center**: Comprehensive help system with troubleshooting guides
- ✅ **Enhanced Navigation**: Improved header with proper icon display
- ✅ **Contact Integration**: Working contact forms and information display

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is proprietary to MIT ADT University.

## Contact

For questions or support, contact the MIT ADT University development team.