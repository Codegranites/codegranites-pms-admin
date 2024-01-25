import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './Styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';
import GotoTop from '../components/GotoTop';
import StateContextProvider from '../context/StateContext';
import Providers from './Providers';

import SwipeIndicator from '../components/sidebars/SwipeIndicator';
import Head from 'next/head';
import LenisProvider from '@/components/LenisProvider';
import ThemeProvider from '@/context/ThemeCtx';
import { SessionProvider } from 'next-auth/react';

const workSans = Work_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans'
});

export const metadata: Metadata = {
  title: 'Code Granites',
  description: 'Illuminating Ideas and Forging Solutions'
  // image: ""
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={'lenis lenis-smooth'}>
      <SessionProvider>
        <StateContextProvider>
          <ThemeProvider>
            <body
              className={`${workSans.className} dark:bg-primary transition-colors duration-500`}
            >
              <LenisProvider>
                <Providers>{children}</Providers>
                <SwipeIndicator />
                <GotoTop />
              </LenisProvider>
            </body>
          </ThemeProvider>
        </StateContextProvider>
      </SessionProvider>
    </html>
  );
}
