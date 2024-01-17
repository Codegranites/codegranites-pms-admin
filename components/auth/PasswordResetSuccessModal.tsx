'use client';

import Button from '@ui/Button';
import Modal from '@ui/Modal';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface EmailVerificationModalProps {
  isVerificationModalOpen: boolean;
  closeModal: () => void;
}

export const PasswordVerificationSucessModal: React.FC<
  EmailVerificationModalProps
> = ({ isVerificationModalOpen, closeModal }) => {
  return (
    <Modal
      isOpen={isVerificationModalOpen}
      closeModal={closeModal}
      size="sm"
      isCloseIconPresent={false}
      className="w-full flex flex-col justify-center items-center relative -z-10 "
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
          Sucessful !
        </h2>
        <p className="w-70 mx-auto mb-4 md:w-60">
          Your password has been reset click the button to return to log in page
        </p>

        <Link href="/sign-in">
          <Button className="w-full rounded-md my-2" type="submit">
            Log in
          </Button>
        </Link>
      </div>
    </Modal>
  );
};
