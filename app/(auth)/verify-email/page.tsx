'use client'
import VerifyEmail from '@/components/auth/VerifyEmail';
import { Mail } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const maskEmail = (email: string): string => {
  const [user, domain] = email.split('@')
  const maskedUser = user.length > 2 ? `${user.slice(0,2)} *****` : `${user[0]} *****`
  return `${maskedUser}@${domain}`
}

// const VerifyEmailPage = () => {
const VerifyEmailPage = ({ searchParams }: PageProps) => {
  const toEmail = searchParams.to;
  const maskedEmail = typeof toEmail === 'string' ? maskEmail(toEmail) : ''

  console.log(maskedEmail)

  return (
    <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        {/* {token && typeof token === 'string' ? (
          <div className="grid gap-6">
            <VerifyEmail token={token} />
          </div>
        ) : ( */}
          <div className="flex h-full flex-col items-center justify-center space-y-1">
            <div className="relative mb-4 h-60 w-60 text-muted-foreground">
              <Mail className="w-full h-full" />
            </div>

            <h3 className="font-semibold text-2xl">Check your Email</h3>
            {maskedEmail && typeof maskedEmail === 'string' ? (
              <p className="text-muted-foreground text-center">
                We&apos;ve sent an email to
                <span className="font-semibold block">{maskedEmail}</span>.
              </p>
            ) : (
              <p className="text-muted-foreground text-center">
                We&apos;ve sent a verification link to your email.
              </p>
            )}
          </div>
         {/* )} */}
      </div>
    </div>
  );
};

export default VerifyEmailPage;