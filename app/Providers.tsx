'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from 'next-auth/react';
import { useThemeContext } from '@/context/ThemeCtx';

const Providers = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useThemeContext();
  const [isDark, setIsDark] = useState(() => theme === 'dark');

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

  console.log(isDark);
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

      {isDark ? (
        <ProgressBar
          height="4px"
          color="#0ff"
          options={{ showSpinner: false }}
          shallowRouting
        />
      ) : (
        <ProgressBar
          height="4px"
          color="#587997"
          options={{ showSpinner: false }}
          shallowRouting
        />
      )}
    </>
  );
};

export default Providers;
