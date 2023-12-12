import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './Styles/globals.scss';
import Navbar from '../components/navs/AdminNavbar';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

import GotoTop from '../components/GotoTop';
import StateContextProvider from '../context/StateContext';

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
			<ToastContainer
				position="top-right"
				autoClose={10000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			<StateContextProvider>
				<body className={workSans.className}>
					{/* <Navbar /> */}

					{children}

					<GotoTop />
				</body>
			</StateContextProvider>
		</html>
	);
}
