'use client';

import Image from 'next/image';
import React, { useState } from 'react';

import { EmailVerificationModal } from '@/components/auth/EmailVerificationModal';
import SignUpForm from '@/components/forms/SignUpForm';

const SignUp: React.FC = () => {
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);

  const closeModal = () => {
    // Close the email verification modal
    setIsVerificationModalOpen(false);
  };

  return (
    <>
      <section className="h-screen w-full bg-white dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-primary-light dark:to-primary-dark transition-colors duration-500 ">
        {/* <Header_for_many /> */}

        {/* Email Verification Modal */}
        <EmailVerificationModal
          isVerificationModalOpen={false}
          closeModal={closeModal}
        />

        <div className="desktop flex md:justify-between md:gap-x-8 items-center h-full relative max-container px-2 sm:px-4 lg:px-8">
          {/* Form | Signin */}
          <SignUpForm />
          {/* Desktop image by right */}
          <div className="hidden min-[850px]:flex h-full w-full rounded-full  items-center max-w-[818px]">
            <Image
              src="/MacBookPro1.webp"
              alt="sign in Desktop"
              width={1000}
              height={500}
            />
          </div>
        </div>

        {/* image_bellow_all */}
        <div className="fixed right-0 -bottom-40 min-[850px]:hidden z-0 overflow-hidden">
          <Image
            src="/Mobile/mobile_back.png"
            alt="backgroud_ng_for_mobile"
            width={700}
            height={500}
            className="h-[739.363px] w-[850px] max-sm:w-[684.675px]"
          />
        </div>
      </section>
    </>
  );
};

export default SignUp;
