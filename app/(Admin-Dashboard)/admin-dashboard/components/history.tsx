'use client';

import React, { useState } from 'react';
import { ArrowRight2, Bookmark } from 'iconsax-react';
import Button from '@ui/Button';
import Image from 'next/image';

const History = () => {
	return (
		<section className="flex flex-col w-full py-6 sm:border  border-r-[#e1e1e1] h-full items-center jusstify-center">
			<div className="flex w-full sm:px-5 items-center justify-between mb-6 border-b  border-[#e1e1e1] h-[56px] relative text-xl  text-black font-medium">
				<div className="flex gap-2 items-center justify-center">
					<Bookmark size="32" color="#000" />
					<span>History</span>
				</div>
				<Button
					className="flex gap-2 items-center justify-center bg-transparent text-black hover:bg-transparent"
					href=""
				>
					<span>View All</span>
					<ArrowRight2 size="32" color="#000" />
				</Button>
			</div>
			<Image src="/dashboard/history.svg" alt="empty transction" width={225} height={175} />
			<div className="items-center justify-center">
				<span className="text-black font-medium text-xl w-[193px]">Oops! There are no completed projects yet</span>
			</div>
		</section>
	);
};

export default History;
