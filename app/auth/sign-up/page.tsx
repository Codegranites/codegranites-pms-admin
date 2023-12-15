'use client';

import { Input } from '@ui/Input';
import Button from '@ui/Button';
import PasswordPopover from '@ui/passwordPopober';
import { Eye, EyeSlash, Call } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { Header_for_many } from '../../../components/auth/Header';
import { useRouter } from 'next/navigation';

import { EmailVerificationModal } from './EmailVerificationModal';

const SignUp = () => {
	// const initialPassword = 'jamestest2354';
	const [password, setPassoword] = useState('');
	const [fullName, setFullName] = useState('');
	const [phoneNumber, setPhoneNumber] = useState('');
	const [businessEmail, setBusinessEmail] = useState('');
	const [defaultInpTypeNew, setDefaultInpTypeNew] = useState<'password' | 'text'>('password');
	const [isVerificationModalOpen, setIsVerificationModalOpen] = useState(false); // New state for the modal

	const router = useRouter();

	const handleEmailVerification = (e: React.FormEvent) => {
		e.preventDefault();

		// Open the email verification modal
		setIsVerificationModalOpen(true);

		console.log('=============================');
		console.log('fullname: ' + fullName);
		console.log('businessEmail: ' + businessEmail);
		console.log('password: ' + password);
		console.log('=============================');

		// clean-up
		setFullName('');
		setBusinessEmail('');
		setPassoword('');
	};

	const closeModal = () => {
		// Close the email verification modal
		setIsVerificationModalOpen(false);
	};

	return (
		<>
			<section className="md:w-[80%] md:mx-auto h-[100vh] bg-white">
				{/* header component  */}
				<Header_for_many />

				{/* Email Verification Modal */}
				<EmailVerificationModal isVerificationModalOpen={isVerificationModalOpen} closeModal={closeModal} />

				<div className="desktop block md:flex md:justify-center md:items-center h-full relative ">
					<div className="mobile container px-3 ">
						{/* overlay */}
						<div className="relative py-4 rounded-[16px] bg-white shadow-lg px-3 md:shadow-none z-20 md:bg-transparent">
							<h1 className="text-center font-[600]  text-[28px]">Let us know you better</h1>
							<span className="block text-center font-[400] text-[14px] mt-2 ">Begin your journey</span>

							<form action="" className="flex flex-col mt-4 z-10" onSubmit={(e) => handleEmailVerification(e)}>
								<label htmlFor="Business Email" className="font-bold">
									FullName
								</label>
								<Input
									type="text"
									id="fulName"
									name="fulName"
									value={fullName}
									onChange={(e) => setFullName(e.target.value)}
									placeHolder="Enter Full Name"
									rightIcon={<FiUser color="#777" />}
									required
									className="mt-1 mb-3 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
								/>

								<label htmlFor="Business Email" className="font-bold">
									Business Email
								</label>
								<Input
									type="email"
									id="businessEmail"
									name="businessEmail"
									value={businessEmail}
									onChange={(e) => setBusinessEmail(e.target.value)}
									placeHolder="Enter Business Email Address"
									rightIcon={<MdOutlineMail color="#777" />}
									required
									className="mt-1 mb-3 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
								/>

								<label htmlFor="Business Email" className="font-bold">
									Phone Number
								</label>
								<Input
									type="Number"
									id="Phone Number"
									name="Phone Number"
									value={phoneNumber}
									onChange={(e) => setPhoneNumber(e.target.value)}
									placeHolder="Enter Phone Number"
									rightIcon={<Call size="20" color="#777777" />}
									required
									className="mt-1 mb-3 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
								/>

								<label htmlFor="Password" className="font-bold mt-1">
									Password
								</label>
								<PasswordPopover password={password}>
									<Input
										type={defaultInpTypeNew}
										id="password"
										name="Password"
										value={password}
										onChange={(e) => setPassoword(e.target.value)}
										placeHolder="Enter Password"
										required
										rightIcon={
											defaultInpTypeNew === 'text' ? (
												<Eye color="#777" onClick={() => setDefaultInpTypeNew('password')} />
											) : (
												<EyeSlash color="#777" onClick={() => setDefaultInpTypeNew('text')} />
											)
										}
										className="mt-1 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
									/>
								</PasswordPopover>

								<span className="mb-4 mt-1 text-xs text-right">
									forgot password? <Link href="">Reset</Link>{' '}
								</span>

								<Button className="w-full rounded-md my-3" type="submit">
									Sign up
								</Button>
							</form>

							<div className="seperator flex items-center space-x-2 my-2">
								<div className="seperate h-[1px] bg-[#C7C7C7] w-full"></div>
								<h4 className="text-gray/80"> Or</h4>
								<div className="seperate h-[1px] bg-[#C7C7C7] w-full"></div>
							</div>

							<Button
								className=" text-black w-full my-3 border-[#C7C7C7] border rounded-md bg-[#fff] py-1 "
								leftIcon={
									<Image src="/Mobile/google.svg" alt="google_logo_icon" width={20} height={20} className="mb-1" />
								}
							>
								Contine with Google
							</Button>
						</div>

						<span className=" text-white mb-8 mt-5 text-sm  relative block text-center md:text-black z-10">
							Aready have an account?
							<Link href="/auth/sign-in" className="ml-1 underline">
								Login
							</Link>
						</span>
					</div>

					{/* This can be taken and indepenedet */}
					{/* Desktop image by right */}
					<div className="hidden md:block h-full w-full ">
						<Image
							src="/MacBookPro3.svg"
							alt="sign in Desktop"
							width={140}
							height={100}
							className="hidden md:block h-full w-full"
						/>
					</div>
				</div>

				{/* image_bellow_all */}
				<div className="fixed -bottom-40 md:hidden z-0">
					<Image
						src="/Mobile/mobile_back.png"
						alt="backgroud_ng_for_mobile"
						width={140}
						height={50}
						className="h-[739.363px] w-[684.675px]"
					/>
				</div>
			</section>
		</>
	);
};

export default SignUp;
