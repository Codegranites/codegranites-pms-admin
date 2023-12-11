'use client';

import { X } from 'lucide-react';
import cn, { formatPrice } from '../../../../utils/util';
import { useEffect, useState } from 'react';
import { ProjectCardProps } from '../../../../libs/projects';
import { PROJECT_MILESTONES, ProjectMilestoneProps } from './milestones';
import { useStateCtx } from '../../../../context/StateContext';

interface MakePaymentModalProps {
	milestoneId?: string;
}

type StatusProps = {
	id?: number;
	label: string;
};
const STATUSES: StatusProps[] = [
	{
		id: 1,
		label: 'pending'
	},
	{
		id: 2,
		label: 'in-progress'
	},
	{
		id: 3,
		label: 'completed'
	}
];
type FormProps = {
	title: string;
	description: string;
	status: StatusProps['label'];
};

const EditMilestoneModal = () => {
	const { isEditMiletoneModal, setIsEditMiletoneModal } = useStateCtx();
	const [milestoneId, setMilestoneId] = useState('');

	const [formData, setFormData] = useState({
		title: '',
		description: '',
		status: ''
	});

	useEffect(() => {
		const readLocal = localStorage.getItem('milestoneId');
		if (readLocal) {
			setMilestoneId(readLocal);
		}
	}, [isEditMiletoneModal]);

	const milestone = PROJECT_MILESTONES.find((milestone) => milestone.id === milestoneId);
	useEffect(() => {
		if (!isEditMiletoneModal) {
			return;
		}
		setFormData({
			title: milestone?.title ?? '',
			description: milestone?.description ?? '',
			status: milestone?.status ?? ''
		});
	}, [isEditMiletoneModal, milestone]);

	const isDisabled = !formData.title || !formData.description || !formData.status;

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsEditMiletoneModal(false);
	};

	return (
		<>
			<div
				aria-hidden
				className={cn(
					' fixed min-h-screen w-full bg-black/30 top-0 left-0  transition-all duration-300 z-[99]',
					isEditMiletoneModal ? 'opacity-40' : 'opacity-0 pointer-events-none'
				)}
				onClick={() => setIsEditMiletoneModal(false)}
			/>

			<div
				role="dialog"
				aria-labelledby="make-payment"
				className={cn(
					'py-6   flex flex-col w-full h-[350px] md:h-[811px] md:w-[682px]  justify-between items-start bg-white backdrop-blur-lg fixed top-1/2 left-1/2  -translate-y-1/2 z-[999]  transition-all opacity-0 select-none ',
					isEditMiletoneModal
						? '-translate-x-1/2 duration-700 opacity-100 rounded-xl md:rounded-2xl'
						: '-translate-x-full duration-300 pointer-events-none'
				)}
			>
				<div className="flex items-center justify-between w-full border-b border-[#e1e1e1] pb-4 pl-4 px-4 md:pl-8 ">
					<h3 className="text-lg md:text-2xl font-medium text-header">Edit Milestone</h3>
					<button
						type="button"
						tabIndex={0}
						aria-label="Close"
						onClick={() => setIsEditMiletoneModal(false)}
						className="text-header focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-light rounded-full"
					>
						<X size={24} />
					</button>
				</div>
				<form
					onSubmit={handleSubmit}
					className="flex w-full flex-col gap-y-4 py-8 px-2 sm:px-4 md:px-6 lg:px-8 h-full items-start"
				>
					<div className="flex flex-col  gap-y-2 w-full">
						<label htmlFor="milestone-title" className="text-base">
							Milestone Title
						</label>
						<input
							type="text"
							placeholder="Milestone title..."
							id="milestone-title"
							name="title"
							className="w-full border border-gray-200 py-2 px-2 md:px-4"
						/>
					</div>
					<div className="flex  pt-4 sm:pt-6 items-center flex-col gap-y-4">
						<p className="text-center text-base sm:text-lg font-semibold">Select Status</p>
						<div className="flex flex-col gap-y-4 md:gap-y-6">
							{STATUSES.map((status) => (
								<p
									key={status.id}
									className={cn(
										'text-center text-sm md:text-base flex items-center gap-x-2 transition-all duration-300',
										{
											' font-medium': status.label === formData.status,
											'text-[#eea300] ': status.label === 'in-progress',
											'text-[#008d36] ': status.label === 'completed',
											'text-primary-light ': status.label === 'pending'
										}
									)}
								>
									<button
										onClick={() => setFormData({ ...formData, status: status.label })}
										type="button"
										className={cn(
											'w-6 h-6 rounded-full border-primary border flex focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-light',
											{
												' p-1': status.label === formData.status
											}
										)}
									>
										{formData.status === status.label && <span className="bg-primary h-full w-full rounded-full" />}
									</button>
									<span className="capitalize">{status.label} </span>
								</p>
							))}
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default EditMilestoneModal;
