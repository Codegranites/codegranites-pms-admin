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
		<section className="flex flex-col  mb-6 sm:border  border-r-[#e1e1e1] h-full py-6 relative items-center justify-center">
			<div className="flex w-full sm:px-5 items-center justify-between mb-6 border-b border-[#e1e1e1] h-[56px] relative text-xl  text-black font-medium">
				<div className="flex gap-2 items-center justify-center">
					<Briefcase size="32" color="#000" />
					<span>Available Projects</span>
				</div>
				<Button className="flex gap-2 bg-transparent hover-transparent text-black items-center justify-center">
					<DocumentFilter size="32" color="#000" />
					<span>Filter</span>
				</Button>
			</div>
			<Image src="/dashboard/project.svg" alt="empty project" width={450} height={350} />
			<span className="text-black font-medium mt-5 mb-5 text-xl">You have to projects yet!</span>
			<div className="flex min-w-[214px]">
				<CreateProjectModal />
			</div>
		</section>
	);
};

export default Project;
