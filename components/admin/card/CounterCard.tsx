import React from 'react';
import { ProjectCounterProps } from '../../../libs/projects';

const CounterCard = ({ count, label }: ProjectCounterProps) => {
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		const { currentTarget: target } = e;

		const rect = target?.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;

		target.style.setProperty('--border--x', `${x}px`);
		target.style.setProperty('--border--y', `${y}px`);
	};
	return (
		<div
			onMouseMove={handleMouseMove}
			className="relative w-full sm:max-w-[214px] sm:h-[148px] flex justify-center items-center border border-gray-300 rounded-xl sm:rounded-2xl admin-card p-[1px]"
		>
			<div className="card-border" />
			<div className="card-content w-full h-full flex justify-center items-center flex-col gap-y-2 py-2 sm:gap-y-4 bg-white p-1">
				<span className="font-semibold text-2xl sm:text-5xl text-header">{count}</span>
				<span className="font-medium sm:text-lg">{label} </span>
			</div>
		</div>
	);
};

export default CounterCard;