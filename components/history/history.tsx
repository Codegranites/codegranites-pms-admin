'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const projects = [
	{
		id: 'project1',
		title: 'Dashboard Design',
		description: 'Project Description',
		project_owner: 'John Doe',
		start_date: '11th Nov. 2023',
		due_date: '11th Dec. 2023',
		status: 'Completed'
	},
	{
		id: 'project2',
		title: 'Dashboard Design',
		description: 'Project Description',
		project_owner: 'John Doe',
		start_date: '11th Nov. 2023',
		due_date: '11th Dec. 2023',
		status: 'Completed'
	},
	{
		id: 'project3',
		title: 'Dashboard Design',
		description: 'Project Description',
		project_owner: 'John Doe',
		start_date: '11th Nov. 2023',
		due_date: '11th Dec. 2023',
		status: 'Completed'
	},
	{
		id: 'project4',
		title: 'Dashboard Design',
		description: 'Project Description',
		project_owner: 'John Doe',
		start_date: '11th Nov. 2023',
		due_date: '11th Dec. 2023',
		status: 'Completed'
	},
	{
		id: 'project5',
		title: 'Dashboard Design',
		description: 'Project Description',
		project_owner: 'John Doe',
		start_date: '11th Nov. 2023',
		due_date: '11th Dec. 2023',
		status: 'Completed'
	},
	{
		id: 'project6',
		title: 'Dashboard Design',
		description: 'Project Description',
		project_owner: 'John Doe',
		start_date: '11th Nov. 2023',
		due_date: '11th Dec. 2023',
		status: 'Completed'
	},
	{
		id: 'project7',
		title: 'Dashboard Design',
		description: 'Project Description',
		project_owner: 'John Doe',
		start_date: '11th Nov. 2023',
		due_date: '11th Dec. 2023',
		status: 'Completed'
	}
];

function HistoryComponent() {
	const [projectList, setProjectList] = useState(projects);
	return (
		<div
			className={`bg-white rounded-2xl ${
				projectList.length ? 'shadow-[0px_4px_40px_6px_rgba(0,0,0,0.06)]' : 'border border-[#E1E1E1]'
			}`}
		>
			<div className="rounded-2xl text-header">
				<div className="flex items-center py-6 px-8 border-b gap-2 border-b-[#E1E1E1]">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
						<path
							d="M19.4345 4.03448C19.5668 4.2424 19.3401 4.48461 19.0998 4.43C18.6298 4.29 18.1098 4.22 17.5798 4.22H14.2796C14.1223 4.22 13.9743 4.14605 13.8798 4.02037L12.7298 2.49C12.589 2.29044 12.7221 2 12.9664 2H15.7198C17.2808 2 18.6559 2.81073 19.4345 4.03448Z"
							fill="#282828"
						/>
						<path
							d="M20.14 6.54C19.71 6.23 19.22 6 18.69 5.87C18.33 5.77 17.96 5.72 17.58 5.72H13.86C13.28 5.72 13.24 5.67 12.93 5.26L11.53 3.4C10.88 2.53 10.37 2 8.74 2H6.42C3.98 2 2 3.98 2 6.42V17.58C2 20.02 3.98 22 6.42 22H17.58C20.02 22 22 20.02 22 17.58V10.14C22 8.65 21.27 7.34 20.14 6.54ZM14.39 16.34H9.6C9.21 16.34 8.91 16.03 8.91 15.64C8.91 15.26 9.21 14.94 9.6 14.94H14.39C14.78 14.94 15.09 15.26 15.09 15.64C15.09 16.03 14.78 16.34 14.39 16.34Z"
							fill="#282828"
						/>
					</svg>
					<span className="font-medium">All Completed Projects</span>
				</div>
				<div>
					{!projectList.length ? (
						<div className="py-20">
							<div className=" max-w-sm mx-auto aspect-[421/342] relative">
								<Image src="/assets/empty-history.png" fill alt="Empty History Illustration" />
							</div>
							<p className="text-center text-lg">Oops! There are no completed projects yet</p>
						</div>
					) : (
						<div className="p-10">
							<div className="border rounded-2xl border-[#CAC4D0]">
								<table className="w-full text-header text-center">
									<thead>
										<tr>
											<th className="p-4 font-medium"></th>
											<th className="p-4 text-left w-1/4 font-medium">Project Title</th>
											<th className="p-4 font-medium">Project Owner</th>
											<th className="p-4 font-medium">Start Date</th>
											<th className="p-4 font-medium">Due Date</th>
											<th className="p-4 font-medium">Status</th>
										</tr>
									</thead>
									<tbody>
										{projectList.map((item, index) => {
											return (
												<tr key={item.id} className=" border-t border-[#CAC4D0]">
													<td className="pl-4 p-2 py-4">
														<span className="table-numbering">{index + 1}</span>
													</td>
													<td className="p-2 w-1/4">
														<div className="flex flex-col text-left">
															<h4>{item.title}</h4>
															<p className="whitespace-nowrap text-ellipsis overflow-hidden">{item.description}</p>
														</div>
													</td>
													<td className="p-2">{item.project_owner}</td>
													<td className="p-2">{item.start_date}</td>
													<td className="p-2">{item.due_date}</td>
													<td className="p-2 pr-4">
														<div className="rounded-full py-2 px-3 mx-auto w-fit bg-[#80BD92] text-white">
															{item.status}
														</div>
													</td>
												</tr>
											);
										})}
									</tbody>
								</table>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

export default HistoryComponent;
