'use client';
import Image from 'next/image';
import { Settingsnav } from '../../libs/constants';
import { useEffect, useState } from 'react';
import cn from '../../utils/util';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SettingNav = () => {
	const [activeLink, setActiveLink] = useState('');
	const pathname = usePathname();
	const currentPath = pathname?.replace('/', '');

	useEffect(() => {
		setActiveLink(currentPath);
	}, [currentPath]);

	return (
		<section className="w-[96px] lg:w-[270px] sm:hover:w-[270px] hover:p-4 transition-all duration-300 py-4 lg:p-4 flex flex-col gap-y-4 items-center lg:items-start fixed h-screen left-0 top-0 overflow-y-auto border-r border-gray-200 sidebar-scroll overflow-x-hidden group select-none justify-between">
			<ul className="flex flex-col gap-y-4 -pt-8">
				{Settingsnav.map((link) => (
					<Link
						href={`/${link.path}`}
						key={link.id}
						onKeyUp={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								setActiveLink(link.path);
								return;
							}
						}}
						tabIndex={0}
						aria-label={link.name}
						className={cn(
							'flex items-center gap-x-3 py-2 px-3 h-[52px] text-[#3a3a3a] font-medium text-base transition-colors duration-300 cursor-pointer ',
							activeLink === link.name
								? 'bg-primary-light text-white rounded outline-none'
								: 'hover:bg-black/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light'
						)}
						onClick={() => setActiveLink(link.name)}
					>
						<span className="max-lg:hidden group-hover:block w-[185px]">{link.name}</span>
					</Link>
				))}

				<span className="bg-[#8e8e8e] w-full max-w-[245px] h-[1px] " />
			</ul>
		</section>
	);
};

export default SettingNav;
