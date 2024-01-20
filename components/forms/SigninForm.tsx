'use client';

import { useState, useTransition } from 'react';

import { MdOutlineMail } from 'react-icons/md';
import { Eye, EyeSlash } from 'iconsax-react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { LoginSchema } from '@/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form';
import { FormInput } from '../ui/FormInput';
import { cn, getNameFromEmail } from '@/utils/util';
import FormError from './FormError';
import FormSuccess from './FormSuccess';
import { login } from '@/actions/login';
import { useStateCtx } from '@/context/StateContext';

const SigninForm = () => {
  const { setUser } = useStateCtx();
  const [success, setSuccess] = useState<string | undefined>('');
  const [error, setError] = useState<string | undefined>('');

  const [isLoading, startTransition] = useTransition();
  const [defaultInpTypeNew, setDefaultInpTypeNew] = useState<
    'password' | 'text'
  >('password');
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      login(values).then(data => {
        setSuccess(data?.success);
        setError(data?.error);
        setUser({
          ...data.user,
          name: getNameFromEmail(data?.user?.email!),
          image: '/facemoji.png',
          email: data?.user?.email ?? 'Johndoe@fake.com'
        });
        console.log(data.user);
      });
    });
  };

  return (
    <div className="relative py-4 md:py-6 rounded-[16px] bg-white shadow-lg px-4 sm:px-6 md:shadow-none z-20 w-full max-w-[600px] mx-auto">
      <h1 className="text-center font-[600]  text-[28px]"> Welcome back !</h1>
      <span className="block text-center font-[400] text-[14px] mt-2 ">
        Great to have you back with us again
      </span>
      <Form {...form}>
        <form
          action=""
          className="flex flex-col mt-4 z-10 gap-y-2 md:gap-y-6 "
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold ">Business Email</FormLabel>
                <FormControl>
                  <div className="flex items-center w-full relative">
                    <FormInput
                      disabled={isLoading}
                      type="email"
                      {...field}
                      placeholder="Enter Business Email Address"
                      className=" w-full text-black h-[56px] border text-md font-medium rounded-md focus-visible:ring-primary-light"
                    />
                    <span className="absolute right-2 ">
                      <MdOutlineMail size={24} color="#777" />
                    </span>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold ">Password</FormLabel>
                <FormControl>
                  <div className="flex w-full relative items-center">
                    <FormInput
                      disabled={isLoading}
                      {...field}
                      type={defaultInpTypeNew}
                      name="password"
                      placeholder="Enter Password"
                      className=" w-full text-black h-[56px] border text-md font-medium rounded-md focus-visible:ring-primary-light"
                    />
                    <span className="absolute right-2">
                      {defaultInpTypeNew === 'text' ? (
                        <Eye
                          color="#777"
                          onClick={() => setDefaultInpTypeNew('password')}
                        />
                      ) : (
                        <EyeSlash
                          color="#777"
                          onClick={() => setDefaultInpTypeNew('text')}
                        />
                      )}
                    </span>
                  </div>
                </FormControl>
                <span className="mb-4 text-xs ">
                  Forgot password?{' '}
                  <Link
                    href="/forgot-password"
                    className="text-primary-light font-medium"
                  >
                    Reset
                  </Link>
                </span>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />

          <div className="flex relative items-center [perspective:300px] transform-gpu max-sm:w-full">
            <Button
              disabled={isLoading}
              className={cn(
                'w-full rounded-md my-3',
                isLoading ? '[&>div>span]:opacity-0' : ''
              )}
              type="submit"
              spinnerColor="#fff"
            >
              Log in
            </Button>
            {isLoading && (
              <div className="button--loader absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <span />
                <span />
                <span />
              </div>
            )}
          </div>
        </form>
      </Form>

      <div className="seperator flex items-center space-x-2 my-2 md:my-10">
        <span className="seperate h-[1px] bg-[#C7C7C7] w-full" />
        <h4 className="text-gray/80"> Or</h4>
        <span className="seperate h-[1px] bg-[#C7C7C7] w-full" />
      </div>

      <Link href="">
        <Button
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
      </Link>
      <span className="  text-header  mt-5 md:mt-8 text-sm  relative block text-center md:text-black z-10">
        Don&apos;t have an account?
        <Link href="/sign-up" className="ml-1 underline font-medium">
          Sign up
        </Link>
      </span>
    </div>
  );
};

export default SigninForm;
