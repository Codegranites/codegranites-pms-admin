'use client';

import React, { useEffect, useLayoutEffect, useState } from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ToastContainer } from 'react-toastify';
import { SessionProvider } from 'next-auth/react';
import { useThemeContext } from '@/context/ThemeCtx';

const Providers = ({ children }: { children: React.ReactNode }) => {
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
        color="#0ff"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default Providers;
