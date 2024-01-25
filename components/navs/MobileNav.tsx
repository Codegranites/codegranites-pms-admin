/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import { useStateCtx } from '../../context/StateContext';
import { NAV_LINKS } from '../../libs/constants';
import { cn, shrinkString } from '../../utils/util';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { BsX } from 'react-icons/bs';

const MobileNav = () => {
  const { landingMobileMenu, setLandingMobileMenu, user } = useStateCtx();

  const [isActive, setIsActive] = useState('');
  const searchParams = useSearchParams().get('path');

  useEffect(() => {
    if (searchParams) {
      setIsActive(searchParams);
      return;
    }
  }, [searchParams]);

  useEffect(() => {
    if (landingMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLandingMobileMenu(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [landingMobileMenu]);

  return (
    <>
      <div
        className={cn(
          'lg:hidden fixed min-h-screen w-full bg-black/50 top-0 left-0 z-20 transition-all duration-300',
          landingMobileMenu ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setLandingMobileMenu(false)}
      />
      <nav
        className={cn(
          'pt-20 lg:hidden  px-4 sm:px-8 xl:px-16 2xl:px-24 flex w-full max-w-[300px] sm:max-w-[70%] md:max-w-[50%] justify-between items-center bg-white/90 dark:bg-primary/90 backdrop-blur-lg fixed right-0 top-0 z-50 h-screen transition-all opacity-0',
          landingMobileMenu
            ? 'translate-x-0 duration-1000 opacity-100'
            : 'translate-x-full duration-300'
        )}
      >
        <button
          autoFocus
          aria-label="close menu"
          type="button"
          className="outline-none dark:text-gray-100 text-primary text-2xl sm:text-4xl absolute top-2 right-2 h-12 w-12 rounded-full  focus:border-2 focus-visible:border-primary  flex justify-center items-center"
          onClick={() => setLandingMobileMenu(false)}
          tabIndex={0}
        >
          <BsX />
        </button>
        <div className="flex-col flex justify-between h-full w-full ">
          <div className="flex flex-col  items-start h-full gap-y-10 ">
            {NAV_LINKS.map(link => (
              <Link
                tabIndex={0}
                aria-label={link.label}
                href={
                  link.link === 'home'
                    ? '/?path=home'
                    : `${link.link}?path=${link.link}`
                }
                key={link.id}
                onClick={() => {
                  setIsActive(link.link);
                  setLandingMobileMenu(false);
                }}
                className={cn(
                  ' focus-visible:rounded-md focus-visible:border-2 outline-none focus-visible:p-1 focus-visible:border-primary   text-black dark:text-gray-300  flex justify-center capitalize relative font-medium  before:bg-primary-light dark:before:bg-color-dark before:w-[0%] before:h-1 before:absolute before:-bottom-2 before:left-0 before:transition-all before:duration-500 text-lg',
                  isActive === link.link
                    ? 'before:w-full text-primary-light dark:text-white'
                    : ''
                )}
              >
                {link.label}
                {/* <span>{link.label}</span> */}
              </Link>
            ))}
            {!user.email && (
              <div className="lg:hidden flex flex-col gap-y-5 [&>button]:border-primary-light [&>button]:dark:border-color-dark [&>button]:border [&>button]:px-4 [&>button]:py-2 [&>button]:rounded-md [&>button:last-child]:bg-primary-light  [&>button:last-child]:text-white [&>button]:font-medium [&>button]:text-primary-light [&>button]:dark:text-white">
                <button type="button">
                  <Link href="/sign-in">Login</Link>
                </button>
                <button type="button">
                  <Link href="/get-started">Get started</Link>
                </button>
              </div>
            )}
          </div>
          <div
            className={cn(
              'w-full flex items-center gap-x-4 dark:bg-gradient-to-r dark:from-black/10 dark:via-black/60 dark:to-transparent bg-gradient-to-r from-white via-white/80 to-transparent pl-3 py-3 transition-colors duration-300 justify-center mb-4 hover:bg-black/10 dark:hover:bg-color-dark/10  focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light',
              {
                hidden: !user.email
              }
            )}
            role="button"
            tabIndex={0}
            aria-label="Profile"
          >
            <div className="relative w-full max-w-[60px] flex justify-center h-[60px] rounded-full ">
              <Image
                src={user.image}
                alt="user"
                width={60}
                height={60}
                className="rounded-full object-contain"
              />
              <span className="w-[15px] h-[15px] bg-[#04802e] rounded-full border border- absolute bottom-1 right-1" />
            </div>
            <div className="flex flex-col  w-full group-hover:w-full group-hover:flex">
              <span className="text-black dark:text-gray-100 dark:font-medium text-lg min-[450px]:text-xl">
                {shrinkString({ str: user.name!, len: 20 })}
              </span>
              <span
                className="text-[#292929] tracking-wide dark:text-gray-200 text-sm"
                title={user.email}
              >
                {shrinkString({ str: user.email!, len: 21 })}
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default MobileNav;
