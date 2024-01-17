import React, { useEffect, useState } from 'react';
import { cn, formatPrice } from '@/utils/util';
import { ProjectCardProps } from '@/libs/projects';
import MakePaymentModal from './MakePaymentModal';
import { useStateCtx } from '@/context/StateContext';
import { Edit2, More, Trash } from 'iconsax-react';
import RemoveProjectModal from './RemoveProjectModal';
import EditProjectModal from './EditProjectModal';

const ProjectDetailsSection = ({ project }: { project?: ProjectCardProps }) => {
  const {
    openPaymentModal,
    setOpenPaymentModal,
    isRemoveProjectModal,
    setIsRemoveProjectModal,
    editProjectModal,
    setEditProjectModal
  } = useStateCtx();
  const [isDotMenu, setIsDotMenu] = useState(false);

  useEffect(() => {
    if (isDotMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsDotMenu(false);
      }
    };

    document.addEventListener('keyup', handleKeyUp);
    return () => document.removeEventListener('keyup', handleKeyUp);
  }, [isDotMenu]);

  return (
    <>
      <RemoveProjectModal
        project={project}
        openModal={isRemoveProjectModal}
        setOpenModal={setIsRemoveProjectModal}
      />
      <MakePaymentModal
        project={project}
        openModal={openPaymentModal}
        setOpenModal={setOpenPaymentModal}
      />
      <EditProjectModal project={project} />
      <div className="flex flex-col w-full sm:px-3 py-6 mb-6 sm:border border-[#e1e1e1] sm:rounded-xl h-full relative ">
        {/* Details */}
        <div className="flex w-full items-center justify-between pb-2 md:pb-3 border-b border-[#e1e1e1] ">
          <h3 className="text-lg font-semibold text-header ">
            Project Details
          </h3>
          <button
            type="button"
            id="dot-menu"
            tabIndex={0}
            aria-haspopup
            aria-expanded={isDotMenu}
            onClick={() => setIsDotMenu(prev => !prev)}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rotate-90"
          >
            <More />
          </button>
        </div>
        {/* DOT Menu */}
        <div
          className={cn(
            'fixed min-h-screen w-full bg-black/0 top-0 left-0 z-[99] transition-all duration-300',
            isDotMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
          )}
          onClick={() => setIsDotMenu(false)}
        />
        <div
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="dot-menu"
          className={cn(
            'flex w-[190px] h-[106px] flex-col px-4 py-2 absolute right-2 top-[3.5rem] rounded-lg justify-center gap-y-4 border border-gray-200 backdrop-blur-xl bg-white/80 transition-all duration-300 z-[999]',
            {
              'opacity-100': isDotMenu,
              'opacity-0 pointer-events-none': !isDotMenu
            }
          )}
        >
          <button
            onClick={() => {
              setEditProjectModal(true);
              setIsDotMenu(!isDotMenu);
            }}
            type="button"
            tabIndex={0}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light w-full flex items-center gap-x-2 px-2"
          >
            <Edit2 size={18} />
            <span>Edit Project</span>
          </button>

          <button
            onClick={() => {
              setIsRemoveProjectModal(true);
              setIsDotMenu(!isDotMenu);
            }}
            type="button"
            tabIndex={0}
            className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light w-full flex items-center gap-x-2 px-2"
          >
            <Trash size={18} />
            <span>Delete Project</span>
          </button>
        </div>

        <div className="flex w-full flex-col py-5 gap-y-3 lg:gap-y-4">
          <p className="text-sm xl:text-base text-header flex flex-wrap items-center gap-x-1">
            Project Title:
            <span className="font-medium">{project?.title}</span>
            <span className="text-primary-light text-[11px]">
              (Created on 01/02/2024)
            </span>
          </p>
          <p className="text-sm xl:text-base text-header flex items-center gap-x-1">
            Project ID:
            <span className="font-medium">EX1492-001</span>
          </p>
          <p
            className={cn(
              'text-sm xl:text-base text-header flex items-center gap-x-1'
            )}
          >
            Project Status:
            <span
              className={cn(
                'relative w-[100px] min-[404px]:w-[130px] lg:w-[150px] h-[8px] border  rounded-md',
                {
                  'border-[#eea300] ': project?.status === 'in-progress',
                  'border-[#008d36] ': project?.status === 'completed',
                  'border-black/90 ': project?.status === 'pending'
                }
              )}
            >
              <span
                className={cn(
                  'absolute h-full  bg-black rounded-md transition-all duration-1000',
                  {
                    'bg-[#eea300] w-1/2': project?.status === 'in-progress',
                    'bg-[#008d36] w-full': project?.status === 'completed',
                    'bg-black/90 w-[5%]': project?.status === 'pending'
                  }
                )}
              />
            </span>{' '}
            <span
              className={cn('text-sm 2xl:text-base font-medium capitalize')}
            >
              ({project?.status.replace('-', ' ')})
            </span>
          </p>
          <p className="text-sm xl:text-base text-header flex items-center gap-x-1">
            Project Owner:
            <span className="font-medium">{project?.project_owner}</span>
          </p>
          <p className="text-sm xl:text-base text-header flex items-center gap-x-1">
            Project Manager:
            <span className="font-medium">{project?.project_manager}</span>
          </p>
          <p className="text-sm xl:text-base text-header flex items-center gap-x-1">
            Project Start Date:
            <span className="font-medium">{project?.start_date}</span>
          </p>
          <p className="text-sm xl:text-base text-header flex items-center gap-x-1">
            Project End Date:
            <span className="font-medium">{project?.end_date}</span>
          </p>
        </div>
        <div className="flex flex-col sm:rounded-xl mb-7 bg-[#f6f6f6] gap-y-3 lg:gap-y-4 p-4">
          <p className="text-sm xl:text-base text-header flex items-center gap-x-1">
            Total cost of project:{' '}
            <span className="font-semibold">
              {formatPrice(project?.total_cost ?? 0)}
            </span>
          </p>
          <p className="text-sm xl:text-base text-header flex items-center gap-x-1">
            Initial Payment:{' '}
            <span className="font-semibold">
              {formatPrice(project?.initial_payment ?? 0)}
            </span>
          </p>
          <div className="flex flex-wrap w-full items-center justify-between gap-3">
            <p className="text-sm xl:text-base text-header flex items-center gap-x-1">
              Final Payment:{' '}
              <span className="font-semibold">
                {formatPrice(
                  project?.total_cost! - project?.initial_payment! ?? 0
                )}
              </span>
            </p>

            <button
              type="button"
              tabIndex={0}
              aria-label="Make Payment"
              aria-haspopup
              aria-expanded={openPaymentModal}
              id="make-payment"
              onClick={() => setOpenPaymentModal(true)}
              className="rounded-md bg-primary text-white h-[32px] px-2 text-sm hover:opacity-80 transition-opacity duration-300"
            >
              Make Payment
            </button>
          </div>
        </div>

        {/* Description */}
        <div className="flex flex-col w-full sm:px-3 py-6 border-t border-[#e1e1e1] h-full">
          <h3 className="text-lg font-semibold text-header  pb-4">
            Project Description
          </h3>
          <div className="flex h-full max-h-[270px] overflow-y-auto sidebar-scroll w-full">
            <p className="text-sm 2xl:text-base text-header">
              {project?.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsSection;
