'use client';

import Image from 'next/image';
import { SIDEBAR_MOD_LINKS, TYPESidebarLinksMod } from '../../libs/constants';
import { useEffect, useState } from 'react';
import cn from '../../utils/util';
import { Setting2 } from 'iconsax-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

// Mock-Data for user profile
const user = {
	name: 'Jane Doe',
	email: 'JohnDoe@gmail.com',
	image: '/facemoji.png'
};

const SidebarMod = () => {
	const [activeLink, setActiveLink] = useState('');
	const pathname = usePathname();
	// remove the / from the pathname
	const currentPath = pathname?.replace('/', '');

	useEffect(() => {
		setActiveLink(currentPath);
	}, [currentPath]);

	return (
		<section className="w-[96px] lg:w-[270px] sm:hover:w-[96px] hover:p-4 transition-all duration-300 py-4 lg:p-4 flex flex-col gap-y-4 items-center lg:items-start fixed h-screen left-0 top-0 overflow-y-auto border-r border-gray-200 z-50 sidebar-scroll overflow-x-hidden group select-none justify-between">
			<Link href="/" className=" max-[1140px]:w-full group-hover:w-full h-[53px]">
				<Image src="/logo.png" alt="Logo" width={155} height={53} />
			</Link>
			<ul className="flex flex-col gap-y-4 -pt-8">
				{SIDEBAR_MOD_LINKS.map((link) => (
					<Link
						href={`/${link.link}`}
						key={link.id}
						onKeyUp={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								setActiveLink(link.link);
								return;
							}
						}}
						tabIndex={0}
						aria-label={link.label}
						className={cn(
							'flex items-center gap-x-3 py-2 px-3 h-[52px] text-[#3a3a3a] font-medium text-base transition-colors duration-300 cursor-pointer ',
							activeLink === link.link
								? 'bg-primary-light text-white rounded outline-none'
								: 'hover:bg-black/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light'
						)}
						onClick={() => setActiveLink(link.link)}
					>
						<link.icon size={24} aria-hidden variant={activeLink === link.link ? 'Bold' : 'Outline'} />

						<span className="max-lg:hidden group-hover:block w-[185px]">{link.label}</span>
					</Link>
				))}

				<span className="bg-[#8e8e8e] w-full max-w-[245px] h-[1px] " />
			</ul>
			<div className="flex flex-col w-full gap-y-6 xl:gap-y-8 pt-4 items-center">
				<Link
					href="/settings"
					role="button"
					tabIndex={0}
					aria-label="Settings"
					onKeyUp={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							setActiveLink('settings');
							return;
						}
					}}
					className={cn(
						'flex group-hover:w-full lg:w-full lg:justify-start items-center gap-x-3 py-2 px-3 h-[52px] text-[#3a3a3a] font-medium text-base transition-colors duration-300 cursor-pointer',
						activeLink === 'settings'
							? 'bg-primary-light text-white rounded outline-none'
							: 'hover:bg-black/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light'
					)}
					onClick={() => setActiveLink('settings')}
				>
					<Setting2 size={24} aria-hidden variant={activeLink === 'settings' ? 'Bold' : 'Outline'} />
					<span className="max-lg:hidden group-hover:block">Settings</span>
				</Link>

				{/* User Profile */}

				<Link
					href="/profile"
					className={cn(
						'w-full flex items-center gap-x-[6px]  p-2 transition-colors duration-300',
						activeLink === 'profile'
							? 'bg-primary-light text-white rounded outline-none [&>div>span]:text-white'
							: 'hover:bg-black/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light'
					)}
					role="button"
					tabIndex={0}
					aria-label="Profile"
					onKeyUp={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							setActiveLink('profile');
							return;
						}
					}}
					onClick={() => setActiveLink('profile')}
				>
					<div className="relative w-full max-w-[60px] flex justify-center h-[60px] ">
						<Image src={user.image} alt="user" width={60} height={60} />
						<span className="w-[15px] h-[15px] bg-[#04802e] rounded-full border border- absolute bottom-1 right-1" />
					</div>
					<div className="flex flex-col max-lg:hidden group-hover:w-full group-hover:flex">
						<span className="text-[#090909] text-base">{user.name}</span>
						<span className="text-[#3a3a3a] text-sm" title={user.email}>
							{user.email.length > 17 ? user.email.slice(0, 17) + '...' : user.email}
						</span>
					</div>
				</Link>
			</div>
		</section>
	);
};

export default SidebarMod;
