'use client';

import Image from 'next/image';
import { SIDEBAR_ADMIN_LINKS } from '../../libs/constants';
import { useState, useEffect } from 'react';
import { cn, shrinkString } from '../../utils/util';
import { LogoutCurve, Setting2 } from 'iconsax-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import { useStateCtx } from '@/context/StateContext';
import ThemeButtons from '../ThemeButtons';

const SidebarAdmin = () => {
  const { user } = useStateCtx();
  const [activeLink, setActiveLink] = useState('');
  const pathname = usePathname();
  const router = useRouter();

  const ClearLocalAndExit = () => {
    const createdBy = localStorage?.getItem('createdBy');
    const workspaceID = localStorage?.getItem('workspaceID');

    if (createdBy !== undefined) {
      localStorage.removeItem('createdBy');
    } else {
      console.error('createdBy is undefined');
    }

    if (workspaceID !== undefined) {
      localStorage.removeItem('workspaceID');
    } else {
      console.error('workspaceID is undefined');
    }

    router.push('/workspace');
  };

  useEffect(() => {
    const currentPath = pathname?.replace(/^\/([^\/]+).*$/, '$1');

    setActiveLink(currentPath.trim());
  }, [pathname]);

  return (
    <section className="bg-white dark:bg-primary dark:border-primary-light z-[50] w-[0px] md:w-[96px] min-[1140px]:w-[270px] hover:w-[270px] hover:p-4 transition-all duration-300 py-4 min-[1140px]:p-4 hidden md:flex flex-col gap-y-4 items-center justify-between min-[1140px]:items-start fixed h-screen left-0 top-0 overflow-y-auto border-r border-gray-200  sidebar-scroll overflow-x-hidden group select-none">
      <Link
        href="/"
        className=" max-[1140px]:w-full group-hover:w-full h-[53px]"
      >
        <Image
          src="/logo.png"
          alt="Logo"
          width={155}
          height={53}
          className="dark:invert"
        />
      </Link>
      <ul className="flex flex-col gap-y-4 pt-8">
        {SIDEBAR_ADMIN_LINKS.map(link => (
          <Link
            href={`/${link.link}`}
            aria-current={activeLink === link.link ? 'page' : undefined}
            key={link.id}
            onKeyUp={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setActiveLink(link.link);
                return;
              }
            }}
            tabIndex={0}
            aria-label={link.label}
            className={cn(
              'flex items-center gap-x-3 py-2 px-3 h-[52px] text-[#3a3a3a] dark:text-gray-400 font-medium text-base transition-colors duration-300 cursor-pointer ',
              activeLink === link.link
                ? 'bg-primary-light dark:bg-primary-light/75 dark:text-white  text-white rounded outline-none'
                : 'hover:bg-black/10 dark:hover:bg-color-dark/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light'
            )}
            onClick={() => setActiveLink(link.link)}
          >
            <link.icon
              size={24}
              aria-hidden
              variant={activeLink === link.link ? 'Bold' : 'Outline'}
            />

            <span className=" max-[1139px]:hidden group-hover:block w-[185px]">
              {link.label}
            </span>
          </Link>
        ))}

        <span className="bg-[#8e8e8e] dark:bg-primary-light/70 w-full max-w-[245px] h-[1px] " />
      </ul>
      <ul className="flex flex-col w-full gap-y-6 xl:gap-y-8 pt-4 items-center">
        <Link
          href="/admin-settings/profile?setting_tab=profile"
          role="button"
          tabIndex={0}
          aria-label="Settings"
          onKeyUp={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              setActiveLink('admin-settings');
              return;
            }
          }}
          className={cn(
            'flex group-hover:w-full min-[1140px]:w-full min-[1140px]:justify-start items-center gap-x-3 py-2 px-3 h-[52px] text-[#3a3a3a] dark:text-gray-400 font-medium text-base transition-colors duration-300 cursor-pointer',
            activeLink === 'admin-settings'
              ? 'bg-primary-light text-white dark:text-white rounded outline-none'
              : 'hover:bg-black/10 dark:hover:bg-color-dark/10  focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light'
          )}
          onClick={() => setActiveLink('admin-settings')}
        >
          <Setting2
            size={24}
            aria-hidden
            variant={activeLink === 'settings' ? 'Bold' : 'Outline'}
          />
          <span className=" max-[1139px]:hidden group-hover:block">
            Settings
          </span>
        </Link>

        {/* LogOut */}
        <button
          onClick={ClearLocalAndExit}
          role="button"
          tabIndex={0}
          aria-label="logout"
          onKeyUp={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              router.push('/workspace');
              return;
            }
          }}
          className={cn(
            'flex flex-nowrap group-hover:w-full min-[1140px]:w-full  min-[1140px]:justify-start items-center gap-x-3 py-2 px-3 h-[52px] text-[#e80000] font-medium text-sm transition-colors duration-300 cursor-pointer hover:bg-black/10 dark:hover:bg-color-dark/10  focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500'
          )}
        >
          <LogoutCurve size={24} aria-hidden />
          <span className=" max-[1139px]:hidden group-hover:block">
            Exit current workspace
          </span>
        </button>

        {/* User Profile */}

        <Link
          href="/admin-settings/profile?setting_tab=profile"
          className={cn(
            'w-full flex items-center gap-x-[6px]  p-2 transition-colors duration-300 justify-center mb-4',
            activeLink === 'profile'
              ? 'bg-primary-light text-white rounded outline-none [&>div>span]:text-white'
              : 'hover:bg-black/10 dark:hover:bg-color-dark/10  focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light'
          )}
          role="button"
          tabIndex={0}
          aria-label="Profile"
          onKeyUp={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              setActiveLink('profile');
              return;
            }
          }}
          onClick={() => setActiveLink('profile')}
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
          <div className="flex flex-col  max-[1139px]:hidden w-full group-hover:w-full group-hover:flex">
            <span className="text-[#090909] dark:text-gray-400 dark:font-medium text-base">
              {shrinkString({ str: user.name!, len: 17 })}
            </span>
            <span
              className="text-[#3a3a3a] dark:text-gray-400 text-sm"
              title={user.email}
            >
              {shrinkString({ str: user.email!, len: 17 })}
            </span>
          </div>
        </Link>

        <div className="w-full opacity-0 min-[1139px]:opacity-100 flex justify-center group-hover:opacity-100 transition-colors duration-300">
          <ThemeButtons />
        </div>
      </ul>
    </section>
  );
};

export default SidebarAdmin;
