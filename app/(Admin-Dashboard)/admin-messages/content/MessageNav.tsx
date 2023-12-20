'use client';

import { useMessageCtx } from '../../../../context/MessageContext';
import cn from '../../../../utils/util';
import { useStateCtx } from '../../../../context/StateContext';
import { Add, MessageAdd1, SearchNormal1 } from 'iconsax-react';
import { Input } from '@ui/Input';
import { X } from 'lucide-react';

type MessageTabProps = {
	id?: number;
	tab: string;
	label: string;
};

const MESSAGE_TABS: MessageTabProps[] = [
	{
		id: 1,
		tab: 'all',
		label: 'All messages'
	},
	{
		id: 2,
		tab: 'inbox',
		label: 'Inbox'
	},
	{
		id: 3,
		tab: 'sent',
		label: 'Sent'
	},
	{
		id: 4,
		tab: 'received',
		label: 'Received'
	},
	{
		id: 5,
		tab: 'draft',
		label: 'Draft'
	}
];

const MessageNav = () => {
	const { activeMessageTab, setActiveMessageTab, searchMsg, setSearchMsg } = useMessageCtx();
	const { newMessageModal, setNewMessageModal } = useStateCtx();
	return (
		<div className="flex w-full flex-col gap-y-10 px-2">
			<div className="w-full flex items-center justify-center pt-6 pb-[43px] border-b border-[#e1e1e1]">
				<ul className="flex items-center gap-x-4 flex-wrap gap-y-5">
					{MESSAGE_TABS.map((tab) => (
						<button
							type="button"
							aria-current={activeMessageTab === tab.tab ? 'page' : undefined}
							key={tab.id}
							onKeyUp={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									setActiveMessageTab(tab.tab);
									return;
								}
							}}
							tabIndex={0}
							aria-label={tab.tab}
							className={cn(
								' flex items-center rounded-md sm:rounded-lg gap-x-3 px-3 md:px-4 lg:px-5 h-[40px] sm:h-[48px] text-header font-medium text-sm min-[400px]:text-base transition-colors duration-300 cursor-pointer ',
								activeMessageTab === tab.tab
									? 'bg-[#eaeef2] text-header rounded outline-none'
									: 'hover:bg-black/10 focus-visible:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light border border-gray-300'
							)}
							onClick={() => setActiveMessageTab(tab.tab)}
						>
							{tab.label}
						</button>
					))}
				</ul>
			</div>

			<div className="flex w-full justify-between items-center h-[40px] gap-x-2 min-[400px]:gap-x-4 md:h-[56px]">
				<button
					onClick={() => setNewMessageModal(true)}
					tabIndex={0}
					aria-label="Create Client"
					aria-haspopup
					aria-expanded={newMessageModal}
					id="create-client"
					type="button"
					className=" flex h-[40px] w-[56px] min-[900px]:w-full min-[900px]:max-w-[170px] min-[900px]:min-h-[56px] min-[900px]:min-w-[214px]  lg:max-w-[250px] items-center lg:gap-x-5 gap-x-2  border border-primary text-primary rounded-lg hover:opacity-80 transition-opacity duration-300 text-sm sm:text-base justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
				>
					<Add size={24} className="hidden min-[900px]:inline" />
					<MessageAdd1 size={18} className=" min-[900px]:hidden" />
					<span className="hidden min-[900px]:inline font-medium">New message</span>
				</button>

				<div className="flex w-full sm:max-w-[381px] items-center relative">
					<Input
						tabIndex={0}
						onChange={(e) => setSearchMsg(e.target.value)}
						value={searchMsg}
						leftIcon={<SearchNormal1 size={18} color="#535353" />}
						type="text"
						placeHolder="Search..."
						className="w-full h-[40px]  min-[900px]:h-[56px] outline-none focus-visible:border focus-visible:border-primary-light"
					/>
					<button
						type="button"
						tabIndex={0}
						aria-label="Clear search"
						onClick={() => setSearchMsg('')}
						className={cn(
							'absolute right-2 transition-opacity duration-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full',
							{
								'opacity-0 duration-300': !searchMsg
							}
						)}
					>
						<X size={18} color="#535353" />
					</button>
				</div>
			</div>
		</div>
	);
};

export default MessageNav;
