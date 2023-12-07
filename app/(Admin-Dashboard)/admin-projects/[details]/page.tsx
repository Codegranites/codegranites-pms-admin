import React from 'react';

interface PageProps {
	searchParams: {
		[key: string]: string | string[] | undefined;
	};
}

const ProjectDetails = ({ searchParams: { project_title, id } }: PageProps) => {
	return (
		<>
			<section className="w-full h-full flex flex-col gap-y-6"></section>
			{project_title}==={id}
		</>
	);
};

export default ProjectDetails;
