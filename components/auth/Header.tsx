'use client';

import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export const Header_for_many: React.FC = () => {
	return (
		<>
			<header className="py-3 px-2 md:py-2 mb-10 ">
				<Link href="/">
					<Image src="/logo.png" alt="Logo" width={140} height={40} />
				</Link>
			</header>
		</>
	);
};
