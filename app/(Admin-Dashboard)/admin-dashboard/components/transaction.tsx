'use client';

import React, { useState } from 'react';
import { ArrowRight2, WalletMoney } from 'iconsax-react';
import Button from '@ui/Button';
import Image from 'next/image';

const Transction = () => {
	return (
		<section className="flex flex-col w-full py-6 sm:border  border-r-[#e1e1e1] h-full items-center justify-center">
			<div className="flex w-full sm:px-5 items-center justify-between mb-6 border-b  border-[#e1e1e1] h-[56px] relative text-xl  text-black font-medium">
				<div className="flex gap-2 items-center justify-center">
					<WalletMoney size="32" color="#000" />
					<span>Transctions</span>
				</div>
				<Button
					className="flex gap-2 items-center justify-center bg-transparent text-black hover:bg-transparent"
					href="/admin-transactions"
				>
					<span>View All</span>
					<ArrowRight2 size="32" color="#000" />
				</Button>
			</div>
			<Image src="/dashboard/transction.svg" alt="empty transction" width={225} height={175} />
			<div className="items-center justify-center">
				<span className="text-black font-medium text-xl w-[193px]">No transactions have been made yet!</span>
			</div>
		</section>
	);
};

export default Transction;
