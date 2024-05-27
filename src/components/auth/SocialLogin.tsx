import React from 'react';
import Button from '../ui/Button';
import Image from 'next/image';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

const SocialLogin = () => {
  const onClick = (provider: 'google' | 'github') => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT
    });
  };

  return (
    <Button
      onClick={() => onClick('google')}
      className=" text-black w-full my-3 border-[#C7C7C7]  hover:text-white transition-colors duration-300	border rounded-md bg-[#fff] py-1"
      leftIcon={
        <Image
          src="/Mobile/google.svg"
          alt="google_logo_icon"
          width={20}
          height={20}
          className="mb-1"
        />
      }
    >
      Continue with Google
    </Button>
  );
};

export default SocialLogin;
