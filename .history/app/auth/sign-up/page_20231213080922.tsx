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
				
			</section>
		</>
	)
};

export default SignUp;
