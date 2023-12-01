"use client";

import useWindowHeight from "@/hooks/useDimension";
import React from "react";
import cn from "@/utils/tailwind";

const GotoTop = () => {
	const scrollY = useWindowHeight();

	// console.log(scrollY);

	const handleTop = () => {
		if (!window) return;
		window && window.scrollTo(0, 0);
	};

	return (
		<div
			role="button"
			className={cn(
				"max-[400px]:scale-75 text-xl pt-1 px-1 sm:text-4xl rounded  sm:rounded-lg fixed bottom-1 right-2 sm:bottom-10 sm:right-5 z-50 select-none flex flex-col items-center border border-primary text-primary transition-all duration-1000 bg-white/60 backdrop-blur-xl cursor-pointer active:scale-75 active:duration-300",
				scrollY > 1500
					? "opacity-100 translate-x-0 shadow-[0_0_40px_0_rgba(0,0,0,0.16)]"
					: "opacity-0 translate-x-10"
			)}
			onClick={handleTop}
		>
			<span>&tarr;</span>
			<span className="text-[10px] sm:text-sm ">Top</span>
		</div>
	);
};

export default GotoTop;
