'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
  language: string;
  toggleLanguage: () => void;
  name: string | null;
  setName: (name: string) => void;
  isFirstLogin: boolean; 
  setFirstLogin: (value: boolean) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('fa_IR');
  const [name, setName] = useState<string | null>(null);
  const [isFirstLogin, setIsFirstLogin] = useState(false); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const storedLanguage = localStorage.getItem('language');
    const storedName = localStorage.getItem('name');
    const firstLogin = localStorage.getItem('firstLogin'); 

    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    }

    if (storedLanguage) {
      setLanguage(storedLanguage);
    }

    if (storedName) {
      setName(storedName);
    }

    if (!firstLogin) {
      setIsFirstLogin(true);
      localStorage.setItem('firstLogin', 'true');
    }

    setMounted(true);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    if (language) {
      localStorage.setItem('language', language);
    }
  }, [language]);

  useEffect(() => {
    if (name) {
      localStorage.setItem('name', name);
    }
  }, [name]);

  const toggleLanguage = () => {
    const changeLanguage = language !== 'fa_IR' ? 'fa_IR' : 'en';
    setLanguage(changeLanguage);
  }

  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  const setFirstLoginStatus = (value: boolean) => {
    setIsFirstLogin(value);
  }

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleTheme,
      language,
      toggleLanguage,
      name,
      setName,
      isFirstLogin,
      setFirstLogin: setFirstLoginStatus, 
    }}>
      {mounted ? children : null} 
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
