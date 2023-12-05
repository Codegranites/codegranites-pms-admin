import GotoTop from '../../components/GotoTop';
import Navbar from '../../components/navs/Navbar';
import SidebarAdmin from '../../components/sidebars/SidebarAdmin';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SidebarAdmin />
			<section className="w-full relative pl-[96px] lg:pl-[270px]">
				<Navbar />

				{children}
			</section>

			<GotoTop />
		</>
	);
}
