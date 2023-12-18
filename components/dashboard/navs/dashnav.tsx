'use client';

import { Input } from '@ui/Input';

import { Add, SearchNormal } from 'iconsax-react';

import { useState } from 'react';
import Button from '@ui/Button';
import CreateProject from '../../super-admin-project/modal/create-project';
import CreateProjectModal from '../../admin/projects/CreateProjectModal';
import NewClientModal from '../../admin/clients/NewClient';
import { useStateCtx } from '../../../context/StateContext';

const DashNav = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const { createClientModal, setCreateClientModal, createProjectModal, setCreateProjectModal } = useStateCtx();

	return (
		<>
			<div className="w-full md:h-[56px] flex items-center ">
				<div className="flex flex-col md:flex-row md:justify-between justify-center gap-y-4 w-full  gap-x-4 ">
					<div className="flex w-full justify-center">
						<Input
							tabIndex={0}
							onChange={(e) => setSearchTerm(e.target.value)}
							value={searchTerm}
							leftIcon={<SearchNormal size={18} color="#535353" />}
							type="text"
							placeHolder="Search for projects..."
							className="w-full md:max-w-[413px] h-[56px] outline-none focus-visible:border focus-visible:border-primary-light"
						/>
					</div>

					<div className="w-full  flex items-center max-md:justify-between gap-x-4">
						<button
							onClick={() => setCreateProjectModal(true)}
							tabIndex={0}
							aria-label="Create Project"
							aria-haspopup
							aria-expanded={createProjectModal}
							id="create-project"
							type="button"
							className="flex w-full max-w-[170px] min-h-[56px] sm:w-[214px] lg:w-full lg:max-w-[250px] items-center lg:gap-x-5 gap-x-2 bg-primary-light  text-white rounded-lg hover:opacity-80 transition-opacity duration-300 text-sm sm:text-base justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
						>
							<Add size={24} />
							New Project
						</button>
						<button
							onClick={() => setCreateClientModal(true)}
							tabIndex={0}
							aria-label="Create Client"
							aria-haspopup
							aria-expanded={createClientModal}
							id="create-client"
							type="button"
							className="flex w-full sm:w-[214px] lg:w-full h-full lg:max-w-[250px] items-center lg:gap-x-5 gap-x-2  text-primary border border-primary rounded-lg hover:opacity-80 transition-opacity duration-300 text-sm sm:text-base justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
						>
							<Add size={24} />
							Add Client
						</button>
					</div>
				</div>
			</div>
			<NewClientModal />
		</>
	);
};

export default DashNav;
