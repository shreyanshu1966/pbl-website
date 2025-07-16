import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mock user data - In production, this would come from your backend
  const mockUsers = {
    'student@mitadt.edu.in': {
      id: 1,
      email: 'student@mitadt.edu.in',
      name: 'Rahul Sharma',
      role: 'student',
      groupId: 'G001',
      rollNo: 'CS2021001',
      class: 'TE-CS-A',
      techSkills: ['React', 'Node.js', 'Python'],
      avatar: '/api/placeholder/100/100'
    },
    'mentor@mitadt.edu.in': {
      id: 2,
      email: 'mentor@mitadt.edu.in',
      name: 'Dr. Priya Patel',
      role: 'mentor',
      department: 'Computer Science',
      assignedGroups: ['G001', 'G002', 'G003'],
      specialization: ['Web Development', 'AI/ML'],
      avatar: '/api/placeholder/100/100'
    },
    'admin@mitadt.edu.in': {
      id: 3,
      email: 'admin@mitadt.edu.in',
      name: 'Prof. Suresh Kapare',
      role: 'admin',
      department: 'MIT School of Computing',
      permissions: ['user_management', 'report_export', 'system_config'],
      avatar: '/api/placeholder/100/100'
    },
    'evaluator@mitadt.edu.in': {
      id: 4,
      email: 'evaluator@mitadt.edu.in',
      name: 'Dr. Anjali Singh',
      role: 'evaluator',
      department: 'External Evaluator',
      reviewStages: ['R1', 'R2', 'R3'],
      expertise: ['Software Engineering', 'Data Science'],
      avatar: '/api/placeholder/100/100'
    }
  };

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem('pbl_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Mock authentication - replace with actual API call
      const userData = mockUsers[email];
      if (userData && password === 'password123') {
        setUser(userData);
        localStorage.setItem('pbl_user', JSON.stringify(userData));
        return { success: true, user: userData };
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('pbl_user');
  };

  const updateProfile = (updates) => {
    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('pbl_user', JSON.stringify(updatedUser));
  };

  const hasPermission = (permission) => {
    if (!user) return false;
    if (user.role === 'admin') return true;
    return user.permissions?.includes(permission) || false;
  };

  const canAccessGroup = (groupId) => {
    if (!user) return false;
    if (user.role === 'admin') return true;
    if (user.role === 'student') return user.groupId === groupId;
    if (user.role === 'mentor') return user.assignedGroups?.includes(groupId);
    if (user.role === 'evaluator') return true; // Evaluators can access all groups
    return false;
  };

  const value = {
    user,
    login,
    logout,
    updateProfile,
    hasPermission,
    canAccessGroup,
    loading,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
