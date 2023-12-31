'use client';

import React from 'react';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { ToastContainer } from 'react-toastify';

const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<>
			<ToastContainer
				position="top-right"
				autoClose={5000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={false}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="light"
			/>
			{children}

			<ProgressBar height="4px" color="#587997" options={{ showSpinner: false }} shallowRouting />
		</>
	);
};

export default Providers;
