'use client';

import { Input } from '@/components/ui/Input';

import { Add, FolderAdd, SearchNormal, UserAdd } from 'iconsax-react';

import { useState } from 'react';
import { useStateCtx } from '../../../context/StateContext';

import { MdOutlineMail } from 'react-icons/md';
import { FormInput } from '@/components/ui/FormInput';

const DashNav = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const {
    createClientModal,
    setCreateClientModal,
    createProjectModal,
    setCreateProjectModal
  } = useStateCtx();

  return (
    <div className="w-full h-[40px]  min-[900px]:h-[56px] flex items-center justify-between gap-x-2 sm:gap-x-4 px-2 sm:px-4">
      <div className="flex w-full sm:max-w-[413px] justify-center">
        <div className="flex items-center w-full relative">
          <FormInput
            tabIndex={0}
            onChange={e => setSearchTerm(e.target.value)}
            value={searchTerm}
            type="text"
            placeholder="Enter Business Email Address"
            className=" w-full h-[40px] dark:border-primary-light  min-[900px]:h-[56px] outline-none focus-visible:border focus-visible:border-primary-light dark:bg-transparent text-black dark:text-gray-200 border text-md font-medium rounded-md focus-visible:ring-primary-light"
          />
          <span className="absolute right-3 text-header dark:text-gray-200">
            <SearchNormal size={18} />
          </span>
        </div>
      </div>

      <div className="min-[900px]:w-full flex items-center max-[900px]:justify-between gap-x-2 sm:gap-x-4">
        <button
          onClick={() => setCreateProjectModal(true)}
          tabIndex={0}
          aria-label="Create Project"
          aria-haspopup
          aria-expanded={createProjectModal}
          id="create-project"
          type="button"
          className=" flex h-[40px] w-[56px] min-[900px]:w-full min-[900px]:max-w-[170px] min-[900px]:min-h-[56px] min-[900px]:min-w-[214px]  lg:max-w-[250px] items-center lg:gap-x-5 gap-x-2 bg-primary-light  text-white rounded-lg hover:opacity-80 transition-opacity duration-300 text-sm sm:text-base justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <Add size={24} className="hidden min-[900px]:inline" />
          <FolderAdd size={18} className=" min-[900px]:hidden" />
          <span className="hidden min-[900px]:inline">New Project</span>
        </button>
        <button
          onClick={() => setCreateClientModal(true)}
          tabIndex={0}
          aria-label="Create Client"
          aria-haspopup
          aria-expanded={createClientModal}
          id="create-client"
          type="button"
          className=" flex h-[40px] w-[56px] min-[900px]:w-full min-[900px]:max-w-[170px] min-[900px]:min-h-[56px] min-[900px]:min-w-[214px]  lg:max-w-[250px] items-center lg:gap-x-5 gap-x-2  border border-primary dark:border-primary-light dark:text-gray-300 text-primary  rounded-lg hover:opacity-80 transition-opacity duration-300 text-sm sm:text-base justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <Add size={24} className="hidden min-[900px]:inline" />
          <UserAdd size={18} className=" min-[900px]:hidden" />
          <span className="hidden min-[900px]:inline">Add Client</span>
        </button>
      </div>
    </div>
  );
};

export default DashNav;
