'use client';
import { Add, HambergerMenu } from 'iconsax-react';
import { useStateCtx } from '../../context/StateContext';
import cn, { decryptString } from '../../utils/util';
import AdminMobileSidebar from '../sidebars/AdminMobileSidebar';
import { handleMouseEnter } from '../../utils/text-effect';
import { useSearchParams } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const AdminNavbar = () => {
	const { currentPath, showMobileMenu, setShowMobileMenu, user } = useStateCtx();
	const firstName = user.name?.split(' ')[0];
	const searchParams = useSearchParams();
	const projectTitle = searchParams.get('project_title');
	const clientName = searchParams.get('client_name');
	const decrptedTitle = decryptString(projectTitle ?? '');
	const decrptedName = decryptString(clientName ?? '');
	const settingTab = searchParams.get('setting_tab');
	const pathName = currentPath.replace('admin-', '').replace('-', ' ');
	const titleLen = 27;

	return (
		<header className="lg:px-9 px-3 border-b border-gray-200 h-[50px] sm:h-[70px] md:h-[89px] flex items-center justify-between relative select-none">
			{pathName === 'dashboard' ? (
				<div className="flex gap-x-2 sm:gap-x-4 items-center">
					<h2 className="max-[370px]:text-base max-[500px]:text-lg text-xl sm:text-3xl capitalize font-medium text-header  ">
						Welcome back! {firstName ?? 'User'}
					</h2>
				</div>
			) : (
				<div className="flex gap-x-2 sm:gap-x-4 items-center">
					<h2
						onMouseEnter={handleMouseEnter}
						className="max-[370px]:text-base max-[500px]:text-lg text-xl sm:text-3xl capitalize font-medium text-header  "
						data-value={
							decrptedTitle
								? pathName.replace('projects', 'project')
								: decrptedName
								  ? pathName.replace('clients', 'client profile')
								  : pathName
						}
					>
						{decrptedTitle
							? pathName.replace('projects', 'project')
							: decrptedName
							  ? pathName.replace('clients', 'client profile')
							  : pathName}
					</h2>
					{decrptedTitle && (
						<>
							<span className="text-2xl sm:text-4xl text-gray-700">•</span>
							<h3 className="max-[390px]:text-sm max-[500px]:text-base text-xl sm:text-3xl capitalize min-[390px]:font-medium text-gray-700  ">
								{decrptedTitle.length > titleLen ? `${decrptedTitle.slice(0, titleLen)}...` : decrptedTitle}
							</h3>
						</>
					)}
					{decrptedName && (
						<>
							<span className="text-3xl sm:text-4xl text-gray-700">•</span>
							<h3 className="max-[370px]:text-sm max-[500px]:text-base text-xl sm:text-3xl capitalize font-medium text-gray-700  ">
								{decrptedName}
							</h3>
						</>
					)}
					{settingTab && (
						<>
							<span className="text-3xl sm:text-4xl text-gray-700 sm:hidden">
								<ChevronRight />
							</span>
							<span className="text-3xl sm:text-4xl text-gray-700 max-sm:hidden">•</span>
							<h3 className="max-[370px]:text-sm max-[500px]:text-base text-xl sm:text-3xl capitalize font-medium text-gray-700  ">
								{settingTab.replace(/-/g, ' ')}
							</h3>
						</>
					)}
				</div>
			)}
			<button
				tabIndex={0}
				aria-haspopup
				aria-expanded={showMobileMenu}
				type="button"
				className={cn(
					'md:hidden rounded-full focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light',
					{
						'rotate-45 relative z-[9999] text-white': showMobileMenu
					}
				)}
				onClick={() => setShowMobileMenu(!showMobileMenu)}
			>
				{showMobileMenu ? <Add size={50} /> : <HambergerMenu size={32} />}
			</button>

			<AdminMobileSidebar />
		</header>
	);
};

export default AdminNavbar;
