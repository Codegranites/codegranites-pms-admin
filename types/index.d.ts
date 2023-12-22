export interface ModalProps {
	isOpen: boolean;
	closeModal: () => void;
	children?: React.ReactNode;
	closeOnOverlayClick?: boolean;
	className?: string;
	title?: string;
	size?: 'lg' | 'md' | 'sm' | 'xl' | 'xxl';
	isCloseIconPresent?: boolean;
	closeBtnClass?: string;
}

export interface SEOProps {
	title: string;
	description: string;
	image: string;
	url: string;
}

export interface AuthLayoutProps {
	children: React.ReactNode;
	authRightImage?: React.ReactNode;
	isTopRightBlobShown?: boolean;
	isBottomLeftPadlockShown?: boolean;
}

export interface DeleteModalProps {
	onDelete: () => void;
	isOpen: boolean;
	onClose: () => void;
}

export type SettingsProps = {
	id?: number;
	name: string;
	path: string;
};

export type LanguageProps = {
	id?: number;
	label: string;
	value: string;
};

// Password interface
export interface PasswordPopoverProps {
	password: string;
	children: React.ReactNode;
}

export interface PasswordRequirementProps {
	meets: boolean;
	label: string;
}

export interface ProgressBarProps {
	color: string;
	value: number;
}

export interface Notification {
	id: number;
	type: string;
	message: string;
	date: string;
	time: string;
}

export type NavbarLinkProps = {
	id?: number;
	link: string;
	label: string;
};

export type FooterLinkProps = {
	company: NavbarLinkProps[];
	help: NavbarLinkProps[];
	emails: { id?: number; email: string }[];
};

export interface ContactFormProps {
	firstname: string;
	lastname: string;
	email: string;
	phonenumber: string;
	companyname: string;
	subject: string;
	message: string;
}

export interface ApiResponse {
	message: any;
	status: number;
	data: any;
	response?: any;
}

export type CardProps = {
	id?: number;
	title: string;
	description: string;
	icon: string;
};

export type FeatProps = {
	id?: number;
	title: string;
	description: string;
	icon: string;
};
