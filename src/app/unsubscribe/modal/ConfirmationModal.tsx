'use client';

import React from 'react';
import Modal from '@ui/Modal';
import Button from '@ui/Button';
import Link from 'next/link';

const ConfirmationModal = ({
  isOpen,
  onClose
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal
      closeOnOverlayClick
      isOpen={isOpen}
      closeModal={onClose}
      isCloseIconPresent={false}
      size="md"
      className-="max-w-[778px]"
    >
      <div className="items-center justify-center self-center flex flex-col text-center max-w-[554px] md:max-h-[118px]  md:mx-[22px] md:my-[40px] max-h-[408px] mx-[38px] my-[81px]">
        <p className="text-black font-medium text-[16px] leading-[22px] mb-4">
          You have successfully been unsubscribed from CodeGranites&apos;s Email
          Newsletter Updates
        </p>
        <p className="text-black font-medium text-[16px] leading-[22px] mb-6">
          Didn&apos;t mean to unsubscribe?{' '}
          <Link className="text-primary" href="/">
            Resubscribe
          </Link>
        </p>
        <Button className="w-[192px] h-[56px]">Back To Home</Button>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
