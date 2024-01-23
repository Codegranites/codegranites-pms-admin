'use client';

import React, { useLayoutEffect, useState } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from 'next-auth/react';
import { useThemeContext } from '@/context/ThemeCtx';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeContext();
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    if (
      theme === 'dark' ||
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setIsDark(true);
    } else {
      setIsDark(false);
    }
  }, [theme]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      {children}

      <ProgressBar
        height="4px"
        color={isDark ? '#0ff' : '#587997'}
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
