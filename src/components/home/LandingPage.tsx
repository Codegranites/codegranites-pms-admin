'use client';

import dynamic from 'next/dynamic';

import Midsec from './midsec';
import Feats from './feat';
import Footer from '../footer/Footer';
import Hero from './hero';
import KeyFeat from './KeyFeat';
import SkeletonNavbar from '../skeleton/SkeletonNavbar';
import Buttom from './Buttom';
import Carsoel from './carousel/Logocarousel';
import { Suspense } from 'react';

const Navbar = dynamic(() => import('../navs/Navbar'), {
  ssr: false,
  loading: () => <SkeletonNavbar />
});

export default function LandingPage() {
  return (
    <>
      <Suspense fallback={<SkeletonNavbar />}>
        <Navbar />
      </Suspense>
      <Hero />
      <main className="max-container w-full flex flex-col min-h-screen">
        <Midsec />
        <KeyFeat />
        <Feats />
      </main>
      <Buttom />
      <Footer />
    </>
  );
}
