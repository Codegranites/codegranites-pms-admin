'use client';

import { Input } from '@/components/ui/Input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '../../../components/ui/select';

import { Add, SearchNormal } from 'iconsax-react';
import { ListFilter, X } from 'lucide-react';
import CreateProjectModal from './CreateProjectModal';
import { useStateCtx } from '../../../context/StateContext';
import { cn } from '../../../utils/util';
import { FormInput } from '@/components/ui/FormInput';

type SelectProps = {
  id?: number;
  label: string;
  value: string;
};
const selectProjectFilters: SelectProps[] = [
  {
    id: 0,
    label: 'All Projects',
    value: 'all'
  },
  {
    id: 1,
    label: 'Completed Projects',
    value: 'completed'
  },
  {
    id: 2,
    label: 'In Progress',
    value: 'in-progress'
  },
  {
    id: 3,
    label: 'Pending Projects',
    value: 'pending'
  }
];

const ProjectNav = () => {
  const {
    setProjectSearchTerm,
    projectSearchTerm,
    setSelectedProjectFilter,
    selectedProjectFilter,
    setCreateProjectModal,
    createProjectModal
  } = useStateCtx();

  return (
    <>
      <CreateProjectModal />
      <div className="w-full md:h-[56px] flex justify-between min-[450px]:gap-x-4 items-center flex-col md:flex-row gap-y-4 sm:pt-4">
        <div className="flex w-full max-w-1/2 relative items-center">
          <div className="flex items-center w-full relative">
            <FormInput
              tabIndex={0}
              onChange={e => setProjectSearchTerm(e.target.value)}
              value={projectSearchTerm}
              type="text"
              placeholder="Search via project titles..."
              className=" w-full h-[40px] dark:border-primary-light  min-[900px]:h-[56px] outline-none focus-visible:border focus-visible:border-primary-light dark:bg-transparent text-black dark:text-gray-200 border text-md font-medium rounded-md focus-visible:ring-primary-light"
            />
            {projectSearchTerm.length === 0 && (
              <span className="absolute right-3 text-header dark:text-gray-200">
                <SearchNormal size={18} />
              </span>
            )}
          </div>

          <button
            type="button"
            tabIndex={0}
            aria-label="Clear search"
            onClick={() => setProjectSearchTerm('')}
            className={cn(
              'absolute right-2 transition-opacity duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full',
              {
                'opacity-0 duration-300': !projectSearchTerm
              }
            )}
          >
            <X size={18} className="text-header dark:text-gray-200" />
          </button>
        </div>
        <div className="flex w-full sm:max-w-1/2 justify-between gap-x-2 ">
          <div className="flex items-center gap-x-1 text-[#535353] w-full ">
            {/* <FilterIcon className="sm:hidden" color="#535353" /> */}
            <ListFilter color="#282828 sm:hidden" size={18} />
            <span className="hidden sm:inline-block w-[57px] text-sm text-header dark:text-gray-200">
              Filter by
            </span>

            <Select
              value={selectedProjectFilter}
              onValueChange={value => setSelectedProjectFilter(value)}
            >
              <SelectTrigger className="w-[150px] select-none h-full py-3 text-header dark:text-gray-200 border-primary-light">
                <SelectValue
                  placeholder={
                    selectProjectFilters.find(
                      filter => filter.value === selectedProjectFilter
                    )?.label
                  }
                />
              </SelectTrigger>
              <SelectContent className="backdrop-blur-xl bg-white/80 dark:bg-primary-dark border-primary-light">
                <SelectGroup>
                  {selectProjectFilters.map(filter => (
                    <SelectItem
                      key={filter.id}
                      value={filter.value}
                      className="hover:bg-[#becbd7] dark:hover:bg-primary text-header dark:text-gray-200"
                    >
                      {filter.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <button
            onClick={() => setCreateProjectModal(true)}
            tabIndex={0}
            aria-label="Create Project"
            aria-haspopup
            aria-expanded={createProjectModal}
            id="create-project"
            type="button"
            className="flex w-full max-w-[170px] min-h-[56px] sm:w-[214px] lg:w-full lg:max-w-[250px] items-center lg:gap-x-5 gap-x-2 bg-primary-light  text-white rounded-lg hover:opacity-80 transition-opacity duration-300 text-sm sm:text-base justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <Add size={24} />
            New Project
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectNav;
