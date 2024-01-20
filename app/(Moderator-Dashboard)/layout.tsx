import { Suspense } from 'react';
import ModeratorNavbar from '../../components/navs/ModeratorNavbar';

import SidebarMod from '../../components/sidebars/SidebarMod';
import SkeletonNavbar from '@/components/skeleton/SkeletonNavbar';

export default function ModeratorLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SidebarMod />
      <section className="w-full relative  md:pl-[96px] min-[1140px]:pl-[270px]">
        <Suspense fallback={<SkeletonNavbar />}>
          <ModeratorNavbar />
        </Suspense>
        <div className="flex w-full flex-col h-full relative max-container pt-12 md:pt-0">
          {children}
        </div>
      </section>
    </>
  );
}
