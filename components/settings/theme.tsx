'use client';

import { Input } from '@ui/Input';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@ui/select';
import { useState } from 'react';
import Button from '@ui/Button';
import { LanguageProps } from '../../types';

const selectFilters: LanguageProps[] = [
	{ id: 1, label: 'Light', value: 'light' },
	{ id: 2, label: 'Dark', value: 'dark' },
	{ id: 3, label: 'Automatic', value: 'auto' }
];

const ThemePrefences = () => {
	const [selectedValue, setSelectedValue] = useState(selectFilters[0].value);

	return (
		<div className="w-[620px] max-w-[680px]  items-center flex-col md:flex-row gap-y-4 ">
			<div className="flex-col items-center gap-x-1 text-black w-full ">
				<span className="hidden sm:inline-block font-medium mb-4   text-2xl">Theme</span>

				<Select onValueChange={(value) => setSelectedValue(value)} defaultValue="light">
					<SelectTrigger className="w-full select-none h-[70px] py-3 text-lg font-medium">
						<SelectValue placeholder={selectedValue} />
					</SelectTrigger>
					<SelectContent className="backdrop-blur-xl bg-white/80">
						<SelectGroup>
							{selectFilters.map((filter) => (
								<SelectItem key={filter.id} value={filter.value} className="hover:bg-[#becbd7] text-xl capitalize">
									{filter.label}
								</SelectItem>
							))}
						</SelectGroup>
					</SelectContent>
				</Select>
			</div>
		</div>
	);
};

export default ThemePrefences;
