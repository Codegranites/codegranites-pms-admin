'use client';

import * as React from 'react';
import Image from 'next/image';
import Button from '@ui/Button';
import ConfirmationModal from './modal/ConfirmationModal';
import useDisclosure from '../../hooks/useDisclosure';

const UnsubscribePage = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <div className="flex items-center justify-between max-h-screen md:px-[100px] py-[95px]">
      <div className="items-center justify-center w-1/2 py-[100px] hidden md:flex ">
        <Image
          src="/newsletter.svg"
          alt="newsletter"
          width={588}
          height={588}
          className="self-center"
        />
      </div>
      <div className="md:w-1/2 w-full md:pt-[65px] md:px-[67px] md:pb-[300px] px-4">
        <div className="flex flex-col items-center justify-center max-w-[473px]">
          <Image src="/logo.svg" alt="Logo" width={225} height={76} />
          <p className="text-black font-medium md:text-[24px] text-[18px] leading-[22px] mb-[30px] text-center mt-[127px]">
            Are you sure you want to unsubscribe from CodeGranites Newsletter
            updates
          </p>
          <div className="flex md:flex items-center sm:justify-center md:justify-between md:space-x-[50px] sm:space-y-6 text-[16px] tetxt-center ">
            <Button
              href="/"
              className="bg-white text-primary md:w-[201px] w-[150px] h-[56px] border border-primary hover:bg-transparent"
            >
              No, Cancel
            </Button>
            <Button
              onClick={onOpen}
              className="md:w-[201px] w-[150px] h-[56px] border"
            >
              Yes, Unsubscribe
            </Button>
          </div>
        </div>
      </div>
      <ConfirmationModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
};

export default UnsubscribePage;
