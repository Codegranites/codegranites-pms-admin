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
import { FilterIcon, ListFilter } from 'lucide-react';
import { useState } from 'react';
import Button from '@ui/Button';
import CreateProject from '../../super-admin-project/modal/create-project';

type SelectProps = {
	id?: number;
	label: string;
	value: string;
};
const selectFilters: SelectProps[] = [
	{
		id: 0,
		label: 'All Projects',
		value: 'all'
	},
	{
		id: 1,
		label: 'Completed Projects',
		value: 'completed'
	},
	{
		id: 2,
		label: 'In Progress',
		value: 'inProgress'
	},
	{
		id: 3,
		label: 'Pending Projects',
		value: 'pending'
	}
];

const ProjectNav = () => {
	const [selectedValue, setSelectedValue] = useState(selectFilters[0].value);
	const [searchTerm, setSearchTerm] = useState('');

	console.log(selectedValue);

	return (
		<div className="w-full md:h-[56px] flex justify-between gap-x-4 items-center flex-col md:flex-row gap-y-4 sm:pt-4">
			<div className="flex w-full max-w-1/2">
				<Input
					onChange={(e) => setSearchTerm(e.target.value)}
					value={searchTerm}
					leftIcon={<SearchNormal size={18} color="#535353" />}
					type="text"
					placeHolder="Search for projects..."
					className="w-full"
				/>
			</div>
			<div className="flex w-full max-w-1/2 justify-between gap-x-2">
				<div className="flex items-center gap-x-1 text-[#535353] w-full">
					{/* <FilterIcon className="sm:hidden" color="#535353" /> */}
					<ListFilter color="#282828 sm:hidden" size={18} />
					<span className="hidden sm:inline-block w-[57px] text-sm">Filter by</span>

					<Select onValueChange={(value) => setSelectedValue(value)} defaultValue="all">
						<SelectTrigger className="w-[150px] select-none h-full py-3">
							<SelectValue placeholder={selectFilters[0].label} />
						</SelectTrigger>
						<SelectContent className="backdrop-blur-xl">
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

				{/* <button
					type="button"
					className="flex w-full max-w-[200px] md:max-w-[214px] items-center sm:gap-x-5 gap-x-2 bg-primary-light  text-white rounded-lg hover:opacity-80 transition-opacity duration-300 text-sm sm:text-base justify-center"
				>
					<Add size={24} />
					New Project
				</button> */}
				<CreateProject />
			</div>
		</div>
	);
};

export default ProjectNav;
