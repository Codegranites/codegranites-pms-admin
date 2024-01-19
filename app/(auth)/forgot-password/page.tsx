'use client';

import { Input } from '@/components/ui/Input';
import Button from '@ui/Button';
import { Google } from 'iconsax-react';
import PasswordPopover from '@ui/passwordPopober';
import { Eye, EyeSlash } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { Header_for_many } from '../../../components/auth/Header';
import { useRouter } from 'next-nprogress-bar';
import { resetPassword } from '@/app/api/authApi';
import { EmailVerificationModal } from '../../../components/auth/EmailVerificationModal';

const ForgotPassword: React.FC = () => {
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleForgotPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await resetPassword({ email });
      setIsVerificationModalOpen(true);
    } catch (error) {
      console.error('Reset Failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const closeModal = () => {
    // Close the email verification modal
    setIsVerificationModalOpen(false);
  };

  return (
    <>
      {/* Email Verification Modal */}
      <EmailVerificationModal
        isVerificationModalOpen={isVerificationModalOpen}
        closeModal={closeModal}
      />
      <section className="md:w-[80%] md:mx-auto h-[100vh] bg-white">
        {/* header component  */}
        <Header_for_many />

        <div className="desktop block md:flex md:justify-center md:items-center h-full relative ">
          <div className="mobile container px-3 ">
            {/* overlay */}
            <div className="relative mt-20 md:-mt-10 py-4 rounded-[16px] bg-white shadow-lg px-3 md:shadow-none z-20 ">
              <h1 className="text-center font-[600]  text-[28px]">
                Forgot Password
              </h1>
              <span className="block text-center font-[400] text-[14px] mt-2 ">
                Fill the field below
              </span>

              <form
                action=""
                className="flex flex-col mt-10 z-10"
                onSubmit={e => handleForgotPassword(e)}
              >
                <label htmlFor="Business Email" className="font-bold">
                  Email
                </label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeHolder="Enter Registered Email Address"
                  rightIcon={<MdOutlineMail color="#777" />}
                  required
                  className="mt-1 mb-3 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
                />

                <Button
                  isLoading={isLoading}
                  className="w-full rounded-md my-3"
                  type="submit"
                  spinnerColor="#fff"
                >
                  Reset Password
                </Button>
              </form>
            </div>

            <span className=" text-white mb-8 mt-5 text-sm  relative block text-center md:text-black z-10">
              What is
              <Link href="/sign-up" className="ml-1 underline">
                CodeGranite
              </Link>
            </span>
          </div>

          {/* Desktop image by right */}
          <div className="hidden md:block h-full w-full ">
            <Image
              src="/MacBookPro0.svg"
              alt="sign in Desktop"
              width={140}
              height={100}
              className=" hidden md:block h-full w-full"
            />
          </div>
        </div>

        {/* image_bellow_all */}
        <div className="fixed -bottom-40 md:hidden z-0">
          <Image
            src="/Mobile/mobile_back.png"
            alt="backgroud_ng_for_mobile"
            width={140}
            height={50}
            className="h-[739.363px] w-[684.675px]"
          />
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
