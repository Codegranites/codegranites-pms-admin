'use client';

import { NAV_LINKS } from '../../libs/constants';
import Button from '@ui/Button';
import { cn } from '../../utils/util';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import React, { Suspense, useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import MobileNav from './MobileNav';
import { useStateCtx } from '../../context/StateContext';
import useWindowHeight from '../../hooks/useDimension';
import { Notification, SearchNormal, SearchNormal1 } from 'iconsax-react';
import SkeletonNavbar from '../skeleton/SkeletonNavbar';

const Navbar = () => {
  const { landingMobileMenu, setLandingMobileMenu, user } = useStateCtx();
  const searchParams = useSearchParams().get('path');
  const scrollHeight = useWindowHeight();

  const [isActive, setIsActive] = useState('');
  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  return (
    <nav
      className={cn(
        ' max-[500px]:py-2   px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full justify-between items-center  transition-colors duration-500',
        scrollHeight > 200
          ? ' fixed backdrop-blur-xl top-0 left-0  z-50 -translate-y-28 opacity-0 animate-slideDown bg-white/90 py-2 border-b border-gray-200 shadow-md'
          : 'sm:py-6 py-4',
        {
          'bg-white/60 ': scrollHeight > 800 && scrollHeight < 4300
        }
      )}
    >
      <Link
        href="/?path=home"
        className={cn(
          ' max-sm:w-[120px] max-[450px]:w-[100px]',
          scrollHeight > 200 ? 'w-[120px] ' : 'w-fit'
        )}
      >
        <Image src="/logo.png" alt="logo" width={155} height={55} />
      </Link>

      <div className="hidden lg:flex items-center gap-x-5 lg:gap-x-7 2xl:gap-x-10 w-full justify-center max-w-[50%] 2xl:max-w-[40%]">
        {NAV_LINKS.map(link => (
          <Link
            href={
              link.link === 'home'
                ? '/?path=home'
                : `${link.link}?path=${link.link}`
            }
            key={link.id}
            onClick={() => {
              setIsActive(link.link);
            }}
            className={cn(
              ' w-full text-black  flex justify-center capitalize text-base relative font-medium  before:bg-primary-light before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 ',
              isActive === link.link ? 'before:w-full text-primary-light' : ''
            )}
          >
            <span>{link.label}</span>
          </Link>
        ))}
      </div>

      {user.email ? (
        <div className="hidden lg:flex gap-x-3 xl:gap-x-5  [&>button]:font-medium [&>button]:text-header">
          <button type="button">
            <SearchNormal1 size={24} />
          </button>
          <button type="button">
            <Notification size={24} />
          </button>
          <button
            type="button"
            className="w-8 h-8 border border-primary-light rounded-full"
          >
            <Image
              src={user.image!}
              alt="user"
              width={32}
              height={32}
              className="rounded-full"
            />
          </button>
        </div>
      ) : (
        <div className="hidden lg:flex gap-x-3 xl:gap-x-5 [&>button]:border-primary-light [&>button]:border [&>button]:px-4 [&>button]:py-2 [&>button]:rounded-md [&>button:last-child]:bg-primary-light  [&>button:last-child]:text-white [&>button]:font-medium [&>button]:text-primary-light">
          <button type="button">
            <Link href="/sign-in">Login</Link>
          </button>
          <button type="button">
            <Link href="/get-started">Get started</Link>
          </button>
        </div>
      )}
      <div
        tabIndex={0}
        className="lg:hidden text-2xl cursor-pointer focus:border border-primary focus:p-1 focus:rounded-md"
        onClick={() => setLandingMobileMenu(true)}
      >
        <FaBars />
      </div>
      <Suspense fallback={<SkeletonNavbar />}>
        <MobileNav />
      </Suspense>
    </nav>
  );
};

export default Navbar;
