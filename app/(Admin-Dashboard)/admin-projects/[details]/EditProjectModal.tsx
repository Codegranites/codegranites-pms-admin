'use client';

import { X } from 'lucide-react';
import { cn } from '../../../../utils/util';
import { useEffect, useState } from 'react';
import { ProjectCardProps } from '../../../../libs/projects';
import { useStateCtx } from '../../../../context/StateContext';
import WordCounter from '../../../../components/admin/card/WordCounter';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@radix-ui/react-select';
import { selectCurrencies, selectStatus } from './edit-project';
import { Add } from 'iconsax-react';

interface EditProjectProps {
  project?: ProjectCardProps;
}

type FormProps = ProjectCardProps;

const EditProjectModal = ({ project }: EditProjectProps) => {
  const { editProjectModal, setEditProjectModal } = useStateCtx();

  const [formData, setFormData] = useState<FormProps>({
    title: project?.title ?? '',
    description: project?.description ?? '',
    project_owner: project?.project_owner ?? '',
    project_manager: project?.project_manager ?? '',
    start_date: project?.start_date ?? '',
    end_date: project?.end_date ?? '',
    total_cost: project?.total_cost ?? 0,
    initial_payment: project?.initial_payment ?? 0,
    status: project?.status ?? '',
    currency: project?.currency ?? 'USD'
  });

  const MAX_DESC_LEN = 600;
  const currenySymbol = selectCurrencies.find(
    c => c.value === formData.currency
  )?.symbol;

  const isDisabled =
    !formData.title ||
    !formData.description ||
    !formData.status ||
    !formData.project_owner ||
    !formData.project_manager ||
    !formData.start_date ||
    !formData.end_date ||
    !formData.total_cost ||
    !formData.initial_payment;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEditProjectModal(false);
  };

  return (
    <>
      <div
        aria-hidden
        className={cn(
          ' fixed min-h-screen w-full bg-black/40 backdrop-blur-sm top-0 left-0  transition-all duration-300 z-[99]',
          editProjectModal ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setEditProjectModal(false)}
      />

      <section
        role="dialog"
        aria-labelledby="make-payment"
        className={cn(
          'pt-2 pb-6 sm:py-6   flex flex-col w-[98%] sm:w-[95%]  min-[500px]:h-[750px] 2xl:h-[820px] max-w-[1000px] h-[600px] max-h-[1458px]  justify-between items-start bg-white backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none',
          editProjectModal
            ? '-translate-x-1/2 duration-700 opacity-100 sm:rounded-xl md:rounded-2xl'
            : '-translate-x-full duration-300 pointer-events-none'
        )}
      >
        <div className="flex items-center justify-between w-full border-b border-[#e1e1e1] pb-4 pl-4 px-4 md:pl-8 ">
          <h3 className="text-lg md:text-2xl font-medium text-header">
            Edit Project
          </h3>
          <button
            type="button"
            tabIndex={0}
            aria-label="Close"
            onClick={() => setEditProjectModal(false)}
            className="text-header focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full"
          >
            <X size={24} />
          </button>
        </div>
        <section className="w-full h-full overflow-x-hidden overflow-y-auto hide-scroll pt-2 sm:pt-4">
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col max-sm:gap-y-6 gap-y-4 lg:gap-y-6 py-4 xl:py-8 px-2 sm:px-4 md:px-6 lg:px-8 h-full items-start"
          >
            {/* Project Title */}
            <div className="flex flex-col  gap-y-2 w-full">
              <label
                htmlFor="project-title"
                className="text-sm sm:text-base font-medium"
              >
                Project Title
              </label>
              <input
                type="text"
                placeholder="Project title..."
                id="project-title"
                name="title"
                className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                value={formData.title}
                onChange={e =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
            </div>

            {/* Project Description */}
            <div className="flex flex-col  gap-y-2 w-full">
              <label
                htmlFor="description"
                className="text-sm sm:text-base font-medium"
              >
                Project Description
              </label>
              <textarea
                placeholder="Project description..."
                id="description"
                name="description"
                maxLength={MAX_DESC_LEN}
                className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light h-[150px] sm:h-[193px] resize-none sidebar-scroll text-sm sm:text-base"
                value={formData.description}
                onChange={e =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
              <WordCounter word={formData.description} length={MAX_DESC_LEN} />
            </div>
            {/* Project Owner */}
            <div className="flex flex-col  gap-y-2 w-full">
              <label
                htmlFor="project-owner"
                className="text-sm sm:text-base font-medium"
              >
                Project Owner
              </label>
              <input
                type="text"
                placeholder="Project owner..."
                id="project-owner"
                name="project_owner"
                className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                value={formData.project_owner}
                onChange={e =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
            </div>
            {/* Project Manager */}
            <div className="flex flex-col  gap-y-2 w-full">
              <label
                htmlFor="project-manager"
                className="text-sm sm:text-base font-medium"
              >
                Project Manager
              </label>
              <input
                type="text"
                placeholder="Project manager..."
                id="project-manager"
                name="project_manager"
                className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                value={formData.project_manager}
                onChange={e =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              />
            </div>

            {/* Project Dates */}
            <div className="flex w-full items-center gap-x-2 md:gap-x-4">
              <div className="flex flex-col  gap-y-2 w-full">
                <label
                  htmlFor="start-date"
                  className="text-sm sm:text-base font-medium"
                >
                  Start date
                </label>
                <input
                  type="date"
                  placeholder="12/12/2024"
                  id="start-date"
                  name="start_date"
                  className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                  value={formData.start_date}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value
                    })
                  }
                />
              </div>

              <div className="flex flex-col  gap-y-2 w-full">
                <label
                  htmlFor="end-date"
                  className="text-sm sm:text-base font-medium"
                >
                  End date
                </label>
                <input
                  type="date"
                  placeholder="12/12/2024"
                  id="end-date"
                  name="end_date"
                  className="w-full rounded-md border border-gray-200 md:py-4 py-2 px-2 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                  value={formData.end_date}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value
                    })
                  }
                />
              </div>
            </div>

            {/* Project Total Cost */}
            <div className="flex flex-col  gap-y-2 w-full relative">
              <label
                htmlFor="total_cost"
                className="text-sm sm:text-base font-medium"
              >
                Total cost of project
              </label>
              <div className="flex relative w-full items-center  ">
                <span className="absolute left-3 md:left-4 ">
                  {currenySymbol}
                </span>
                <input
                  type="number"
                  placeholder="Project total cost..."
                  id="total_cost"
                  name="total_cost"
                  className="w-full rounded-md border border-gray-200  py-2 md:py-4 px-2 pl-6 md:pl-7 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                  value={formData.total_cost}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value
                    })
                  }
                />

                <select
                  name="currency"
                  className="w-[80px] select-none py-1 outline-none bg-[#f8f4f6] rounded-lg px-1 uppercase absolute right-4 font-medium focus-visible:outline focus-visible:outline-primary-light focus-visible:outline-offset-4"
                  id="currency"
                  value={formData.currency}
                  onChange={e =>
                    setFormData({
                      ...formData,
                      [e.target.name]: e.target.value
                    })
                  }
                >
                  {selectCurrencies.map(currency => (
                    <option
                      key={currency.id}
                      value={currency.value}
                      className="hover:bg-[#becbd7]"
                      disabled={currency.value === formData.currency}
                    >
                      {currency.value}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Project Cost[Initial Final] Payment */}
            <div className="flex w-full items-center gap-x-2 md:gap-x-4">
              <div className="flex flex-col  gap-y-2 w-full">
                <label
                  htmlFor="initial_payment"
                  className="text-sm sm:text-base font-medium"
                >
                  Initial Payment
                </label>
                <div className="flex relative w-full items-center  ">
                  <span className="absolute left-3 md:left-4 ">
                    {currenySymbol}
                  </span>
                  <input
                    type="number"
                    placeholder="Project total cost..."
                    id="initial_payment"
                    name="initial_payment"
                    className="w-full rounded-md border border-gray-200  py-2 md:py-4 px-2 pl-6 md:pl-7 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                    value={formData.initial_payment}
                    onChange={e =>
                      setFormData({
                        ...formData,
                        [e.target.name]: e.target.value
                      })
                    }
                  />
                </div>
              </div>

              <div className="flex flex-col  gap-y-2 w-full">
                <label
                  htmlFor="final_payment"
                  className="text-sm sm:text-base font-medium"
                >
                  Final Payment
                </label>
                <div className="flex relative w-full items-center  ">
                  <span className="absolute left-3 md:left-4 ">
                    {currenySymbol}
                  </span>
                  <input
                    type="number"
                    placeholder="Project Final payment."
                    id="final_payment"
                    name="final_payment"
                    className="w-full rounded-md border border-gray-200  py-2 md:py-4 px-2 pl-6 md:pl-7 md:px-4 outline-none focus-visible:border focus-visible:border-primary-light"
                    value={
                      Number(formData.total_cost) -
                      Number(formData.initial_payment)
                    }
                    disabled
                  />
                </div>
              </div>
            </div>

            {/* Project Status */}
            <div className="flex flex-col  gap-y-2 w-full">
              <label
                htmlFor="project-status"
                className="text-sm sm:text-base font-medium"
              >
                Project Status
              </label>
              <select
                name="status"
                className="w-full rounded-md border border-gray-200  select-none md:py-4 py-2 px-2 md:px-4  outline-none  capitalize focus-visible:outline focus-visible:outline-primary-light focus-visible:outline-offset-4 "
                id="project-status"
                value={formData.status}
                onChange={e =>
                  setFormData({ ...formData, [e.target.name]: e.target.value })
                }
              >
                {selectStatus.map(status => (
                  <option
                    key={status.id}
                    value={status.value}
                    className="hover:bg-[#becbd7]"
                    disabled={status.value === formData.status}
                  >
                    {status.value.replace('-', ' ')}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex w-full  items-center gap-x-2 sm:gap-x-3 md:gap-x-6">
              <button
                type="button"
                tabIndex={0}
                aria-label="Attach Docs"
                onClick={() => setEditProjectModal(false)}
                className={cn(
                  'flex items-center gap-x-1 sm:gap-x-3 px-2 justify-center  rounded-lg border border-primary w-full min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px]  text-sm sm:text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
                )}
              >
                <Add size={24} />
                <span className="text-sm sm:text-base font-medium">
                  Attach Docs
                </span>
              </button>

              <button
                type="button"
                tabIndex={0}
                aria-label="Add Prototype"
                onClick={() => setEditProjectModal(false)}
                className={cn(
                  'flex items-center gap-x-1 sm:gap-x-3 justify-center  rounded-lg border border-primary w-full min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2  text-sm sm:text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
                )}
              >
                <Add size={24} />
                <span className="text-sm sm:text-base font-medium">
                  Add Prototype
                </span>
              </button>
            </div>

            <div className="flex w-full justify-center sm:justify-end items-center gap-x-2 sm:gap-x-3 md:gap-x-6 my-4 max-sm:gap-x-5">
              <button
                type="button"
                tabIndex={0}
                aria-label="Cancel"
                onClick={() => setEditProjectModal(false)}
                className={cn(
                  'rounded-lg border border-primary text-primary min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
                )}
              >
                Cancel
              </button>

              <button
                type="submit"
                tabIndex={0}
                disabled={isDisabled}
                aria-label="Remove"
                className={cn(
                  'rounded-lg bg-primary-light text-white min-[450px]:w-[178px] min-[450px]:h-[56px] h-[40px] px-2 max-[450px]:px-4 text-base hover:opacity-80 transition-opacity duration-300 disabled:cursor-not-allowed disabled:opacity-40 font-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light'
                )}
              >
                Save Changes
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default EditProjectModal;
