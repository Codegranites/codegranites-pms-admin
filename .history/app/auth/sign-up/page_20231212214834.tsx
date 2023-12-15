import Image from 'next/image';
import React from 'react';

const header = () => {
	return (
		<>
		<header className="py-3 px-2">
			<Image src="/logo.svg" alt="Logo" width={225} height={76} />
		</header>
		</>
	)
}

const SignUp = () => {
	return (
		<>
			<section>
				<header />
				<h1> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores id fuga natus tempore sapiente facilis illo velit ad quaerat delectus tenetur nostrum numquam rem voluptatum eos quas, necessitatibus officiis? Est.</h1>
			</section>
		</>
	)
};

export default SignUp;
