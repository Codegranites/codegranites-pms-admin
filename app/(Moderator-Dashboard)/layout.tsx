import GotoTop from '../../components/GotoTop';
import AdminNavbar from '../../components/navs/AdminNavbar';

import SidebarMod from '../../components/sidebars/SidebarMod';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SidebarMod />
			<section className="w-full relative pl-[96px] lg:pl-[270px]">
				<AdminNavbar />
				<div className="flex w-full pt-8 flex-col h-full relative lg:px-9">{children}</div>
			</section>

			<GotoTop />
		</>
	);
}
