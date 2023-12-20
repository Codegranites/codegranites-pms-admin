import React from 'react';
import MessageNav from './content/MessageNav';
import MessageContextProvider from '../../../context/MessageContext';
import MessageSection from './content/MessageSection';
import MobileMessageSection from './content/MobileMessageSection';

const MessageAdmin = () => {
	return (
		<MessageContextProvider>
			<section className="w-full flex flex-col min-[1350px]:py-[43px] min-[1350px]:px-[70px] sm:p-7 h-full gap-y-6 md:gap-y-8">
				<MessageNav />
				<MessageSection />
				<MobileMessageSection />
			</section>
		</MessageContextProvider>
	);
};

export default MessageAdmin;
