import React from 'react';
import ProjectDetailsContent from './ProjectDetailsContent';

interface PageProps {
  searchParams: {
    [key: string]: string | undefined;
  };
}

const ProjectDetails = ({ searchParams: { project_title, id } }: PageProps) => {
  return <ProjectDetailsContent id={id} />;
};

export default ProjectDetails;
