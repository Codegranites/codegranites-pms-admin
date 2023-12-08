import React from 'react';
import cn from '../../../../utils/util';
import { type ProjectMilestoneProps } from './milestones';

const ProjectMilestone = ({ status, title }: ProjectMilestoneProps) => {
	return (
		<div className="w-full flex flex-col border-b border-[#e1e1e1] ">
			<div className="flex items-center gap-x-1">
				<span className="w-2 h-2 rounded-full bg-primary" />
				<p className="text-sm 2xl:text-base font-medium">{title}</p>
			</div>
			<p>
				<span className="text-xs 2xl:text-sm mr-1">Status</span>(
				<span
					className={cn('font-medium capitalize text-sm', {
						'text-[#eea300] ': status === 'in-progress',
						'text-[#008d36] ': status === 'completed',
						'text-primary-light ': status === 'pending'
					})}
				>
					{status.replace('-', ' ')}
				</span>
				)
			</p>
		</div>
	);
};

export default ProjectMilestone;
