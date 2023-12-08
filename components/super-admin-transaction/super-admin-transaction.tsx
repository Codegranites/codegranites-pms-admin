'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import Button from './buttons';

interface Transaction {
	id: string;
	title: string;
	Amount: string;
	payment_type: string;
	date: string;
}

type filter = 'all' | 'initial' | 'final';

enum FILTER {
	ALL = 'all',
	INITIAL = 'initial',
	FINAL = 'final'
}

const transactions = [
	{
		id: 'transaction1',
		title: 'Dashboard Design',
		Amount: '100,000',
		payment_type: 'initial',
		date: '11th, Dec, 2023'
	},
	{
		id: 'transaction1',
		title: 'Dashboard Design',
		Amount: '100,000',
		payment_type: 'initial',
		date: '11th, Dec, 2023'
	},
	{
		id: 'transaction1',
		title: 'Dashboard Design',
		Amount: '100,000',
		payment_type: 'final',
		date: '11th, Dec, 2023'
	},
	{
		id: 'transaction1',
		title: 'Dashboard Design',
		Amount: '100,000',
		payment_type: 'initial',
		date: '11th, Dec, 2023'
	},
	{
		id: 'transaction1',
		title: 'Dashboard Design',
		Amount: '100,000',
		payment_type: 'final',
		date: '11th, Dec, 2023'
	},
	{
		id: 'transaction1',
		title: 'Dashboard Design',
		Amount: '100,000',
		payment_type: 'initial',
		date: '11th, Dec, 2023'
	},
	{
		id: 'transaction1',
		title: 'Dashboard Design',
		Amount: '100,000',
		payment_type: 'initial',
		date: '11th, Dec, 2023'
	},
	{
		id: 'transaction1',
		title: 'Dashboard Design',
		Amount: '100,000',
		payment_type: 'final',
		date: '11th, Dec, 2023'
	},
	{
		id: 'transaction1',
		title: 'Dashboard Design',
		Amount: '100,000',
		payment_type: 'final',
		date: '11th, Dec, 2023'
	},
	{
		id: 'transaction1',
		title: 'Dashboard Design',
		Amount: '100,000',
		payment_type: 'initial',
		date: '11th, Dec, 2023'
	},
	{
		id: 'transaction1',
		title: 'Dashboard Design',
		Amount: '100,000',
		payment_type: 'initial',
		date: '11th, Dec, 2023'
	}
];

function SuperAdminTransaction() {
	const [transactionsList, setTransactionsList] = useState<Transaction[]>(transactions);
	const [activeTab, setActiveTab] = useState<filter>('all');

	const changeFilter = (filter: filter) => {
		setTransactionsList(
			filter === FILTER.ALL ? transactions : transactions.filter((item) => item.payment_type === filter)
		);
		setActiveTab(filter);
	};
	return (
		<div className="pb-20">
			<div className="flex items-center gap-3 pb-12">
				<Button changeFilter={changeFilter} tab={FILTER.ALL} name="All Transactions" activeTab={activeTab} />
				<Button changeFilter={changeFilter} tab={FILTER.INITIAL} name="Initial Payments" activeTab={activeTab} />
				<Button changeFilter={changeFilter} tab={FILTER.FINAL} name="Final Payments" activeTab={activeTab} />
			</div>
			<section className="border border-[#E1E1E1] rounded-2xl">
				<header
					className={`${
						transactionsList.length === 0 && 'w-3/4 border-b border-[#E1E1E1]'
					} flex items-center gap-2 py-6 px-8`}
				>
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
				{!transactionsList.length ? (
					<div className="py-20">
						<div className="relative aspect-[421/342] max-w-sm mx-auto">
							<Image src="/assets/empty-transaction.png" fill alt="Empty Transaction Illustrations" />
						</div>
						<p className="text-lg text-center">No transactions have been made yet!</p>
					</div>
				) : (
					<div>
						<table className="w-full text-header text-center">
							<thead>
								<tr className="border-t border-t-[#CAC4D0]">
									<th className="pl-20 p-2 py-4 font-medium"></th>
									<th className="p-2 py-4 text-left w-2/5 font-medium">Project Name</th>
									<th className="p-2 py-4 font-medium">Amount</th>
									<th className="p-2 py-4 font-medium">Payment Type</th>
									<th className="p-2 py-4 pr-20 font-medium">Date</th>
								</tr>
							</thead>
							<tbody>
								{transactionsList.map((item, index) => {
									return (
										<tr key={item.id} className="border-t border-t-[#CAC4D0]">
											<td className="pl-20 p-2 py-4">
												<span className="table-numbering">{index + 1}</span>
											</td>
											<td className="p-2 w-2/5 py-4 text-left">{item.title}</td>
											<td className="p-2 py-4">₦{item.Amount}</td>
											<td
												className={`p-2 py-4 capitalize ${
													item.payment_type === 'final' ? 'text-[#008D36]' : 'text-[#665D3A]'
												}`}
											>
												{item.payment_type}
											</td>
											<td className="p-2 py-4 pr-20">{item.date}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				)}
			</section>
		</div>
	);
}

export default SuperAdminTransaction;
