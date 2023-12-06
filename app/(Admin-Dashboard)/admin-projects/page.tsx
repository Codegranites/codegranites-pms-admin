import ProjectNav from '../../../components/admin/projects/ProjectNav';
import AdminProjectContainer from '../../../components/admin/projects/AdminProjectContainer';

const ProjectsAdmin = () => {
	return (
		<section className="w-full h-full flex flex-col gap-y-6">
			<ProjectNav />

			<AdminProjectContainer />
		</section>
	);
};

export default ProjectsAdmin;
