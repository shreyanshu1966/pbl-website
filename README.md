# React Toolkit CLI App

Welcome to your new React project created with React Toolkit CLI!

## 🚀 What's Included

- **React 19** - Latest React with modern features
- **Vite** - Fast build tool and dev server
- **axios** - HTTP client for API requests
- **react-router-dom** - Client-side routing
- **react-toastify** - Beautiful notifications
- **Tailwind CSS** - Utility-first CSS framework
- **React Toolkit utilities** - Custom helper functions

## 🛠️ Getting Started

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📚 Using React Toolkit

```jsx
import { OnSuccess, OnError } from 'react-toolkit-cli';
import { axios } from 'react-toolkit-cli';
import { BrowserRouter, Routes, Route } from 'react-toolkit-cli';

// Show notifications
OnSuccess('Data saved successfully!');
OnError('Something went wrong!');

// Make API calls
const response = await axios.get('/api/users');

// Use routing
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
```

## � Backend API Integration

The development server is configured with a proxy to handle API requests:

```javascript
// All requests to /api/* will be proxied to http://localhost:5000
const users = await axios.get('/api/users');
const posts = await axios.post('/api/posts', { title: 'Hello World' });
```

### Proxy Configuration

In `vite.config.js`:
```javascript
server: {
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      changeOrigin: true,
      secure: false,
      rewrite: (path) => path.replace(/^\/api/, '')
    }
  }
}
```

### Example API Service

```javascript
// src/services/api.js
import { axios, OnSuccess, OnError } from 'react-toolkit-cli';

class ApiService {
  async getUsers() {
    try {
      const response = await axios.get('/api/users');
      OnSuccess('Users loaded successfully!');
      return response.data;
    } catch (error) {
      OnError('Failed to load users');
      throw error;
    }
  }

  async createUser(userData) {
    try {
      const response = await axios.post('/api/users', userData);
      OnSuccess('User created successfully!');
      return response.data;
    } catch (error) {
      OnError('Failed to create user');
      throw error;
    }
  }
}

export default new ApiService();
```

## �🎯 Project Structure

```
src/
├── App.jsx          # Main App component
├── main.jsx         # Application entry point
├── index.css        # Global styles
├── utilities.js     # React Toolkit utilities
└── components/      # Your components here
```

## 📖 Learn More

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)

Happy coding! 🎉
