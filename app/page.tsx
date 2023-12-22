'use client';
import Navbar from '../components/navs/Navbar';
import Footer from '../components/footer/Footer';
import Hero from '../components/home/hero';
import MIdsec from '../components/home/midsec';
import Feats from '../components/home/feat';
export default function Home() {
	return (
		<>
			<Navbar />
			<Hero />
			<main className="max-container w-full flex flex-col min-h-screen">
				<MIdsec />
				<Feats />
			</main>
			<Footer />
		</>
	);
}
