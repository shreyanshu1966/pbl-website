// Main entry point for React Toolkit package

// Notification utilities
export { OnError, OnSuccess } from './utilities.js';

// Re-export essential packages for convenience
export { default as axios } from 'axios';
export { 
  BrowserRouter, 
  Routes, 
  Route, 
  Navigate, 
  Link, 
  NavLink, 
  useNavigate, 
  useLocation, 
  useParams,
  useSearchParams,
  Outlet
} from 'react-router-dom';

// Optional react-toastify exports (if installed)
// Users can install react-toastify separately if they want toast notifications
// export { toast, ToastContainer } from 'react-toastify';
