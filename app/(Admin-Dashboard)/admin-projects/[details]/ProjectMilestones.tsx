import { Suspense, useEffect, useState } from 'react';
import ProjectMilestone from './ProjectMilestone';
import { PROJECT_MILESTONES } from './milestones';
import Image from 'next/image';
import LoadingSpinner from '../../../../components/loaders/LoadingSpinner';
import { Add } from 'iconsax-react';
import { cn } from '../../../../utils/util';
import { useStateCtx } from '../../../../context/StateContext';
import CreateMilestoneModal from './CreateMilestoneModal';
import ChangeStatusModal from './ChangeStatusModal';
import EditMilestoneModal from './EditMilestoneModal';
import ViewMilestoneDetailsModal from './ViewMilestoneDetailsModal';
import DeleteMilestoneModal from './DeleteMilestoneModal';

const ProjectMilestones = () => {
  const {
    changeStatusModal,
    isEditMiletoneModal,
    createMilestoneModal,
    setCreateMilestoneModal,
    viewMilestoneModal,
    deleteMilestoneModal
  } = useStateCtx();
  const [isMenu, setIsMenu] = useState(false);
  const noSticky =
    changeStatusModal ||
    isEditMiletoneModal ||
    createMilestoneModal ||
    viewMilestoneModal ||
    deleteMilestoneModal;

  useEffect(() => {
    if (isMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenu(false);
      }
    };

    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [isMenu]);

  return (
    <div
      className={cn(
        'flex flex-col w-full max-w-[687px] px-3 py-6 border border-[#e1e1e1] sm:rounded-xl lg:max-w-[372px] relative  xl:mr-7 2xl:mr-8'
        // {
        // 	'lg:sticky top-4': !noSticky
        // }
      )}
    >
      <ChangeStatusModal />
      <EditMilestoneModal />
      <ViewMilestoneDetailsModal />
      <DeleteMilestoneModal />
      <div className="flex w-full items-center justify-between pb-2 md:pb-3 border-b border-[#e1e1e1] ">
        <h3 className="text-lg font-semibold text-header ">
          Project Milestones
        </h3>
        <button
          type="button"
          tabIndex={0}
          id="add-milestone"
          aria-haspopup
          aria-expanded={isMenu}
          onClick={() => setIsMenu(prev => !prev)}
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light rotate-90 h-6 w-6 rounded-full border border-[#090909] flex items-center justify-center"
        >
          <Add size={24} />
        </button>
      </div>

      {/* DOT Menu */}
      <div
        className={cn(
          'fixed min-h-screen w-full bg-black/0 top-0 left-0 z-[99] transition-all duration-300',
          isMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setIsMenu(false)}
      />
      <div
        role="dialog"
        aria-labelledby="add-milestone"
        className={cn(
          'flex w-[190px] h-[56px]  px-4 py-2 absolute right-2 top-[3.5rem] rounded-lg justify-center  border border-gray-200 backdrop-blur-xl bg-white/80 transition-all duration-300 z-[999] shadow-[0_5px_15px_-3px_rgba(0,0,0,0.3)]',
          {
            'opacity-100': isMenu,
            'opacity-0 pointer-events-none': !isMenu
          }
        )}
      >
        <button
          onClick={() => {
            setCreateMilestoneModal(true);
            setIsMenu(!isMenu);
          }}
          type="button"
          tabIndex={0}
          className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light w-full flex items-center gap-x-2 px-2"
        >
          <Add size={18} />
          <span>Add Milestone</span>
        </button>
      </div>
      {/* Create Milestone Modal */}
      <CreateMilestoneModal />

      {PROJECT_MILESTONES.length > 0 ? (
        <div className="flex  w-full flex-col gap-y-4 pt-2 overflow-hiden ">
          {PROJECT_MILESTONES.map(milestone => (
            <Suspense key={milestone.id} fallback={<LoadingSpinner />}>
              <ProjectMilestone key={milestone.id} {...milestone} />
            </Suspense>
          ))}
        </div>
      ) : (
        <div className="flex w-full max-w-[298px] flex-col gap-y-6 items-center mx-auto py-8 text-sm text-header">
          <p>
            No milestones have been created for this project yet, The
            project&apos;s milestones will appear here once they have been
            created.
          </p>

          <Image
            src="/assets/empty-box.png"
            alt="Empty box"
            width={300}
            height={300}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectMilestones;
