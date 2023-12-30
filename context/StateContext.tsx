'use client';

import { usePathname } from 'next/navigation';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import SwipeIndicator from '../components/sidebars/SwipeIndicator';

// Add Your Props here
type User = {
	name: string;
	email: string;
	image: string;
};
interface StateContextProps {
	currentPath: string;
	openPaymentModal: boolean;
	setOpenPaymentModal: React.Dispatch<React.SetStateAction<boolean>>;

	// Mobile sidebar props
	adminShowMobileMenu: boolean;
	setAdminShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
	modShowMobileMenu: boolean;
	setModShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;

	// Landing Page props
	landingMobileMenu: boolean;
	setLandingMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;

	// Admin Dashboard props
	isRemoveClientModal: boolean;
	setIsRemoveClientModal: React.Dispatch<React.SetStateAction<boolean>>;
	isRemoveProjectModal: boolean;
	setIsRemoveProjectModal: React.Dispatch<React.SetStateAction<boolean>>;
	isProjectMiletoneModal: boolean;
	setIsProjectMiletoneModal: React.Dispatch<React.SetStateAction<boolean>>;
	isEditMiletoneModal: boolean;
	setIsEditMiletoneModal: React.Dispatch<React.SetStateAction<boolean>>;
	changeStatusModal: boolean;
	setChangeStatusModal: React.Dispatch<React.SetStateAction<boolean>>;
	viewMilestoneModal: boolean;
	setViewMilestoneModal: React.Dispatch<React.SetStateAction<boolean>>;
	createMilestoneModal: boolean;
	setCreateMilestoneModal: React.Dispatch<React.SetStateAction<boolean>>;
	editProjectModal: boolean;
	setEditProjectModal: React.Dispatch<React.SetStateAction<boolean>>;
	createProjectModal: boolean;
	setCreateProjectModal: React.Dispatch<React.SetStateAction<boolean>>;

	selectedProjectFilter: string;
	setSelectedProjectFilter: React.Dispatch<React.SetStateAction<string>>;
	projectSearchTerm: string;
	setProjectSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	selectedClientFilter: string;
	setSelectedClientFilter: React.Dispatch<React.SetStateAction<string>>;
	clientSearchTerm: string;
	setClientSearchTerm: React.Dispatch<React.SetStateAction<string>>;
	createClientModal: boolean;
	setCreateClientModal: React.Dispatch<React.SetStateAction<boolean>>;
	deleteMilestoneModal: boolean;
	setDeleteMilestoneModal: React.Dispatch<React.SetStateAction<boolean>>;
	newMessageModal: boolean;
	setNewMessageModal: React.Dispatch<React.SetStateAction<boolean>>;
	swipeIndicator: boolean;
	setSwipeIndicator: React.Dispatch<React.SetStateAction<boolean>>;
	anyModalOpen: boolean;
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
	const [selectedProjectFilter, setSelectedProjectFilter] = useState('');
	const [projectSearchTerm, setProjectSearchTerm] = useState('');
	const [selectedClientFilter, setSelectedClientFilter] = useState('all-clients');
	const [clientSearchTerm, setClientSearchTerm] = useState('');

	const [handleSwipe, setHandleSwipe] = useState<number | null>(null);

	useEffect(() => {
		const projectFilter = localStorage.getItem('project-filter');
		if (!projectFilter) {
			setSelectedProjectFilter('all');
			return;
		}
		if (projectFilter) {
			setSelectedProjectFilter(projectFilter);
			return;
		}
	}, []);

	useEffect(() => {
		if (selectedProjectFilter === '') return;

		localStorage.setItem('project-filter', selectedProjectFilter);
	}, [selectedProjectFilter]);

	// Track Modals State
	const [adminShowMobileMenu, setAdminShowMobileMenu] = useState(false);
	const [modShowMobileMenu, setModShowMobileMenu] = useState(false);
	const [landingMobileMenu, setLandingMobileMenu] = useState(false);
	const [openPaymentModal, setOpenPaymentModal] = useState(false);
	const [isRemoveClientModal, setIsRemoveClientModal] = useState(false);
	const [isRemoveProjectModal, setIsRemoveProjectModal] = useState(false);
	const [deleteMilestoneModal, setDeleteMilestoneModal] = useState(false);
	const [isProjectMiletoneModal, setIsProjectMiletoneModal] = useState(false);
	const [isEditMiletoneModal, setIsEditMiletoneModal] = useState(false);
	const [changeStatusModal, setChangeStatusModal] = useState(false);
	const [viewMilestoneModal, setViewMilestoneModal] = useState(false);
	const [createMilestoneModal, setCreateMilestoneModal] = useState(false);
	const [editProjectModal, setEditProjectModal] = useState(false);
	const [createProjectModal, setCreateProjectModal] = useState(false);
	const [createClientModal, setCreateClientModal] = useState(false);
	const [newMessageModal, setNewMessageModal] = useState(false);

	// Miscellaneous
	const [swipeIndicator, setSwipeIndicator] = useState(false);

	// AdminNav
	const [currentPath, setCurrentPath] = useState('');
	const pathname = usePathname();

