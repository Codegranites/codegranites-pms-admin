'use client';

import { usePathname } from 'next/navigation';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

// Add Your Props here
type User = {
	name: string;
	email: string;
	image: string;
};
interface StateContextProps {
	showMobileMenu: boolean;
	currentPath: string;
	openPaymentModal: boolean;
	setOpenPaymentModal: React.Dispatch<React.SetStateAction<boolean>>;
	setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
	isRemoveClientModal: boolean;
	setIsRemoveClientModal: React.Dispatch<React.SetStateAction<boolean>>;
	user: User;
}

export const StateContext = createContext({} as StateContextProps);

const StateContextProvider = ({ children }: { children: React.ReactNode }) => {
	// Mock-Data for user profile
	const user = useMemo(() => {
		return {
			name: 'Jane Doe',
			email: 'JohnDoe@gmail.com',
			image: '/facemoji.png'
		};
	}, []);
	// Add Your State(s) Here
	const [showMobileMenu, setShowMobileMenu] = React.useState(false);
	const [openPaymentModal, setOpenPaymentModal] = useState(false);
	const [isRemoveClientModal, setIsRemoveClientModal] = useState(false);

	// AdminNav
	const [currentPath, setCurrentPath] = useState('');
	const pathname = usePathname();

	useEffect(() => {
		if (pathname.startsWith('/admin-')) {
			setCurrentPath(pathname.replace(/^\/([^\/]+).*$/, '$1'));
			return;
		}
		if (pathname.startsWith('/')) {
			setCurrentPath(pathname.replace('/', ''));
			return;
		}
	}, [pathname]);

	useEffect(() => {
		if (showMobileMenu || openPaymentModal || isRemoveClientModal) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setShowMobileMenu(false);
				setOpenPaymentModal(false);
				setIsRemoveClientModal(false);
			}
		};

		document.addEventListener('keydown', handleKeyDown);

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, [showMobileMenu, openPaymentModal, isRemoveClientModal]);

	const value = useMemo(
		() => ({
			showMobileMenu,
			setShowMobileMenu,
			currentPath,
			user,
			openPaymentModal,
			setOpenPaymentModal,
			isRemoveClientModal,
			setIsRemoveClientModal
		}),
		[showMobileMenu, currentPath, user, openPaymentModal, isRemoveClientModal]
	);

	return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};

// Call this function whenever you want to use the context
export const useStateCtx = () => {
	const ctx = useContext(StateContext);

	if (!ctx) {
		throw new Error('useStateCtx must be used within a StateContextProvider');
	}
	return ctx;
};

export default StateContextProvider;
