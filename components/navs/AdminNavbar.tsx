'use client';
import { Add, HambergerMenu } from 'iconsax-react';
import { useStateCtx } from '../../context/StateContext';
import cn from '../../utils/util';
import AdminMobileSidebar from '../sidebars/AdminMobileSidebar';
import { handleMouseEnter } from '../../utils/text-effect';
import { useSearchParams } from 'next/navigation';

const AdminNavbar = () => {
	const { currentPath, showMobileMenu, setShowMobileMenu } = useStateCtx();
	const searchParams = useSearchParams();
	const projectTitle = searchParams.get('project_title');
	const pathName = currentPath.replace('admin-', '');

	return (
		<header className="lg:px-9 px-3 border-b border-gray-200 h-[70px] md:h-[89px] flex items-center justify-between relative select-none">
			<div className="flex gap-x-4 items-center">
				<h2
					onMouseEnter={handleMouseEnter}
					className="text-xl sm:text-3xl capitalize font-medium text-header  "
					data-value={projectTitle ? pathName.replace('projects', 'project') : pathName}
				>
					{projectTitle ? pathName.replace('projects', 'project') : pathName}
				</h2>
				{projectTitle && (
					<>
						<span className="text-4xl text-gray-700">•</span>
						<h3 className="text-xl sm:text-3xl capitalize font-medium text-gray-700  ">
							{projectTitle.replace(/_/g, ' ')}
						</h3>
					</>
				)}
			</div>
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
