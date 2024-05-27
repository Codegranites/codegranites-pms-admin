import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

export const Header_for_many: React.FC = () => {
  return (
    <header className="py-3 px-2 md:px-4 md:py-4 mb-10 w-full dark:bg-gradient-to-r from-white via-transparent to-transparent absolute top-0">
      <Link href="/" className="relative z-10">
        <Image src="/logo.png" alt="Logo" width={140} height={40} />
      </Link>
    </header>
  );
};
