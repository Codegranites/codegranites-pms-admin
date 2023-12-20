'use client';

import { Input } from '@ui/Input';

import { Add, FolderAdd, SearchNormal, UserAdd } from 'iconsax-react';

import { useState } from 'react';
import { useStateCtx } from '../../../context/StateContext';

const DashNav = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const { createClientModal, setCreateClientModal, createProjectModal, setCreateProjectModal } = useStateCtx();

	return (
		<div className="w-full h-[40px]  min-[900px]:h-[56px] flex items-center justify-between gap-x-2 sm:gap-x-4 px-2 sm:px-4">
			<div className="flex w-full sm:max-w-[413px] justify-center">
				<Input
					tabIndex={0}
					onChange={(e) => setSearchTerm(e.target.value)}
					value={searchTerm}
					leftIcon={<SearchNormal size={18} color="#535353" />}
					type="text"
					placeHolder="Search projects..."
					className="w-full h-[40px]  min-[900px]:h-[56px] outline-none focus-visible:border focus-visible:border-primary-light"
				/>
			</div>

			<div className="min-[900px]:w-full flex items-center max-[900px]:justify-between gap-x-2 sm:gap-x-4">
				<button
					onClick={() => setCreateProjectModal(true)}
					tabIndex={0}
					aria-label="Create Project"
					aria-haspopup
					aria-expanded={createProjectModal}
					id="create-project"
					type="button"
					className=" flex h-[40px] w-[56px] min-[900px]:w-full min-[900px]:max-w-[170px] min-[900px]:min-h-[56px] min-[900px]:min-w-[214px]  lg:max-w-[250px] items-center lg:gap-x-5 gap-x-2 bg-primary-light  text-white rounded-lg hover:opacity-80 transition-opacity duration-300 text-sm sm:text-base justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
				>
					<Add size={24} className="hidden min-[900px]:inline" />
					<FolderAdd size={18} className=" min-[900px]:hidden" />
					<span className="hidden min-[900px]:inline">New Project</span>
				</button>
				<button
					onClick={() => setCreateClientModal(true)}
					tabIndex={0}
					aria-label="Create Client"
					aria-haspopup
					aria-expanded={createClientModal}
					id="create-client"
					type="button"
					className=" flex h-[40px] w-[56px] min-[900px]:w-full min-[900px]:max-w-[170px] min-[900px]:min-h-[56px] min-[900px]:min-w-[214px]  lg:max-w-[250px] items-center lg:gap-x-5 gap-x-2  border border-primary text-primary rounded-lg hover:opacity-80 transition-opacity duration-300 text-sm sm:text-base justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
				>
					<Add size={24} className="hidden min-[900px]:inline" />
					<UserAdd size={18} className=" min-[900px]:hidden" />
					<span className="hidden min-[900px]:inline">Add Client</span>
				</button>
			</div>
		</div>
	);
};

export default DashNav;
