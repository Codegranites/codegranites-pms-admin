'use client';

import Modal from '@ui/Modal';
import Image from 'next/image';
import React from 'react';

interface EmailVerificationModalProps {
  isVerificationModalOpen: boolean;
  closeModal: () => void;
}

export const EmailVerificationModal: React.FC<EmailVerificationModalProps> = ({
  isVerificationModalOpen,
  closeModal
}) => {
  return (
    <Modal
      isOpen={isVerificationModalOpen}
      closeModal={closeModal}
      size="sm"
      isCloseIconPresent={true}
      className="w-full flex flex-col justify-center items-center relative -z-10 "
      closeOnOverlayClick
    >
      <Image
        src="/EmailVerificationModal.svg"
        alt="email_verification_modal"
        width={200}
        height={200}
        className="relative block mx-auto w-[200px] h-[200px] md:w-[150px] md:h-[150px] mt-10"
      />
      <div className="text-center">
        <h2 className="text-xl text-[#000000] font-bold mt-10 mb-1 md:text-2xl md:mb-3">
          Check your Email
        </h2>
        <p className="mb-4 font-medium text-xl">
          We just sent you an Email, open your Email app to verify your identity
        </p>
      </div>
    </Modal>
  );
};
