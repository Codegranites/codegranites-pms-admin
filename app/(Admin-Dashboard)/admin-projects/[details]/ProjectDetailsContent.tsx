'use client';

import { useState } from 'react';
import { PROJECTS } from '../../../../libs/projects';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next-nprogress-bar';
import ProjectDoc from './ProjectDoc';
import ProjectDetailsSection from './ProjectDetailsSection';
import Link from 'next/link';
import { DocumentDownload, Play, Share } from 'iconsax-react';

import ProjectMilestones from './ProjectMilestones';
import NotFound from '../../../../components/admin/NotFound';
import ProjectComments from './ProjectComments';

const ProjectDetailsContent = ({ id }: { id?: string }) => {
  const router = useRouter();
  const [docsNum, setDocsNum] = useState(5);
  if (!id) {
    return <NotFound text="Project Not Found" />;
  }
  const project = PROJECTS.find(project => project.id === Number(id));

  // Mock docs
  const docs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <>
      <div className="flex w-full justify-start">
        <button
          tabIndex={0}
          aria-label="Go Back"
          onClick={() => router.back()}
          type="button"
          className="flex font-medium items-center gap-x-1 text-header focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light pr-1 pt-4"
        >
          <ChevronLeft aria-hidden />
          <span>Back</span>
        </button>
      </div>
      <section className="w-full flex flex-col lg:flex-row justify-between gap-4 sm:gap-6 lg:gap-8 xl:gap-12  pb-16 items-center lg:items-start min-h-screen pt-4 lg:pl-4  relative">
        <div className="flex w-full flex-col max-w-[687px] gap-y-4 lg:gap-y-6 ">
          <ProjectDetailsSection project={project} />
          {/* Documents */}
          <div className="flex flex-col w-full py-3 sm:p-3  sm:rounded-xl sm:border max-sm:border-t border-[#e1e1e1] h-full">
            <h3 className="text-lg font-semibold text-header  pb-4">
              Project Documents
            </h3>
            <div className="flex flex-col h-full max-h-[250px] overflow-y-auto sidebar-scroll w-full">
              <div className="flex flex-col gap-y-4 px-1">
                {docs.slice(0, docsNum).map(num => (
                  <ProjectDoc key={num} />
                ))}
              </div>
              <div className="flex">
                <button
                  type="button"
                  className="text-primary underline text-sm font-medium pt-4 capitalize"
                  onClick={() => {
                    if (docsNum === docs.length) {
                      setDocsNum(5);
                      return;
                    }
                    setDocsNum(docs.length);
                  }}
                >
                  {docsNum === docs.length ? ' See less' : 'See All'}
                </button>
              </div>
            </div>
          </div>
          {/* Prototype */}
          <div className="flex flex-col gap-y-4 w-full px-3 py-6 border border-[#e1e1e1] sm:rounded-xl  ">
            <h3 className="text-lg font-semibold text-header border-b border-[#e1e1e1] pb-2">
              Project Prototype
            </h3>

            <div className="flex w-full flex-col gap-y-4 items-center">
              <div className="flex justify-start w-full max-w-[559px] items-center gap-x-2">
                <span className="font-medium max-[364px]:text-sm">
                  Prototype Link:
                </span>
                <Link href="" className="text-primary text-sm">
                  https://my-prototype.com
                </Link>
              </div>

              <div className="relative h-[236px] w-full max-w-[559px] bg-[#090909] flex items-center justify-center">
                <button
                  type="button"
                  className="w-24 h-24 border-2 border-gray-100 rounded-full flex items-center justify-center"
                >
                  <Play variant="Bold" size={64} color="#f1f1f1" />
                </button>
              </div>
              <div className="flex w-full items-center justify-end gap-x-3">
                <button
                  type="button"
                  className="flex items-center gap-x-1 text-sm max-[359px]:text-xs"
                >
                  {' '}
                  <Share size={16} />
                  <span>Share</span>
                </button>

                <button
                  type="button"
                  className="flex items-center gap-x-1 text-sm max-[359px]:text-xs"
                >
                  {' '}
                  <DocumentDownload size={16} />
                  <span>Download</span>
                </button>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex">
            <ProjectComments projectId={String(id)} />
          </div>
        </div>

        {/* MileStone */}
        <ProjectMilestones />

        {/* Comments section for small screens */}
        <div className="w-full px-1 min-[400px]:px-2 lg:hidden">
          <ProjectComments projectId={String(id)} />
        </div>
      </section>
    </>
  );
};

export default ProjectDetailsContent;
