'use client';

import React, { useState } from 'react';
import { ArrowRight2, Bookmark } from 'iconsax-react';
import Button from '@ui/Button';
import Image from 'next/image';

const History = () => {
	return (
		<section className="flex flex-col w-full sm:border  border-r-[#e1e1e1] h-full items-center jusstify-center lg:h-[408px]">
			<div className="flex w-full sm:px-5 items-center justify-between mb-6 border-b  border-[#e1e1e1] h-[56px] relative md:text-xl  text-header font-medium">
				<div className="flex gap-2 items-center justify-center">
					<Bookmark size="32" color="#535353" />
					<span>History</span>
				</div>
				<Button
					className="flex gap-2 items-center justify-center bg-transparent text-header hover:bg-transparent"
					href=""
				>
					<span>View All</span>
					<ArrowRight2 size="32" color="#535353" />
				</Button>
			</div>
			<Image src="/dashboard/history.svg" alt="empty transction" width={225} height={175} />
			<div className="items-center justify-center w-full sm:max-w-[300px] xl:max-w-[450px]">
				<p className="text-header sm:font-medium lg:text-xl text-center w-full">
					Oops! There are no completed projects yet
				</p>
			</div>
		</section>
	);
};

export default History;
