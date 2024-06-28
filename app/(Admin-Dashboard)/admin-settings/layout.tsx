import SkeletonNavbar from '@/components/skeleton/SkeletonNavbar';
import SettingNav from '../../../components/sidebars/Settings';
import { Suspense } from 'react';

export default function SettingLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" ">
      <div className="">
        {children}
      </div>
    </div>
  );
}
