'use client';

import { Input } from '@ui/Input';
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from '../../../components/ui/select';

import { Add, ArrowDown2, ArrowUp2, Filter, SearchNormal } from 'iconsax-react';
import { FilterIcon } from 'lucide-react';
import { useState } from 'react';
import Button from '@ui/Button';

type SelectProps = {
	id?: number;
	label: string;
	value: string;
};
const selectFilters: SelectProps[] = [
	{
		id: 0,
		label: 'All Clients',
		value: 'all'
	},
	{
		id: 1,
		label: 'New Clients',
		value: 'new'
	},
	{
		id: 2,
		label: 'Active Clients',
		value: 'active'
	},
	{
		id: 3,
		label: 'Inactive Clients',
		value: 'inactive'
	}
];

const ProjectNav = () => {
	const [selectedValue, setSelectedValue] = useState(selectFilters[0].value);
	const [searchTerm, setSearchTerm] = useState('');

	console.log(selectedValue);

	return (
		<div className="w-full h-[56px] flex justify-between gap-x-4 items-center">
			<div className="flex w-full max-w-1/2">
				<Input
					onChange={(e) => setSearchTerm(e.target.value)}
					value={searchTerm}
					leftIcon={<SearchNormal size={18} color="#535353" />}
					type="text"
					placeHolder="Search for projects..."
				/>
			</div>
			<div className="flex w-full max-w-1/2 justify-between">
				<div className="flex items-center gap-x-1 text-[#535353] w-full">
					<FilterIcon className="sm:hidden" color="#282828" />
					<span className="hidden sm:inline-block w-[57px] text-sm">Filter by</span>

					<Select onValueChange={(value) => setSelectedValue(value)} defaultValue="all">
						<SelectTrigger className="w-[150px] select-none h-full py-3">
							<SelectValue placeholder={selectFilters[0].label} />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup>
								{selectFilters.map((filter) => (
									<SelectItem key={filter.id} value={filter.value} className="hover:bg-[#becbd7]">
										{filter.label}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>
				<div className="flex sm:w-[214px]">
					<Button className="flex w-full" intent={'secondary'}>
						<Add size={24} />
						<span className="">Add Client</span>
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProjectNav;
