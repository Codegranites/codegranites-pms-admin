import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="max-container w-full flex justify-between items-center pt-4 px-4 relative">
			<Link
				href="/admin-dashboard"
				className="border border-primary sm:rounded-xl px-1 sm:px-4 py-1 sm:py-2 text-primary hover:bg-primary hover:text-white transition-colors duration-700 hover:duration-300 text-xs sm:text-base sm:font-medium"
			>
				Admin Dashboard
			</Link>
			<h1 className="-translate-y-[120px] absolute sm:relative transition-all duration-1000 sm:-translate-y-0 sm:inline sm:text-3xl md:text-5xl xl:text-7xl">
				Hello World!
			</h1>
			<Link
				href="/dashboard"
				className="border border-primary sm:rounded-xl px-1 sm:px-4 py-1 sm:py-2 text-primary hover:bg-primary hover:text-white transition-colors duration-700 hover:duration-300 text-xs sm:text-base sm:font-medium"
			>
				Mod Dashboard
			</Link>
		</main>
	);
}
