'use client';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const ModeratorNavbar = () => {
	const [name, setName] = useState('');
	const pathname = usePathname();

	useEffect(() => {
		if (pathname.startsWith('/admin-')) {
			setName(pathname.replace('/admin-', ''));
			return;
		}
		if (pathname.startsWith('/')) {
			setName(pathname.replace('/', ''));
			return;
		}
	}, [pathname]);

	return (
		<header className="lg:px-9 border-b border-gray-200 h-[89px] flex items-center ">
			<h2 className="text-3xl capitalize font-medium text-header">{name.replace('-', ' ')}</h2>
		</header>
	);
};

export default ModeratorNavbar;
