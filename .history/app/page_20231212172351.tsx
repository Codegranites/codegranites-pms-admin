import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className="max-container w-full flex justify-between items-center pt-4">
			<Link
				href="/admin-dashboard"
				className="border border-primary rounded-xl px-4 py-2 text-primary hover:bg-primary hover:text-white transition-colors duration-700 hover:duration-300 font-medium"
			>
				Admin Dashboard
			</Link>
			Hello World!
			<Link
				href="/dashboard"
				className="border border-primary rounded-xl px-4 py-2 text-primary hover:bg-primary hover:text-white transition-colors duration-700 hover:duration-300 font-medium"
			>
				Mod Dashboard
			</Link>
		</main>
	);
}
