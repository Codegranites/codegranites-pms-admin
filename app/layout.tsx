import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './Styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';
import GotoTop from '../components/GotoTop';
import StateContextProvider from '../context/StateContext';
import Providers from './Providers';
import './Styles/nprogress.css';
import { SessionProvider } from '../context/sessionProvider';

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className={workSans.variable}>
			<SessionProvider>
				<StateContextProvider>
					<body className={workSans.className}>
						<Providers>{children}</Providers>

						<GotoTop />
					</body>
				</StateContextProvider>
			</SessionProvider>
		</html>
	);
}
