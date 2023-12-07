'use client';

import React, { useState } from 'react';
import { PROJECTS } from '../../../../libs/projects';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';
import cn, { formatPrice } from '../../../../utils/util';
import ProjectDoc from './ProjectDoc';

const ProjectDetailsContent = ({ id }: { id?: string }) => {
	const project = PROJECTS[Number(id)];
	const router = useRouter();
	const [docsNum, setDocsNum] = useState(5);

	// Mock docs
	const docs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

	return (
		<>
			<div className="flex w-full justify-start">
				<button
					tabIndex={0}
					aria-label="Go Back"
					onClick={() => router.back()}
					type="button"
					className="flex font-medium items-center gap-x-1 text-header focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light pr-1"
				>
					<ChevronLeft aria-hidden />
					<span>Back</span>
				</button>
			</div>
			<section className="w-full flex flex-col lg:flex-row justify-between gap-4 sm:gap-6 lg:gap-8 xl:gap-12  pb-16 items-start min-h-screen">
				<div className="flex w-full flex-col max-w-[687px] py-4 sm:py-8">
					<div className="flex flex-col w-full sm:px-3 py-6 mb-6 sm:border border-[#e1e1e1] sm:rounded-xl h-full">
						{/* Details */}
						<h3 className="text-lg font-semibold text-header border-b border-[#e1e1e1] pb-2">Project Details</h3>
						<div className="flex w-full flex-col py-5 gap-y-3 lg:gap-y-4">
							<p className="text-sm xl:text-base text-header flex flex-wrap items-center gap-x-1">
								Project Title:
								<span className="font-medium">{project.title}</span>
								<span className="text-primary-light text-[11px]">(Created on 01/02/2024)</span>
							</p>
							<p className="text-sm xl:text-base text-header flex items-center gap-x-1">
								Project ID:
								<span className="font-medium">EX1492-001</span>
							</p>
							<p className={cn('text-sm xl:text-base text-header flex items-center gap-x-1')}>
								Project Status:
								<span
									className={cn('relative w-[100px] min-[404px]:w-[130px] lg:w-[150px] h-[8px] border  rounded-md', {
										'border-[#eea300] ': project.status === 'in-progress',
										'border-[#008d36] ': project.status === 'completed',
										'border-black/90 ': project.status === 'pending'
									})}
								>
									<span
										className={cn('absolute h-full  bg-black rounded-md transition-all duration-1000', {
											'bg-[#eea300] w-1/2': project.status === 'in-progress',
											'bg-[#008d36] w-full': project.status === 'completed',
											'bg-black/90 w-[5%]': project.status === 'pending'
										})}
									/>
								</span>{' '}
								<span className={cn('text-sm 2xl:text-base font-medium capitalize')}>
									({project.status.replace('-', ' ')})
								</span>
							</p>
							<p className="text-sm xl:text-base text-header flex items-center gap-x-1">
								Project Owner:
								<span className="font-medium">{project.project_owner}</span>
							</p>
							<p className="text-sm xl:text-base text-header flex items-center gap-x-1">
								Project Manager:
								<span className="font-medium">{project.project_manager}</span>
							</p>
							<p className="text-sm xl:text-base text-header flex items-center gap-x-1">
								Project Start Date:
								<span className="font-medium">{project.start_date}</span>
							</p>
							<p className="text-sm xl:text-base text-header flex items-center gap-x-1">
								Project End Date:
								<span className="font-medium">{project.due_date}</span>
							</p>
						</div>
						<div className="flex flex-col sm:rounded-xl mb-7 bg-[#f6f6f6] gap-y-3 lg:gap-y-4 p-4">
							<p className="text-sm xl:text-base text-header flex items-center gap-x-1">
								Total cost of project: <span className="font-semibold">{formatPrice(project.total_cost ?? 0)}</span>
							</p>
							<p className="text-sm xl:text-base text-header flex items-center gap-x-1">
								Initial Payment: <span className="font-semibold">{formatPrice(project.initial_payment ?? 0)}</span>
							</p>
							<div className="flex flex-wrap w-full items-center justify-between gap-3">
								<p className="text-sm xl:text-base text-header flex items-center gap-x-1">
									Total cost of project:{' '}
									<span className="font-semibold">
										{formatPrice(project.total_cost! - project.initial_payment! ?? 0)}
									</span>
								</p>

								<button
									type="button"
									className="rounded-md bg-primary text-white h-[32px] px-2 text-sm hover:opacity-80 transition-opacity duration-300"
								>
									Make Payment
								</button>
							</div>
						</div>

						{/* Description */}
						<div className="flex flex-col w-full sm:px-3 py-6 border-t border-[#e1e1e1] h-full">
							<h3 className="text-lg font-semibold text-header  pb-4">Project Description</h3>
							<div className="flex h-full max-h-[270px] overflow-y-auto sidebar-scroll w-full">
								<p className="text-sm 2xl:text-base text-header">{project.description}</p>
							</div>
						</div>
					</div>
					{/* Documents */}
					<div className="flex flex-col w-full py-3 sm:p-3  sm:rounded-xl sm:border max-sm:border-t border-[#e1e1e1] h-full">
						<h3 className="text-lg font-semibold text-header  pb-4">Project Documents</h3>
						<div className="flex flex-col h-full max-h-[250px] overflow-y-auto sidebar-scroll w-full">
							<div className="flex flex-col gap-y-4">
								{docs.slice(0, docsNum).map((num) => (
									<ProjectDoc key={num} />
								))}
							</div>
							<div className="flex">
								<button
									type="button"
									className="text-primary underline text-sm font-medium pt-4 capitalize"
									onClick={() => {
										if (docsNum === docs.length) {
											setDocsNum(5);
											return;
										}
										setDocsNum(docs.length);
									}}
								>
									{docsNum === docs.length ? ' See less' : 'See All'}
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* MileStone */}
				<div className="flex flex-col w-full px-3  border border-[#e1e1e1] sm:rounded-xl py-4 sm:py-8">
					<h3 className="text-lg font-semibold text-header border-b border-[#e1e1e1] pb-2">Project Milestones</h3>
				</div>
			</section>
		</>
	);
};

export default ProjectDetailsContent;
