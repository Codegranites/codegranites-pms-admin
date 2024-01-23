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
import {
  SettingsProps,
  NavbarLinkProps,
  FooterLinkProps,
  FeatProps,
  WorkspaceCardProps
} from '../types';
import Guest from '../public/home/guest.svg';
import Pro from '../public/home/pro.svg';
import Work from '../public/home/work.svg';
import Tran from '../public/home/trans.svg';
import Messs from '../public/home/mess.svg';
import Sett from '../public/home/sett.svg';

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
    link: 'admin-problem-statements'
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

export const TYPESidebarLinks = SIDEBAR_ADMIN_LINKS.map(link => link.link);
export const TYPESidebarLinksMod = SIDEBAR_MOD_LINKS.map(link => link.link);

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

export const Feat: FeatProps[] = [
  {
    id: 1,
    title: 'Problem Statement',
    description:
      'Enhance communication with the Problem Statement feature, allowing clients to articulate concerns and submit them directly to project managers ',
    icon: Pro
  },
  {
    id: 2,
    title: 'Work Spaces',
    description:
      'Empower collaboration with Workspaces, providing clients the flexibility to seamlessly switch between different project environments',
    icon: Work
  },
  {
    id: 3,
    title: 'Guests',
    description:
      'This feature enables Moderator admins to effortlessly create and manage additional administrators. Enhance team dynamics and distribute responsibilities effectively',
    icon: Guest
  },
  {
    id: 4,
    title: 'Transactions',
    description:
      'Track financial insights effortlessly with the Transactions feature, providing both admins and clients a comprehensive overview of all financial activities',
    icon: Tran
  },
  {
    id: 5,
    title: 'Messages',
    description:
      'Facilitate direct and efficient communication between admins and clients with the Messages feature. Fostering seamless collaboration throughout the project lifecycle',
    icon: Messs
  },
  {
    id: 6,
    title: 'Settings',
    description:
      'Tailor your CodeGranites experience with the Settings feature, offering both admins and clients the ability to customize their accounts and preferences',
    icon: Sett
  }
];

export const Workspaces: WorkspaceCardProps[] = [
  {
    id: 1,
    logo: '1',
    name: 'Workspace 1',
    description:
      'Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.',
    projectCount: 8
  },
  {
    id: 2,
    logo: '2',
    name: 'Workspace 2',
    description:
      'Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.',
    projectCount: 4
  },
  {
    id: 3,
    logo: '3',
    name: 'Workspace 3',
    description:
      'Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.',
    projectCount: 10
  },
  {
    id: 4,
    logo: '4',
    name: 'Workspace 4',
    description:
      'Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.',
    projectCount: 2
  },
  {
    id: 5,
    logo: '5',
    name: 'Workspace 5',
    description:
      'Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.',
    projectCount: 6
  },
  {
    id: 6,
    logo: '6',
    name: 'Workspace 6',
    description:
      'Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.',
    projectCount: 6
  },
  {
    id: 7,
    logo: 'cp',
    name: 'Workspace 6',
    description:
      'Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.',
    projectCount: 6
  },
  {
    id: 8,
    logo: 'BG',
    name: 'Workspace 6',
    description:
      'Innovators in digital solutions, blending creativity with expertise to elevate ideas and empower innovation.',
    projectCount: 6
  }
];
