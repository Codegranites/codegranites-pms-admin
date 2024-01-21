import ProjectNav from '../../../components/admin/projects/ProjectNav';
import AdminProjectContainer from '../../../components/admin/projects/AdminProjectContainer';

const ProjectsAdmin = () => {
  return (
    <section className="w-full h-full flex flex-col gap-y-6 min-[1140px]:px-9 px-3 pt-8">
      <ProjectNav />

      <AdminProjectContainer />
    </section>
  );
};

export default ProjectsAdmin;
