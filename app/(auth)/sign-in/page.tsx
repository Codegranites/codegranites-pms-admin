import Image from 'next/image';
import { GetServerSideProps } from 'next';
import SigninForm from '@/components/forms/SigninForm';
import { auth } from '@/auth';
import { setCookie } from 'cookies-next';
import { UserDetails } from '@/types';
import { dateToSeconds, generateId } from '@/utils/util';
import { Header_for_many } from '@/components/auth/Header';
import login from '/public/MacBook Pro 16_ - 3 (1).svg';

const SignIn = ({ user }: { user: UserDetails }) => {
  return (
    <>
      <section className="h-screen w-full bg-white flex flex-col justify-between items-center">
        <Header_for_many />

        <div className="p-[32px] desktop flex justify-center md:gap-x-8 items-center h-full relative max-container px-2 sm:px-4">
          <SigninForm user={user} />
          <div className="hidden h-full md:flex md:w-1/2 justify-center items-center">
            <Image
              src={login}
              alt="sign in Desktop"
              width={1000}
              height={500}
              className=" hidden md:block w-full"
            />
          </div>
        </div>

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
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await auth();

  if (!data) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const user = {
    email: data.user?.email,
    name: data.user?.name,
    image: data.user?.image,
    accountId: generateId(),
    role: 'client'
  } as UserDetails;

  setCookie('user', JSON.stringify(user), {
    req: context.req,
    res: context.res,
    maxAge: dateToSeconds(data?.expires!),
    path: '/',
  });

  return {
    props: {
      user,
    },
  };
};

export default SignIn;
