import {
	Category,
	type Icon,
	DocumentCode,
	MessageQuestion,
	Briefcase,
	People,
	WalletMoney,
	MessageText,
	Personalcard,
	Notification,
	AddCircle,
	Profile2User,
	ArchiveBook
} from 'iconsax-react';
import { SettingsProps, NavbarLinkProps, FooterLinkProps } from '../types';

type SidebarAdminProps = {
	id?: number;
	label: string;
	icon: Icon;
	link: string;
};

export const SIDEBAR_ADMIN_LINKS: SidebarAdminProps[] = [
	{
		id: 1,
		label: 'Dashboard',
		icon: Category,
		link: 'admin-dashboard'
	},

	{
		id: 3,
		label: 'Problem Statements',
		icon: MessageQuestion,
		link: 'problem-statements'
	},
	{
		id: 4,
		label: 'Projects',
		icon: Briefcase,
		link: 'admin-projects'
	},
	{
		id: 5,
		label: 'Clients',
		icon: People,
		link: 'admin-clients'
	},
	{
		id: 6,
		label: 'Transactions',
		icon: WalletMoney,
		link: 'admin-transactions'
	},
	{
		id: 7,
		label: 'Messages',
		icon: MessageText,
		link: 'admin-messages'
	},

	{
		id: 9,
		label: 'Notifications',
		icon: Notification,

		link: 'admin-notifications'
	},
	{
		id: 10,
		label: 'Invite',
		icon: AddCircle,
		link: 'invite'
	}
];

// Sidebar Moderator

export const SIDEBAR_MOD_LINKS: SidebarAdminProps[] = [
	{
		id: 1,
		label: 'Dashboard',
		icon: Category,
		link: 'dashboard'
	},
	{
		id: 2,
		label: 'Clients',
		icon: Profile2User,
		link: 'clients'
	},
	{
		id: 3,
		label: 'Projects',
		icon: Briefcase,
		link: 'projects'
	},
	{
		id: 4,
		label: 'Transactions',
		icon: WalletMoney,
		link: 'transactions'
	},
	{
		id: 5,
		label: 'History',
		icon: ArchiveBook,
		link: 'history'
	},
	{
		id: 6,
		label: 'Messages',
		icon: MessageText,
		link: 'messages'
	},
	{
		id: 7,
		label: 'Admins',
		icon: Personalcard,
		link: 'admins'
	},
	{
		id: 8,
		label: 'Notifications',
		icon: Notification,

		link: 'notifications'
	}
];

export const TYPESidebarLinks = SIDEBAR_ADMIN_LINKS.map((link) => link.link);
export const TYPESidebarLinksMod = SIDEBAR_MOD_LINKS.map((link) => link.link);

export const Settingsnav: SettingsProps[] = [
	{
		id: 1,
		name: 'Profile',
		path: '/profile'
	},
	{
		id: 2,
		name: 'Account preferences',
		path: '/account-preferences'
	},
	{
		id: 3,
		name: 'Security',
		path: '/security'
	},
	{
		id: 4,
		name: 'Workspace',
		path: '/workspace'
	},
	{
		id: 5,
		name: 'Notifications',
		path: '/notifications-settings'
	}
];

export const NAV_LINKS: NavbarLinkProps[] = [
	{ id: 1, link: '', label: 'home' },
	{ id: 2, link: 'dashboard', label: 'client' },
	{ id: 3, link: 'style-guide', label: 'style-guide' },
	{ id: 4, link: 'admin-dashboard', label: ' Admin' }
];

export const FOOTER_LINKS: FooterLinkProps = {
	company: [
		{ id: 1, link: 'services?path=services', label: 'services' },
		{ id: 2, link: 'about?path=about', label: 'about us' },
		{ id: 3, link: 'contacts?path=contacts', label: 'contacts' },
		{ id: 4, link: 'jobs?path=jobs', label: 'jobs' }
	],
	help: [
		{ id: 1, link: 'faq?path=faq', label: 'faq' },
		{ id: 2, link: 'terms?path=terms', label: 'terms of services' },
		{ id: 3, link: 'privacy?path=privacy', label: 'privacy policy' }
	],
	emails: [
		{ id: 1, email: 'Info@codesgranite.com' },
		{ id: 2, email: 'Contact@codesgranite.com' },
		{ id: 3, email: 'Support@codesgranite.com' }
	]
};
