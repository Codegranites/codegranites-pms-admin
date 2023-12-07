import Button from '@ui/Button';
import Image from 'next/image';
import React from 'react';

function SuperAdminTransaction() {
	return (
		<div className="pb-20">
			<div className="flex items-center gap-3 pb-12">
				<Button intent="secondary" className="rounded-lg">
					All Transactions
				</Button>
				<Button intent={null} className="rounded-lg border-primary border">
					Initial Payments
				</Button>
				<Button intent={null} className="rounded-lg border-primary border">
					Final Payments
				</Button>
			</div>
			<section className="border border-[#E1E1E1] rounded-2xl">
				<header className="w-3/4 border-b border-[#E1E1E1] flex items-center gap-2 py-6 px-8">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M9.5 13.7502C9.5 14.7202 10.25 15.5002 11.17 15.5002H13.05C13.85 15.5002 14.5 14.8202 14.5 13.9702C14.5 13.0602 14.1 12.7302 13.51 12.5202L10.5 11.4702C9.91 11.2602 9.51001 10.9402 9.51001 10.0202C9.51001 9.18023 10.16 8.49023 10.96 8.49023H12.84C13.76 8.49023 14.51 9.27023 14.51 10.2402"
							stroke="#292D32"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path d="M12 7.5V16.5" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						<path
							d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2"
							stroke="#292D32"
							stroke-width="1.5"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
						<path d="M17 3V7H21" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
						<path d="M22 2L17 7" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
					</svg>
					<span>All Transactions</span>
				</header>
				<div className="py-20">
					<div className="relative aspect-[421/342] max-w-sm mx-auto">
						<Image src="/assets/empty-transaction.png" fill alt="Empty Transaction Illustrations" />
					</div>
					<p className="text-lg text-center">No transactions have been made yet!</p>
				</div>
			</section>
		</div>
	);
}

export default SuperAdminTransaction;
