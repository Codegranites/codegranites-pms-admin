import ModeratorNavbar from '../../components/navs/ModeratorNavbar';

import SidebarMod from '../../components/sidebars/SidebarMod';

export default function ModeratorLayout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<SidebarMod />
			<section className="w-full relative  md:pl-[96px] min-[1140px]:pl-[270px]">
				<ModeratorNavbar />
				<div className="flex w-full flex-col h-full relative max-container pt-12 md:pt-0">{children}</div>
			</section>
		</>
	);
}
