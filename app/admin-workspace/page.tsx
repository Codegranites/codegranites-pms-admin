'use client';
import AdminNavbar from "@/components/navs/AdminNavbar";
import SidebarAdmin from "@/components/sidebars/SidebarAdmin";
import Image from "next/image";
import {RiStackLine} from 'react-icons/ri'
import workspace from '../../public/workspace/frame.png'
import ReactPaginate from "react-paginate";
import { useState } from "react";

function Workspace() {

    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
    window?.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div>
        <SidebarAdmin />
      <section className="w-full relative  md:pl-[96px] min-[1140px]:pl-[270px]">
        <AdminNavbar />
        <div className="flex w-full flex-col h-full relative max-container pt-12 md:pt-0">
            <div className="flex flex-row gap-x-3 items-center px-6 pt-8 lg:pb-5 lg:pt-6 pb-6 border border-b-2 border-l-0 border-r-0">
                <RiStackLine size={23} />
                <p className="text-[1rem] text-[#282828]">My work Space</p>
            </div>
            {/* <div className="flex flex-col justify-center items-center py-[6rem] lg:py-[4rem]">
                <Image src={workspace} alt="" width={421} height={342}/>
                <p className="text-[#282828] text-[1.13rem] text-center leading-10">No workspace reated yet!</p>
            </div> */}
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 p-[2rem]">
                {/* Box */}
                <div className="rounded-lg border p-4 border-[#E1E1E1]">
                    <div className="flex flex-row pb-4 items-center gap-x-3">
                        <p className="bg-[#4B97ED] p-1 text-[#fff] text-[1rem] rounded-full">CP</p>
                        <h2 className="text-[1.5rem] leading-10 text-[#282828] font-bold">CodeGranites</h2>
                    </div>
                    <div className="pb-4">
                        <p className="text-[1rem] text-[#282828] font-normal">Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.</p>
                    </div>
                    <div>
                        <p className="text-[1rem] text-[#282828] font-normal pt-2 pb-4">Projects: 5</p>
                    </div>
                    <div>
                        <button className="border border-[#052C42] rounded-lg px-4 py-2 w-[12rem]">Open</button>
                    </div>
                </div>

                {/* Box */}
                <div className="rounded-lg border p-4 border-[#E1E1E1]">
                    <div className="flex flex-row pb-4 items-center gap-x-3">
                        <p className="bg-[#F3DE8A] p-1 text-[#fff] text-[1rem] rounded-full">CP</p>
                        <h2 className="text-[1.5rem] leading-10 text-[#282828] font-bold">CodeGranites</h2>
                    </div>
                    <div className="pb-4">
                        <p className="text-[1rem] text-[#282828] font-normal">Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.</p>
                    </div>
                    <div>
                        <p className="text-[1rem] text-[#282828] font-normal pt-2 pb-4">Projects: 5</p>
                    </div>
                    <div>
                        <button className="border border-[#052C42] rounded-lg px-4 py-2 w-[12rem]">Open</button>
                    </div>
                </div>

                {/* Box */}
                <div className="rounded-lg border p-4 border-[#E1E1E1]">
                    <div className="flex flex-row pb-4 items-center gap-x-3">
                        <p className="bg-[#B493A3] p-1 text-[#fff] text-[1rem] rounded-full">CP</p>
                        <h2 className="text-[1.5rem] leading-10 text-[#282828] font-bold">CodeGranites</h2>
                    </div>
                    <div className="pb-4">
                        <p className="text-[1rem] text-[#282828] font-normal">Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.</p>
                    </div>
                    <div>
                        <p className="text-[1rem] text-[#282828] font-normal pt-2 pb-4">Projects: 5</p>
                    </div>
                    <div>
                        <button className="border border-[#052C42] rounded-lg px-4 py-2 w-[12rem]">Open</button>
                    </div>
                </div>

                {/* Box */}
                <div className="rounded-lg border p-4 border-[#E1E1E1]">
                    <div className="flex flex-row pb-4 items-center gap-x-3">
                        <p className="bg-[#80BD92] p-1 text-[#fff] text-[1rem] rounded-full">CP</p>
                        <h2 className="text-[1.5rem] leading-10 text-[#282828] font-bold">CodeGranites</h2>
                    </div>
                    <div className="pb-4">
                        <p className="text-[1rem] text-[#282828] font-normal">Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.</p>
                    </div>
                    <div>
                        <p className="text-[1rem] text-[#282828] font-normal pt-2 pb-4">Projects: 5</p>
                    </div>
                    <div>
                        <button className="border border-[#052C42] rounded-lg px-4 py-2 w-[12rem]">Open</button>
                    </div>
                </div>


                {/* Box */}
                <div className="rounded-lg border p-4 border-[#E1E1E1]">
                    <div className="flex flex-row pb-4 items-center gap-x-3">
                        <p className="bg-[#80BD92] p-1 text-[#fff] text-[1rem] rounded-full">CP</p>
                        <h2 className="text-[1.5rem] leading-10 text-[#282828] font-bold">CodeGranites</h2>
                    </div>
                    <div className="pb-4">
                        <p className="text-[1rem] text-[#282828] font-normal">Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.</p>
                    </div>
                    <div>
                        <p className="text-[1rem] text-[#282828] font-normal pt-2 pb-4">Projects: 5</p>
                    </div>
                    <div>
                        <button className="border border-[#052C42] rounded-lg px-4 py-2 w-[12rem]">Open</button>
                    </div>
                </div>


                {/* Box */}
                <div className="rounded-lg border p-4 border-[#E1E1E1]">
                    <div className="flex flex-row pb-4 items-center gap-x-3">
                        <p className="bg-[#80BD92] p-1 text-[#fff] text-[1rem] rounded-full">CP</p>
                        <h2 className="text-[1.5rem] leading-10 text-[#282828] font-bold">CodeGranites</h2>
                    </div>
                    <div className="pb-4">
                        <p className="text-[1rem] text-[#282828] font-normal">Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.</p>
                    </div>
                    <div>
                        <p className="text-[1rem] text-[#282828] font-normal pt-2 pb-4">Projects: 5</p>
                    </div>
                    <div>
                        <button className="border border-[#052C42] rounded-lg px-4 py-2 w-[12rem]">Open</button>
                    </div>
                </div>


                {/* Box */}
                <div className="rounded-lg border p-4 border-[#E1E1E1]">
                    <div className="flex flex-row pb-4 items-center gap-x-3">
                        <p className="bg-[#80BD92] p-1 text-[#fff] text-[1rem] rounded-full">CP</p>
                        <h2 className="text-[1.5rem] leading-10 text-[#282828] font-bold">CodeGranites</h2>
                    </div>
                    <div className="pb-4">
                        <p className="text-[1rem] text-[#282828] font-normal">Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.</p>
                    </div>
                    <div>
                        <p className="text-[1rem] text-[#282828] font-normal pt-2 pb-4">Projects: 5</p>
                    </div>
                    <div>
                        <button className="border border-[#052C42] rounded-lg px-4 py-2 w-[12rem]">Open</button>
                    </div>
                </div>


                {/* Box */}
                <div className="rounded-lg border p-4 border-[#E1E1E1]">
                    <div className="flex flex-row pb-4 items-center gap-x-3">
                        <p className="bg-[#80BD92] p-1 text-[#fff] text-[1rem] rounded-full">CP</p>
                        <h2 className="text-[1.5rem] leading-10 text-[#282828] font-bold">CodeGranites</h2>
                    </div>
                    <div className="pb-4">
                        <p className="text-[1rem] text-[#282828] font-normal">Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.</p>
                    </div>
                    <div>
                        <p className="text-[1rem] text-[#282828] font-normal pt-2 pb-4">Projects: 5</p>
                    </div>
                    <div>
                        <button className="border border-[#052C42] rounded-lg px-4 py-2 w-[12rem]">Open</button>
                    </div>
                </div>


                {/* Box */}
                <div className="rounded-lg border p-4 border-[#E1E1E1]">
                    <div className="flex flex-row pb-4 items-center gap-x-3">
                        <p className="bg-[#80BD92] p-1 text-[#fff] text-[1rem] rounded-full">CP</p>
                        <h2 className="text-[1.5rem] leading-10 text-[#282828] font-bold">CodeGranites</h2>
                    </div>
                    <div className="pb-4">
                        <p className="text-[1rem] text-[#282828] font-normal">Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.</p>
                    </div>
                    <div>
                        <p className="text-[1rem] text-[#282828] font-normal pt-2 pb-4">Projects: 5</p>
                    </div>
                    <div>
                        <button className="border border-[#052C42] rounded-lg px-4 py-2 w-[12rem]">Open</button>
                    </div>
                </div>


                {/* Box */}
                <div className="rounded-lg border p-4 border-[#E1E1E1]">
                    <div className="flex flex-row pb-4 items-center gap-x-3">
                        <p className="bg-[#80BD92] p-1 text-[#fff] text-[1rem] rounded-full">CP</p>
                        <h2 className="text-[1.5rem] leading-10 text-[#282828] font-bold">CodeGranites</h2>
                    </div>
                    <div className="pb-4">
                        <p className="text-[1rem] text-[#282828] font-normal">Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.</p>
                    </div>
                    <div>
                        <p className="text-[1rem] text-[#282828] font-normal pt-2 pb-4">Projects: 5</p>
                    </div>
                    <div>
                        <button className="border border-[#052C42] rounded-lg px-4 py-2 w-[12rem]">Open</button>
                    </div>
                </div>


                {/* Box */}
                <div className="rounded-lg border p-4 border-[#E1E1E1]">
                    <div className="flex flex-row pb-4 items-center gap-x-3">
                        <p className="bg-[#80BD92] p-1 text-[#fff] text-[1rem] rounded-full">CP</p>
                        <h2 className="text-[1.5rem] leading-10 text-[#282828] font-bold">CodeGranites</h2>
                    </div>
                    <div className="pb-4">
                        <p className="text-[1rem] text-[#282828] font-normal">Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.</p>
                    </div>
                    <div>
                        <p className="text-[1rem] text-[#282828] font-normal pt-2 pb-4">Projects: 5</p>
                    </div>
                    <div>
                        <button className="border border-[#052C42] rounded-lg px-4 py-2 w-[12rem]">Open</button>
                    </div>
                </div>

            </div>

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
        </div>
      </section>
    </div>
  );
}

export default Workspace;
