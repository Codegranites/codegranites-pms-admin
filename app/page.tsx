'use client';
import Navbar from '../components/navs/Navbar';
import Footer from '../components/footer/Footer';
import Hero from '../components/home/hero';
import MIdsec from '../components/home/midsec';
import Feats from '../components/home/feat';
import SplashScreen from './SplashScreen';
import { useStateCtx } from '../context/StateContext';
export default function Home() {
	const { pageLoaded } = useStateCtx();

	return (
		<>
			<SplashScreen />
			{pageLoaded && (
				<>
					<Navbar />
					<Hero />
					<main className="max-container w-full flex flex-col min-h-screen">
						<MIdsec />
						<Feats />
					</main>
					<Footer />
				</>
			)}
		</>
	);
}
