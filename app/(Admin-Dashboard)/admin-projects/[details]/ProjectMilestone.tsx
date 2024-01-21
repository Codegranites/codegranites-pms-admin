import { useEffect, useState } from 'react';
import { cn } from '../../../../utils/util';
import { type ProjectMilestoneProps } from './milestones';
import { Edit2, More, Status, Trash } from 'iconsax-react';
import { useStateCtx } from '../../../../context/StateContext';
import { useRouter } from 'next-nprogress-bar';

const ProjectMilestone = ({ status, title, id }: ProjectMilestoneProps) => {
  const {
    viewMilestoneModal,

    setDeleteMilestoneModal,
    setChangeStatusModal,

    setIsEditMiletoneModal,
    setViewMilestoneModal
  } = useStateCtx();
  const [isMenu, setIsMenu] = useState(false);

  const router = useRouter();

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
    <>
      <div className="w-full flex justify-between items-start border-b border-[#e1e1e1] relative hover:bg-black/10 transition-all duration-300 py-1">
        <div
          className="flex flex-col w-full items-start focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light "
          tabIndex={0}
          role="button"
          aria-haspopup
          aria-expanded={viewMilestoneModal}
          onClick={() => {
            window?.localStorage.setItem('milestoneId', id!);
            setViewMilestoneModal(true);
          }}
        >
          <div className="flex  items-center gap-x-1">
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
        <button
          type="button"
          tabIndex={0}
          id="project-milestone"
          aria-label="More"
          aria-haspopup
          onClick={() => setIsMenu(prev => !prev)}
          aria-expanded={isMenu}
          className="focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light rotate-90 h-6 w-6  flex items-center justify-center"
        >
          <More />
        </button>

        {/* DOT Menu */}
        <div
          className={cn(
            'fixed min-h-screen w-full bg-black/0 top-0 left-0 z-[99] transition-all duration-300',
            isMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
          onClick={() => setIsMenu(false)}
        />
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="project-milestone"
          className={cn(
            'flex w-[190px] h-[141px] flex-col px-3 py-2 absolute -right-2 min-[830px]:-right-8 lg:right-0 min-[1140px]:-right-9 top-9 rounded-lg justify-center gap-y-4 border border-gray-200 backdrop-blur-xl bg-white/80 transition-all duration-300 z-[999] shadow-lg',
            {
              'opacity-100': isMenu,
              'opacity-0 pointer-events-none': !isMenu
            }
          )}
        >
          <button
            onClick={() => {
              window?.localStorage.setItem('milestoneId', id!);
              setIsEditMiletoneModal(true);
              setIsMenu(!isMenu);
            }}
            type="button"
            tabIndex={0}
            className=" focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light w-full flex items-center gap-x-2 text-base hover:opacity-70 transition-opacity duration-300"
          >
            <Edit2 size={18} />
            <span>Edit Milestone</span>
          </button>

          <button
            onClick={() => {
              window?.localStorage.setItem('milestoneId', id!);

              setDeleteMilestoneModal(true);
              setIsMenu(!isMenu);
            }}
            type="button"
            tabIndex={0}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light w-full flex items-center gap-x-2 text-base hover:opacity-70 transition-opacity duration-300"
          >
            <Trash size={18} />
            <span>Delete Milestone</span>
          </button>

          <button
            onClick={() => {
              window?.localStorage.setItem('milestoneId', id!);

              setChangeStatusModal(true);
              setIsMenu(!isMenu);
            }}
            type="button"
            tabIndex={0}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light w-full flex items-center gap-x-2 text-base hover:opacity-70 transition-opacity duration-300"
          >
            <Status size={18} />
            <span>Change Status</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectMilestone;
