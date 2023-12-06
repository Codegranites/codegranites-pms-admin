'use client';

import React from 'react';
import CounterCard from '../card/ProjectCardAdmin';
import ProjectCard from '../card/ProjectCardAdmin';
import ProjectCardAdmin from '../card/ProjectCardAdmin';
import { PROJECTS } from '../../../libs/projects';

const AdminProjectContainer = () => {
	return (
		<div className="w-full grid grid-cols-1 min-[929px]:grid-cols-2 gap-4 py-6 lg:gap-6 xl:gap-8 min-[1592px]:grid-cols-3">
			{PROJECTS.map((project) => (
				<ProjectCardAdmin key={project.id} {...project} />
			))}
		</div>
	);
};

export default AdminProjectContainer;
