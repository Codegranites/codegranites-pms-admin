import Button from '@ui/Button';
import { Add, ArrowRight2, MessageEdit, Trash } from 'iconsax-react';

import React from 'react';
import { ProblemsDataProps } from '../../../app/(Admin-Dashboard)/problem-statements/page';

interface ProblemsProps {
  openNewIdeaModal: () => void
  problemData: ProblemsDataProps[]
}

const Problems: React.FC<ProblemsProps> = ({ openNewIdeaModal, problemData }) => {
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
				{problemData && problemData?.map((problem) => (
					<li
						key={problem.id}
						className="flex items-center justify-between pl-6 pr-12 py-4 border-b text-sm leading-6 font-medium"
					>
						<div className="flex items-center gap-x-2">
							{<ArrowRight2 />}
							<p>{problem.title}</p>
							<p className="font-normal">
								{problem.description.length > 40 ? problem.description.slice(0, 50) + '......' : problem.description}
							</p>
						</div>
						<div>{problem.createdAt}</div>

						<div className="flex items-center gap-x-3">
							<button className="flex items-center gap-x-2 text-primary-light">
								<MessageEdit />
								<span>Edit</span>
							</button>
							<button className="flex items-center gap-x-2 text-[#FF3333]">
								<Trash fill={'#FF3333'} />
								<span>Delete</span>
							</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Problems;
