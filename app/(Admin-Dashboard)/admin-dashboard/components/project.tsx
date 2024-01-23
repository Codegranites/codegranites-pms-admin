'use client';

import React, { useState } from 'react';
import { DocumentFilter, Briefcase, Add } from 'iconsax-react';
import Image from 'next/image';
import Button from '@ui/Button';
import CreateProjectModal from '@/components/admin/projects/CreateProjectModal';
import { useStateCtx } from '@/context/StateContext';

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { setCreateProjectModal, createProjectModal } = useStateCtx();

  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <section className="flex flex-col   lg:border-r lg:border-l pb-6 lg:pb-0 border-[#e1e1e1] dark:border-primary-light h-full relative items-center  lg:h-[816px]">
      <div className="flex w-full sm:px-5 items-center justify-between  border-b border-t border-[#e1e1e1] dark:border-primary-light h-[56px] relative sm:text-xl  text-header font-medium">
        <div className="flex gap-2 items-center justify-center text-header dark:text-gray-200">
          <Briefcase size="32" />
          <span>Available Projects</span>
        </div>
      </div>
      <Image
        src="/dashboard/project.png"
        alt="empty project"
        width={450}
        height={350}
      />
      <p className="text-header dark:text-gray-300 sm:font-medium mt-5 mb-5 sm:text-xl">
        You have no projects yet!
      </p>
      <div className="flex w-full justify-center">
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
        <CreateProjectModal />
      </div>
    </section>
  );
};

export default Project;
