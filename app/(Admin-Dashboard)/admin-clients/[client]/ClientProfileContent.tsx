'use client';

import { ChevronLeft } from 'lucide-react';
import NotFound from '@/components/admin/NotFound';
import { ADMIN_CLIENTS } from '@/libs/clients';
import { useRouter } from 'next-nprogress-bar';
import { Suspense, useEffect, useState } from 'react';
import LoadingSpinner from '@/components/loaders/LoadingSpinner';
import ClientProfileInfo from './ClientProfileInfo';
import { Trash } from 'iconsax-react';
import RemoveClientModal from './RemoveClientModal';
import { useStateCtx } from '@/context/StateContext';
import SkeletonBio from '@/components/skeleton/SkeletonBio';

const ClientProfileContent = ({
  client_id,
  client_name
}: {
  client_id?: string;
  client_name?: string;
}) => {
  const router = useRouter();
  const { isRemoveClientModal, setIsRemoveClientModal } = useStateCtx();
  const [isBio, setIsBio] = useState(false);

  useEffect(() => {
    if (!client_id) return;

    setTimeout(() => {
      setIsBio(true);
    }, 3000);
  }, [client_id]);

  if (!client_id || !client_name) {
    return <NotFound text="Client Profile Not Found" />;
  }
  const client = ADMIN_CLIENTS.find(client => client.id === Number(client_id));

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
      <Suspense fallback={<LoadingSpinner />}>
        <section className="w-full flex  flex-col   mb-6 items-start  mt-4 md:mt-8 border border-gray-200 rounded-xl lg:rounded-2xl px-2 sm:px-8 xl:px-10 py-10 md:pb-16">
          <div className="flex w-full flex-col max-w-[1093px] gap-y-4 lg:gap-y-6">
            <ClientProfileInfo client={client} />
          </div>

          <div className="flex flex-col gap-y-2  h-full w-full max-w-[945px] pt-6">
            <h3 className="text-lg md:text-2xl font-medium text-header">
              Bio:
            </h3>
            {isBio ? (
              <div className="w-full h-full max-h-[244px] overflow-y-auto py-3 sidebar-scroll">
                <p className="text-sm md:text-base text-header [word-spacing:3px] [line-height:1.9]">
                  {client?.bio}
                </p>
              </div>
            ) : (
              <SkeletonBio />
            )}
          </div>
        </section>
        <div className="flex w-full items-center mb-6">
          <button
            tabIndex={0}
            aria-haspopup
            aria-label="Remove Client"
            id="remove-client"
            aria-expanded={isRemoveClientModal}
            onClick={() => setIsRemoveClientModal(true)}
            type="button"
            className="text-[#b50000] flex items-center gap-x-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500 px-1"
          >
            <Trash size={18} aria-hidden />
            <span>
              Remove{' '}
              {client?.name ? (
                <span className="font-medium">{client?.name}</span>
              ) : (
                'client'
              )}{' '}
              from workspace
            </span>
          </button>
        </div>
      </Suspense>
      <RemoveClientModal
        openModal={isRemoveClientModal}
        setOpenModal={setIsRemoveClientModal}
        client={client}
      />
    </>
  );
};

export default ClientProfileContent;
