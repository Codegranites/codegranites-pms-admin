'use client';

import Image from 'next/image';
import React from 'react';
import cn from '../../utils/util';
import useInView from '../../hooks/useInView';
import { handleMouseEnter } from '../../utils/text-effect';

const Midsec = () => {
	const MidsecRef = React.useRef<HTMLDivElement>(null);
	const sliderRef = React.useRef<HTMLDivElement>(null);
	const isInView = useInView(sliderRef);
	const isInView2 = useInView(MidsecRef);

	return (
		<section className="my-8 max-md:pt-12 lg:my-20 w-full flex flex-col items-center">
			<div
				ref={MidsecRef}
				className={cn(
					'flex flex-col gap-y-5 lg:gap-y-10 items-center w-full max-w-[1000px] px-2 sm:px-4',
					isInView ? 'opacity-100 translate-y-0 md:delay-300 duration-500' : ' opacity-0 translate-y-36'
				)}
			>
				<h2
					className="font-bold text-xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-header mb-4"
					data-value="Meet Our Super Dashboard"
					onMouseEnter={handleMouseEnter}
				>
					Meet Our Super Dashboard
				</h2>
				<p className="w-full text-center text-base sm:text-lg text-[#282828]">
					CodeGranites Super Dashboard is not just a tool; it&apos;s your co-pilot in the journey of project mastery.
					Streamline tasks, amplify collaboration, and chart your course to success like never before
				</p>
			</div>
			<div
				ref={sliderRef}
				className={cn(
					'flex-col md:flex-row  flex w-full  md:justify-between mt-8 px-2 sm:px-4 lg:px-8 rounded-lg py-2 lg:py-4 items-center  min-[900px]:gap-5 gap-3',
					{
						'opacity-100 translate-y-0 delay-1000 duration-1000': isInView2,
						'opacity-0 translate-y-36': !isInView2
					}
				)}
			>
				<div className="w-full  h-full flex items-center justify-center max-md:jusc">
					<div className="items-center justify-center hidden sm:block">
						<Image src="/dashboardfull.svg" alt={''} width={800} height={600} />
					</div>
					<div className="items-center justify-center sm:hidden">
						<Image
							src="/dashboardmob.svg"
							alt="hero image"
							width={500}
							height={500}
							priority
							className="w-full h-full object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Midsec;
