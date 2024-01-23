/* eslint-disable react-hooks/exhaustive-deps */

'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { useStateCtx } from '../../context/StateContext';
import { cn } from '../../utils/util';
import { LogoutCurve, Setting2 } from 'iconsax-react';
import { SIDEBAR_ADMIN_LINKS } from '../../libs/constants';
import { useRouter } from 'next-nprogress-bar';
import ThemeButtons from '../ThemeButtons';

const AdminMobileSidebar = () => {
  const { adminShowMobileMenu, setAdminShowMobileMenu, user } = useStateCtx();
  const router = useRouter();

  const [activeLink, setActiveLink] = useState('');

  const pathname = usePathname();
  // remove the / from the pathname
  useEffect(() => {
    const currentPath = pathname?.replace(/^\/([^\/]+).*$/, '$1');

    setActiveLink(currentPath.trim());
  }, [pathname]);

  return (
    <>
      <div
        className={cn(
          'md:hidden fixed min-h-screen w-full bg-black/50 top-0 left-0 z-[99] transition-all duration-300 overflow-hidden',
          adminShowMobileMenu ? 'opacity-100' : 'opacity-0 pointer-events-none '
        )}
        onClick={() => setAdminShowMobileMenu(false)}
      />
      <section
        className={cn(
          'py-6 md:hidden  min-[400px]:pl-4 pl-2 flex flex-col w-full max-w-[230px] min-[400px]:max-w-[270px]  items-start dark:bg-primary dark:border-primary-light bg-white fixed left-0 top-0 z-[999] h-screen transition-all opacity-0 sidebar-scroll overflow-x-hidden group select-none ',
          adminShowMobileMenu
            ? 'translate-x-0 duration-700 opacity-100'
            : '-translate-x-full duration-300 pointer-events-none invisible'
        )}
      >
        <Link
          href="/"
          className="w-full  h-[53px]"
          onClick={() => setAdminShowMobileMenu(false)}
        >
          <Image
            src="/logo.png"
            alt="Logo"
            width={155}
            height={53}
            className="dark:invert"
          />
        </Link>
        <ul className="flex flex-col gap-y-3 min-[400px]:gap-y-4 py-8 mt-6">
          {SIDEBAR_ADMIN_LINKS.map(link => (
            <Link
              href={`/${link.link}`}
              aria-current={activeLink === link.link ? 'page' : undefined}
              key={link.id}
              onKeyUp={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setActiveLink(link.link);
                  setAdminShowMobileMenu(false);
                  return;
                }
              }}
              tabIndex={0}
              aria-label={link.label}
              className={cn(
                'flex items-center gap-x-3 py-2 px-3 h-[42px] text-[#3a3a3a] dark:text-gray-300 font-medium text-sm transition-colors duration-300 cursor-pointer ',
                activeLink === link.link
                  ? 'bg-primary-light text-white rounded outline-none dark:bg-primary-light/75 dark:text-white'
                  : 'hover:bg-black/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light'
              )}
              onClick={() => {
                setActiveLink(link.link);
                setAdminShowMobileMenu(false);
              }}
            >
              <link.icon
                size={18}
                aria-hidden
                variant={activeLink === link.link ? 'Bold' : 'Outline'}
              />

              <span className="w-[175px">{link.label}</span>
            </Link>
          ))}

          <Link
            href="/admin-settings"
            role="button"
            tabIndex={0}
            aria-label="Settings"
            onKeyUp={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                setActiveLink('admin-settings');
                setAdminShowMobileMenu(false);
                return;
              }
            }}
            className={cn(
              'flex w-full justify-start items-center gap-x-3 py-2 px-3 h-[52px] text-[#3a3a3a] font-medium text-base transition-colors duration-300 cursor-pointer dark:text-gray-300',
              activeLink === 'settings'
                ? 'bg-primary-light text-white rounded outline-none dark:text-white'
                : 'hover:bg-black/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light dark:hover:bg-color-dark/10'
            )}
            onClick={() => {
              setActiveLink('admin-settings');
              setAdminShowMobileMenu(false);
            }}
          >
            <Setting2
              size={18}
              aria-hidden
              variant={activeLink === 'settings' ? 'Bold' : 'Outline'}
            />
            <span>Settings</span>
          </Link>
          {/* LogOut */}
          <Link
            href="/workspace"
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
              'flex w-full items-center gap-x-3 py-2 px-3 h-[52px] text-[#e80000] font-medium text-base transition-colors duration-300 cursor-pointer hover:bg-black/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500'
            )}
          >
            <LogoutCurve size={18} aria-hidden />
            <span>Exit Current Workspace</span>
          </Link>
          <div className="w-full flex justify-center ">
            <ThemeButtons />
          </div>
        </ul>
      </section>
    </>
  );
};

export default AdminMobileSidebar;
