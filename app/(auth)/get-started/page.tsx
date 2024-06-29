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
import { FiUser } from 'react-icons/fi';
import { Header_for_many } from '../../../components/auth/Header';
import { Textarea } from '@/components/ui/textarea';
import { FormInput } from '@/components/ui/FormInput';
import signup from '/public/MacBook Pro 16_ - 3.svg';

const GetStarted = () => {
  // const initialPassword = 'jamestest2354';
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDesc, setProjectDesc] = useState('');

  return (
    <>
    {/* dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-primary-light dark:to-primary-dark transition-colors duration-500 */}
      <section className="w-full max-container md:mx-auto h-[100vh] bg-white md:pt-10">
        {/* header component  */}
        <Header_for_many />

        <div className="desktop flex md:justify-between justify-center h-full relative items-center">
          <div className="mobile container px-3 w-full md:w-1/2 flex flex-col justify-center items-center">
            {/* overlay */}
            <div className="w-[580px] h-[719px] relative py-4 rounded-[16px] bg-white shadow-lg px-3 md:shadow-none z-20 ">
              <h1 className="text-center font-[600]  text-[28px]">
                Get Started !
              </h1>
              <span className="block text-center font-[400] text-[14px] mt-2 ">
                Begin your journey
              </span>

              <form action="" className="flex flex-col mt-4 z-10 gap-y-6">
                <div className="w-full">
                  <label htmlFor="Business Email" className="font-bold">
                    Project Title
                  </label>
                  <FormInput
                    type="text"
                    id="projectTitle"
                    name="projectTitle"
                    value={projectTitle}
                    onChange={e => setProjectTitle(e.target.value)}
                    placeholder="Enter Project Title"
                    required
                    className="mt-1 mb-3 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
                  />
                </div>

                <div className="w-full">
                  <label htmlFor="Business Email" className="font-bold">
                    Project Description
                  </label>
                  <Textarea
                    id="projectDesc"
                    name="projectDesc"
                    value={projectDesc}
                    onChange={e => setProjectDesc(e.target.value)}
                    placeholder="Please describe your project"
                    required
                    rows={6}
                    cols={40}
                    className="mt-1 mb-3 p-2 w-full text-black border text-md font-medium rounded-md"
                  />
                </div>

                <Button className="w-full rounded-md my-3">Submit</Button>
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
          <div className="hidden md:flex w-full md:w-1/2 items-center justify-center">
            <Image
              src={signup}
              alt="sign in Desktop"
              width={600}
              height={500}
            />
          </div>
        </div>

        {/* image_bellow_all */}
        <div className="fixed -bottom-40 md:hidden z-0">
          <Image
            src="/Mobile/mobile_back.png"
            alt="backgroud_ng_for_mobile"
            width={700}
            height={500}
            className="h-[739.363px] w-[684.675px]"
          />
        </div>
      </section>
    </>
  );
};

export default GetStarted;
