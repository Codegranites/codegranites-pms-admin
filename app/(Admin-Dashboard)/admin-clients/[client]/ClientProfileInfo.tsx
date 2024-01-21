import React, { useEffect, useState } from 'react';
import { AdminClientCardProps } from '../../../../libs/clients';
import PreviewSkeleton from '../../../../components/skeleton/PreviewSkeleton';
import Image from 'next/image';
import { cn } from '../../../../utils/util';

const ClientProfileInfo = ({ client }: { client?: AdminClientCardProps }) => {
  const [imgLoading, setImgLoading] = useState(true);

  useEffect(() => {
    const imgLoaded = localStorage.getItem('imgLoaded');
    if (imgLoaded) {
      setImgLoading(false);
    }
  }, [client?.image]);

  return (
    <div className="w-full max-w-[799px] h-full flex flex-col md:flex-row items-start gap-x-2 sm:gap-x-4 md:gap-x-8 lg:gap-x-10 border-b border-[#e1e1e1] md:pb-12">
      <div className="flex w-full h-full md:max-w-[300px] max-md:justify-center">
        <div className="w-full h-full max-h-[300px] max-w-[300px] relative ">
          <div
            className={cn(
              'w-full h-full  rounded-xl bg-gradient-to-r from-transparent via-black/before:via-black/20 to-transparent absolute  before:absolute before:inset-0 before:-translate-x-full before:animate-shimmer  before:bg-gradient-to-r  before:from-transparent before:via-black/20 before:to-transparent isolate overflow-hidden shadow-lg shadow-black/20 before:border-t-2 before:border-b-2 before:border-primary',
              { hidden: !imgLoading }
            )}
          />
          <Image
            src={client?.image!}
            alt={client?.name!}
            width={300}
            height={300}
            className={cn('rounded-xl opacity-0', {
              'opacity-100': !imgLoading
            })}
            onLoad={() => {
              window?.setTimeout(() => {
                setImgLoading(false);
                localStorage.setItem('imgLoaded', 'true');
              }, 3000);
            }}
          />
        </div>
      </div>
      {imgLoading ? (
        <PreviewSkeleton />
      ) : (
        <div className="flex flex-col gap-y-3 max-md:w-full max-md:py-6 max-md:mt-12 max-md:border-t border-[#e1e1e1]">
          <h3 className="text-lg font-semibold text-header">{client?.name}</h3>
          <p>
            Title: <span className="font-medium">{client?.job_title}</span>
          </p>
          <p>
            Client ID: <span className="font-medium">{client?.client_id}</span>
          </p>
          <p>
            Email: <span className="font-medium">{client?.email}</span>
          </p>
          <p>
            Phone: <span className="font-medium">{client?.phone}</span>
          </p>
          <p>
            Gender:{' '}
            <span className="font-medium capitalize">{client?.gender}</span>
          </p>
          <p>
            Nationality: <span className="font-medium">{client?.country}</span>
          </p>
          <p>
            City: <span className="font-medium">{client?.city}</span>
          </p>
          <p>
            Address: <span className="font-medium">{client?.address}</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default ClientProfileInfo;
