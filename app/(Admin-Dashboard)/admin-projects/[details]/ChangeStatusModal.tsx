'use client';

import { X } from 'lucide-react';
import { cn, formatPrice } from '@/utils/util';
import { useEffect, useState } from 'react';
import { ProjectCardProps } from '@/libs/projects';
import { PROJECT_MILESTONES, ProjectMilestoneProps } from './milestones';
import { useStateCtx } from '@/context/StateContext';

interface MakePaymentModalProps {
  milestoneId?: string;
}

type StatusProps = {
  id?: number;
  label: string;
};
const STATUSES: StatusProps[] = [
  {
    id: 1,
    label: 'pending'
  },
  {
    id: 2,
    label: 'in-progress'
  },
  {
    id: 3,
    label: 'completed'
  }
];

const ChangeStatusModal = () => {
  const { changeStatusModal, setChangeStatusModal } = useStateCtx();
  const [milestoneId, setMilestoneId] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<
    StatusProps['label'] | null
  >(null);

  useEffect(() => {
    const readLocal = localStorage.getItem('milestoneId');
    if (readLocal) {
      setMilestoneId(readLocal);
    }
  }, [changeStatusModal]);

  const milestone = PROJECT_MILESTONES.find(
    milestone => milestone.id === milestoneId
  );
  useEffect(() => {
    if (!changeStatusModal) {
      setSelectedStatus(null);
      return;
    }
    setSelectedStatus(milestone?.status ?? null);
  }, [changeStatusModal, milestone]);

  return (
    <>
      <div
        aria-hidden
        className={cn(
          ' fixed min-h-screen w-full bg-black/40 top-0 left-0  transition-all duration-300 z-[99] backdrop-blur-sm',
          changeStatusModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setChangeStatusModal(false)}
      />

      <div
        role="dialog"
        aria-labelledby="make-payment"
        className={cn(
          'py-6   flex flex-col max-[400px]:w-[300px] w-[360px] h-[350px] md:h-[400px] lg:w-[400px]  justify-between items-start bg-white backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none -translate-x-1/2',
          changeStatusModal
            ? 'scale-100 duration-500 opacity-100 rounded-xl md:rounded-2xl'
            : 'scale-0 duration-200 pointer-events-none'
        )}
      >
        <div className="flex items-center justify-between w-full border-b border-[#e1e1e1] pb-4 pl-4 px-4 md:pl-8 ">
          <h3 className="text-lg md:text-2xl font-medium text-header">
            Change Status
          </h3>
          <button
            type="button"
            tabIndex={0}
            aria-label="Close"
            onClick={() => setChangeStatusModal(false)}
            className="text-header focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex w-full h-full pt-4 sm:pt-6 items-center flex-col gap-y-4">
          <p className="text-center text-base sm:text-lg font-semibold">
            Select Status
          </p>
          <div className="flex flex-col gap-y-4 md:gap-y-6">
            {STATUSES.map(status => (
              <p
                key={status.id}
                className={cn(
                  'text-center text-sm md:text-base flex items-center gap-x-2 transition-all duration-300',
                  selectedStatus === 'final' && status.label !== 'final'
                    ? 'opacity-40'
                    : '',
                  {
                    ' font-medium': status.label === selectedStatus,
                    'text-[#eea300] ': status.label === 'in-progress',
                    'text-[#008d36] ': status.label === 'completed',
                    'text-primary-light ': status.label === 'pending'
                  }
                )}
              >
                <button
                  onClick={() => {
                    setSelectedStatus(status.label);
                  }}
                  type="button"
                  className={cn(
                    'w-6 h-6 rounded-full border-primary border flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light',
                    {
                      ' p-1': status.label === selectedStatus
                    }
                  )}
                >
                  {selectedStatus === status.label && (
                    <span className="bg-primary h-full w-full rounded-full" />
                  )}
                </button>
                <span className="capitalize">{status.label} </span>
              </p>
            ))}
          </div>
        </div>
        <div className="flex w-full justify-center h-full pt-4 sm:pt-9">
          <button
            type="button"
            tabIndex={0}
            disabled={!selectedStatus}
            aria-label="Make Payment"
            className={cn(
              'mt-2 rounded-lg bg-primary-light text-white w-[178px] h-[56px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light',
              {
                'bg-gray-300 text-primary': !selectedStatus
              }
            )}
          >
            {selectedStatus ? 'Update' : 'Select '}
          </button>
        </div>
      </div>
    </>
  );
};

export default ChangeStatusModal;
