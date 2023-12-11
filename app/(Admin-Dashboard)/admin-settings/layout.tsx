import Settingsnav from '../../../components/sidebars/Settings';

export default function SettingLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="flex w-full pt-8 flex-col h-full relative min-[1140px]:px-9 px-3 max-container">
			<Settingsnav />
			{children}
		</div>
	);
}
