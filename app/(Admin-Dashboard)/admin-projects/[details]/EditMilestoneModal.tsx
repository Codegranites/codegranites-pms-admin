'use client';

import { X } from 'lucide-react';
import { cn } from '../../../../utils/util';
import { useEffect, useState } from 'react';
import { PROJECT_MILESTONES } from './milestones';
import { useStateCtx } from '../../../../context/StateContext';
import WordCounter from '../../../../components/admin/card/WordCounter';

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
type FormProps = {
  title: string;
  description: string;
  status: StatusProps['label'];
};

const EditMilestoneModal = () => {
  const { isEditMiletoneModal, setIsEditMiletoneModal } = useStateCtx();
  const [milestoneId, setMilestoneId] = useState('');

  const [formData, setFormData] = useState<FormProps>({
    title: '',
    description: '',
    status: ''
  });

  useEffect(() => {
    const readLocal = localStorage.getItem('milestoneId');
    if (readLocal) {
      setMilestoneId(readLocal);
    }
  }, [isEditMiletoneModal]);

  const milestone = PROJECT_MILESTONES.find(
    milestone => milestone.id === milestoneId
  );
  useEffect(() => {
    if (!isEditMiletoneModal) {
      return;
    }
    setFormData({
      title: milestone?.title ?? '',
      description: milestone?.description ?? '',
      status: milestone?.status ?? ''
    });
  }, [isEditMiletoneModal, milestone]);

  const isDisabled =
    !formData.title || !formData.description || !formData.status;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsEditMiletoneModal(false);
  };

  return (
    <>
      <div
        aria-hidden
        className={cn(
          ' fixed min-h-screen w-full bg-black/40 top-0 left-0  transition-all  z-[99] backdrop-blur-sm',
          isEditMiletoneModal
            ? 'opacity-100 duration-500'
            : 'opacity-0 pointer-events-none duration-300'
        )}
        onClick={() => setIsEditMiletoneModal(false)}
      />

      <div
        role="dialog"
        aria-labelledby="make-payment"
        className={cn(
          'py-6   flex flex-col w-[98%] sm:w-[95%]  min-[500px]:h-[650px] md:h-[720px] xl:h-[750px] md:w-[682px]  justify-between items-start bg-white backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none ',
          isEditMiletoneModal
            ? '-translate-x-1/2 duration-700 opacity-100 sm:rounded-xl md:rounded-2xl'
            : 'translate-x-full duration-300 pointer-events-none'
        )}
      >
        <div className="flex items-center justify-between w-full border-b border-[#e1e1e1] pb-4 pl-4 px-4 md:pl-8 ">
          <h3 className="text-lg md:text-2xl font-medium text-header">
            Edit Milestone
          </h3>
          <button
            type="button"
            tabIndex={0}
            aria-label="Close"
            onClick={() => setIsEditMiletoneModal(false)}
            className="text-header focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex w-full flex-col gap-y-4 py-4 xl:py-8 px-2 sm:px-4 md:px-6 lg:px-8 h-full items-start"
        >
          <div className="flex flex-col  gap-y-2 w-full">
            <label htmlFor="description" className="font-medium">
              Milestone Title
            </label>
            <input
              type="text"
              placeholder="Milestone title..."
              id="milestone-title"
              name="title"
              className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
              value={formData.title}
              onChange={e =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
          </div>

          <div className="flex flex-col  gap-y-2 w-full">
            <label htmlFor="description" className="font-medium">
              Add Description
            </label>
            <textarea
              placeholder="Milestone description..."
              id="description"
              name="description"
              maxLength={160}
              className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light h-[150px] sm:h-[193px] resize-none sidebar-scroll text-sm sm:text-base"
              value={formData.description}
              onChange={e =>
                setFormData({ ...formData, [e.target.name]: e.target.value })
              }
            />
            <WordCounter word={formData.description} length={160} />
          </div>

          <div className="flex  xl:pt-4 items-start flex-col gap-y-4">
            <p className="text-center  font-medium">Select Status</p>
            <div className="flex md:flex-col gap-4 flex-wrap mb-2">
              {STATUSES.map(status => (
                <p
                  key={status.id}
                  className={cn(
                    'text-center text-sm md:text-base flex items-center gap-x-2 transition-all duration-300',
                    {
                      ' font-medium': status.label === formData.status,
                      'text-[#eea300] ': status.label === 'in-progress',
                      'text-[#008d36] ': status.label === 'completed',
                      'text-primary-light ': status.label === 'pending'
                    }
                  )}
                >
                  <button
                    onClick={() =>
                      setFormData({ ...formData, status: status.label })
                    }
                    type="button"
                    className={cn(
                      'w-6 h-6 rounded-full border-primary border flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light',
                      {
                        ' p-1': status.label === formData.status
                      }
                    )}
                  >
                    {formData.status === status.label && (
                      <span className="bg-primary h-full w-full rounded-full" />
                    )}
                  </button>
                  <span className="capitalize">{status.label} </span>
                </p>
              ))}
            </div>
          </div>

          <div className="flex w-full justify-end items-center gap-x-2 sm:gap-x-3 md:gap-x-6 mt-6">
            <button
              type="button"
              tabIndex={0}
              aria-label="Cancel"
              onClick={() => setIsEditMiletoneModal(false)}
              className={cn(
                'rounded-lg border border-primary text-primary min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
              )}
            >
              Cancel
            </button>

            <button
              type="submit"
              tabIndex={0}
              aria-label="Remove"
              disabled={isDisabled}
              className={cn(
                'rounded-lg bg-primary-light text-white min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light'
              )}
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditMilestoneModal;
