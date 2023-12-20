'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface MessageContextProps {
	activeMessageTab: string;
	setActiveMessageTab: React.Dispatch<React.SetStateAction<string>>;
	searchMsg: string;
	setSearchMsg: React.Dispatch<React.SetStateAction<string>>;
}

export const MessageContext = createContext<MessageContextProps>({} as MessageContextProps);

const MessageContextProvider = ({ children }: { children: React.ReactNode }) => {
	const [activeMessageTab, setActiveMessageTab] = useState('');
	const [searchMsg, setSearchMsg] = useState('');

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
			setSearchMsg
		}),
		[activeMessageTab, searchMsg]
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
