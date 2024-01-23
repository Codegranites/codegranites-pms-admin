'use client';

import SuperAdminProject from '@/components/super-admin-project/super-admin-project';
import { Suspense, useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { People } from 'iconsax-react';
import ClientCardAdmin from '../card/ClientCardAdmin';
import { ADMIN_CLIENTS, AdminClientCardProps } from '@/libs/clients';
import { useStateCtx } from '@/context/StateContext';
import { cn } from '@/utils/util';
import ProjectNotFound from '../projects/ProjectNotFound';
import AdminCardSkelon from '@/components/skeleton/AdminCardSkeleton';

const AdminClientContainer = () => {
  const { clientSearchTerm, selectedClientFilter } = useStateCtx();
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [filteredClients, setFilteredClients] = useState(
    [] as AdminClientCardProps[]
  );

  const itemsPerPage = 6;

  useEffect(() => {
    const searchTerm =
      clientSearchTerm && clientSearchTerm.trim().toLowerCase();
    const filtered = ADMIN_CLIENTS.filter(client => {
      if (
        (!(searchTerm.length > 1) && selectedClientFilter === 'all-clients') ||
        (searchTerm.length > 1 &&
          selectedClientFilter === 'all-clients' &&
          client.name.toLowerCase().includes(searchTerm))
      ) {
        return true;
      }
      if (searchTerm.length > 1) {
        if (!client.name.toLowerCase().includes(searchTerm)) {
          return false;
        }
      }
      // if (selectedClientFilter && !(client.status === selectedClientFilter)) {
      // 	return false;
      // }
      return true;
    });

    setFilteredClients(filtered);
    const suggestions = ADMIN_CLIENTS.map(client => client.name).filter(name =>
      name.toLowerCase().includes(searchTerm)
    );
  }, [selectedClientFilter, clientSearchTerm]);

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = filteredClients.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    window?.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    setTotalPages(Math.ceil(ADMIN_CLIENTS.length / 6));
  }, []);
  useEffect(() => {
    setTotalPages(Math.ceil(filteredClients.length / 6));
  }, [filteredClients, clientSearchTerm]);

  return ADMIN_CLIENTS.length > 0 ? (
    <section className="flex flex-col gap-y-6 w-full pb-6 min-h-screen">
      <div
        className={cn('font-medium flex items-center gap-x-1', {
          hidden: clientSearchTerm.length < 3
        })}
      >
        <span
          className={cn(
            'text-lg font-semibold text-gray-400 dark:text-gray-100',
            {
              'text-primary-light dark:text-[#28affd]': subset.length > 0
            }
          )}
        >
          {subset.length}
        </span>
        <p className={cn('font-medium text-header dark:text-gray-200')}>
          {subset.length > 0
            ? 'Search Result for'
            : subset.length > 1
              ? 'Search Results for'
              : 'No Results for'}{' '}
          <b className="dark:text-yellow-400 dark:bg-black/80">
            &quot;{clientSearchTerm}&quot;
          </b>
        </p>
      </div>
      <section className="rounded-xl  w-full h-full sm:border border-gray-200 dark:border-primary-light">
        <div className="flex w-full items-center justify-start border-b border-gray-200 dark:border-primary-light py-5 pl-5 text-header dark:text-gray-200">
          <h3 className="flex gap-x-4 items-center">
            <People />
            <span className="text-header dark:text-gray-200 font-semibold">
              All Clients
            </span>
          </h3>
        </div>
        <section
          className={cn(
            ' min-[1300px]:py-[43px] min-[1300px]:px-[70px] pt-7 sm:p-7 w-full h-full sm:border border-gray-200 dark:border-primary-light'
          )}
        >
          <div
            className={cn(
              'w-full min-h-[941px] grid grid-cols-1 min-[929px]:grid-cols-2 gap-x-4 lg:gap-x-6  place-content-start place-items-center gap-y-16 max-[929px]:gap-y-8 mb-6 min-[1139px]:gap-x-1 min-[1220px]:gap-x-4',
              {
                hidden: subset.length === 0
              }
            )}
          >
            {subset.map(project => (
              <Suspense key={project.id} fallback={<AdminCardSkelon />}>
                <ClientCardAdmin {...project} />
              </Suspense>
            ))}
          </div>
          {subset.length === 0 && (
            <div className=" w-full flex justify-center  h-full ">
              <ProjectNotFound text="No client(s) found" />
            </div>
          )}
          <div className="flex w-full justify-end mt-6">
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next "
              previousLabel=" Previous"
              previousAriaLabel="Previous"
              nextAriaLabel="Next"
              pageCount={totalPages}
              // onPageChange={({ selected }) => setCurrentPage(selected)}
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
        </section>
      </section>
    </section>
  ) : (
    <SuperAdminProject />
  );
};

export default AdminClientContainer;
