'use client';

import { SelectValue } from '@radix-ui/react-select';
import Button from '@ui/Button';
import { Input } from '@ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger } from '@ui/SelectInput';
import { Add, ArrowDown2, ArrowUp2 } from 'iconsax-react';
import { Folder, ListFilter, Plus, Search } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import CreateProject from './modal/create-project';

function SuperAdminProject() {
	const [isDdOpen, setIsDdOpen] = useState<boolean>(false);
	const [selectedValue, setSelectedValue] = useState<string>('');
	return (
		<div className="h-full">
			<header className="flex gap-10 mb-12">
				<Input
					onChange={(e) => {
						console.log(e.target.value);
					}}
					leftIcon={<Search color="#292D32" size={18} />}
					type="text"
					intent={'default'}
					disabled={false}
					className="flex-1"
					placeHolder="Search for projects"
				/>
				<div className="flex items-stretch gap-3 ">
					<label htmlFor="" className="flex items-center gap-2">
						<ListFilter color="#282828" size={18} /> Filter by
					</label>
					<Select onOpenChange={() => setIsDdOpen(!isDdOpen)} onValueChange={(value: any) => setSelectedValue(value)}>
						<SelectTrigger
							rightIcon={
								isDdOpen ? (
									<ArrowUp2 />
								) : selectedValue.length === 0 ? (
									<ArrowDown2 />
								) : (
									<span className="text-primary">{selectedValue}</span>
								)
							}
							className="w-[180px] h-full"
						>
							<SelectValue placeholder="Project" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all-project">All Project</SelectItem>
							<SelectItem value="completed">Completed</SelectItem>
							<SelectItem value="progress">In Progress</SelectItem>
						</SelectContent>
					</Select>
				</div>
				<CreateProject />
			</header>
			<main className="border border-[#E1E1E1] rounded-2xl">
				<header className="flex gap-3 w-3/4 border-b border-b-[#E1E1E1] pl-8 pb-4 pt-6">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M19.4346 4.03448C19.5669 4.2424 19.3403 4.48461 19.1 4.43C18.63 4.29 18.11 4.22 17.58 4.22H14.2797C14.1225 4.22 13.9744 4.14605 13.88 4.02037L12.73 2.49C12.5891 2.29044 12.7223 2 12.9665 2H15.72C17.281 2 18.6561 2.81073 19.4346 4.03448Z"
							fill="#282828"
						/>
						<path
							d="M20.14 6.54C19.71 6.23 19.22 6 18.69 5.87C18.33 5.77 17.96 5.72 17.58 5.72H13.86C13.28 5.72 13.24 5.67 12.93 5.26L11.53 3.4C10.88 2.53 10.37 2 8.74 2H6.42C3.98 2 2 3.98 2 6.42V17.58C2 20.02 3.98 22 6.42 22H17.58C20.02 22 22 20.02 22 17.58V10.14C22 8.65 21.27 7.34 20.14 6.54ZM14.39 16.34H9.6C9.21 16.34 8.91 16.03 8.91 15.64C8.91 15.26 9.21 14.94 9.6 14.94H14.39C14.78 14.94 15.09 15.26 15.09 15.64C15.09 16.03 14.78 16.34 14.39 16.34Z"
							fill="#282828"
						/>
					</svg>
					<span className="text-header font-medium">All projects</span>
				</header>
				<div className="flex flex-col items-center py-14 px-4">
					<div className="relative w-full max-w-sm aspect-[421/342]">
						<Image src="/assets/empty.png" fill alt="Empty Project Illustration" />
					</div>
					<span className="mb-6">You have no project yet</span>
					<CreateProject />
				</div>
			</main>
		</div>
	);
}

export default SuperAdminProject;
