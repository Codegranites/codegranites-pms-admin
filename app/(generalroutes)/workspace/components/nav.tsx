'use client';
import { Add, HambergerMenu, Notification, SearchNormal1 } from 'iconsax-react';
import { useStateCtx } from '@/context/StateContext';
import { cn, decryptString } from '@/utils/util';
import AdminMobileSidebar from '@/components/sidebars/AdminMobileSidebar';
import { handleMouseEnter } from '@/utils/text-effect';
import { useSearchParams } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';

const WorkspaceNav = () => {
  const { currentPath, adminShowMobileMenu, setAdminShowMobileMenu, user } =
    useStateCtx();
  const firstName = user.name?.split(' ')[0];
  const searchParams = useSearchParams();
  const projectTitle = searchParams.get('project_title');
  const clientName = searchParams.get('client_name');
  const decrptedTitle = decryptString(projectTitle ?? '');
  const decrptedName = decryptString(clientName ?? '');
  const settingTab = searchParams.get('setting_tab');
  const pathName = currentPath.replace('admin-', '').replace('-', ' ');
  const titleLen = 27;

  return (
    <header
      className={cn(
        'lg:px-9 px-3 border-b border-gray-200 dark:border-primary-light h-[50px] sm:h-[70px] md:h-[89px] flex items-center justify-between fixed md:relative max-md:top-0 max-md:left-0 max-md:z-[99] select-none bg-white/80 dark:bg-primary backdrop-blur-lg w-full',
        {
          'md:overflow-hidden': adminShowMobileMenu
        }
      )}
    >
      <div
        className={cn('flex items-center gap-x-4', {
          'w-full ': adminShowMobileMenu
        })}
      >
        {/* <button
          tabIndex={0}
          aria-haspopup
          aria-expanded={adminShowMobileMenu}
          type="button"
          className={cn(
            'md:hidden rounded-full focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light',
            {
              'rotate-45 absolute right-1 top-1 z-[9999] text-white':
                adminShowMobileMenu
            }
          )}
          onClick={() => setAdminShowMobileMenu(!adminShowMobileMenu)}
        >
          {adminShowMobileMenu ? (
            <Add size={60} className="text-header dark:text-gray-200" />
          ) : (
            <HambergerMenu
              size={32}
              className="text-header dark:text-gray-200"
            />
          )}
        </button> */}
        <div className="flex gap-x-2 sm:gap-x-4 items-center">
          <h2 className="hidden md:inline sm:text-3xl capitalize font-medium text-header dark:text-gray-200  ">
            Welcome back! {firstName ?? 'User'}
          </h2>
          <h2 className="max-[370px]:text-base max-[500px]:text-lg text-xl md:hidden capitalize font-medium text-header dark:text-gray-200  ">
            {pathName}
          </h2>
        </div>
      </div>
      {user.image && (
        <div className="flex items-center  md:hidden gap-x-3 xl:gap-x-5  [&>button]:font-medium [&>button]:text-header [&>button]:dark:text-gray-200">
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
      )}
      <AdminMobileSidebar />
    </header>
  );
};

export default WorkspaceNav;
