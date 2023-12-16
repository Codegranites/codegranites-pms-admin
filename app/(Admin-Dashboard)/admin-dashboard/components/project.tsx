'use client';

import React, { useState } from 'react';
import { DocumentFilter, Briefcase, Add } from 'iconsax-react';
import Image from 'next/image';
import Button from '@ui/Button';
import CreateProjectModal from '../../../../components/admin/projects/CreateProjectModal';

const Project = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};
	return (
		<section className="flex flex-col   sm:border  border-r-[#e1e1e1] h-full py-6 relative items-center justify-center lg:pb-[163px]">
			<div className="flex w-full sm:px-5 items-center justify-between mb-6 border-b border-[#e1e1e1] h-[56px] relative sm:text-xl  text-header font-medium">
				<div className="flex gap-2 items-center justify-center">
					<Briefcase size="32" color="#535353" />
					<span>Available Projects</span>
				</div>
				{/* <Button className="flex gap-2 bg-transparent hover-transparent text-header focus-within:text-white hover:text-white items-center justify-center transition-colors duration-300">
					<DocumentFilter size="32" />
					<span>Filter</span>
				</Button> */}
			</div>
			<Image src="/dashboard/project.svg" alt="empty project" width={450} height={350} />
			<p className="text-header sm:font-medium mt-5 mb-5 sm:text-xl">You have to projects yet!</p>
			<div className="flex w-full justify-center">
				<CreateProjectModal />
			</div>
		</section>
	);
};

export default Project;
