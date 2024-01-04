import SplashScreen from '../components/SplashScreen';
import dynamic from 'next/dynamic';

const LandingPage = dynamic(() => import('../components/home/LandingPage'), {
	ssr: false,
	loading: () => <SplashScreen />
});

export default function Home() {
	return <LandingPage />;
}
