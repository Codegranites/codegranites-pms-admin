'use client';

import { X } from 'lucide-react';
import { cn } from '../../../../utils/util';
import { ProjectCardProps } from '../../../../libs/projects';
import { useStateCtx } from '../../../../context/StateContext';
import { useEffect, useState } from 'react';
import { PROJECT_MILESTONES } from './milestones';

const ViewMilestoneDetailsModal = () => {
  const { viewMilestoneModal, setViewMilestoneModal } = useStateCtx();

  const [milestoneId, setMilestoneId] = useState('');

  useEffect(() => {
    const readLocal = localStorage.getItem('milestoneId');
    if (readLocal) {
      setMilestoneId(readLocal);
    }
  }, [viewMilestoneModal]);

  const milestone = PROJECT_MILESTONES.find(
    milestone => milestone.id === milestoneId
  );

  return (
    <>
      <div
        aria-hidden
        className={cn(
          ' fixed min-h-screen w-full bg-black/40  top-0 left-0  transition-all duration-300 z-[99] backdrop-blur-sm',
          viewMilestoneModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setViewMilestoneModal(false)}
      />

      <div
        role="dialog"
        aria-labelledby="remove-client"
        className={cn(
          'py-6   flex flex-col max-[350px]:h-[410px] w-[90%] h-[380px] min-[550px]:w-[500px] md:w-[682px] md:h-[400px] items-center bg-white  fixed top-1/2 left-1/2  z-[999]  transition-all opacity-0 select-none  -translate-y-1/2 -translate-x-1/2',
          viewMilestoneModal
            ? 'scale-100 duration-500 opacity-100 rounded-xl md:rounded-2xl'
            : 'scale-0 duration-200 pointer-events-none'
        )}
      >
        <div className="flex items-center justify-between w-full border-b border-[#e1e1e1] pb-4 pl-4 px-4 md:pl-8 ">
          <h3 className="sm:text-lg md:text-2xl font-medium text-header">
            Milestone Details{' '}
          </h3>
          <button
            type="button"
            tabIndex={0}
            aria-label="Close"
            onClick={() => setViewMilestoneModal(false)}
            className="text-header focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex w-full  pt-8  flex-col gap-y-4 ">
          <p className="text-sm md:text-base px-4">
            <span className="font-medium">Milestone Title:</span>{' '}
            <span>{milestone?.title}</span>
          </p>
          <p className="text-sm md:text-base px-4">
            <span className="font-medium">Milestone Status: </span>
            <span
              className={cn('font-medium capitalize text-sm', {
                'text-[#eea300] ': milestone?.status === 'in-progress',
                'text-[#008d36] ': milestone?.status === 'completed',
                'text-primary-light ': milestone?.status === 'pending'
              })}
            >
              {milestone?.status.replace('-', ' ')}
            </span>
          </p>
          <p className="text-sm md:text-base px-4 ">
            <span className="font-medium">Milestone Description:</span>{' '}
            <span>{milestone?.description}</span>
          </p>
        </div>
        <div className="flex w-full items-center justify-center pt-8">
          <button
            type="button"
            tabIndex={0}
            aria-label="Close"
            onClick={() => setViewMilestoneModal(false)}
            className={cn(
              'rounded-lg border border-primary text-primary w-[178px] min-[450px]:h-[56px] h-[40px] px-2  text-lg hover:opacity-80 transition-opacity duration-300 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
            )}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
};

export default ViewMilestoneDetailsModal;
