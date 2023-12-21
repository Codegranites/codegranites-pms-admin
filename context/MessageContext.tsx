'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { MESSAGES, MessageProps } from '../app/(Admin-Dashboard)/admin-messages/content/messages';

interface MessageContextProps {
	activeMessageTab: string;
	setActiveMessageTab: React.Dispatch<React.SetStateAction<string>>;
	searchMsg: string;
	setSearchMsg: React.Dispatch<React.SetStateAction<string>>;
	filterSearchMsgs: MessageProps[];
}

export const MessageContext = createContext<MessageContextProps>({} as MessageContextProps);

const MessageContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [activeMessageTab, setActiveMessageTab] = useState('');
	const [searchMsg, setSearchMsg] = useState('');
	const filterMsgs = MESSAGES.filter((msg) => {
		if (activeMessageTab === 'all') {
			return msg;
		} else {
			return msg.status === activeMessageTab;
		}
	});

	const filterSearchMsgs = filterMsgs.filter((msg) => {
		if (!(searchMsg.length > 1)) {
			return msg;
		}
		return msg.author.toLowerCase().includes(searchMsg.toLowerCase());
	});

	useEffect(() => {
		const savedTab = localStorage.getItem('message-tab');
		if (savedTab) {
			setActiveMessageTab(savedTab as string);
		} else {
			setActiveMessageTab('all');
		}
	}, []);

	useEffect(() => {
		if (activeMessageTab === '') return;

		localStorage.setItem('message-tab', activeMessageTab);
	}, [activeMessageTab]);

	const value = useMemo(
		() => ({
			activeMessageTab,
			setActiveMessageTab,
			searchMsg,
			setSearchMsg,
			filterSearchMsgs
		}),
		[activeMessageTab, searchMsg, filterSearchMsgs]
	);

	return <MessageContext.Provider value={value}>{children}</MessageContext.Provider>;
};

export const useMessageCtx = () => {
	const ctx = useContext(MessageContext);
	if (!ctx) {
		throw new Error('useMessageCtx must be used within a MessageContextProvider');
	}
	return ctx;
};

export default MessageContextProvider;
