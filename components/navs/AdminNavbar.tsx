'use client';
import { Add, HambergerMenu } from 'iconsax-react';
import { useStateCtx } from '../../context/StateContext';
import cn from '../../utils/util';
import AdminMobileSidebar from '../sidebars/AdminMobileSidebar';

const AdminNavbar = () => {
	const { currentPath, showMobileMenu, setShowMobileMenu } = useStateCtx();

	return (
		<header className="lg:px-9 px-3 border-b border-gray-200 h-[70px] md:h-[89px] flex items-center justify-between relative">
			<h2 className="text-xl sm:text-3xl capitalize font-medium text-header">{currentPath.replace('-', ' ')}</h2>
			<button
				tabIndex={0}
				aria-haspopup
				aria-expanded={showMobileMenu}
				type="button"
				className={cn('md:hidden', {
					'rotate-45 relative z-[9999] text-white': showMobileMenu
				})}
				onClick={() => setShowMobileMenu(!showMobileMenu)}
			>
				{showMobileMenu ? <Add size={50} /> : <HambergerMenu size={32} />}
			</button>

			<AdminMobileSidebar />
		</header>
	);
};

export default AdminNavbar;
