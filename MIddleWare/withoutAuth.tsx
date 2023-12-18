import { useEffect } from 'react';
import { useRouter } from 'next-nprogress-bar';
import isLoggedin from './isLoggedin';

const withoutAuth = <P extends {}>(WrappedComponent: React.ComponentType<P>) => {
	const Wrapper: React.FC<P> = (props) => {
		const router = useRouter();
		useEffect(() => {
			const token = localStorage.getItem('authToken');
			const isLoggedIn = isLoggedin(token as string);

			if (isLoggedIn) {
				router.push('/dashboard');
			}
			// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);

		return <WrappedComponent {...props} />;
	};

	return Wrapper;
};

export default withoutAuth;
