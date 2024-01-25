import { useStateCtx } from '@/context/StateContext';
import { UserDetails } from '@/types';
import { cn, shrinkString } from '@/utils/util';
import { Notification, SearchNormal1 } from 'iconsax-react';
import { signOut } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const UserContainer = ({ user }: { user: UserDetails }) => {
  const { isView, setIsView } = useStateCtx();

  return (
    <div className="hidden lg:flex gap-x-3 xl:gap-x-5  [&>button]:font-medium [&>button]:text-header [&>button]:dark:text-gray-200 relative">
      <button type="button">
        <SearchNormal1 size={24} />
      </button>
      <button type="button">
        <Notification size={24} />
      </button>
      <button
        onClick={() => setIsView(true)}
        type="button"
        className="w-8 h-8 border dark:border-color-dark border-primary-light rounded-full"
      >
        <Image
          src={user.image!}
          alt="user"
          width={32}
          height={32}
          className="rounded-full"
        />
      </button>
      {isView && (
        <div
          className="min-h-screen h-screen top-0 left-0 w-full fixed z-[99] opacity-0 bg-black/25 cursor-default"
          role="dialog"
          onClick={() => setIsView(!isView)}
        />
      )}
      <div
        role="dialog"
        className={cn(
          " absolute py-4 px-2 max-h-max   max-w-max  w-[250px] top-16 -right-4 z-[999999] dark:bg-primary/80 bg-white backdrop-blur-xl flex flex-col  justify-center items-center  border border-color-dark  shadow-[0_0_20px_rgba(0,0,0,0.3)] rounded-xl before:absolute before:content-[''] before:h-[20px] before:w-[20px] before:bg-gradient-to-tl from-transparent via-transparent dark:to-color-dark to-primary before:overflow-hidden before:-top-2 before:rotate-[45deg] before:right-4 before:z-[-1] transform-gpu transition-all ",
          isView
            ? 'opacity-100 h-[150px] duration-500 '
            : 'opacity-0 h-0 duration-200 overflow-hidden'
        )}
      >
        <span
          className={` flex text-black font-medium dark:text-gray-100 text-lg items-center w-full justify-start  border-b border-primary-light pt-1 pb-2 pl-2  hover:bg-black/10 dark:hover:bg-color-dark/20   `}
        >
          {shrinkString({ str: user.name!, len: 21 })}
        </span>
        <span
          className={` flex text-black dark:text-gray-100 text-lg items-center w-full justify-start py-2 pl-2 border-b border-primary-light  hover:bg-black/10 dark:hover:bg-color-dark/20  `}
        >
          {shrinkString({ str: user.email!, len: 21 })}
        </span>
        <button
          type="button"
          onClick={() => signOut({ redirect: false })}
          className=" text-black font-medium dark:text-gray-100 text-xl flex items-center  w-full justify-start gap-4  hover:bg-black/10 dark:hover:bg-color-dark/20 p-1 pl-2 "
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserContainer;
