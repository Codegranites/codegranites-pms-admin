'use client';

import dynamic from 'next/dynamic';
import Navbar from '../navs/Navbar';
import SplashScreen from '../SplashScreen';
import Midsec from './midsec';
import Feats from './feat';
import Footer from '../footer/Footer';
import Hero from './hero';

// const Hero = dynamic(() => import('./hero'), {
// 	ssr: false,
// 	loading: () => <SplashScreen />
// });

export default function LandingPage() {
	return (
		<>
			<Navbar />
			<Hero />

			<main className="max-container w-full flex flex-col min-h-screen">
				<Midsec />
				<Feats />
			</main>
			<Footer />
		</>
	);
}
