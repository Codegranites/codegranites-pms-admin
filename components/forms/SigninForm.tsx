'use client'
import { useState } from 'react';
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
import SocialLogin from '../auth/SocialLogin';
import { useRouter } from 'next/navigation';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { useSearchParams } from 'next/navigation';

const SigninForm = () => {
  const { setUser } = useStateCtx();
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') ?? DEFAULT_LOGIN_REDIRECT;

  const [success, setSuccess] = useState<string | undefined>('');
  const [error, setError] = useState<string | undefined>('');
  const [isLoading, setIsLoading] = useState(false);
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

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      const data = await login(values);
      setSuccess(data?.success);
      setError(data?.error);

      if (data?.success) {
        setTimeout(() => {
          setSuccess('Redirecting....');
        }, 1000);
        setTimeout(() => {
          router.push(callbackUrl);
        }, 2000);

        setUser({
          ...data.user,
          name: getNameFromEmail(data?.user?.email!),
          image:
            `https://ui-avatars.com/api/?name=${data?.user
              ?.email!}&background=random` ?? '/facemoji.png',
          email: data?.user?.email ?? 'Johndoe@fake.com'
        });
      }
    } catch (error) {
      setError('Something went wrong.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="relative px-4 sm:px-6 z-20 bg-white shadow-lg md:shadow-none w-full xl:w-[580px] mx-auto overflow-y-scroll pb-4 mt-8 md:mt-4">
      <div className="flex flex-col">
        <h1 className="text-center font-[600]  text-[28px]"> Welcome back !</h1>
        <span className="block text-center font-[400] text-[14px] mt-2 ">
          Great to have you back with us again
        </span>
      </div>
      <Form {...form}>
        <form
          className="flex flex-col mt-4 z-10 gap-y-2 md:gap-y-6"
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

      <SocialLogin />

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
