import React, { Suspense } from 'react';
import ProjectMilestone from './ProjectMilestone';
import { PROJECT_MILESTONES } from './milestones';
import Image from 'next/image';
import LoadingSpinner from '../../../../components/loaders/LoadingSpinner';

const ProjectMilestones = () => {
	return (
		<div className="flex flex-col w-full max-w-[687px] px-3 py-6 border border-[#e1e1e1] sm:rounded-xl lg:max-w-[372px]">
			<h3 className="text-lg font-semibold text-header border-b border-[#e1e1e1] pb-2">Project Milestones</h3>
			{PROJECT_MILESTONES.length > 0 ? (
				<Suspense fallback={<LoadingSpinner />}>
					<div className="flex py-4 w-full flex-col gap-y-4">
						{PROJECT_MILESTONES.map((milestone) => (
							<ProjectMilestone key={milestone.id} {...milestone} />
						))}
					</div>
				</Suspense>
			) : (
				<div className="flex w-full max-w-[298px] flex-col gap-y-6 items-center mx-auto py-8 text-sm text-header">
					<p>
						No milestones have been created for this project yet, The project&apos;s milestones will appear here once
						they have been created.
					</p>

					<Image src="/assets/empty-box.png" alt="Empty box" width={300} height={300} />
				</div>
			)}
		</div>
	);
};

export default ProjectMilestones;
