'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import isLoggedin from './isLoggedin';

const withAuth = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
	const Wrapper: React.FC<P> = (props) => {
		const router = useRouter();

		useEffect(() => {
			const token = localStorage.getItem('authToken');
			const isLoggedIn = isLoggedin(token as string);
			if (!isLoggedIn) {
				router.push('/auth/login');
			}
		}, [router]);

		return <WrappedComponent {...props} />;
	};

	return Wrapper;
};

export default withAuth;
