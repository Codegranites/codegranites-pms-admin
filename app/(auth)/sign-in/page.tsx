import Image from 'next/image';
import { useEffect, useState } from 'react';

import SigninForm from '@/components/forms/SigninForm';
import { auth } from '@/auth';
import { setCookie } from 'cookies-next';
import { UserDetails } from '@/types';
import { dateToSeconds, generateId } from '@/utils/util';
import { Header_for_many } from '@/components/auth/Header';
import login from '/public/MacBook Pro 16_ - 3 (1).svg';

const SignIn = () => {
  const [user, setUser] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await auth();
      console.log('FROM SIGN PAGE', data);
      if (data?.user) {
        const userDetails = {
          email: data.user.email,
          name: data.user.name,
          image: data.user.image,
          accountId: generateId(),
          role: 'client',
        } as UserDetails;

        setUser(userDetails);

        // Uncomment the lines below if you want to set the cookie
        // setCookie('user', JSON.stringify(userDetails), {
        //   maxAge: dateToSeconds(data.expires),
        //   path: '/'
        // });
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // You can replace this with a proper loading spinner if needed
  }

  return (
    <section className="h-screen w-full bg-white flex flex-col justify-between items-center">
      <Header_for_many />

      <div className="p-[32px] desktop flex justify-center md:gap-x-8 items-center h-full relative max-container px-2 sm:px-4">
        {/* Form | Signin */}
        <SigninForm user={user} />

        {/* Desktop image by right */}
        <div className="hidden h-full md:flex md:w-1/2 justify-center items-center">
          <Image
            src={login}
            alt="sign in Desktop"
            width={1000}
            height={500}
            className="hidden md:block w-full"
          />
        </div>
      </div>

      {/* image below all */}
      <div className="fixed -bottom-40 md:hidden z-0">
        <Image
          src="/Mobile/mobile_back.png"
          alt="background_ng_for_mobile"
          width={500}
          height={500}
          className="h-[739.363px] w-[684.675px]"
        />
      </div>
    </section>
  );
};

export default SignIn;
