'use client';

import { Input } from '@ui/Input';
import Button from '@ui/Button';
import PasswordPopover from '@ui/passwordPopober';
import { Eye, EyeSlash, Call } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { Header_for_many } from '../../../components/auth/Header';
import { useRouter } from 'next-nprogress-bar';
import { SignUpData } from '../../../types';
import { signUpUser } from '../../../api/authApi';

import { EmailVerificationModal } from '../../../components/auth/EmailVerificationModal';

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<SignUpData>({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [defaultInpType, setDefaultInpType] = useState<'password' | 'text'>(
    'password'
  );
  const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      await signUpUser({
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password
      });

      setIsVerificationModalOpen(true);
    } catch (error) {
      console.error('Registration failed:', error);
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
      <section className="md:w-[80%] md:mx-auto h-[100vh] bg-white">
        {/* header component  */}
        <Header_for_many />

        {/* Email Verification Modal */}
        <EmailVerificationModal
          isVerificationModalOpen={isVerificationModalOpen}
          closeModal={closeModal}
        />

        <div className="desktop mt-10 block md:flex md:justify-center md:items-center h-full relative ">
          <div className="mobile container px-3 ">
            {/* overlay */}
            <div className="relative py-4 rounded-[16px] bg-white shadow-lg px-3 md:shadow-none z-20 md:bg-transparent">
              <h1 className="text-center font-[600]  text-[28px]">
                Let us know you better
              </h1>
              <span className="block text-center font-[400] text-[14px] mt-2 ">
                Begin your journey
              </span>

              <form
                action=""
                className="flex flex-col mt-4 z-10"
                onSubmit={handleSubmit}
              >
                <label htmlFor="Business Email" className="font-bold">
                  FullName
                </label>
                <Input
                  id="fulName"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeHolder="Enter Full Name"
                  rightIcon={<FiUser color="#777" />}
                  required
                  className="mt-1 mb-3 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
                />

                <label htmlFor="Business Email" className="font-bold">
                  Business Email
                </label>
                <Input
                  id="businessEmail"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeHolder="Enter Business Email Address"
                  rightIcon={<MdOutlineMail color="#777" />}
                  required
                  className="mt-1 mb-3 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
                />

                <label htmlFor="Business Email" className="font-bold">
                  Phone Number
                </label>
                <Input
                  id="Phone Number"
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeHolder="Enter Phone Number"
                  rightIcon={<Call size="20" color="#777777" />}
                  required
                  className="mt-1 mb-3 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
                />

                <label htmlFor="Password" className="font-bold mt-1">
                  Password
                </label>
                <PasswordPopover password={formData.password}>
                  <Input
                    type={defaultInpType}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeHolder="Enter Password"
                    required
                    rightIcon={
                      defaultInpType === 'text' ? (
                        <Eye
                          color="#777"
                          onClick={() => setDefaultInpType('password')}
                        />
                      ) : (
                        <EyeSlash
                          color="#777"
                          onClick={() => setDefaultInpType('text')}
                        />
                      )
                    }
                    className="mt-1 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
                  />
                </PasswordPopover>

                <Button
                  className="w-full rounded-md my-3"
                  type="submit"
                  isLoading={isLoading}
                  spinnerColor="#fff"
                >
                  Sign up
                </Button>
              </form>

              <div className="seperator flex items-center space-x-2 my-2">
                <div className="seperate h-[1px] bg-[#C7C7C7] w-full"></div>
                <h4 className="text-gray/80"> Or</h4>
                <div className="seperate h-[1px] bg-[#C7C7C7] w-full"></div>
              </div>

              <Button
                className=" text-black w-full my-3 border-[#C7C7C7] border rounded-md bg-[#fff] py-1 "
                leftIcon={
                  <Image
                    src="/Mobile/google.svg"
                    alt="google_logo_icon"
                    width={20}
                    height={20}
                    className="mb-1"
                  />
                }
              >
                Contine with Google
              </Button>
            </div>

            <span className=" text-white mb-8 mt-5 text-sm  relative block text-center md:text-black z-10">
              Aready have an account?
              <Link href="/auth/sign-in" className="ml-1 underline">
                Login
              </Link>
            </span>
          </div>

          {/* This can be taken and indepenedet */}
          {/* Desktop image by right */}
          <div className="hidden md:block h-full w-full ">
            <Image
              src="/MacBookPro3.svg"
              alt="sign in Desktop"
              width={140}
              height={100}
              className="hidden md:block h-full w-full"
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

export default SignUp;
