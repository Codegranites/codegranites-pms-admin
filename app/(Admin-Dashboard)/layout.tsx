import GotoTop from '../../components/GotoTop';
import AdminNavbar from '../../components/navs/AdminNavbar';

import SidebarAdmin from '../../components/sidebars/SidebarAdmin';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SidebarAdmin />
			<section className="w-full relative  md:pl-[96px] min-[1140px]:pl-[270px]">
				<AdminNavbar />
				<div className="flex w-full pt-8 flex-col h-full relative min-[1140px]:px-9 px-3 max-container">{children}</div>
			</section>

			<GotoTop />
		</>
	);
}
