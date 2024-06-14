import React, { useState, useEffect } from 'react';
import LoadingSpinner from '../loaders/LoadingSpinner';
import { verifyEmail } from '@/actions/verifyEmail';
import { useRouter } from 'next/navigation';

const VerifyEmail = ({ token }: { token?: string }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      setError('Invalid token');
      setIsLoading(false);
      return;
    }

    verifyEmail(token)
      .then(data => {
        if (data?.status === 200) {
          setIsVerified(true);
        } else {
          setError('Verification failed');
        }
        setIsLoading(false);
      })
      .catch(() => {
        setError('An error occurred');
        setIsLoading(false);
      });
  }, [token]);

  const handleSignIn = () => {
    router.push('/sign-in');
  };

  return (
    <div className="w-full h-screen flex flex-col gap-y-6 items-center justify-center">
      {isLoading ? (
        <>
          <div className="p-4 md:p-10 flex items-center gap-x-2 bg-primary-light flex-col ">
            <p className="text-lg md:text-2xl lg:text-4xl font-medium text-white">
              Verifying Email
            </p>
            <div className="button--loader mt-4">
              <span />
              <span />
              <span />
            </div>
          </div>
        </>
      ) : error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <>
          <p className="text-green-500 font-bold text-xl md:text-3xl">Email verified successfull</p>
          <button
            onClick={handleSignIn}
            className="px-4 py-2 bg-primary text-white rounded-md"
          >
            Sign In
          </button>
        </>
      )}
    </div>
  );
};

export default VerifyEmail;
