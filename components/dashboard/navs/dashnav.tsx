'use client';

import { Input } from '@ui/Input';

import { Add, SearchNormal } from 'iconsax-react';

import { useState } from 'react';
import Button from '@ui/Button';
import CreateProject from '../../super-admin-project/modal/create-project';
import CreateProjectModal from '../../admin/projects/CreateProjectModal';

const DashNav = () => {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<div className="w-full md:h-[56px] flex items-center ">
			<div className="flex flex-col md:flex-row md:justify-between justify-center gap-y-4 w-full  gap-x-4 ">
				<div className="flex w-full justify-center">
					<Input
						onChange={(e) => setSearchTerm(e.target.value)}
						value={searchTerm}
						leftIcon={<SearchNormal size={18} color="#535353" />}
						type="text"
						placeHolder="Search for projects..."
						className="w-full md:max-w-[413px] h-[56px]"
					/>
				</div>

				<div className="w-full  flex items-center max-md:justify-between gap-x-4">
					<CreateProjectModal />
					<Button
						intent={'secondary'}
						className="text-black bg-transparent  w-[214px]  items-center h-[56px]"
						leftIcon={<Add size="32" color="#000" />}
					>
						New user
					</Button>
				</div>
			</div>
		</div>
	);
};

export default DashNav;
