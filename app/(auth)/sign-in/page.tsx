import Image from 'next/image';

import SigninForm from '@/components/forms/SigninForm';
import { auth } from '@/auth';
import { UserDetails } from '@/types';

import { dateToSeconds, generateId } from '@/utils/util';
import { Header_for_many } from '@/components/auth/Header';
import login from '/public/MacBook Pro 16_ - 3 (1).svg';

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
      {/* dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-primary-light dark:to-primary-dark transition-colors duration-500  */}
      <section className="h-screen w-full bg-white flex flex-col justify-between items-center">
        <Header_for_many />

        <section className="h-screen w-full bg-white dark:bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] dark:from-primary dark:to-gray-900 transition-colors duration-500 ">
          {/* <Header_for_many /> */}

          <div
            className="desktop grid grid-cols-1 md:grid-cols-2 md:justify-between md:gap-x-6 items-center 
        h-full relative max-container px-2 sm:px-4 lg:px-8 pt-10 md:pt-0"
          >
            {/* Form | Signin */}
            {/* @ts-ignore */}
            <SigninForm user={data?.user} />
            {/* Desktop image by right */}
            <div className="hidden h-full md:flex md:w-1/2 justify-center items-center">
              <Image
                src={login}
                alt="sign in Desktop"
                width={1000}
                height={500}
                className=" hidden md:block w-full"
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
      </section>
    </>
  );
};

export default SignIn;
