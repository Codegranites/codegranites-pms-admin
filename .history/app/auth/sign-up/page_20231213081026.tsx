import Image from 'next/image';
import React from 'react';

const header = () => {
	return (
		<>
		<header className="py-3 px-2 ">
			<Image src="./logo.svg" alt="Logo" width={225} height={76} />
		</header>       
		</>
	)
}

const SignUp = () => {
	return (
		<>
			<section>
				<header />
				
				{/* overlay */}
				<div>
					<h1> Welcome back !</h1>
					<span> Great to have you back with us again </span>


					<form action="">
						
					</form>
				</div>
			</section>
		</>
	)
};

export default SignUp;
