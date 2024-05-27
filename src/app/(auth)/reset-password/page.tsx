'use client';

import { Input } from '@/components/ui/Input';
import Button from '@ui/Button';
import PasswordPopover from '@ui/passwordPopober';
import { Eye, EyeSlash } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { Header_for_many } from '../../../components/auth/Header';
import { useRouter } from 'next-nprogress-bar';
import { PasswordVerificationSucessModal } from '../../../components/auth/PasswordResetSuccessModal';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [defaultInpTypeNew, setDefaultInpTypeNew] = useState<
    'password' | 'text'
  >('password');
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false); // New state for the modal

  const router = useRouter();

  const handleLoggedIn = (e: React.FormEvent) => {
    e.preventDefault();

    setIsVerificationModalOpen(true);

    alert(password);
  };

  const closeModal = () => {
    // Close the password verification modal
    setIsVerificationModalOpen(false);
  };

  return (
    <>
      <section className="md:w-[80%] md:mx-auto h-[100vh] bg-white">
        {/* header component  */}
        <Header_for_many />

        {/* <PasswordVerificationSucessModal isVerificationModalOpen={isVerificationModalOpen} closeModal={closeModal} /> */}

        {isVerificationModalOpen ? (
          <PasswordVerificationSucessModal
            isVerificationModalOpen={isVerificationModalOpen}
            closeModal={closeModal}
          />
        ) : (
          <div className="desktop block md:flex md:justify-center md:items-center h-full relative ">
            <div className="mobile container px-3 ">
              {/* overlay */}
              <div className="relative mt-20 py-4 rounded-[16px] bg-white shadow-lg px-3 md:shadow-none z-20 ">
                <h1 className="text-center font-[600]  text-[28px]">
                  Reset your password
                </h1>
                <span className="block text-center font-[400] text-[14px] mt-2 ">
                  Enter a new password for your account
                </span>

                <form
                  action=""
                  className="flex flex-col mt-4 z-10"
                  onSubmit={e => handleLoggedIn(e)}
                >
                  <label htmlFor="Business Email" className="font-bold">
                    Password
                  </label>
                  <PasswordPopover password={password}>
                    <Input
                      type={defaultInpTypeNew}
                      id="password"
                      name="Password"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
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

                  <label htmlFor="Business Email" className="font-bold">
                    Password
                  </label>
                  <PasswordPopover password={confirmPassword}>
                    <Input
                      type={defaultInpTypeNew}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={e => setConfirmPassword(e.target.value)}
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

                  <Button className="w-full rounded-md my-3" type="submit">
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
                src="/MacBookPro3.svg"
                alt="sign in Desktop"
                width={140}
                height={100}
                className=" hidden md:block h-full w-full"
              />
            </div>
          </div>
        )}

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

export default ResetPassword;
