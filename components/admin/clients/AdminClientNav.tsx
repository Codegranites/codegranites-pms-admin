'use client';

import { Input } from '@ui/Input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue
} from '../../../components/ui/select';

import { SearchNormal } from 'iconsax-react';
import { ListFilter } from 'lucide-react';
import { useState } from 'react';
import NewClient from './NewClient';
import { useStateCtx } from '../../../context/StateContext';

import { X } from 'lucide-react';
import cn from '../../../utils/util';
import NewClientModal from './NewClient';
type SelectProps = {
	id?: number;
	label: string;
	value: string;
};
const selectFilters: SelectProps[] = [
	{
		id: 1,
		label: 'All Clients',
		value: 'all-clients'
	},
	{
		id: 2,
		label: 'Recently added',
		value: 'recently-added'
	}
];

const AdminClientNav = () => {
	const { setClientSearchTerm, clientSearchTerm, setSelectedClientFilter, selectedClientFilter } = useStateCtx();

	return (
		<div className="w-full md:h-[56px] flex justify-between min-[450px]:gap-x-4 items-center flex-col md:flex-row gap-y-4 sm:pt-4">
			<div className="flex w-full max-w-1/2 relative items-center justify-between">
				<Input
					onChange={(e) => setClientSearchTerm(e.target.value)}
					value={clientSearchTerm}
					leftIcon={<SearchNormal size={18} color="#535353" />}
					type="text"
					placeHolder="Search clients via name..."
					className="w-full"
				/>
				<button
					type="button"
					tabIndex={0}
					aria-label="Clear search"
					onClick={() => setClientSearchTerm('')}
					className={cn(
						'absolute right-2 transition-opacity duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full',
						{
							'opacity-0 duration-300': !clientSearchTerm
						}
					)}
				>
					<X size={18} color="#535353" />
				</button>
			</div>
			<div className="flex w-full sm:max-w-1/2 justify-between gap-x-2 ">
				<div className="flex items-center gap-x-1 text-[#535353] w-full ">
					{/* <FilterIcon className="sm:hidden" color="#535353" /> */}
					<ListFilter color="#282828 sm:hidden" size={18} />
					<span className="hidden sm:inline-block w-[57px] text-sm">Filter by</span>

					<Select onValueChange={(value) => setSelectedClientFilter(value)} defaultValue="all-clients">
						<SelectTrigger className="w-[150px] select-none h-full py-3">
							<SelectValue placeholder={selectedClientFilter} />
						</SelectTrigger>
						<SelectContent className="backdrop-blur-xl bg-white/80">
							<SelectGroup>
								{selectFilters.map((filter) => (
									<SelectItem key={filter.id} value={filter.value} className="hover:bg-[#becbd7] capitalize">
										{filter.label}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<NewClientModal />
			</div>
		</div>
	);
};

export default AdminClientNav;
