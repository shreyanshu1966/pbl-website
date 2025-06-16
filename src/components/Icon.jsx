import React from 'react';
import { customSvgIcons } from './CustomIcons';

// SVG icon definitions
const iconSvgs = {
  // Navigation & UI
  menu: (
    <path 
      d="M3 6h18M3 12h18M3 18h18" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  close: (
    <path 
      d="M18 6L6 18M6 6l12 12" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  'chevron-down': (
    <path 
      d="m6 9 6 6 6-6" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  'chevron-up': (
    <path 
      d="m18 15-6-6-6 6" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  'chevron-left': (
    <path 
      d="m15 18-6-6 6-6" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  'chevron-right': (
    <path 
      d="m9 18 6-6-6-6" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  'arrow-right': (
    <path 
      d="M5 12h14m-7-7 7 7-7 7" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  'arrow-left': (
    <path 
      d="m12 19-7-7 7-7m7 7H5" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  'external-link': (
    <>
      <path 
        d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="m15 3 6 6m-6-6v6m6-6h-6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),

  // Actions
  download: (
    <>
      <path 
        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M7 10l5 5 5-5M12 15V3" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  upload: (
    <>
      <path 
        d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="m17 8-5-5-5 5M12 3v12" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  search: (
    <>
      <circle 
        cx="11" 
        cy="11" 
        r="8" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="m21 21-4.35-4.35" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  filter: (
    <path 
      d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  plus: (
    <path 
      d="M12 5v14m-7-7h14" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  minus: (
    <path 
      d="M5 12h14" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  edit: (
    <path 
      d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  delete: (
    <>
      <path 
        d="M3 6h18m-2 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="m10 11 4 4m0-4-4 4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  save: (
    <>
      <path 
        d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M17 21v-8H7v8M7 3v5h8" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  copy: (
    <>
      <rect 
        width="14" 
        height="14" 
        x="8" 
        y="8" 
        rx="2" 
        ry="2" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  share: (
    <>
      <path 
        d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="m16 6-4-4-4 4M12 2v12" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),

  // Communication
  email: (
    <>
      <path 
        d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="m22 6-10 7L2 6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  phone: (
    <path 
      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  message: (
    <path 
      d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  send: (
    <path 
      d="m22 2-7 20-4-9-9-4Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),

  // Social Media
  github: (
    <path 
      d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4M9 19c-5 1.5-5-2.5-7-3l14 0" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  linkedin: (
    <>
      <path 
        d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <rect 
        width="4" 
        height="12" 
        x="2" 
        y="9" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle 
        cx="4" 
        cy="4" 
        r="2" 
        stroke="currentColor" 
        strokeWidth="2"
      />
    </>
  ),
  twitter: (
    <path 
      d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  facebook: (
    <path 
      d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  instagram: (
    <>
      <rect 
        width="20" 
        height="20" 
        x="2" 
        y="2" 
        rx="5" 
        ry="5" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="m17.5 6.5h.01" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  youtube: (
    <>
      <path 
        d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="m10 15 5-3-5-3z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),

  // Academic & PBL Related
  book: (
    <path 
      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  education: (
    <>
      <path 
        d="m22 10-10-5L2 10l10 5 10-5z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M6 12v5c3 3 9 3 12 0v-5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  team: (
    <>
      <path 
        d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle 
        cx="9" 
        cy="7" 
        r="4" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  user: (
    <>
      <path 
        d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle 
        cx="12" 
        cy="7" 
        r="4" 
        stroke="currentColor" 
        strokeWidth="2"
      />
    </>
  ),
  award: (
    <>
      <circle 
        cx="12" 
        cy="8" 
        r="6" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="m9 12 2 2 4-4M21 8a9 9 0 1 1-9-9 9 9 0 0 1 9 9z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M9 21c0-2.5 2-5 6-5s6 2.5 6 5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  target: (
    <>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="currentColor" 
        strokeWidth="2"
      />
    </>
  ),
  idea: (
    <path 
      d="M9 21h6M12 3a6 6 0 0 0-6 6c0 1 .2 2 .6 2.9L9 15v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2l2.4-3.1c.4-.9.6-1.9.6-2.9A6 6 0 0 0 12 3Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  brain: (
    <path 
      d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4 4.5 4.5 0 0 0 3 4 4.5 4.5 0 0 0 3-4Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  innovation: (
    <>
      <path 
        d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 6v6l4 2" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  rocket: (
    <>
      <path 
        d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M15 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  star: (
    <path 
      d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  achievement: (
    <>
      <path 
        d="M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.61 2.14a2 2 0 0 1 .13 2.2L16.79 15" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M11 12 5.12 2.2M13 12l5.88-9.8M8 7h8M7 15l5 6 5-6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),

  // Project & Development
  code: (
    <path 
      d="m16 18 6-6-6-6M8 6l-6 6 6 6" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  database: (
    <>
      <ellipse 
        cx="12" 
        cy="5" 
        rx="9" 
        ry="3" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" 
        stroke="currentColor" 
        strokeWidth="2"
      />
    </>
  ),
  server: (
    <>
      <rect 
        width="20" 
        height="8" 
        x="2" 
        y="2" 
        rx="2" 
        ry="2" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <rect 
        width="20" 
        height="8" 
        x="2" 
        y="14" 
        rx="2" 
        ry="2" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M6 6h.01M6 18h.01" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  website: (
    <>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="m2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" 
        stroke="currentColor" 
        strokeWidth="2"
      />
    </>
  ),
  settings: (
    <>
      <path 
        d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <circle 
        cx="12" 
        cy="12" 
        r="3" 
        stroke="currentColor" 
        strokeWidth="2"
      />
    </>
  ),
  tools: (
    <path 
      d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),

  // File & Document
  file: (
    <path 
      d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  document: (
    <>
      <path 
        d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M14 2v4a2 2 0 0 0 2 2h4M16 13H8M16 17H8M10 9H8" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  image: (
    <>
      <rect 
        width="18" 
        height="18" 
        x="3" 
        y="3" 
        rx="2" 
        ry="2" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <circle 
        cx="9" 
        cy="9" 
        r="2" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  video: (
    <>
      <path 
        d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <rect 
        width="14" 
        height="12" 
        x="2" 
        y="6" 
        rx="2" 
        ry="2" 
        stroke="currentColor" 
        strokeWidth="2"
      />
    </>
  ),

  // Status & Alerts
  success: (
    <path 
      d="M20 6 9 17l-5-5" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  'success-circle': (
    <>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="m9 12 2 2 4-4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  warning: (
    <>
      <path 
        d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M12 9v4M12 17h.01" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  error: (
    <>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M12 8v4M12 16h.01" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  info: (
    <>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M12 16v-4M12 8h.01" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  'error-circle': (
    <>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="m15 9-6 6M9 9l6 6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),

  // Time & Calendar
  calendar: (
    <>
      <path 
        d="M8 2v4m8-4v4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <rect 
        width="18" 
        height="18" 
        x="3" 
        y="4" 
        rx="2" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M3 10h18" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  time: (
    <>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M12 6v6l4 2" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  timer: (
    <>
      <path 
        d="M10 2h4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle 
        cx="12" 
        cy="14" 
        r="8" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="m12 14 4-4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),

  // Location
  location: (
    <path 
      d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" 
      stroke="currentColor" 
      strokeWidth="2"
    />
  ),
  map: (
    <>
      <path 
        d="m3 7 6-3 6 3 6-3v13l-6 3-6-3-6 3V7Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="m9 4v13M15 7v13" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),

  // Misc
  heart: (
    <path 
      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  view: (
    <>
      <path 
        d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <circle 
        cx="12" 
        cy="12" 
        r="3" 
        stroke="currentColor" 
        strokeWidth="2"
      />
    </>
  ),
  hide: (
    <>
      <path 
        d="M9.88 9.88a3 3 0 1 0 4.24 4.24" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="m2 2 20 20" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  lock: (
    <>
      <rect 
        width="18" 
        height="11" 
        x="3" 
        y="11" 
        rx="2" 
        ry="2" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M7 11V7a5 5 0 0 1 10 0v4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  unlock: (
    <>
      <rect 
        width="18" 
        height="11" 
        x="3" 
        y="11" 
        rx="2" 
        ry="2" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M7 11V7a5 5 0 0 1 9.9-1" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  security: (
    <>
      <path 
        d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="m9 12 2 2 4-4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  refresh: (
    <path 
      d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8M3 16l2.26-2.26A9.75 9.75 0 0 0 12 21a9 9 0 0 0 9-9" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  loading: (
    <path 
      d="M21 12a9 9 0 1 1-6.219-8.56" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),

  // Charts & Analytics
  'bar-chart': (
    <>
      <path 
        d="M3 3v18h18" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M18 17V9M13 17V5M8 17v-3" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  'pie-chart': (
    <path 
      d="M21.21 15.89A10 10 0 1 1 8 2.83" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  'trending-up': (
    <>
      <path 
        d="m22 7-8.5 8.5-5-5L2 17" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M16 7h6v6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  'trending-down': (
    <>
      <path 
        d="m22 17-8.5-8.5-5 5L2 7" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M16 17h6v-6" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  analytics: (
    <path 
      d="M22 12h-4l-3 9L9 3l-3 9H2" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  // Special icon for "check"
  check: (
    <path 
      d="M20 6 9 17l-5-5" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),

  // Add custom icons
  ...customSvgIcons,
};

// Icon component wrapper
const Icon = ({ 
  name, 
  size = 24, 
  color = 'currentColor', 
  className = '',
  ...props 
}) => {
  const iconSvg = iconSvgs[name];
  
  if (!iconSvg) {
    console.warn(`Icon "${name}" not found in iconSvgs`);
    return null;
  }
  
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={`icon ${className}`}
      {...props}
    >
      {iconSvg}
    </svg>
  );
};

// Predefined icon sets for common use cases
export const navigationIcons = {
  home: 'home',
  about: 'info',
  projects: 'code',
  events: 'calendar',
  contact: 'email',
  team: 'team',
  resources: 'book',
};

export const socialIcons = {
  github: 'github',
  linkedin: 'linkedin',
  twitter: 'twitter',
  facebook: 'facebook',
  instagram: 'instagram',
  youtube: 'youtube',
  email: 'email',
};

export const academicIcons = {
  pbl: 'brain',
  learning: 'education',
  innovation: 'innovation',
  collaboration: 'team',
  achievement: 'achievement',
  research: 'search',
  development: 'code',
};

export const actionIcons = {
  download: 'download',
  share: 'share',
  save: 'save',
  edit: 'edit',
  delete: 'delete',
  view: 'view',
  search: 'search',
  filter: 'filter',
};

export default Icon;
