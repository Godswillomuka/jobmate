import { createContext, useContext, useState } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // ✅ lazy initialization (fixes setState-in-effect warning)
  const [user, setUser] = useState(() => {
    try {
      const stored = localStorage.getItem('jobmate_user');
      return stored ? JSON.parse(stored) : null;
    } catch (err) {
      console.error('Invalid user in localStorage', err);
      localStorage.removeItem('jobmate_user');
      return null;
    }
  });

  const login = (userData) => {
    localStorage.setItem('jobmate_user', JSON.stringify(userData));
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem('jobmate_user');
    localStorage.removeItem('jobmate_token'); // if using JWT
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return ctx;
};