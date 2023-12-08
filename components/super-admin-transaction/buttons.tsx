import Button from '@ui/Button';
import React from 'react';
type filter = 'all' | 'initial' | 'final';

interface Props {
	name: string;
	tab: filter;
	changeFilter: (tab: filter) => void;
	activeTab: filter;
}

function FilterButtons({ name, tab, changeFilter, activeTab }: Props) {
	return (
		<Button
			onClick={() => changeFilter(tab)}
			intent={activeTab === tab ? 'secondary' : null}
			className={`rounded-lg ${activeTab !== tab && 'border-primary border'}`}
		>
			{name}
		</Button>
	);
}

export default FilterButtons;
