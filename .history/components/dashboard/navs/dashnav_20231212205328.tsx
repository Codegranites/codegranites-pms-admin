'use client';

import { Input } from '@ui/Input';

import { Add, SearchNormal } from 'iconsax-react';

import { useState } from 'react';
import Button from '@ui/Button';
import CreateProject from '../../super-admin-project/modal/create-project';

const DashNav = () => {
	const [searchTerm, setSearchTerm] = useState('');

	return (
		<div className="w-full md:h-[56px] flex justify-between min-[450px]:gap-x-4 items-center flex-col md:flex-row gap-y-4 sm:pt-4">
			<div className="flex w-full max-w-2/3 gap-x-4">
				<Input
					onChange={(e) => setSearchTerm(e.target.value)}
					value={searchTerm}
					leftIcon={<SearchNormal size={18} color="#535353" />}
					type="text"
					placeHolder="Search for projects..."
					className="w-[413px] h-[56px]"
				/>

				<h1> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil voluptatibus consequatur ullam voluptates atque harum iste nisi nam beatae esse. Quis fuga nesciunt numquam neque. Similique dolorem quo explicabo! Numquam.</h1>
				<Button
					intent={'primary'}
					className="text-white bg-primary-light w-[200px] h-[56px]"
					leftIcon={<Add size="32" color="#ffffff" />}
				>
					New project
				</Button>
				<Button
					intent={'secondary'}
					className="text-black bg-transparent w-[200px] items-center h-[56px]"
					leftIcon={<Add size="32" color="#000" />}
				>
					New user
				</Button>
			</div>
		</div>
	);
};

export default DashNav;
