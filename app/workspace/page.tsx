'use client';

import { Suspense, useEffect, useState } from 'react';
import AdminNavbar from '@/components/navs/AdminNavbar';
import SidebarAdmin from '@/components/sidebars/SidebarAdmin';
import { RiStackLine } from 'react-icons/ri';
import ReactPaginate from 'react-paginate';
import Card from '@/components/workspace/card';
import { Workspaces } from '@/libs/constants';
import WorkSpaceSkelon from '@/components/skeleton/WorkspaceSkeleton';
import CreateaWorkspaceButton from '@/components/workspace/createWorkspace';

function Workspace() {
  const WorkSpacePerPage = 4;
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    window?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    setTotalPages(Math.ceil(Workspaces.length / 4));
  }, []);

  const startIndex = currentPage * WorkSpacePerPage;
  const endIndex = startIndex + WorkSpacePerPage;
  const subset = Workspaces.slice(startIndex, endIndex);
  return (
    <>
      {/* <SidebarAdmin /> */}
      <section className="w-full relative ">
        <AdminNavbar />
        <div className="flex w-full flex-col h-full relative max-container pt-12 md:pt-0">
          <div className="flex flex-row gap-x-3 items-center px-6 pt-8 lg:pb-5 lg:pt-6 pb-6 border border-b-2 border-l-0 border-r-0">
            <RiStackLine size={23} />
            <p className="text-[1rem] text-[#282828]">My work Space</p>
          </div>
          <CreateaWorkspaceButton />
          <section className="flex flex-col gap-y-6 w-full pb-6 min-h-screen px-5">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-[2rem] justify-between">
              {subset.map(space => (
                <Suspense key={space.id} fallback={<WorkSpaceSkelon />}>
                  <Card key={space.id} {...space} />
                </Suspense>
              ))}
            </div>
            <div className="flex w-full md:justify-end justify-center mt-6 md:pr-7">
              <ReactPaginate
                breakLabel="..."
                nextLabel="Next "
                previousLabel=" Previous"
                previousAriaLabel="Previous"
                nextAriaLabel="Next"
                pageCount={totalPages}
                onPageChange={handlePageChange}
                pageRangeDisplayed={3}
                marginPagesDisplayed={2}
                className="flex items-center justify-center  border border-gray-300 px-4 rounded-md select-none"
                pageClassName="w-8 h-8 flex justify-center items-center border-l border-r border-gray-300"
                previousClassName="pr-2 lg:pr-4 text-[#6B7280] font-medium"
                nextClassName="pl-2 lg:pl-4 text-[#6B7280] font-medium"
                pageLinkClassName="text-[#6B7280] w-full h-full flex items-center justify-center"
                activeClassName="bg-[#becbd7]  font-medium"
                renderOnZeroPageCount={null}
                disabledClassName="cursor-not-allowed opacity-70"
                disabledLinkClassName="cursor-not-allowed opacity-70"
              />
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default Workspace;
