'use client';

import { X } from 'lucide-react';
import { cn } from '../../../../utils/util';
import { ProjectCardProps } from '../../../../libs/projects';
import { useStateCtx } from '../../../../context/StateContext';
import { useEffect, useState } from 'react';
import { PROJECT_MILESTONES } from './milestones';

const DeleteMilestoneModal = () => {
  const { deleteMilestoneModal, setDeleteMilestoneModal } = useStateCtx();

  const [milestoneId, setMilestoneId] = useState('');

  useEffect(() => {
    const readLocal = localStorage.getItem('milestoneId');
    if (readLocal) {
      setMilestoneId(readLocal);
    }
  }, [deleteMilestoneModal]);

  const milestone = PROJECT_MILESTONES.find(
    milestone => milestone.id === milestoneId
  );

  return (
    <>
      <div
        aria-hidden
        className={cn(
          ' fixed min-h-screen w-full bg-black/40 backdrop-blur-sm top-0 left-0  transition-all duration-300 z-[99]',
          deleteMilestoneModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setDeleteMilestoneModal(false)}
      />

      <div
        role="dialog"
        aria-labelledby="remove-client"
        className={cn(
          'py-6   flex flex-col w-[360px] h-[300px] min-[450px]:h-[330px] min-[450px]:w-[400px] min-[550px]:w-[500px] md:w-[682px] md:h-[400px] justify-between items-center bg-white backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none -translate-x-1/2',
          deleteMilestoneModal
            ? 'scale-100 duration-500 opacity-100 rounded-xl md:rounded-2xl'
            : 'scale-0 duration-200 pointer-events-none'
        )}
      >
        <div className="flex items-center justify-between w-full border-b border-[#e1e1e1] pb-4 pl-4 px-4 md:pl-8 ">
          <h3 className="text-sm min-[450px]:text-lg md:text-2xl font-medium text-header">
            Delete {milestone?.title ?? 'Milestone'}?
          </h3>
          <button
            type="button"
            tabIndex={0}
            aria-label="Close"
            onClick={() => setDeleteMilestoneModal(false)}
            className="text-header focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex w-full max-w-[546px] h-full  pt-8 sm:pt-16 items-center flex-col gap-y-8 ">
          <p className="text-center text-sm md:text-base px-4">
            Are you sure you want to permanently remove{' '}
            {milestone?.title ? (
              <span className="font-semibold">{milestone?.title}</span>
            ) : (
              'this project'
            )}{' '}
            from your milestones? Remember this action cannot be reversed{' '}
          </p>
          <div className="flex w-full gap-x-4 justify-center sm:justify-between sm:px-8 [&>*]:font-semibold">
            <button
              type="button"
              tabIndex={0}
              aria-label="Cancel"
              onClick={() => setDeleteMilestoneModal(false)}
              className={cn(
                'rounded-lg border border-primary text-primary min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
              )}
            >
              No, Cancel
            </button>

            <button
              type="button"
              tabIndex={0}
              aria-label="Remove"
              className={cn(
                'rounded-lg bg-[#e80000] text-white min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e80000]'
              )}
            >
              Yes, Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteMilestoneModal;
