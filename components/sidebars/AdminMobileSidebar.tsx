/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useStateCtx } from '../../context/StateContext';
import cn from '../../utils/util';
import { Setting2 } from 'iconsax-react';
import { SIDEBAR_ADMIN_LINKS } from '../../libs/constants';

const AdminMobileSidebar = () => {
	const { showMobileMenu, setShowMobileMenu, user } = useStateCtx();

	const [activeLink, setActiveLink] = useState('');

	const pathname = usePathname();
	// remove the / from the pathname
	useEffect(() => {
		const currentPath = pathname?.replace(/^\/([^\/]+).*$/, '$1');

		setActiveLink(currentPath.trim());
	}, [pathname]);

	return (
		<>
			<div
				className={cn(
					'md:hidden fixed min-h-screen w-full bg-black/50 top-0 left-0 z-20 transition-all duration-300',
					showMobileMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
				)}
				onClick={() => setShowMobileMenu(false)}
			/>
			<section
				className={cn(
					'py-6 md:hidden  px-4 flex flex-col w-full max-w-[270px] justify-between items-start bg-white/90 backdrop-blur-lg fixed left-0 top-0 z-50 h-screen transition-all opacity-0 sidebar-scroll overflow-x-hidden group select-none !overflow-y-auto',
					showMobileMenu
						? 'translate-x-0 duration-700 opacity-100'
						: '-translate-x-full duration-300 pointer-events-none'
				)}
			>
				<div className="w-full  h-[53px]">
					<Image src="/logo.png" alt="Logo" width={155} height={53} />
				</div>
				<ul className="flex flex-col gap-y-4 py-8">
					{SIDEBAR_ADMIN_LINKS.map((link) => (
						<Link
							href={`/${link.link}`}
							aria-current={activeLink === link.link ? 'page' : undefined}
							key={link.id}
							onKeyUp={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									setActiveLink(link.link);
									setShowMobileMenu(false);
									return;
								}
							}}
							tabIndex={0}
							aria-label={link.label}
							className={cn(
								'flex items-center gap-x-3 py-2 px-3 h-[42px] text-[#3a3a3a] font-medium text-base transition-colors duration-300 cursor-pointer ',
								activeLink === link.link
									? 'bg-primary-light text-white rounded outline-none'
									: 'hover:bg-black/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light'
							)}
							onClick={() => {
								setActiveLink(link.link);
								setShowMobileMenu(false);
							}}
						>
							<link.icon size={24} aria-hidden variant={activeLink === link.link ? 'Bold' : 'Outline'} />

							<span className="w-[175px]">{link.label}</span>
						</Link>
					))}

					<span className="bg-[#8e8e8e] w-full max-w-[245px] h-[1px] " />
				</ul>
				<div className="flex flex-col w-full gap-y-6 xl:gap-y-8 pt-4 items-center">
					<Link
						href="/admin-settings"
						role="button"
						tabIndex={0}
						aria-label="Settings"
						onKeyUp={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								setActiveLink('admin-settings');
								setShowMobileMenu(false);
								return;
							}
						}}
						className={cn(
							'flex w-full justify-start items-center gap-x-3 py-2 px-3 h-[52px] text-[#3a3a3a] font-medium text-base transition-colors duration-300 cursor-pointer',
							activeLink === 'settings'
								? 'bg-primary-light text-white rounded outline-none'
								: 'hover:bg-black/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light'
						)}
						onClick={() => {
							setActiveLink('admin-settings');
							setShowMobileMenu(false);
						}}
					>
						<Setting2 size={24} aria-hidden variant={activeLink === 'settings' ? 'Bold' : 'Outline'} />
						<span>Settings</span>
					</Link>

					{/* User Profile */}

					<Link
						href="/admin-profile"
						className={cn(
							'w-full flex items-center gap-x-[6px] justify-center   p-2 transition-colors duration-300',
							activeLink === 'admin-profile'
								? 'bg-primary-light text-white rounded outline-none [&>div>span]:text-white'
								: 'hover:bg-black/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light'
						)}
						role="button"
						tabIndex={0}
						aria-label="Profile"
						onKeyUp={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								setActiveLink('admin-profile');
								return;
							}
						}}
						onClick={() => setActiveLink('admin-profile')}
					>
						<div className="relative w-full  flex justify-center h-[60px] ">
							<Image src={user.image} alt="user" width={60} height={60} />
							<span className="w-[15px] h-[15px] bg-[#04802e] rounded-full border border- absolute bottom-1 right-1" />
						</div>
						<div className="flex flex-col ">
							<span className="text-[#090909] text-base">{user.name}</span>
							<span className="text-[#3a3a3a] text-sm" title={user.email}>
								{user.email.length > 17 ? user.email.slice(0, 17) + '...' : user.email}
							</span>
						</div>
					</Link>
				</div>
			</section>
		</>
	);
};

export default AdminMobileSidebar;
