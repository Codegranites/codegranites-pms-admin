import ModeratorNavbar from '../../components/navs/ModeratorNavbar';

import SidebarMod from '../../components/sidebars/SidebarMod';

export default function ModeratorLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SidebarMod />
			<section className="w-full relative pl-[96px] lg:pl-[270px]">
				<ModeratorNavbar />
				<div className="flex w-full pt-8 flex-col h-full relative lg:px-9">{children}</div>
			</section>
		</>
	);
}
