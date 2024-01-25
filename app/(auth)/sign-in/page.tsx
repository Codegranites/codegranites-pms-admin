import Image from 'next/image';
import { useState } from 'react';

import SigninForm from '@/components/forms/SigninForm';
import { auth } from '@/auth';
import { setCookie } from 'cookies-next';
import { UserDetails } from '@/types';
import { dateToSeconds, generateId } from '@/utils/util';

const SignIn = async () => {
  const data = await auth();
  console.log('FROM SIGN PAGE', data);
  const user = {
    email: data?.user?.email,
    name: data?.user?.name,
    image: data?.user?.image,
    accountId: generateId(),
    role: 'client'
  } as UserDetails;
  // console.log('USERDEETS :', dateToSeconds(data?.expires!));
  // setCookie('user', JSON.stringify(user), {
  //   maxAge: dateToSeconds(data?.expires!),
  //   path: '/'
  // });
  return (
    <>
      <section className="h-screen w-full bg-white dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-primary-light dark:to-primary-dark transition-colors duration-500 ">
        {/* <Header_for_many /> */}

        <div className="desktop flex md:justify-between md:gap-x-8 items-center h-full relative max-container px-2 sm:px-4 lg:px-8">
          {/* Form | Signin */}
          {/* @ts-ignore */}
          <SigninForm user={data?.user} />
          {/* Desktop image by right */}
          <div className="hidden md:flex h-full w-full rounded-full  items-center max-w-[818px]">
            <Image
              src="/MacBookPro3.webp"
              alt="sign in Desktop"
              width={1000}
              height={500}
            />
          </div>
        </div>

        {/* image_bellow_all */}
        <div className="fixed -bottom-40 md:hidden z-0">
          <Image
            src="/Mobile/mobile_back.png"
            alt="backgroud_ng_for_mobile"
            width={500}
            height={500}
            className="h-[739.363px] w-[684.675px]"
          />
        </div>
      </section>
    </>
  );
};

export default SignIn;
