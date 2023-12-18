'use client';
import Image from 'next/image';
import Link from 'next/link';
import { handleMouseEnter } from '../utils/text-effect';
import Navbar from '../components/navs/Navbar';
import Footer from '../components/footer/Footer';
import Hero from '../components/home/hero';
import MIdsec from '../components/home/midsec';

export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<main className="max-container w-full flex flex-col">
				<MIdsec />
			</main>
			<Footer />
		</>
	);
}
