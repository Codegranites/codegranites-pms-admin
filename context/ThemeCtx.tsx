'use client';

import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import { ThemeContextProps } from '../types';

export const ThemeContext = createContext<ThemeContextProps | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const isBrowser = typeof window !== 'undefined';
  const storedTheme = isBrowser ? localStorage.getItem('theme') : null;
  const [theme, setTheme] = useState<string | null>(storedTheme);

  useEffect(() => {
    if (isBrowser) {
      if (theme) {
        localStorage.setItem('theme', theme);
        if (theme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    }
  }, [theme, isBrowser]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to access the app context
export function useThemeContext() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useApp must be used within an ThemeProvider');
  }

  return context;
}
