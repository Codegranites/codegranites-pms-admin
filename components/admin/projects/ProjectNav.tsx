'use client';

import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@radix-ui/react-select';
import { Input } from '@ui/Input';
import { Select } from '@ui/SelectInput';
import { ArrowDown2, ArrowUp2, Filter, SearchNormal } from 'iconsax-react';
import { FilterIcon } from 'lucide-react';
import { useState } from 'react';

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

					<select
						value={selectedValue}
						onChange={(e) => setSelectedValue(e.target.value)}
						className=" cursor-pointer p-2 outline-none rounded-md  border border-gray-200 py-3 focus:border-primary focus:valid:border-primary  transition-all duration-300 capitalize text-gray-700"
					>
						{selectFilters.map((filter) => (
							<option key={filter.id} value={filter.value}>
								{filter.label}
							</option>
						))}
					</select>
				</div>
				<div className="flex"></div>
			</div>
		</div>
	);
};

export default ProjectNav;
