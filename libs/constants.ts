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
	ArchiveBook,
} from "iconsax-react";

type SidebarAdminProps = {
	id?: number;
	label: string;
	icon: Icon;
	link: string;
};

export const SIDEBAR_ADMIN_LINKS: SidebarAdminProps[] = [
	{
		id: 1,
		label: "Dashboard",
		icon: Category,
		link: "dashboard",
	},
	{
		id: 2,
		label: "Workspaces",
		icon: DocumentCode,
		link: "workspaces",
	},
	{
		id: 3,
		label: "Problem Statements",
		icon: MessageQuestion,
		link: "problem-statements",
	},
	{
		id: 4,
		label: "Projects",
		icon: Briefcase,
		link: "projects",
	},
	{
		id: 5,
		label: "Clients",
		icon: People,
		link: "clients",
	},
	{
		id: 6,
		label: "Transactions",
		icon: WalletMoney,
		link: "transactions",
	},
	{
		id: 7,
		label: "Messages",
		icon: MessageText,
		link: "messages",
	},
	{
		id: 8,
		label: "Admins",
		icon: Personalcard,
		link: "admins",
	},
	{
		id: 9,
		label: "Notifications",
		icon: Notification,

		link: "notifications",
	},
	{
		id: 10,
		label: "Invite",
		icon: AddCircle,
		link: "invite",
	},
];

// Sidebar Moderator

export const SIDEBAR_MOD_LINKS: SidebarAdminProps[] = [
	{
		id: 1,
		label: "Dashboard",
		icon: Category,
		link: "dashboard",
	},
	{
		id: 2,
		label: "Clients",
		icon: Profile2User,
		link: "clients",
	},
	{
		id: 3,
		label: "Projects",
		icon: Briefcase,
		link: "projects",
	},
	{
		id: 4,
		label: "Transactions",
		icon: WalletMoney,
		link: "transactions",
	},
	{
		id: 5,
		label: "History",
		icon: ArchiveBook,
		link: "history",
	},
	{
		id: 6,
		label: "Messages",
		icon: MessageText,
		link: "messages",
	},
	{
		id: 7,
		label: "Admins",
		icon: Personalcard,
		link: "admins",
	},
	{
		id: 8,
		label: "Notifications",
		icon: Notification,

		link: "notifications",
	},
];

export const TYPESidebarLinks = SIDEBAR_ADMIN_LINKS.map((link) => link.link);
export const TYPESidebarLinksMod = SIDEBAR_MOD_LINKS.map((link) => link.link);
