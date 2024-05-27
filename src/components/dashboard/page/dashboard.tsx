'use client';

import SuperAdminProject from '../../super-admin-project/super-admin-project';
import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { People } from 'iconsax-react';
import ClientCardAdmin from '../../admin/card/ClientCardAdmin';
import { ADMIN_CLIENTS } from '../../../libs/clients';

const AdminClientContainer = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const itemsPerPage = 6;

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const subset = ADMIN_CLIENTS.slice(startIndex, endIndex);

  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    window?.scrollTo({ top: 0, behavior: 'smooth' });
  };
  useEffect(() => {
    setTotalPages(Math.ceil(ADMIN_CLIENTS.length / 6));
  }, []);

  return ADMIN_CLIENTS.length > 0 ? (
    <section className="flex flex-col gap-y-6 w-full pb-6 min-h-screen">
      <section className="rounded-xl  w-full h-full sm:border border-gray-200">
        <div className="flex w-full items-center justify-start border-b border-gray-200 py-5 pl-5 text-header">
          <h3 className="flex gap-x-4 items-center">
            <People />
            <span className="text-header font-semibold">All Clients</span>
          </h3>
        </div>
        <section className=" min-[1162px]:py-[43px] min-[1162px]:px-[70px] sm:p-7 w-full h-full sm:border border-gray-200">
          <div className="w-full min-h-[941px] grid grid-cols-1 min-[929px]:grid-cols-2 gap-x-4 lg:gap-x-6 xl:gap-x-8  place-content-start place-items-center gap-y-16 max-[929px]:gap-y-8">
            {subset.map(project => (
              <ClientCardAdmin key={project.id} {...project} />
            ))}
          </div>
          <div className="flex w-full justify-end">
            <ReactPaginate
              breakLabel="..."
              nextLabel="Next &rarr;"
              previousLabel="&larr; Previous"
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
      </section>
    </section>
  ) : (
    <SuperAdminProject />
  );
};

export default AdminClientContainer;
