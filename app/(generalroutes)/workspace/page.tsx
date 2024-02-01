'use client';

import { Suspense, useEffect, useState } from 'react';
import LoadingSpinner from '@/components/loaders/LoadingSpinner';
import { RiStackLine } from 'react-icons/ri';
import ReactPaginate from 'react-paginate';
import Card from '@/components/workspace/card';
import { Workspaces } from '@/libs/constants';
import WorkSpaceSkelon from '@/components/skeleton/WorkspaceSkeleton';
import CreateaWorkspaceButton from '@/components/workspace/createWorkspace';
import { getWorkspace } from '@/actions/workspace';
import { WorkspaceType } from '@/types';

async function Workspace() {
  const WorkSpacePerPage = 4;
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [workspaces, setWorkspaces] = useState<WorkspaceType[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    window?.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const result = await getWorkspace();
        if (result.success) {
          setWorkspaces(result.workspace);
          setError(null);
        } else {
          setError(result.error || 'Unknown error occurred.');
        }
      } catch (error) {
        console.error('An error occurred while fetching data:', error);
        setError('An unexpected error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setTotalPages(Math.ceil(Workspaces.length / 4));
  }, []);

  const startIndex = currentPage * WorkSpacePerPage;
  const endIndex = startIndex + WorkSpacePerPage;
  const subset = workspaces.slice(startIndex, endIndex);
  return (
    <>
      <section className="w-full relative ">
        <div className="flex w-full flex-col h-full relative max-container pt-12 md:pt-0">
          <div className="flex flex-row gap-x-3 px-6 pt-8 lg:pb-5 lg:pt-6 pb-6 dark:border-primary-light border border-b-2 border-l-0 border-r-0">
            <RiStackLine size={23} className="text-header dark:text-gray-300" />
            <p className="text-[1rem] text-header dark:text-gray-100">
              My work Space
            </p>
          </div>

          <CreateaWorkspaceButton />
          <section className="flex flex-col w-full pb-6 min-h-screen text-center dark:text-white">
            {loading && <LoadingSpinner />}
            {!error && subset && !loading && (
              <div className="w-full min-h-screen grid grid-cols-1 min-[929px]:grid-cols-2 gap-x-3 lg:gap-x-5  place-content-start place-items-center gap-y-16 max-[929px]:gap-y-8 mb-6 min-[1139px]:gap-x-1 min-[1220px]:gap-x-4 mt-5">
                {subset.length === 0 ? (
                  <p className="text-2xl mt-6">No workspaces available.</p>
                ) : (
                  subset.map(workspace => (
                    <Suspense
                      key={workspace._id}
                      fallback={<WorkSpaceSkelon />}
                    >
                      <Card key={workspace._id} {...workspace} />
                    </Suspense>
                  ))
                )}
              </div>
            )}

            {error && (
              <div className="grid place-items-center dark:text-white">
                <div className="text-center ">
                  <h3 className="text-4xl">{error}</h3>
                  <p className="text-2xl">
                    ⚒️ We are currently working on this ⚒️
                  </p>
                </div>
              </div>
            )}

            {subset.length !== 0 && !loading && !error && totalPages > 1 && (
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
                  className="flex items-center justify-center  border border-gray-300 dark:border-primary-light px-4 rounded-md select-none"
                  pageClassName="w-8 h-8 flex justify-center items-center border-l border-r border-gray-300 dark:border-[#28affd]"
                  previousClassName="pr-2 lg:pr-4 text-[#6B7280] dark:text-[#28affd] font-medium"
                  nextClassName="pl-2 lg:pl-4 text-[#6B7280] dark:text-[#28affd] font-medium"
                  pageLinkClassName="text-[#6B7280] dark:text-[#28affd] w-full h-full flex items-center justify-center"
                  activeClassName="bg-[#becbd7] dark:bg-[#28affd38]  font-medium"
                  renderOnZeroPageCount={null}
                  disabledClassName="cursor-not-allowed opacity-70"
                  disabledLinkClassName="cursor-not-allowed opacity-70"
                />
              </div>
            )}
          </section>
        </div>
      </section>
    </>
  );
}

export default Workspace;
