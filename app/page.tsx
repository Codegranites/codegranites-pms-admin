'use client';
import Image from 'next/image';
import Link from 'next/link';
import { handleMouseEnter } from '../utils/text-effect';

export default function Home() {
	return (

		<main className="flex min-h-screen max-container flex-col items-center lg:p-24">
			<div className=" w-full flex justify-between items-center pt-4 px-4 relative">
				<Link
					href="/admin-dashboard"
					className="border border-primary sm:rounded-xl px-1 sm:px-4 py-1 sm:py-2 text-primary hover:bg-gradient-to-r from-primary-light to-primary hover:text-white transition-colors duration-700 hover:duration-300 text-xs sm:text-base sm:font-medium"
				>
					Admin Dashboard
				</Link>
				<h1
					className="-translate-y-[120px] opacity-0 sm:opacity-100 absolute sm:relative transition-all duration-1000 sm:delay-500 sm:-translate-y-0 sm:inline sm:text-3xl md:text-5xl xl:text-7xl"
					data-value="Hello World!"
					onMouseEnter={handleMouseEnter}
				>
					Hello World!
				</h1>
				<Link
					href="/dashboard"
					className="border border-primary sm:rounded-xl px-1 sm:px-4 py-1 sm:py-2 text-primary hover:bg-gradient-to-r from-primary-light to-primary hover:text-white transition-colors duration-700 hover:duration-300 text-xs sm:text-base sm:font-medium"
				>
					Mod Dashboard
				</Link>
			</div>
			<div className="flex w-full items-center justify-center pt-20 lg:pt-32 perspective">
				<Link
					href="/style-guide"
					className="border border-primary sm:rounded-xl px-1 sm:px-4 py-1 sm:py-2  bg-gradient-to-r from-primary-light to-primary text-[#28ff73] transition-colors duration-700 hover:duration-300 text-xl tracking-wider sm:font-medium md:font-tommy font-bold sm:text-4xl md:text-5xl lg:text-6xl uppercase -translate-y-6 [transform-style:preserve-3d]  [transform:rotateX(45deg)]  hover:[animation-play-state:paused] rotate-3d "
				>
					Style Guide
				</Link>
			</div>
		</main>
	);
}
