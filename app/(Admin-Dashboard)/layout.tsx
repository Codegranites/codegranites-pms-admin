import StateContextProvider from '../../context/StateContext';
import GotoTop from '../../components/GotoTop';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<StateContextProvider>
					{/* <Navbar /> */}

					{children}

					<GotoTop />
				</StateContextProvider>
			</body>
		</html>
	);
}
