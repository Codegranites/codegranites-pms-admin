'use client';

import dynamic from 'next/dynamic';

import Midsec from './midsec';
import Feats from './feat';
import Footer from '../footer/Footer';
import Hero from './hero';
import SkeletonNavbar from '../skeleton/SkeletonNavbar';

const Navbar = dynamic(() => import('../navs/Navbar'), {
	ssr: false,
	loading: () => <SkeletonNavbar />
});

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
