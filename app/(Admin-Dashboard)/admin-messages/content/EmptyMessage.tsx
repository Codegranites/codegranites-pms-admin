'use client';

import Image from 'next/image';
import React from 'react';

import { useStateCtx } from '../../../../context/StateContext';
import { cn } from '../../../../utils/util';
import { Add } from 'iconsax-react';
import { useMessageCtx } from '../../../../context/MessageContext';
import { MESSAGES } from './messages';

const EmptyMessage = () => {
  const { newMessageModal, setNewMessageModal } = useStateCtx();
  const { filterSearchMsgs } = useMessageCtx();

  return (
    <section
      className={cn(
        'w-full hidden justify-center flex-col gap-y-4 md:gap-y-8 xl:gap-y-12 items-center h-full pt-4 sm:pt-6 lg:pt-10',
        MESSAGES.length === 0 && 'flex'
      )}
    >
      <p className="text-header text-sm sm:text-base w-full text-center">
        Ouch! It looks like there are no messages available here yet
      </p>
      <div className="flex">
        <Image
          src="/empty-msg.png"
          alt="no messages"
          width={480}
          height={309}
        />
      </div>
      <button
        onClick={() => setNewMessageModal(true)}
        tabIndex={0}
        aria-label="Create Client"
        aria-haspopup
        aria-expanded={newMessageModal}
        id="create-client"
        type="button"
        className={cn(
          ' flex min-[900px]:w-full px-6 h-[56px] min-[900px]:min-w-[214px]  lg:max-w-[250px] items-center lg:gap-x-5 gap-x-2  border bg-primary-light text-white rounded-lg hover:opacity-80 transition-opacity duration-300 text-sm sm:text-base justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary'
        )}
      >
        <Add size={24} />

        <span>New message</span>
      </button>
    </section>
  );
};

export default EmptyMessage;
