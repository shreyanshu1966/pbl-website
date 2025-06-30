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
  x: (
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
  'message-circle': (
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
  loader: (
    <path 
      d="M21 12a9 9 0 11-6.219-8.56" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  'map-pin': (
    <path 
      d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z M12 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  clock: (
    <>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="m12 6 0 6 4 0" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </>
  ),

  // Academic & PBL Related
  book: (
    <path 
      d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  'book-open': (
    <>
      <path 
        d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="m22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" 
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
  users: (
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
  brain: (
    <path 
      d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z M8 21h8 M12 17v4" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  shield: (
    <path 
      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  smartphone: (
    <>
      <rect 
        width="14" 
        height="20" 
        x="5" 
        y="2" 
        rx="2" 
        ry="2" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M12 18h.01" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  wifi: (
    <>
      <path 
        d="M1 8.5c0 1 0 1.5.5 2L12 21l10.5-10.5c.5-.5.5-1 .5-2 0-2-1.5-3.5-3.5-3.5h-15C2.5 5 1 6.5 1 8.5Z" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="M8 12h8" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
    </>
  ),
  box: (
    <>
      <path 
        d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" 
        stroke="currentColor" 
        strokeWidth="2"
      />
      <path 
        d="m3.29 7 8.71 5 8.71-5M12 22V12" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />    </>
  ),
  landmark: (
    <>
      <path 
        d="M3 21h18M6 21V7l6-4 6 4v14M10 12h4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
  trophy: (
    <>
      <path 
        d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M6 9a8 8 0 1 0 12 0M6 9v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V9" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M10 12h4v4h-4z" 
        stroke="currentColor" 
        strokeWidth="2"
      />
    </>
  ),
  wheat: (
    <>
      <path 
        d="M2 12h20M8 5v14M16 5v14" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round"
      />
      <path 
        d="M8 5c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2zM16 5c1 0 2-1 2-2s-1-2-2-2-2 1-2 2 1 2 2 2z" 
        stroke="currentColor" 
        strokeWidth="2"
      />
    </>
  ),
  star: (
    <polygon 
      points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  'file-text': (
    <>
      <path 
        d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <path 
        d="M14 2v6h6M16 13H8M16 17H8M10 9H8" 
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
  lightbulb: (
    <path 
      d="M15.5 14.5C16.33 13.67 16.33 12.33 15.5 11.5C14.67 10.67 13.33 10.67 12.5 11.5L12 12L11.5 11.5C10.67 10.67 9.33 10.67 8.5 11.5C7.67 12.33 7.67 13.67 8.5 14.5L12 18L15.5 14.5Z M12 5.5L12.5 6.5H12H11.5L12 5.5Z M12 2C15.31 2 18 4.69 18 8C18 10.5 16.5 12.67 14.3 13.4L13 21H11L9.7 13.4C7.5 12.67 6 10.5 6 8C6 4.69 8.69 2 12 2Z M12 17H15V19H9V17H12Z" 
      fill="currentColor"
    />
  ),
  target: (
    <>
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="2"
        fill="none"
      />
      <circle 
        cx="12" 
        cy="12" 
        r="6" 
        stroke="currentColor" 
        strokeWidth="2"
        fill="none"
      />
      <circle 
        cx="12" 
        cy="12" 
        r="2" 
        stroke="currentColor" 
        strokeWidth="2"
        fill="none"
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
        fill="none"
      />
      <path 
        d="M15.5 14.5L12 12L8.5 14.5L9 21L12 19L15 21L15.5 14.5Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill="none"
      />
    </>
  ),
  briefcase: (
    <>
      <rect 
        x="2" 
        y="7" 
        width="20" 
        height="14" 
        rx="2" 
        ry="2" 
        stroke="currentColor" 
        strokeWidth="2"
        fill="none"
      />
      <path 
        d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" 
        stroke="currentColor" 
        strokeWidth="2"
      />
    </>
  ),
  navigation: (
    <polygon 
      points="3,11 22,2 13,21 11,13 3,11" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
      fill="none"
    />
  ),
  eye: (
    <>
      <path 
        d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" 
        stroke="currentColor" 
        strokeWidth="2"
        fill="none"
      />
      <circle 
        cx="12" 
        cy="12" 
        r="3" 
        stroke="currentColor" 
        strokeWidth="2"
        fill="none"
      />
    </>
  ),
  check: (
    <path 
      d="M20 6L9 17L4 12" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  ),
  'check-circle': (
    <>
      <path 
        d="M9 12l2 2 4-4" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <circle 
        cx="12" 
        cy="12" 
        r="10" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </>
  ),
};

export function Icon({ name, size = 24, className = '', ...props }) {
  const icon = iconSvgs[name];
  if (!icon) return null;

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      width={size}
      height={size}
      className={className}
      {...props}
    >
      {icon}
    </svg>
  );
}

export default Icon;