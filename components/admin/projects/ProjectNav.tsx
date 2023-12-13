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
import { ListFilter, X } from 'lucide-react';
import CreateProjectModal from './CreateProjectModal';
import { useStateCtx } from '../../../context/StateContext';
import cn from '../../../utils/util';

type SelectProps = {
	id?: number;
	label: string;
	value: string;
};
const selectProjectFilters: SelectProps[] = [
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
		value: 'in-progress'
	},
	{
		id: 3,
		label: 'Pending Projects',
		value: 'pending'
	}
];

const ProjectNav = () => {
	const { setProjectSearchTerm, projectSearchTerm, setSelectedProjectFilter, selectedProjectFilter } = useStateCtx();

	return (
		<div className="w-full md:h-[56px] flex justify-between min-[450px]:gap-x-4 items-center flex-col md:flex-row gap-y-4 sm:pt-4">
			<div className="flex w-full max-w-1/2 relative items-center">
				<Input
					onChange={(e) => setProjectSearchTerm(e.target.value)}
					value={projectSearchTerm}
					leftIcon={<SearchNormal size={18} color="#535353" />}
					type="text"
					placeHolder="Search via project titles..."
					className="w-full"
				/>

				<button
					type="button"
					tabIndex={0}
					aria-label="Clear search"
					onClick={() => setProjectSearchTerm('')}
					className={cn(
						'absolute right-2 transition-opacity duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full',
						{
							'opacity-0 duration-300': !projectSearchTerm
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

					<Select onValueChange={(value) => setSelectedProjectFilter(value)} defaultValue="all">
						<SelectTrigger className="w-[150px] select-none h-full py-3">
							<SelectValue placeholder={'All Projects'} />
						</SelectTrigger>
						<SelectContent className="backdrop-blur-xl bg-white/80">
							<SelectGroup>
								{selectProjectFilters.map((filter) => (
									<SelectItem key={filter.id} value={filter.value} className="hover:bg-[#becbd7]">
										{filter.label}
									</SelectItem>
								))}
							</SelectGroup>
						</SelectContent>
					</Select>
				</div>

				<CreateProjectModal />
			</div>
		</div>
	);
};

export default ProjectNav;
