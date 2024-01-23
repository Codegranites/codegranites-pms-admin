import { Edit2 } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { AdminClientCardProps } from '../../../libs/clients';
import useInView from '../../../hooks/useInView';
import { encryptString } from '../../../utils/util';
import { useStateCtx } from '../../../context/StateContext';

const ClientCardAdmin = ({
  image,
  name,
  email,
  job_title,
  number_projects,
  id
}: AdminClientCardProps) => {
  const clientCardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView({ ref: clientCardRef });
  const { clientSearchTerm } = useStateCtx();
  const encryptedName = encryptString(name!);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;

    const rect = target?.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty('--border--x', `${x}px`);
    target.style.setProperty('--border--y', `${y}px`);
  };

  return (
    <div
      ref={clientCardRef}
      style={{
        transform: isInView ? 'none' : 'translateY(100px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
      }}
      onMouseMove={handleMouseMove}
      className="w-full max-w-[454px] min-[350px]:h-[250px] flex justify-center items-center pb-1 p-[2px] rounded-xl border border-gray-200 dark:border-primary dark:p-1 relative admin-card"
    >
      <div className="card-border" />

      <div className="card-content px-2 sm:px-4 py-4 md:py-7 flex w-full h-full flex-col bg-white dark:bg-gradient-to-br  from-primary-light  to-[#1b3c5a] ">
        <div className="flex justify-between w-full items-center max-[350px]:flex-col">
          <div className="w-full max-w-[150px] max-[450px]:max-w-[120px] min-[1139px]:max-w-[130px] min-[1300px]:max-w-[150px] max-[980px]:max-w-[130px] max-md:max-w-[150px]">
            <Image
              src={image}
              alt="client"
              height={150}
              width={150}
              className="rounded-xl"
            />
          </div>
          <div className="flex flex-col gap-y-2 max-[350px]:items-center">
            <h3 className="text-base lg:text-lg font-semibold text-header dark:text-gray-200">
              <span
                dangerouslySetInnerHTML={{
                  __html: name.replace(
                    new RegExp(`(${clientSearchTerm})`, 'gi'),
                    (match, group) =>
                      `<span style="color: black; background-color: ${
                        group.toLowerCase() === clientSearchTerm.toLowerCase()
                          ? 'yellow'
                          : 'inherit'
                      }">${match}</span>`
                  )
                }}
              />
            </h3>
            <p className="text-sm text-header dark:text-gray-300">
              {job_title}
            </p>
            <span className="text-xs text-header dark:text-gray-300">
              Email: {email}
            </span>
            <p className="font-medium text-header dark:text-gray-300">
              Number of projects:{' '}
              <span className="font-semibold">{number_projects}</span>
            </p>
          </div>
          <button
            type="button"
            className="max-[450px]:hidden text-header dark:text-gray-300"
          >
            <Edit2 size={24} />
          </button>
        </div>
        <div className="flex w-full justify-end items-center gap-x-3 max-[450px]:mt-2 max-[350px]:justify-center">
          <Link
            href={`/admin-clients/client?client_name=${encryptedName}&client_id=${id}`}
            type="button"
            tabIndex={0}
            className="text-primary rounded-lg  border border-primary dark:text-color-dark  dark:border-color-dark h-[32px] px-4 py-2 flex items-center font-medium hover:opacity-70 transition-all duration-300"
          >
            View Profile
          </Link>
          <button type="button" className="min-[450px]:hidden">
            <Edit2 size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClientCardAdmin;
