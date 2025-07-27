import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from './Icon';

const SearchComponent = ({ className = '', variant = 'default' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // Mock search data - in a real app, this would come from an API or context
  const searchData = [
    { title: 'Project-Based Learning', category: 'About', url: '/about' },
    { title: 'Student Projects Showcase', category: 'Projects', url: '/projects' },
    { title: 'Funding Opportunities', category: 'Funding', url: '/funding' },
    { title: 'Innovation Challenge 2025', category: 'Events', url: '/events' },
    { title: 'Contact Faculty', category: 'Contact', url: '/contact' },
    { title: 'Download Resources', category: 'Resources', url: '/resources' },
    { title: 'Technology Domains', category: 'Domains', url: '/domains' },
    { title: 'PBL Gallery', category: 'Gallery', url: '/gallery' },
  ];

  // Handle outside click to close search results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Focus input when search is opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Handle search input
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.trim() === '') {
      setSearchResults([]);
      return;
    }

    // Filter search results
    const filteredResults = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.category.toLowerCase().includes(value.toLowerCase())
    );

    setSearchResults(filteredResults);
    setIsOpen(filteredResults.length > 0);
  };

  // Handle result click
  const handleResultClick = (url) => {
    navigate(url);
    setIsOpen(false);
    setSearchTerm('');
    setSearchResults([]);
  };

  // Handle search submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      // In a real app, navigate to search results page with query
      // For now, just navigate to the first result if there is one
      if (searchResults.length > 0) {
        handleResultClick(searchResults[0].url);
      }
    }
  };

  // Render search icon-only button for minimal variant
  if (variant === 'minimal') {
    return (
      <div className={`relative ${className}`} ref={searchRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          aria-label="Search"
        >
          <Icon name="search" size={20} />
        </button>

        {isOpen && (
          <div className="absolute right-0 top-12 w-80 bg-white shadow-lg rounded-lg p-4 z-50">
            <form onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Icon
                  name="search"
                  size={20}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
              </div>
            </form>

            {searchResults.length > 0 && (
              <div className="mt-4 max-h-60 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <button
                    key={index}
                    onClick={() => handleResultClick(result.url)}
                    className="w-full text-left p-2 hover:bg-gray-100 rounded-lg flex items-center"
                  >
                    <span className="text-gray-900">{result.title}</span>
                    <span className="ml-auto text-sm text-gray-500">{result.category}</span>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }

  // Default full search bar
  return (
    <div className={`relative ${className}`} ref={searchRef}>
      <form onSubmit={handleSubmit} className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for projects, events, resources..."
          value={searchTerm}
          onChange={handleSearchChange}
          onFocus={() => searchTerm.trim() !== '' && setIsOpen(true)}
          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <Icon
          name="search"
          size={20}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        />
      </form>

      {isOpen && searchResults.length > 0 && (
        <div className="absolute top-12 left-0 right-0 bg-white shadow-lg rounded-lg p-4 z-50">
          {searchResults.map((result, index) => (
            <button
              key={index}
              onClick={() => handleResultClick(result.url)}
              className="w-full text-left p-2 hover:bg-gray-100 rounded-lg flex items-center"
            >
              <div>
                <div className="text-gray-900">{result.title}</div>
                <div className="text-sm text-gray-500">{result.category}</div>
              </div>
              <Icon name="arrow-right" size={16} className="ml-auto text-gray-400" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchComponent;
