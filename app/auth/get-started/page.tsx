'use client';

import { Input } from '@ui/Input';
import Button from '@ui/Button';
import { Google } from 'iconsax-react';
import PasswordPopover from '@ui/passwordPopober';
import { Eye, EyeSlash } from 'iconsax-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { MdOutlineMail } from 'react-icons/md';
import { FiUser } from 'react-icons/fi';
import { Header_for_many } from '../../../components/auth/Header';

const GetStarted = () => {
	// const initialPassword = 'jamestest2354';
	const [projectTitle, setProjectTitle] = useState('');
	const [projectDesc, setProjectDesc] = useState('');

	return (
		<>
			<section className="md:w-[80%] md:mx-auto h-[100vh] bg-white">
				{/* header component  */}
				<Header_for_many />

				<div className="desktop block md:flex md:justify-center md:items-center h-full relative ">
					<div className="mobile container px-3 ">
						{/* overlay */}
						<div className="relative py-4 rounded-[16px] bg-white shadow-lg px-3 md:shadow-none z-20 md:bg-transparent">
							<h1 className="text-center font-[600]  text-[28px]"> Get Started !</h1>
							<span className="block text-center font-[400] text-[14px] mt-2 ">Begin your journey</span>

							<form action="" className="flex flex-col mt-4 z-10">
								<label htmlFor="Business Email" className="font-bold">
									Project Title
								</label>
								<Input
									type="text"
									id="projectTitle"
									name="projectTitle"
									value={projectTitle}
									onChange={(e) => setProjectTitle(e.target.value)}
									placeHolder="Enter Project Title"
									required
									className="mt-1 mb-3 p-2 w-full text-black h-[60px] border text-md font-medium rounded-md"
								/>

								<label htmlFor="Business Email" className="font-bold">
									Project Description
								</label>
								<textarea
									id="projectDesc"
									name="projectDesc"
									value={projectDesc}
									onChange={(e) => setProjectDesc(e.target.value)}
									placeholder="Please describe your project"
									required
									rows={6}
									cols={40}
									className="mt-1 mb-3 p-2 w-full text-black border text-md font-medium rounded-md"
								/>

								<Button className="w-full rounded-md my-3">Submit</Button>
							</form>

							<div className="seperator flex items-center space-x-2 my-2">
								<div className="seperate h-[1px] bg-[#C7C7C7] w-full"></div>
								<h4 className="text-gray/80"> Or</h4>
								<div className="seperate h-[1px] bg-[#C7C7C7] w-full"></div>
							</div>

							<Link href="">
								<Button
									className=" text-black w-full my-3 border-[#C7C7C7] 
							border rounded-md bg-[#fff] py-1"
									leftIcon={
										<Image src="/Mobile/google.svg" alt="google_logo_icon" width={20} height={20} className="mb-1" />
									}
								>
									Contine with Google
								</Button>
							</Link>
						</div>

						<span className=" text-white mb-8 mt-5 text-sm  relative block text-center md:text-black z-10">
							Aready have an account?
							<Link href="/auth/sign-in" className="ml-1 underline">
								Login
							</Link>
						</span>
					</div>

					{/* Desktop image by right */}
					<div className="hidden md:block h-full w-full ">
						<Image
							src="/MacBookPro3.svg"
							alt="sign in Desktop"
							width={140}
							height={100}
							className=" hidden md:block h-full w-full"
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

export default GetStarted;
