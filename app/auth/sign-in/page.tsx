'use client';

import { Input } from '@ui/Input';
import Button from '@ui/Button';
import { loginUser } from '../../../api/authApi';
import { Eye, EyeSlash } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { Header_for_many } from '../../../components/auth/Header';
import { useRouter } from 'next-nprogress-bar';
import { useSession } from '../../../context/sessionProvider';

const SignIn = () => {
  const { login } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [defaultInpTypeNew, setDefaultInpTypeNew] = useState<
    'password' | 'text'
  >('password');

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await loginUser(formData);
      setFormData({
        email: '',
        password: ''
      });
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="md:w-[80%] md:mx-auto h-[100vh] bg-white">
        <Header_for_many />

        <div className="desktop block md:flex md:justify-center md:items-center h-full relative ">
          <div className="mobile container px-3 ">
            {/* overlay */}
            <div className="relative py-4 rounded-[16px] bg-white shadow-lg px-3 md:shadow-none z-20 ">
              <h1 className="text-center font-[600]  text-[28px]">
                {' '}
                Welcome back !
              </h1>
              <span className="block text-center font-[400] text-[14px] mt-2 ">
                Great to have you back with us again
              </span>

              <form
                action=""
                className="flex flex-col mt-4 z-10"
                onSubmit={handleSubmit}
              >
                <label htmlFor="Business Email" className="font-bold">
                  Business Email
                </label>
                <Input
                  type="email"
                  id="businessEmail"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeHolder="Enter Business Email Address"
                  rightIcon={<MdOutlineMail color="#777" />}
                  className="mt-1 mb-3 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
                />

                <label htmlFor="Password" className="font-bold mt-4">
                  Password
                </label>

                <Input
                  type={defaultInpTypeNew}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeHolder="Enter Password"
                  required
                  rightIcon={
                    defaultInpTypeNew === 'text' ? (
                      <Eye
                        color="#777"
                        onClick={() => setDefaultInpTypeNew('password')}
                      />
                    ) : (
                      <EyeSlash
                        color="#777"
                        onClick={() => setDefaultInpTypeNew('text')}
                      />
                    )
                  }
                  className="mt-1 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
                />

                <span className="mb-4 mt-1 text-xs text-right">
                  forgot password?{' '}
                  <Link href="/auth/forgot-password">Reset</Link>
                </span>

                <Button
                  className="w-full rounded-md my-3"
                  type="submit"
                  isLoading={isLoading}
                  spinnerColor="#fff"
                >
                  Log in
                </Button>
              </form>

              <div className="seperator flex items-center space-x-2 my-2">
                <div className="seperate h-[1px] bg-[#C7C7C7] w-full"></div>
                <h4 className="text-gray/80"> Or</h4>
                <div className="seperate h-[1px] bg-[#C7C7C7] w-full"></div>
              </div>

              <Link href="">
                <Button
                  className=" text-black w-full my-3 border-[#C7C7C7] 
								border rounded-md bg-[#fff] py-1"
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
              </Link>
            </div>

            <span className=" text-white mb-8 mt-5 text-sm  relative block text-center md:text-black z-10">
              Don&apos;t have an account?
              <Link href="/auth/sign-up" className="ml-1 underline">
                Sign up
              </Link>
            </span>
          </div>

          {/* Desktop image by right */}
          <div className="hidden md:block h-full w-full ">
            <Image
              src="/MacBookPro1.svg"
              alt="sign in Desktop"
              width={140}
              height={100}
              className=" hidden md:block h-full w-full"
            />
          </div>
        </div>

        {/* image_bellow_all */}
        <div className="fixed -bottom-40 md:hidden z-0">
          <Image
            src="/Mobile/mobile_back.png"
            alt="backgroud_ng_for_mobile"
            width={140}
            height={50}
            className="h-[739.363px] w-[684.675px]"
          />
        </div>
      </section>
    </>
  );
};

export default SignIn;
