import { Edit2 } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AdminClientCardProps } from '../../../libs/clients';

const ClientCardAdmin = ({ image, name, email, job_title, number_projects, id }: AdminClientCardProps) => {
	return (
		<div className="w-full max-w-[454px] h-[250px] flex flex-col px-2 sm:px-4 rounded-xl border border-gray-200 py-4 md:py-7">
			<div className="flex justify-between w-full items-center">
				<Image src={image} alt="client" height={150} width={150} className="rounded-xl" />
				<div className="flex flex-col gap-y-2 ">
					<h3 className="text-base lg:text-lg font-semibold text-header">{name}</h3>
					<p className="text-sm">{job_title}</p>
					<span className="text-xs">Email: {email}</span>
					<p className="font-medium">
						Number of projects: <span className="font-semibold">{number_projects}</span>
					</p>
				</div>
				<Edit2 size={24} />
			</div>
			<div className="flex w-full justify-end items-center">
				<Link
					href={`/admin-clients/client?client_name=${name.replace(' ', '_')}&client_id=${id}`}
					type="button"
					tabIndex={0}
					className="text-primary rounded-lg  border border-primary h-[32px] px-4 py-2 flex items-center font-medium hover:opacity-70 transition-all duration-300"
				>
					View Profile
				</Link>
			</div>
		</div>
	);
};

export default ClientCardAdmin;
