'use client';

import { Input } from '@ui/Input';
import Button from '@ui/Button';
import PasswordPopover from '@ui/passwordPopober';
import { Eye, EyeSlash } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { usePathname } from 'next/navigation';
import { changePassword } from '@/app/api/authApi';
import { Header_for_many } from '@/components/auth/Header';
import { PasswordVerificationSucessModal } from '@/components/auth/PasswordResetSuccessModal';
import reset from '/public/MacBook Pro 16 3.svg';
import mobile from '/public/Frame 1000003508.svg';

const ResetPassword = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const pathName = usePathname();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [defaultInpTypeNew, setDefaultInpTypeNew] = useState<'password' | 'text'>('password');
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false); // New state for the modal

  const handleLoggedIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setIsloading(true);
      const res = await changePassword({ url: pathName, password });
      setIsloading(false);
      if (res?.status === 200) {
        setIsVerificationModalOpen(true);
      }
    } else {
      toast.error('Password does not match');
    }
  };

  const closeModal = () => {
    // Close the password verification modal
    setIsVerificationModalOpen(false);
  };

  return (
    <>
      <section className="md:mx-auto h-[100vh] bg-white">
        {/* header component */}
        <Header_for_many />

        {/* Email Verification Modal */}
        {isVerificationModalOpen ? (
          <PasswordVerificationSucessModal
            isVerificationModalOpen={isVerificationModalOpen}
            closeModal={closeModal}
          />
        ) : (
          <div className="desktop flex justify-center md:justify-between items-center h-full relative">
            <div className="mobile container px-3 w-full md:w-[55%] lg:w-1/2 flex flex-col justify-center items-center">
              {/* overlay */}
              <div className="relative py-4 rounded-[16px] bg-white shadow-lg px-3 md:shadow-none z-20 md:w-[580px] md:h-[401px]">
                <h1 className="text-center font-[600] text-[28px]">
                  Reset your password
                </h1>
                <span className="block text-center font-[400] text-[14px] mt-2">
                  Enter a new password for your account
                </span>

                <form
                  action=""
                  className="flex flex-col mt-4 z-10"
                  onSubmit={handleLoggedIn}
                >
                  <label htmlFor="password" className="font-bold">
                    Password
                  </label>
                  <PasswordPopover password={password}>
                    <Input
                      type={defaultInpTypeNew}
                      id="password"
                      name="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeHolder="Enter Password"
                      required
                      rightIcon={
                        defaultInpTypeNew === 'text' ? (
                          <Eye
                            color="#777"
                            onClick={() => setDefaultInpTypeNew('password')}
                          />
                        ) : (
                          <EyeSlash
                            color="#777"
                            onClick={() => setDefaultInpTypeNew('text')}
                          />
                        )
                      }
                      className="mt-1 p-2 mb-4 w-full text-black h-[60px] border text-md font-medium rounded-md"
                    />
                  </PasswordPopover>

                  <label htmlFor="confirmPassword" className="font-bold">
                    Confirm Password
                  </label>
                  <PasswordPopover password={confirmPassword}>
                    <Input
                      type={defaultInpTypeNew}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeHolder="Enter Password"
                      required
                      rightIcon={
                        defaultInpTypeNew === 'text' ? (
                          <Eye
                            color="#777"
                            onClick={() => setDefaultInpTypeNew('password')}
                          />
                        ) : (
                          <EyeSlash
                            color="#777"
                            onClick={() => setDefaultInpTypeNew('text')}
                          />
                        )
                      }
                      className="mt-1 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
                    />
                  </PasswordPopover>

                  <Button
                    isLoading={isLoading}
                    className="w-full rounded-md mt-[2em] md:mt-[4em] mb-3"
                    type="submit"
                    spinnerColor="#fff"
                  >
                    Change Password
                  </Button>
                </form>
              </div>
              <span className=" text-white mb-8 mt-10 text-sm  relative block text-center md:text-black z-30">
                What is
                <Link href="/auth/sign-up" className="ml-1 underline text-white md:text-primary-light">
                  CodeGranite
                </Link>
              </span>
            </div>

            {/* Desktop image by right */}
            <div className="hidden md:block h-full w-full md:w-[45%] lg:w-1/2 p-[24px] ">
              <Image
                src={reset}
                alt="sign in Desktop"
                width={140}
                height={100}
                className=" hidden md:block h-full w-full"
              />
            </div>
          </div>
        )}

        {/* image_bellow_all */}
        <div className="fixed -bottom-40 right-0 md:hidden z-10">
          <Image
            src={mobile}
            alt="backgroud_ng_for_mobile"
            width={900}
            height={700}
            className="w-[685px] h-[739px] object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
