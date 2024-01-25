import Image from 'next/image';
import React from 'react';
import SubscribeFooter from './Subscriberfooter';
import { FOOTER_LINKS } from '../../libs/constants';
import { cn } from '../../utils/util';
import { BsTwitterX } from 'react-icons/bs';
import Link from 'next/link';
import ThemeButtons from '../ThemeButtons';

const Footer = () => {
  return (
    <footer className="w-full h-full  pt-5 lg:pt-10 border-t border-gray-300">
      <div className="w-full h-full max-container flex flex-col justify-between px-4 lg:px-8 min-[1490px]:px-0 pb-8">
        <div className="flex flex-col gap-y-5 ">
          <div className="w-full max-[550px]:flex-col flex justify-between lg:justify-start items-center max-[550px]:items-start max-[550px]:gap-y-5">
            <Image
              src="/logo.png"
              alt="logo"
              width={155}
              height={55}
              className="max-sm:w-[120px]"
            />
            <div className="w-full min-[550px]:max-w-[300px] sm:max-w-[380px] lg:hidden ">
              <SubscribeFooter />
            </div>
          </div>
          <div className="flex max-[550px]:flex-col max-[550px]:gap-y-7 w-full justify-between items-start [&>ul>span]:text-[#535353] [&>ul>span]:text-base [&>ul>span]:font-semibold [&>ul>a]:text-[#535353] [&>ul>a]:text-base ">
            <div className="w-full max-w-[380px] hidden lg:block">
              <SubscribeFooter />
            </div>
            <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3">
              <span className="text-header dark:text-gray-50">Company</span>
              {FOOTER_LINKS.company.map(link => (
                <Link
                  href={link.link}
                  key={link.id}
                  className="capitalize hover:font-medium  hover:text-primary dark:hover:text-color-dark transition-colors duration-300 text-header dark:text-gray-200"
                >
                  {link.label}
                </Link>
              ))}
            </ul>

            <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3">
              <span className="text-header dark:text-gray-50">Help</span>
              {FOOTER_LINKS.help.map(link => (
                <Link
                  href={link.link}
                  key={link.id}
                  className={cn(
                    'capitalize hover:font-medium hover:text-primary dark:hover:text-color-dark transition-colors duration-300 text-header dark:text-gray-200',
                    {
                      uppercase: link.label === 'faq'
                    }
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
            <ul className="flex flex-col gap-y-5 max-[550px]:gap-y-3">
              <span className="text-header dark:text-gray-50">Email Us</span>
              {FOOTER_LINKS.emails.map(email => (
                <li key={email.id} className="text-header dark:text-gray-100">
                  {email.email}
                </li>
              ))}
              <div className="flex items-center gap-x-4">
                <span className="text-white h-[24px] w-[24px] bg-[#2867B2] font-medium rounded-full flex justify-center items-center">
                  in
                </span>
                <span className="text-white h-[24px] w-[24px] bg-black font-medium p-[1px] rounded-full flex justify-center items-center">
                  <BsTwitterX />
                </span>
              </div>
              <ThemeButtons />
            </ul>
          </div>
        </div>
      </div>
      <div className="flex h-[50px] w-full justify-center items-center bg-primary-dark text-white py-3">
        <p>© Copyright {new Date().getFullYear()} CodeGranites</p>
      </div>
    </footer>
  );
};

export default Footer;
