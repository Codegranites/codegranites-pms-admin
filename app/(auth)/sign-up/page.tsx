'use client';

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
import { Input } from '@/components/ui/Input';
import SignUpForm from '@/components/forms/SignUpForm';

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

  // const handleSubmit = async (e: FormEvent) => {
  //   e.preventDefault();

  //   try {
  //     setIsLoading(true);

  //     await signUpUser({
  //       fullName: formData.fullName,
  //       email: formData.email,
  //       phoneNumber: formData.phoneNumber,
  //       password: formData.password
  //     });

  //     setIsVerificationModalOpen(true);
  //   } catch (error) {
  //     console.error('Registration failed:', error);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

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
