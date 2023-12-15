import GotoTop from '../../components/GotoTop';
import AdminNavbar from '../../components/navs/AdminNavbar';
import SettingNav from '../../components/sidebars/Settings';

import SidebarAdmin from '../../components/sidebars/SidebarAdmin';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SidebarAdmin />
			<section className="w-full relative  md:pl-[96px] min-[1140px]:pl-[270px]">
				<AdminNavbar />
				<div className="flex w-full flex-col h-full relative max-container">{children}</div>
			</section>

			<GotoTop />
		</>
	);
}
