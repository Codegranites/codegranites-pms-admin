'use client';

import { useMessageCtx } from '../../../../context/MessageContext';
import cn from '../../../../utils/util';

const MobileMessageSection = () => {
	const { activeMessageTab, setActiveMessageTab, searchMsg, setSearchMsg, filterSearchMsgs } = useMessageCtx();
	const messageLen = 50;
	return (
		<section className="flex justify-center w-full  lg:hidden px-2 min-[400px]:py-10 pb-10">
			<div className="flex w-full flex-col max-w-[687px] h-[400px] min-[390px]:h-[500px] hide-scroll overflow-y-auto">
				{filterSearchMsgs.map((msg) => (
					<div key={msg.id} className="w-full flex justify-between   border-t border-b border-gray-200 py-2 gap-x-2">
						<div className="flex w-full flex-col items-start justify-between gap-y-1 min-[400px]:gap-y-2">
							<h3 className="font-medium text-sm sm:text-base">
								<span
									dangerouslySetInnerHTML={{
										__html: msg.author.replace(
											new RegExp(`(${searchMsg})`, 'gi'),
											(match, group) =>
												`<span style="color: black; background-color: ${
													group.toLowerCase() === searchMsg.toLowerCase() ? 'yellow' : 'inherit'
												}">${match}</span>`
										)
									}}
								/>{' '}
								- <span className="opacity-60 max-[400px]:text-xs">{msg.stack}</span>
							</h3>
							<p className="text-xs min-[400px]:text-sm sm:text-base">
								{msg.message.length > messageLen ? msg.message.slice(0, messageLen) + '...' : msg.message}
							</p>
						</div>

						<div className="flex w-full  max-w-[130px] sm:max-w-[160px] flex-col items-end justify-between">
							<p className="text-xs sm:text-sm opacity-70">
								{msg.date}, {msg.time}
							</p>
							<span
								className={cn('px-2  rounded-full text-sm', {
									'bg-green-100 text-green-700': msg.status === 'sent',
									'bg-yellow-100 text-yellow-900': msg.status === 'received',
									'bg-red-100 text-red-900': msg.status === 'draft',
									'bg-blue-100 text-blue-700': msg.status === 'inbox'
								})}
							>
								{msg.status}
							</span>
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default MobileMessageSection;
