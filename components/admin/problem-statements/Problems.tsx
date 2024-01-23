'use client';
import Button from '@ui/Button';
import {
  Add,
  ArrowDown2,
  ArrowRight2,
  AttachSquare,
  MessageEdit,
  Trash
} from 'iconsax-react';

import React, { useState } from 'react';
import { ProblemsDataProps } from '../../../app/(Admin-Dashboard)/admin-problem-statements/page';
import EditProblemStatement from './EditProblemStatement';
import AttachNewFile from './AttachNewFile';
import DeleteProblem from './DeleteProblem';
import { cn } from '@/utils/util';

interface ProblemsProps {
  openNewIdeaModal: () => void;
  problemData: ProblemsDataProps[];
}

const Problems: React.FC<ProblemsProps> = ({
  openNewIdeaModal,
  problemData
}) => {
  const [openProblem, setOpenProblem] = useState<number | null>(null);
  const [openEditProblem, setOpenEditProblem] = useState<boolean>(false);
  const [openDeleteProblem, setOpenDeleteProblem] = useState<boolean>(false);
  const [openAttachFile, setOpenAttachFile] = useState<boolean>(false);

  function handleProblemOpen(id: number) {
    setOpenProblem(prevIndex => (prevIndex === id ? null : id));
  }
  return (
    <div className="w-full flex flex-col">
      <div className="w-fit self-end mr-12">
        <Button
          onClick={openNewIdeaModal}
          leftIcon={<Add />}
          className="text-sm leading-6 font-medium rounded-lg my-4 py-4 px-10 dark:bg-primary-light"
        >
          New Idea
        </Button>
      </div>
      <ul className="border-t dark:border-t-primary-light w-full">
        {problemData &&
          problemData?.map(problem => (
            <li key={problem.id} className="transition-all duration-500">
              <div
                className={`flex items-center justify-between pl-6 pr-12 py-4 border-b dark:border-b-primary-light text-sm leading-6 font-medium hover:bg-[#EAEEF2] group/problem cursor-pointer:
                				${
                          openProblem === problem.id &&
                          'bg-[#EAEEF2] text-header dark:text-gray-700'
                        }`}
              >
                <div
                  className={cn(
                    'flex items-center gap-x-2 ',
                    openProblem === problem.id
                      ? ''
                      : 'text-header dark:text-gray-300 group-hover/problem:text-header'
                  )}
                >
                  <ArrowRight2
                    size={24}
                    onClick={() => handleProblemOpen(problem.id)}
                    className={`${
                      openProblem === problem.id ? 'rotate-90' : ''
                    } cursor-pointer`}
                  />
                  <p>{problem.title}</p>
                  <p className="font-normal">
                    {problem.description.length > 40
                      ? problem.description.slice(0, 50) + '......'
                      : problem.description}
                  </p>
                </div>
                <div
                  className={cn(
                    'text-header dark:text-gray-300 group-hover/problem:text-header',
                    openProblem === problem.id &&
                      'text-header dark:text-gray-700'
                  )}
                >
                  {problem.createdAt}
                </div>

                {openProblem !== problem.id && (
                  <div className="flex items-center gap-x-3">
                    <button
                      onClick={() => setOpenEditProblem(true)}
                      className="flex items-center gap-x-2 text-primary-light dark:text-[#23a8d4]"
                    >
                      <MessageEdit />
                      <span>Edit</span>
                    </button>
                    <button
                      onClick={() => setOpenDeleteProblem(true)}
                      className="flex items-center gap-x-2 text-[#FF3333]"
                    >
                      <Trash color={'#FF3333'} variant="Bold" />
                      <span>Delete</span>
                    </button>
                  </div>
                )}
              </div>

              {openProblem === problem.id && (
                <div className="border border-primary-light px-11 transition-all duration-500 text-sm font-medium">
                  <div
                    className={`flex items-center justify-between py-[18px] border-b border-[#E1E1E1] leading-6 font-medium`}
                  >
                    <div className="flex items-center gap-x-4 text-header dark:text-gray-200">
                      <p>Owner: {problem.owner}</p>
                      <p className="text-xs text-header dark:text-gray-200 font-normal">
                        Created {problem.createdAt}
                      </p>
                      <p className="flex items-center gap-x-2 text-primary-light dark:text-[#23a8d4]">
                        <MessageEdit />
                        <span>{problem.createdAt}</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-x-3">
                      <button
                        onClick={() => setOpenAttachFile(true)}
                        className='flex items-center gap-x-2 border border-["#E1E1E1] px-[9px] rounded-lg mr-10 text-xs'
                      >
                        <AttachSquare className="text-header dark:text-gray-300" />
                        <p className="text-[#33A45E] text-left">
                          Attach <br />
                          new files
                        </p>
                      </button>
                      <button
                        onClick={() => setOpenEditProblem(true)}
                        className="flex items-center gap-x-2 text-primary-light dark:text-[#23a8d4]"
                      >
                        <MessageEdit />
                        <span>Edit</span>
                      </button>
                      <button
                        onClick={() => setOpenDeleteProblem(true)}
                        className="flex items-center gap-x-2 text-[#FF3333]"
                      >
                        <Trash color={'#FF3333'} variant="Bold" />
                        <span>Delete</span>
                      </button>
                    </div>
                  </div>
                  <p className="py-4 text-justify text-header dark:text-gray-300">
                    {problem.description}
                  </p>
                </div>
              )}

              {openEditProblem && (
                <EditProblemStatement
                  title={problem.title}
                  description={problem.description}
                  isOpen={openEditProblem}
                  onClose={() => setOpenEditProblem(false)}
                />
              )}

              {openAttachFile && (
                <AttachNewFile
                  title={problem.title}
                  isOpen={openAttachFile}
                  onClose={() => setOpenAttachFile(false)}
                />
              )}

              {openDeleteProblem && (
                <DeleteProblem
                  isOpen={openDeleteProblem}
                  onClose={() => setOpenDeleteProblem(false)}
                />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Problems;
