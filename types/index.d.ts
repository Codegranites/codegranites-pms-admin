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