	// Modals State
	const anyModalOpen =
		openPaymentModal ||
		isRemoveClientModal ||
		isRemoveProjectModal ||
		isProjectMiletoneModal ||
		isEditMiletoneModal ||
		changeStatusModal ||
		viewMilestoneModal ||
		createMilestoneModal ||
		editProjectModal ||
		createProjectModal ||
		createClientModal ||
		deleteMilestoneModal ||
		newMessageModal ||
		landingMobileMenu;
	const anyMobileSidebarOpen = adminShowMobileMenu || modShowMobileMenu;

	// Sidebar Mobile
	const isMobileDevice = () => {
		return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator?.userAgent);
	};

	useEffect(() => {
		if (!isMobileDevice()) return;
		const isSwiped = localStorage.getItem('swiped');
		if (isSwiped) {
			setSwipeIndicator(false);
			return;
		}
		if (anyMobileSidebarOpen) {
			setSwipeIndicator(true);
		} else {
			setSwipeIndicator(false);
		}
	}, [anyMobileSidebarOpen]);

	useEffect(() => {
		if (!isMobileDevice() || pathname === '/' || anyModalOpen || !anyMobileSidebarOpen) return;
		const handleSwipeStart = (e: TouchEvent) => {
			setHandleSwipe(e.changedTouches[0].screenX);
		};
		const handleSwipeEnd = (e: TouchEvent) => {
			if (handleSwipe !== null) {
				const swipeDis = e.changedTouches[0].screenX - handleSwipe;
				const swipeThreshold = 70;

				if (swipeDis < -swipeThreshold) {
					localStorage.setItem('swiped', 'true');
					console.log('first');
					setAdminShowMobileMenu(false);
					setModShowMobileMenu(false);
				}

				setHandleSwipe(null);
			}
		};

		window.addEventListener('touchstart', handleSwipeStart);
		window.addEventListener('touchend', handleSwipeEnd);
		return () => {
			window.removeEventListener('touchstart', handleSwipeStart);
			window.removeEventListener('touchend', handleSwipeEnd);
		};
	}, [handleSwipe, pathname, anyModalOpen, anyMobileSidebarOpen]);

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
		if (anyModalOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				setAdminShowMobileMenu(false);
				setModShowMobileMenu(false);
				setOpenPaymentModal(false);
				setIsRemoveClientModal(false);
				setIsRemoveProjectModal(false);
				setIsProjectMiletoneModal(false);
				setIsEditMiletoneModal(false);
				setChangeStatusModal(false);
				setViewMilestoneModal(false);
				setCreateMilestoneModal(false);
				setEditProjectModal(false);
				setCreateProjectModal(false);
				setCreateClientModal(false);
				setDeleteMilestoneModal(false);
				setNewMessageModal(false);
				setLandingMobileMenu(false);
			}
		};

		document.addEventListener('keyup', handleKeyDown);

		return () => {
			document.removeEventListener('keyup', handleKeyDown);
		};
	}, [anyModalOpen]);

	const value = useMemo(
		() => ({
			adminShowMobileMenu,
			setAdminShowMobileMenu,
			modShowMobileMenu,
			setModShowMobileMenu,
			landingMobileMenu,
			setLandingMobileMenu,
			currentPath,
			user,
			openPaymentModal,
			setOpenPaymentModal,
			isRemoveClientModal,
			setIsRemoveClientModal,
			isRemoveProjectModal,
			setIsRemoveProjectModal,
			isProjectMiletoneModal,
			setIsProjectMiletoneModal,
			isEditMiletoneModal,
			setIsEditMiletoneModal,
			changeStatusModal,
			setChangeStatusModal,
			viewMilestoneModal,
			setViewMilestoneModal,
			createMilestoneModal,
			setCreateMilestoneModal,
			editProjectModal,
			setEditProjectModal,
			createProjectModal,
			setCreateProjectModal,

			selectedProjectFilter,
			setSelectedProjectFilter,
			projectSearchTerm,
			setProjectSearchTerm,

			selectedClientFilter,
			setSelectedClientFilter,
			clientSearchTerm,
			setClientSearchTerm,

			createClientModal,
			setCreateClientModal,

			deleteMilestoneModal,
			setDeleteMilestoneModal,

			newMessageModal,
			setNewMessageModal,
			swipeIndicator,
			setSwipeIndicator,
			anyModalOpen
		}),
		[
			anyModalOpen,
			adminShowMobileMenu,
			modShowMobileMenu,
			landingMobileMenu,
			currentPath,
			user,
			openPaymentModal,
			isRemoveClientModal,
			isRemoveProjectModal,
			isProjectMiletoneModal,
			isEditMiletoneModal,
			changeStatusModal,
			viewMilestoneModal,
			createMilestoneModal,
			editProjectModal,
			createProjectModal,

			selectedProjectFilter,
			projectSearchTerm,

			selectedClientFilter,
			clientSearchTerm,

			createClientModal,

			deleteMilestoneModal,

			newMessageModal,
			swipeIndicator
		]
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
