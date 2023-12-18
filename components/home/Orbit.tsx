import React from 'react';

const Orbit = () => {
	return (
		<>
			<div className="h-[400px] sm:h-[700px] w-[400px] sm:w-[700px] border border-primary-light rounded-full relative  orbit">
				<span
					style={{
						backgroundSize: '30px',
						backgroundPosition: 'center'
					}}
					className="h-4 sm:h-5 w-4 sm:w-5 bg-[#eea300] rounded-full absolute top-[15.6rem] sm:top-[16rem] "
				/>
			</div>
			<div className="h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] border border-[#a48694] rounded-full absolute   orbit-md">
				<span
					style={{
						backgroundSize: '30px',
						backgroundPosition: 'center'
					}}
					className="h-4 sm:h-5 w-4 sm:w-5 bg-primary-light rounded-full absolute top-[5.8rem] sm:top-[19rem] "
				/>
			</div>
			<div className="h-[200px] sm:h-[300px] w-[200px] sm:w-[300px] border border-primary-light rounded-full absolute   orbit-sm">
				<span
					style={{
						backgroundSize: '30px',
						backgroundPosition: 'center'
					}}
					className="h-5 w-5 bg-[#eea300] rounded-full absolute top-[3rem] sm:top-[5.3rem] "
				/>
			</div>
		</>
	);
};

export default Orbit;
