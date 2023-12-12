'use client';
import Button from '@ui/Button';
import { Add, ArrowDown2, ArrowRight2, AttachSquare, MessageEdit, Trash } from 'iconsax-react';

import React, { useState } from 'react';
import { ProblemsDataProps } from '../../../app/(Admin-Dashboard)/problem-statements/page';

interface ProblemsProps {
	openNewIdeaModal: () => void;
	problemData: ProblemsDataProps[];
}

const Problems: React.FC<ProblemsProps> = ({ openNewIdeaModal, problemData }) => {
	const [openProblem, setOpenProblem] = useState<number | null>(null);
	function handleProblemOpen(id: number) {
		setOpenProblem((prevIndex) => (prevIndex === id ? null : id));
	}
	return (
		<div className="w-full flex flex-col">
			<div className="w-fit self-end mr-12">
				<Button
					onClick={openNewIdeaModal}
					leftIcon={<Add />}
					className="text-sm leading-6 font-medium rounded-lg my-4 py-4 px-10"
				>
					New Idea
				</Button>
			</div>
			<ul className="border-t w-full">
				{problemData &&
					problemData?.map((problem) => (
						<li key={problem.id} className="transition-all duration-500">
							<div
								className={`flex items-center justify-between pl-6 pr-12 py-4 border-b text-sm leading-6 font-medium 
                ${openProblem === problem.id && 'bg-[#EAEEF2]'}`}
							>
								<div className="flex items-center gap-x-2">
									<ArrowRight2
										size={24}
										onClick={() => handleProblemOpen(problem.id)}
										className={`${openProblem === problem.id ? 'rotate-90' : ''}`}
									/>
									<p>{problem.title}</p>
									<p className="font-normal">
										{problem.description.length > 40
											? problem.description.slice(0, 50) + '......'
											: problem.description}
									</p>
								</div>
								<div>{problem.createdAt}</div>

								<div className="flex items-center gap-x-3">
									<button className="flex items-center gap-x-2 text-primary-light">
										<MessageEdit />
										<span>Edit</span>
									</button>
									<button className="flex items-center gap-x-2 text-[#FF3333]">
										<Trash color={'#FF3333'} variant="Bold" />
										<span>Delete</span>
									</button>
								</div>
							</div>

							{openProblem === problem.id && (
								<div className="border border-primary-light px-11 transition-all duration-500 text-sm font-medium">
									<div
										className={`flex items-center justify-between py-[18px] border-b border-[#E1E1E1] leading-6 font-medium`}
									>
										<div className="flex items-center gap-x-4">
											<p>Owner: {problem.owner}</p>
											<p className="text-xs text-header font-normal">Created {problem.createdAt}</p>
											<p className="flex items-center gap-x-2 text-primary-light">
												<MessageEdit />
												<span>{problem.createdAt}</span>
											</p>
										</div>

										<div className="flex items-center gap-x-3">
											<button className='flex items-center gap-x-2 border border-["#E1E1E1] px-[9px] rounded-lg mr-10 text-xs'>
												<AttachSquare color={'#292D32'} />
												<p className="text-[#33A45E] text-left">
													Attach <br />
													new files
												</p>
											</button>
											<button className="flex items-center gap-x-2 text-primary-light">
												<MessageEdit />
												<span>Edit</span>
											</button>
											<button className="flex items-center gap-x-2 text-[#FF3333]">
												<Trash color={'#FF3333'} variant="Bold" />
												<span>Delete</span>
											</button>
										</div>
									</div>
									<p className="py-4 text-justify">{problem.description}</p>
								</div>
							)}
						</li>
					))}
			</ul>
		</div>
	);
};

export default Problems;
